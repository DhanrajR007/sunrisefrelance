import "../styles/hero.css"

const Hero = () => {
  return (
     <section className="hero">
      <div className="hero-badge">
        ESTABLISHED 1924
      </div>

      <h1 className="hero-title">
        Cultivating the <br />
        architecture <br />
        of <span>ambition</span>
      </h1>

      <p className="hero-description">
        A sanctuary for intellectual curiosity and character development,
        where modern innovation meets a century of academic excellence.
      </p>

      <div className="hero-actions">
        <a href="#vision" className="primary-btn">
           <span className="arrow">→</span> Explore Our Vision
        </a>

        <a href="#academics" className="secondary-btn">
           Discover Academics
        </a>
      </div>
    </section>
  )
}

export default Hero
