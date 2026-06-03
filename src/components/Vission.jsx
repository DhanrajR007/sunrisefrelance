import "../styles/vission.css";

export default function VisionSection() {
  return (
    <section id="vision" className="vision">
        <div className="vision-container">
  <div className="vision-content">
        <span className="section-label">OUR VISION</span>

        <h2>
          A legacy of
          <br />
          intentional education.
        </h2>

        <p>
          Founded on the principles of critical inquiry and moral fortitude,
          Sunrise School has stood as a beacon of academic rigor for over a
          century — quietly shaping the thinkers, makers, and stewards of each
          new era.
        </p>

        <p>
          Our curriculum is designed not just to transmit knowledge, but to
          ignite a lifelong pursuit of wisdom through interdisciplinary study,
          mentorship, and hands-on discovery.
        </p>

        <div className="vision-stats">
          <div>
            <span>MISSION</span>
            <h4>
              Educate the whole student —
              <br />
              mind, character, and craft.
            </h4>
          </div>

          <div>
            <span>VISION</span>
            <h4>
              Graduates who reshape the
              <br />
              world with intellect and grace.
            </h4>
          </div>
        </div>
      </div>

      <div className="vision-images">
        <img
          src="https://ik.imagekit.io/ftquziwxr/sunrise/v5.webp?updatedAt=1780469851580"
          alt="Student Reading"
          className="img-large"
        />

        <img
          src="https://ik.imagekit.io/ftquziwxr/sunrise/v4.jpeg?updatedAt=1780469852026"
          alt="Science Lab"
          className="img-small"
        />
      </div>
        </div>
    </section>
  );
}