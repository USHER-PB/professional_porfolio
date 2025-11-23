// Email testing script
const nodemailer = require('nodemailer');

async function testEmail() {
  console.log('Testing email functionality...');
  
  try {
    // Method 1: Test with Gmail (requires app password)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ushertchankoumi9@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || 'test-password'
      }
    });

    const mailOptions = {
      from: 'ushertchankoumi9@gmail.com',
      to: 'ushertchankoumi9@gmail.com',
      subject: 'Test Email from Fâk-brù Solution',
      html: `
        <h2>Email Test Successful!</h2>
        <p>This is a test email from your website contact form.</p>
        <p>Timestamp: ${new Date().toISOString()}</p>
      `
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Gmail test successful:', result.messageId);
    
  } catch (error) {
    console.log('❌ Gmail test failed:', error.message);
    
    // Method 2: Test Resend
    try {
      const { Resend } = require('resend');
      const resend = new Resend('re_test'); // Test API key
      
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['ushertchankoumi9@gmail.com'],
        subject: 'Test Email from Fâk-brù Solution',
        html: '<h2>Resend Test Successful!</h2>'
      });
      
      if (error) {
        console.log('❌ Resend test failed:', error.message);
      } else {
        console.log('✅ Resend test successful:', data.id);
      }
    } catch (resendError) {
      console.log('❌ Resend test failed:', resendError.message);
    }
  }
}

testEmail();
