
export default function HeroSection() {

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Çağrı</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Computer Engineering</span>{" "}
            <br />
            Student
          </h1>
          <p className="hero--section-description">
            Hacettepe University
            <br /> 
            Computer Engineering 2/4
          </p>
        </div>
        <button className="btn btn-primary">
          <a href="mailto:cagrikuzaytepe@ieee.com" style={{ textDecoration: 'none', color: 'inherit' }}>
            Get In Touch
          </a>
        </button>

      </div>

      <div className="hero--section--img">
        <img src="./img/hero_img.jpg" alt="Hero Section"/>
      </div>
    </section>
    )
}