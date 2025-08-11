import '../../styles/timelineHorizontal.css'; // same CSS with horizontal additions

const timelineData = [
  { year: "2019", title: "Idea Born", description: "We started with a vision to revolutionize grain trading." },
  { year: "2020", title: "Team Assembled", description: "A small team of passionate individuals came together." },
  { year: "2021", title: "Platform Launched", description: "We launched our MVP and got our first users." },
  { year: "2023", title: "Growth Phase", description: "Reached 10K+ users, expanded our operations." },
];

const TimeLineHorizontal = () => {
  return (
    <section className="timeline-section horizontal-timeline">
      <h2 className="timeline-title half-underline">Our Growth Journey</h2>
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
  );
};

export default TimeLineHorizontal;

