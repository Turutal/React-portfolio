// import './App.scss';
import React from 'react';
import Navigation from './components/navigation/';
import Skills from './components/skills/';
import Portfolio from './components/portfolio/';

function App() {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <>
      <header className="header">
        <div className="container">
          {showMenu && <Navigation onClose={() => setShowMenu(false)} />}
        </div>
      </header>
      <main>
        <section className="promo">
          <div className="container">
            <div className="promo__wrapper">
              <img src="/img/logo.svg" alt="logo" />
              <p className="promo__text">
                UX | UI designer
                <br />
                24 years old, Minsk
              </p>
            </div>
            <div
              onClick={() => setShowMenu(true)}
              className="promo__burger-menu"
            >
              <span />
            </div>
            <div className="promo__image"></div>
          </div>
        </section>
        <section className="about">
          <div className="container">
            <h2 className="title">About me</h2>
            <div className="about__text">
              <p className="about__text-item">
                Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in
                design and everything connected with it.
              </p>
              <p className="about__text-item">
                I'm studying at courses "Web and mobile design interfaces" in
                IT-Academy.
              </p>
              <p className="about__text-item">
                Ready to implement excellent projects with wonderful people.
              </p>
            </div>
          </div>
        </section>
        <section className="skills">
          <div className="container">
            <h2 className="title">Skills</h2>
            <h3 className="subtitle">I work in such programs as</h3>
            <Skills />
          </div>
        </section>
        <section className="portfolio">
          <div className="container">
            <h2 className="title">Portfolio</h2>
            <Portfolio />
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="contacts">
            <h2 className="title">Contacts</h2>
            <h3 className="subtitle">
              Want to know more or just chat? <br /> You are welcome!
            </h3>
            <button className="contacts__button">Send message</button>
          </div>
          <div className="social">
            <nav className="social__list">
              <a href="url">
                <img src="/img/social/linkedln.svg" alt="linkedln" />
              </a>
              <a href="url">
                <img src="/img/social/instagram.svg" alt="instagram" />
              </a>
              <a href="url">
                <img src="/img/social/behance.svg" alt="behance" />
              </a>
              <a href="url">
                <img src="/img/social/dribble.svg" alt="dribble" />
              </a>
            </nav>
            <p>
              Like me on <br /> LinkedIn, Instagram, Behance, Dribble
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
