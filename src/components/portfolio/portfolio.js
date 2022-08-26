import './style.scss';

const list = [
    { img: '/img/portfolio/shop.jpg', name: 'Online fashion store - Homepage' },
    { img: '/img/portfolio/reebok.jpg', name: 'Reebok Store - Concept' },
    { img: '/img/portfolio/braun.jpg', name: 'Braun Landing Page - Concept' },
  ];

function Portfolio( {list} ) {
  
  return list.map((item) => (
    <div className="portfolio__item">
      <img src={item.img} alt="shop" />
      <a href="url">{item.name}</a>
    </div>
  ));
}

export default Portfolio;
