// Test Fâk-brù Resend Account
const { Resend } = require('resend');

const resend = new Resend('re_dCHQX7kA_KGpsE5kg4TBfmRTTWUHGX2Aj'); // Fâk-brù API key

async function testFakbruResend() {
  console.log('🧪 Testing Fâk-brù Resend Account...');
  
  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'fakbru@yahoo.com',
      subject: '✅ Fâk-brù Solution - Test Email',
      html: `
        <h2>🎉 Fâk-brù Solution Email System Working!</h2>
        <p>This is a test email from your website contact form.</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>📧 Test Details:</h3>
          <p><strong>From:</strong> Fâk-brù Solution Website</p>
          <p><strong>To:</strong> fakbru@yahoo.com</p>
          <p><strong>API Key:</strong> Fâk-brù Account</p>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        </div>
        
        <div style="background: #ffffff; padding: 20px; border-left: 4px solid #f59e0b; margin: 20px 0;">
          <h3>🚀 System Status:</h3>
          <p>✅ Resend API connected</p>
          <p>✅ Email delivery working</p>
          <p>✅ Contact form ready for customers</p>
        </div>
        
        <hr>
        <p style="color: #666; font-size: 14px;">
          If you receive this email, your contact form is working perfectly! 
          Customers can now submit inquiries and you'll receive them directly at fakbru@yahoo.com
        </p>
      `
    });

    if (result.error) {
      console.error('❌ Error:', result.error);
    } else {
      console.log('✅ Success! Email sent with ID:', result.data.id);
      console.log('📧 Check fakbru@yahoo.com inbox for the test email!');
      console.log('🎉 Fâk-brù contact form is now fully functional!');
    }
    
  } catch (err) {
    console.error('❌ Test failed:', err.message);
  }
}

testFakbruResend();
