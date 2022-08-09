import Stars from './stars';
import './style.scss';

function Skills() {
  const Data = [
    { name: 'Adobe Photoshop', url: '/img/skills/ps.svg', rating: 4 },
    { name: 'Adobe Illustrator', url: '/img/skills/ai.svg', rating: 3 },
    { name: 'Adobe After Effects', url: '/img/skills/ae.svg', rating: 4 },
    { name: 'Figma', url: '/img/skills/figma.svg', rating: 4 },
  ];

  const skills = Data.map((item) => {
    return (
      <li className="skills__list-item">
        <img width={89} height={88} src={item.url} alt={item.name} />
        <p>{item.name}</p>
        <div className="skills__rating">
          {Array(5)
            .fill(1)
            .map((item, i) =>
              Data.rating >= i + 1 ? (
                <span>
                  <Stars color="#070707" />
                </span>
              ) : (
                <span>
                  <Stars color="#E5E5E5" />
                </span>
              )
            )}
        </div>
      </li>
    );
  });
  return <ul className="skills__list">{skills}</ul>;
}

export default Skills;
