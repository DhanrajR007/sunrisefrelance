import "../styles/why-sunrise.css";

const features = [
  {
    icon: "⌘",
    title: "Global Perspective",
    description:
      "Engage with international curricula designed for the modern world explorer.",
  },
  {
    icon: "⬢",
    title: "Adaptive Research",
    description:
      "State-of-the-art facilities that foster hands-on scientific investigation.",
  },
  {
    icon: "✦",
    title: "Artist Residency",
    description:
      "A vibrant arts program led by professional creators in high-end studios.",
  },
  {
    icon: "◎",
    title: "Character Growth",
    description:
      "Mentorship programs focused on emotional intelligence and leadership.",
  },
];

export default function WhySunrise() {
  return (
    <section id="academics" className="why-lyceum">
      <div className="why-header">
        <div>
          <span className="section-tag">WHY LYCEUM</span>

          <h2>
            Where potential meets            purpose.
          </h2>

          <p>
            We provide the scaffolding for students to climb beyond
            their own expectations — academically, creatively,
            and ethically.
          </p>
        </div>

        <a href="/" className="discover-link">
          Discover Academics →
        </a>
      </div>

      <div className="feature-grid">
        {features.map((item, index) => (
          <div key={index} className="feature-card">
            <div className="icon-box">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}