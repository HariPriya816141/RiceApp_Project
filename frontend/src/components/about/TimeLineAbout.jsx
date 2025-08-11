import '../../styles/about.css';

const TimeLineAbout = () => {
    const timelineData = [
  {
    year: "2019",
    title: "Founded",
    description: "Started with a mission to bring premium rice to every household."
  },
  {
    year: "2020",
    title: "Online Platform",
    description: "Launched our ordering and delivery platform to reach customers directly."
  },
  {
    year: "2022",
    title: "Nationwide Expansion",
    description: "Expanded to 10+ cities and collaborated with over 1000 farmers."
  },
  {
    year: "2024",
    title: "Smart Packaging",
    description: "Introduced blockchain-powered traceability and eco-friendly packaging."
  }
];
  return (
     <section className="timeline-section vertical-timeline">
      <h2 className="timeline-title">Our Journey</h2>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-marker" />
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TimeLineAbout
