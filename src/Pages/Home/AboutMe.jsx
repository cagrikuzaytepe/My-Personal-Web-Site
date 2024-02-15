
export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/AboutMe.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title"></p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">

I am Kadir Çağrı Kuzaytepe, and I graduated from Kırıkkale Osman Gazi Science High School with a GPA of 94.2. Later, I enrolled in the Computer Engineering department at Hacettepe University. With the preparatory training, I have been at this school for three years and am currently in my second year of studies. I have actively served in various roles in the university's communities, and this year, I am serving as the administrative coordinator for IEEE Hacettepe's Computer Society.
Previously, I played a role in organizing seminars with developers at Google during DevFest 22, organized in collaboration with the Google Developer Club. I was also involved in the organization of Pura Game Jam, which received an award at Global IEEE. This year, I took on the role of organizer for this event. Additionally, I have been the organizer for every aspect, including arranging instructors, of ProgrammixV, an event where we provided training in 5 different programming languages.
On November 13th, I conducted a discussion on cybersecurity with Levent Ertaul, the head of the Computer Science department at California State University. Furthermore, I am currently working on a hackathon focusing on mobile applications this year. I actively participated in the Career Fair 22 and 23.          </p>
          <p className="hero--section-description">
            
          </p>
        </div>
      </div>
      <div className="about--section--alt">
        <h1>Photos from Events</h1>
        
        <div className="text-box">
          <h2 className="about--section--heading" style={{color:"purple"}}>ProgrammixV</h2>
          <ul className="about--section--ul" style={{ flexDirection: "row" }}>
            <img src="./img/Flutter.jpg" alt="Flutter Eğitimi" />
            <img src="./img/Web.jpg" alt="Web Geliştirme Eğitimi" />
            <img src="./img/Java.jpg" alt="Java Eğitimi" />
            <img src="./img/C++.jpg" alt="C++ Eğitimi" />
            <img src="./img/Python.jpg" alt="Python Eğitimi" />
          </ul>
          <p className="meetup-description">  
Images from our ProgrammixV event that took place from October 30th, providing training in 5 different programming languages over 3-4 weeks.</p>
        </div>

        <div className="text-box">
          <h2 className="about--section--heading" style={{ color: "darkcyan" }}>Meet Up with Levent Ertaul</h2>
          <ul className="about--section--ul" style={{ flexDirection: "row" }}>
            <img src="./img/MeetUp.jpg" alt="Meet Up" />
          </ul>
        <p className="meetup-description">
        
The promotional image of the Meet Up we conducted with Levent Ertaul, the head of the Computer Science department at California State University.
      </p>
        </div>

        <div className="text-box">
          <h2 className="about--section--heading" style={{ color: "yellowgreen" }}>DevFest 23</h2>
          <ul className="about--section--ul">
            <img src="./img/DevFest1.jpg" alt="Devfest 23" />
            <img src="./img/DevFest2.jpg" alt="Devfest 23" />
            <img src="./img/DevFest3.jpg" alt="Devfest 23" />
            <img src="./img/DevFest4.jpg" alt="Devfest 23" />
            <img src="./img/DevFest5.jpg" alt="Devfest 23" />
          </ul>
          
          <p className="meetup-description">Images from DevFest 23, which is the largest developer festival in Turkey.</p>
        </div>
      </div>
    </section>
  );
}
