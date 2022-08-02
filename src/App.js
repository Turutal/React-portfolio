// import './App.scss';
import React from "react";
import Navigation from "./components/navigation";
function App() {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <><header  className="header">
      <div className="container">
        <Navigation active={showMenu} setActive={setShowMenu}/>
      </div>
    </header>
    <main>
      <section className="promo">
        <div className="container">
          <div className="promo__wrapper">
            <img src="/img/logo.svg" alt="logo" />
            <p className="promo__text">UX | UI designer<br/>
              24 years old, Minsk
            </p>
          </div>
          <div onClick = {() => setShowMenu(!showMenu)} className="promo__burger-menu">
            <span/>
            </div>
          <div className="promo__image">
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <h2 className="title">About me</h2>
          <div className="about__text">
          Hi, I'm Denis – UX/UI designer from Minsk. 
          I'm interested in design and everything connected with it.<br/><br/><br/>

          I'm studying at courses "Web and mobile design 
          interfaces" in IT-Academy.<br/><br/><br/>

          Ready to implement excellent projects
          with wonderful people.
          </div>
        </div>
      </section>
      <section className="skills">
        <div className="container">
          <h2 className="title">Skills</h2>
          <h3 className="subtitle">I work in such programs as</h3>
          <ul className="skills__list">
            <li className="skills__list__item">
              <img width={89} height={88} src="/img/skills/ps.svg" alt="Photoshop" />
              <p>Adobe <br/> Photoshop</p>
              <ul className="level">
                <li><img src="/img/skills/star-black.svg" alt="star" /></li>
                <li><img src="/img/skills/star-black.svg" alt="star" /></li>
                <li><img src="/img/skills/star-black.svg" alt="star" /></li>
                <li><img src="/img/skills/star-black.svg" alt="star" /></li>
                <li><img src="/img/skills/star-gray.svg" alt="star" /></li>
              </ul>
            </li>
            <li className="skills__list__item">
              <img width={89} height={88} src="/img/skills/ai.svg" alt="Illustrator" />
              <p>Adobe <br/> Illustrator</p>
              <ul className="level">
                <li><img src="/img/skills/star-black.svg" alt="star" /></li>
                <li><img src="/img/skills/star-black.svg" alt="star" /></li>
                <li><img src="/img/skills/star-black.svg" alt="star" /></li>
                <li><img src="/img/skills/star-gray.svg" alt="star" /></li>
                <li><img src="/img/skills/star-gray.svg" alt="star" /></li>
              </ul>
            </li>
            <li className="skills__list__item">
              <img width={89} height={88} src="/img/skills/ae.svg" alt="After Effects" />
              <p>Adobe <br/> After Effects</p>
              <ul className="level">
                <li><img src="/img/skills/star-black.svg" alt="star" /></li>
                <li><img src="/img/skills/star-black.svg" alt="star" /></li>
                <li><img src="/img/skills/star-black.svg" alt="star" /></li>
                <li><img src="/img/skills/star-black.svg" alt="star" /></li>
                <li><img src="/img/skills/star-gray.svg" alt="star" /></li>
              </ul>
            </li>
            <li className="skills__list__item">
              <img width={89} height={88} src="/img/skills/figma.svg" alt="Figma" />
              <p>Figma</p>
              <ul className="level level-margin">
                <li><img src="/img/skills/star-black.svg" alt="star" /></li>
                <li><img src="/img/skills/star-black.svg" alt="star" /></li>
                <li><img src="/img/skills/star-black.svg" alt="star" /></li>
                <li><img src="/img/skills/star-black.svg" alt="star" /></li>
                <li><img src="/img/skills/star-gray.svg" alt="star" /></li>
              </ul>
            </li>
        </ul>
        </div>
      </section>
      <section className="portfolio">
        <div className="container">
          <h2 className="title">Portfolio</h2>
          <div className="portfolio__item"> 
            <img src="/img/portfolio/shop.jpg" alt="shop"/>
            <a href="url">Online fashion store - Homepage</a>
          </div>
          <div className="portfolio__item">
            <img src="/img/portfolio/reebok.jpg" alt="reebok" />
            <a href="url">Reebok Store - Concept</a>
          </div>
          <div className="portfolio__item">
            <img src="/img/portfolio/braun.jpg" alt="braun" />
            <a href="url">Braun Landing Page - Concept</a>
          </div>
        </div>
      </section>

    </main>
      <footer>
        <div className="container">
          <div className="contacts">
            <h2 className="title">Contacts</h2>
            <h3 className="subtitle">Want to know more or just chat? <br/> You are welcome!</h3>
            <button className="contacts__button">Send message</button>
          </div>
          <div className="social">
            <ul className="social__list">
              <li><a href="url"><img src="/img/social/linkedln.svg" alt="linkedln" /></a></li>
              <li><a href="url"><img src="/img/social/instagram.svg" alt="instagram" /></a></li>
              <li><a href="url"><img src="/img/social/behance.svg" alt="behance" /></a></li>
              <li><a href="url"><img src="/img/social/dribble.svg" alt="dribble" /></a></li>
            </ul>
            <p>Like me on <br/> LinkedIn, Instagram, Behance, Dribble</p>
          </div>
        </div>
      </footer></>


  );
}

export default App;
