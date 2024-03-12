import React from "react";

function Footer() {
  const socialMediaLinks = [
     { name: "LinkedIn", link: "https://www.linkedin.com/in/k-%C3%A7a%C4%9Fr%C4%B1-kuzaytepe-b23a21225/", icon: "/img/Linkedin.svg" },
    { name: "Github", link: "https://github.com/cagrikuzaytepe", icon: "/img/Github.svg" },
    { name: "Instagram", link: "https://www.instagram.com/cagriikuzaytepe/", icon: "/img/Instagram.svg" },
    { name: "X", link: "https://twitter.com/cagriikuzaytepe", icon: "/img/X.svg" },
    { name: "Spotify", link: "https://open.spotify.com/user/31afsbvkxveic4gs2xhmznp454rq?si=d9JmZhMtSLOyq4HE_OooEg&nd=1&dlsi=9dd78858d9724220", icon: "/img/spotify.svg" },

   
  ];

  return (
    <section id="Footer">
    <footer className="footer--container">
      <div className="footer--social--icon">
        <ul>
          {socialMediaLinks.map((socialMedia, index) => (
            <li key={index}>
              <a
                href={socialMedia.link}
                target="_blank"
                rel="noreferrer"
              >
                <img src={socialMedia.icon} alt={socialMedia.name} height={45} style={{marginRight:"30px"} } />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Made with React by Çağrı Kuzaytepe</p>
      </div>
    </footer>
    </section>
  );
}

export default Footer;
    