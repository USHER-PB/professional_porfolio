import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789') // Fallback for testing

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, subject, message, projectType } = body

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
        <p><strong>Téléphone:</strong> ${body.phone || 'Non spécifié'}</p>
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

    try {
      // Send email to your personal email for testing
      const { data, error } = await resend.emails.send({
        from: 'contact@fakbru-solution.com', // This should be a verified domain in Resend
        to: ['ushertchankoumi9@gmail.com'], // Your personal email for testing
        subject: emailSubject,
        html: emailContent,
        replyTo: email // Allow direct reply to the sender
      })

      if (error) {
        console.error('Resend API error:', error)
        // Fallback: log the submission for development
        console.log('Contact Form Submission (Fallback):', {
          name,
          email,
          phone: body.phone,
          projectType,
          subject,
          message,
          timestamp: new Date().toISOString()
        })
        
        return NextResponse.json(
          { 
            success: true, 
            message: 'Message received! (Email service temporarily unavailable - logged for review)',
            fallback: true
          },
          { status: 200 }
        )
      }

      console.log('Email sent successfully:', data)

      return NextResponse.json(
        { 
          success: true, 
          message: 'Message envoyé avec succès! Nous vous contacterons dans les plus brefs délais.',
          emailId: data.id
        },
        { status: 200 }
      )

    } catch (emailError) {
      console.error('Email sending error:', emailError)
      
      // Fallback response
      return NextResponse.json(
        { 
          success: true, 
          message: 'Message reçu! (Service email temporairement indisponible - nous traiterons votre demande manuellement)',
          fallback: true
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
