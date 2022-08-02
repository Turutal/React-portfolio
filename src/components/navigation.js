import './style.scss';

function Navigation ({active, setActive}) {
    return (
        <nav className={active ? 'navigation active' : 'navigation'}>
        <a href="url" className="navigation__item">Home</a>
        <a href="url" className="navigation__item">About me</a>
        <a href="url" className="navigation__item">Skills</a>
        <a href="url" className="navigation__item">Portfolio</a>
        <a href="url" className="navigation__item">Contacts</a>
        <div className="lang">
            <button className="lang__button">Ru</button>
            <b>|</b>
            <button className="lang__button lang__button-active">Eng</button>
        </div>
        <img className="navigation__close" width={66} height={28} src="./img/close.svg" alt="Close" />
    </nav>
    );
}

export default Navigation;