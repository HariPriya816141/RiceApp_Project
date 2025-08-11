import "../../styles/blog.css"

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-card">
        <h2>Stay in the Grain Loop 🌾</h2>
        <p>Subscribe to get weekly rice tips, recipes, and fresh stories straight to your inbox.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
