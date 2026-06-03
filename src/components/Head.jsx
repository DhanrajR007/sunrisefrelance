import "./head.css";

export default function HeadMessage() {
  return (
    <section className="head-message">
      <div className="head-container">

        <div className="head-image">
          <img
            src="https://ik.imagekit.io/ftquziwxr/sunrise/dr.png?updatedAt=1780469853302"
            alt="Head of Academy"
          />

          
        </div>

        <div className="head-content">
          <span className="head-subtitle">
            A WORD FROM THE HEAD
          </span>

          <h2>
            “Our mission is not merely to prepare students
            for the world, but to prepare them to change it.
            At Sunrise, we believe every mind is a distinct
            architecture, waiting to be realized.”
          </h2>

          <div className="head-author">
            <h4>Mr. Sunil Prajapati</h4>
            <p>Director</p>
          </div>
        </div>

      </div>
    </section>
  );
}