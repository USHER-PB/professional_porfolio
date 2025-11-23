import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend('re_MUkT6f1X_K9oJYJsW6T15Uh4YFUTo7X6X')

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, subject, message, projectType, phone } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Prepare email content
    const emailSubject = subject || `Nouveau contact de ${name} - ${projectType || 'Site Web'}`
    const emailContent = `
      <h2>Nouveau message du site web Fâk-brù Solution</h2>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || 'Non spécifié'}</p>
        <p><strong>Type de projet:</strong> ${projectType || 'Non spécifié'}</p>
        <p><strong>Sujet:</strong> ${subject || 'Nouveau contact'}</p>
      </div>
      
      <div style="background: #ffffff; padding: 20px; border-left: 4px solid #f59e0b; margin: 20px 0;">
        <h3 style="margin-top: 0;">Message:</h3>
        <p style="white-space: pre-line;">${message}</p>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
        <p style="color: #666; font-size: 14px;">
          Envoyé depuis le formulaire de contact du site web Fâk-brù Solution<br />
          Date: ${new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Douala' })}
        </p>
      </div>
    `

    // Method 1: Try Resend first (your real API key)
    try {
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['ushertchankoumi9@gmail.com'],
        subject: emailSubject,
        html: emailContent,
        replyTo: email
      })

      if (error) {
        console.error('Resend API error:', error)
        throw new Error(error.message)
      }

      console.log('✅ Email sent successfully via Resend:', data.id)
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Message envoyé avec succès! Nous vous contacterons dans les plus brefs délais.',
          method: 'resend',
          emailId: data.id
        },
        { status: 200 }
      )

    } catch (resendError) {
      console.log('❌ Resend failed, using fallback logging...', resendError.message)
      
      // Fallback: Log and save to file
      const submissionData = {
        name,
        email,
        phone: phone || 'Non spécifié',
        projectType: projectType || 'Non spécifié',
        subject: subject || 'Nouveau contact',
        message,
        timestamp: new Date().toISOString(),
        method: 'fallback'
      }

      // Log to console for immediate access
      console.log('=== CONTACT FORM SUBMISSION ===')
      console.log(JSON.stringify(submissionData, null, 2))
      console.log('==============================')

      // Try to save to a JSON file for persistence
      try {
        const fs = require('fs').promises
        const path = require('path')
        
        const submissionsFile = path.join(process.cwd(), 'contact-submissions.json')
        let submissions = []
        
        try {
          const existingData = await fs.readFile(submissionsFile, 'utf8')
          submissions = JSON.parse(existingData)
        } catch (e) {
          // File doesn't exist yet
        }
        
        submissions.push(submissionData)
        await fs.writeFile(submissionsFile, JSON.stringify(submissions, null, 2))
        
        console.log('✅ Submission saved to contact-submissions.json')
        
      } catch (fileError) {
        console.log('Could not save to file:', fileError.message)
      }

      return NextResponse.json(
        { 
          success: true, 
          message: 'Message reçu! Nous traiterons votre demande manuellement dans les plus brefs délais.',
          method: 'fallback',
          submissionId: Date.now()
        },
        { status: 200 }
      )
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer plus tard.' },
      { status: 500 }
    )
  }
}
