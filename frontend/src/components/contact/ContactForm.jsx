import { Card, Form, Input, Button } from "antd";
import { SmileTwoTone } from "@ant-design/icons";
import "../../styles/contact.css"

const ContactForm = () => {
  return (
    <>
    <div className="contact-form-section">
      <div className="suggestion-box ">
        <Card className="card-box gradient-pink">
          <h2>
            <SmileTwoTone twoToneColor="#eb2f96" /> Feel free to write to us!
          </h2>
          <p>Your suggestions matter. Help us serve you better 🌾</p>
        </Card>
      </div>

      <div className="form-box">
        <Card className="card-box">
          <Form layout="vertical">
            <Form.Item label="Name" name="name" required>
              <Input placeholder="Your Name" />
            </Form.Item>
            <Form.Item label="Email" name="email" required>
              <Input type="email" placeholder="your@email.com" />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input placeholder="Optional Phone Number" />
            </Form.Item>
            <Form.Item label="Message / Suggestion" name="message" required>
              <Input.TextArea rows={4} placeholder="Write your message..." />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Send
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
    {/* address section starts */}
    <div className="address-map-section">
 <div className="address-box">
  <h3>📍 Our Office</h3>
  <p>Rainbow Rice Pvt. Ltd.</p>
  <p>Plot No. 45, Banjara Hills, Hyderabad - 500034</p>
  <p>📞 +91 98765 43210</p>
  <p>📧 contact@rainbowrice.com</p>
</div>


  <div className="map-box">
  <iframe
    title="office-map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3172142303425!2d78.43577507482877!3d17.438259701679993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973cfb0d94e7%3A0x43539c64f6d5ad2b!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana%20500034!5e0!3m2!1sen!2sin!4v1721903150000!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0, borderRadius: '1rem' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

</div>

    {/* address section ends */}
    </>
  );
};

export default ContactForm;
