// Test Resend API with your real key
const { Resend } = require('resend');

const resend = new Resend('re_MUkT6f1X_K9oJYJsW6T15Uh4YFUTo7X6X');

async function testResend() {
  console.log('🧪 Testing Resend API with your key...');
  
  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ushertchankoumi9@gmail.com',
      subject: '✅ Test Email from Fâk-brù Solution Website',
      html: `
        <h2>🎉 Resend Integration Test Successful!</h2>
        <p>This is a test email from your website contact form.</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        <hr>
        <p style="color: #666; font-size: 14px;">
          If you receive this email, your contact form is working perfectly! 🚀
        </p>
      `
    });

    if (result.error) {
      console.error('❌ Error:', result.error);
    } else {
      console.log('✅ Success! Email sent with ID:', result.data.id);
      console.log('📧 Check your Gmail inbox for the test email!');
    }
    
  } catch (err) {
    console.error('❌ Test failed:', err.message);
  }
}

testResend();
