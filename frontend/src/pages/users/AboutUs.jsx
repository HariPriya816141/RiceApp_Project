import { useRef } from "react";
import AboutHero from "../../components/about/AboutHero";
import AboutMain from "../../components/about/AboutMain";
import MissionSec from "../../components/about/MissionSec";
import OurStorySec from "../../components/about/OurStorySec";
import TeamSec from "../../components/about/TeamSec";
import TimeLineAbout from "../../components/about/TimeLineAbout";
import ServicesSec from "../../components/about/ServicesSec";

const About = () => {
  const missionRef = useRef(null);
  const teamRef = useRef(null);
  return (
    <div>
      {/* hero section starts */}
      <AboutHero
        onMissionClick={() =>
          missionRef.current.scrollIntoView({ behavior: "smooth" })
        }
        onTeamClick={() =>
          teamRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      {/* hero section ends */}

      {/* main section starts */}
      <AboutMain />
      {/* main section ends */}

      {/* --- Mission Vision Values Section starts --- */}
      <div ref={missionRef}>
        <MissionSec />
      </div>
      {/* --- Mission Vision Values Section ends --- */}

      {/* our story section starts */}
      <OurStorySec />
      {/* our story section ends */}

      {/* team section starts */}
      <div ref={teamRef}>
        <TeamSec />
      </div>
      {/* team section ends */}

      {/* time-line section starts */}
      <TimeLineAbout />
      {/* time-line section ends */}

      {/* services section starts */}
      <ServicesSec />
      {/* service section ends */}
    </div>
  );
};

export default About;
