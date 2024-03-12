import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title"></p>
        <h2 className="skills--section--heading">Technologies that I am working with:</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="skills--section--description">
        <p>
          I'm currently working with these technologies and I'm always up for diving into new tools and languages. 
          I've developed some projects using these languages and libraries, and they're still a work in progress. 
          Always eager to learn new stuff and keep improving my projects!
        </p>
      </div>
    </section>
  );
}
