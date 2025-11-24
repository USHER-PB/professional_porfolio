// Test Gmail Relay System for Fâk-brù Solution
const { Resend } = require('resend');

const resend = new Resend('re_VjuHuys7_GKHvvGuv4B6QLnEZwQy24VhL'); // Your new API key

async function testGmailRelay() {
  console.log('🧪 Testing Gmail Relay System for Fâk-brù Solution...');
  
  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ushertchankoumi9@gmail.com', // Your Gmail (relay)
      subject: '[FÂK-BRÙ CONTACT] Test Message - Customer Inquiry',
      html: `
        <h2>🎉 Fâk-brù Solution - Gmail Relay Test!</h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>📧 Customer Contact Information:</h3>
          <p><strong>Name:</strong> Test Customer</p>
          <p><strong>Email:</strong> customer@example.com</p>
          <p><strong>Phone:</strong> +237 123 456 789</p>
          <p><strong>Project Type:</strong> Construction Clé en Main</p>
        </div>
        
        <div style="background: #ffffff; padding: 20px; border-left: 4px solid #f59e0b; margin: 20px 0;">
          <h3>💬 Customer Message:</h3>
          <p style="white-space: pre-line;">Hello, I'm interested in your construction services. Can you provide more information about your turnkey projects?</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 14px;">
            <strong>📬 Gmail Relay System Active</strong><br>
            This email was sent to your Gmail for relay processing.<br>
            You can set up auto-forward to fakbru@yahoo.com in Gmail settings.<br>
            <br>
            <strong>Reply-To:</strong> customer@example.com (customer can receive direct replies)<br>
            <strong>Timestamp:</strong> ${new Date().toISOString()}
          </p>
        </div>
      `,
      replyTo: 'customer@example.com' // Allow direct reply to customer
    });

    if (result.error) {
      console.error('❌ Error:', result.error);
    } else {
      console.log('✅ Success! Gmail Relay Test Email sent with ID:', result.data.id);
      console.log('📧 Check your Gmail inbox for the test email!');
      console.log('🔄 Remember to set up auto-forward to fakbru@yahoo.com');
    }
    
  } catch (err) {
    console.error('❌ Test failed:', err.message);
  }
}

testGmailRelay();
