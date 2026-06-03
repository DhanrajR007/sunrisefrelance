import "../styles/campus.css";

export default function CampusLife() {
  return (
    <section id="campus" className="campus-life">
      <div className="container">
        <span className="subtitle">CAMPUS LIFE</span>
        <h2>A community in motion.</h2>

        <div className="gallery-grid">
          {/* Left Large Image */}
          <div className="card large">
            <img
              src="https://ik.imagekit.io/ftquziwxr/sunrise/c2.JPG?updatedAt=1780469862504"
              alt="Campus Building"
            />
          </div>

          {/* Top Right */}
          <div className="card auditorium">
            <img
              src="https://ik.imagekit.io/ftquziwxr/sunrise/c3.JPG?updatedAt=1780469867052"
              alt="Auditorium"
            />
          </div>

          {/* Middle Right */}
          <div className="card study">
            <img
              src="https://ik.imagekit.io/ftquziwxr/sunrise/v4.jpeg?updatedAt=1780469852026"
              alt="Students"
            />
          </div>

          <div className="card hallway">
            <img
              src="https://ik.imagekit.io/ftquziwxr/sunrise/v5.webp?updatedAt=1780469851580"
              alt="Hallway"
            />
          </div>

          {/* Bottom Left */}
          <div className="card sports">
            <img
              src="https://ik.imagekit.io/ftquziwxr/sunrise/c6.jpeg?updatedAt=1780469850493"
              alt="Sports"
            />
          </div>

          {/* Quote Card */}
          <div className="quote-card">
            <p>
              “Every day on this campus feels like a quiet
              rehearsal for a life of meaning.”
            </p>

            <span>— AMARA, CLASS OF '25</span>
          </div>
        </div>
      </div>
    </section>
  );
}