// Test Resend API with Fâk-brù company email
const { Resend } = require('resend');

const resend = new Resend('re_MUkT6f1X_K9oJYJsW6T15Uh4YFUTo7X6X');

async function testFakbruEmail() {
  console.log('🧪 Testing Resend API with Fâk-brù company email...');
  
  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'fakbru@yahoo.com',
      subject: '✅ Test Email from Fâk-brù Solution Website',
      html: `
        <h2>🎉 Fâk-brù Solution Email Test!</h2>
        <p>This is a test email from your website contact form.</p>
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Company:</strong> Fâk-brù Solution</p>
          <p><strong>Test Type:</strong> Email System Verification</p>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        </div>
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
      console.log('📧 Check fakbru@yahoo.com inbox for the test email!');
    }
    
  } catch (err) {
    console.error('❌ Test failed:', err.message);
  }
}

testFakbruEmail();
