import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <h2 className="about-us-title">About Café Amor</h2>
        <div className="about-us-grid">
          <div className="about-us-text">
            <p>Welcome to Café Amor, where passion for coffee meets the warmth of community. Our story began with a simple dream: to create a haven where every cup tells a tale of love and craftsmanship.</p>
            <p>At Café Amor, we believe in the power of a perfectly brewed cup to bring people together. Our beans are sourced from ethical, sustainable farms around the world, ensuring that each sip not only delights your taste buds but also supports hardworking communities.</p>
          </div>
          <div className="about-us-image image1">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Barista preparing coffee" />
          </div>
          <div className="about-us-image image2">
            <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Cozy café interior" />
          </div>
          <div className="about-us-text">
            <p>Our skilled baristas are artists in their own right, crafting each beverage with care and precision. From velvety lattes adorned with intricate latte art to robust espressos that pack a flavorful punch, every drink is a labor of love.</p>
            <p>But Café Amor is more than just great coffee. It's a place where friendships are forged, ideas are born, and moments are cherished. Our cozy, inviting atmosphere encourages you to linger, whether you're catching up with old friends or diving into a good book.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;