import '../../styles/about.css';

const TeamSec = () => {
        const teamMembers = [
  {
    name: "Karan V.",
    role: "Operations Manager",
    desc: "Ensures smooth supply chain from farms to households.",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=karan"
  },
  {
    name: "Riya S.",
    role: "Marketing Lead",
    desc: "Crafts campaigns that connect consumers with culture.",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=riya"
  },
  {
    name: "Aman T.",
    role: "Tech Architect",
    desc: "Designs digital solutions for seamless order tracking.",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=aman"
  },
  {
    name: "Sneha J.",
    role: "Customer Experience",
    desc: "Delivers support that builds trust and satisfaction.",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=sneha"
  }
];
  return (
   <section className="team-section">
      <h2 className="team-title">Meet the Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.avatar} alt={member.name} className="avatar" />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="desc">{member.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TeamSec
