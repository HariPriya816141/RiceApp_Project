import { Card, Avatar } from 'antd';
import "../../styles/blog.css";

const testimonials = [
  {
    name: "Bella",
    role: "Local Farmer, Hyderabad",
    quote: "Every grain you eat is a part of my soul. We nurture each paddy with care.",
    seed: "ravi"
  },
  {
    name: "Parth",
    role: "Executive Chef, Aroma Kitchens",
    quote: "Good rice elevates every dish. I always recommend aged basmati for its aroma.",
    seed: "anita"
  },
  {
    name: "Dr. Nandhini",
    role: "Nutritionist",
    quote: "Rice, when portioned well, is a powerhouse of energy and essential carbs.",
    seed: "neha"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Voices Behind Every Grain</h2>
      <div className="testimonial-cards">
        {testimonials.map((t, i) => (
          <Card key={i} className="testimonial-card" bordered={false}>
            <Avatar 
              src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${t.seed}`} 
              size={80}
              className="testimonial-avatar"
            />
            <p className="testimonial-quote">“{t.quote}”</p>
            <p className="testimonial-role">{t.name} <br /><span>{t.role}</span></p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;



