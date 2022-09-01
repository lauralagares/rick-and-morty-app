import './style.css';

function CharacterCard({ character }) {

  let statusCss = '';

  switch (character.status) {
    case 'Alive': statusCss = 'alive'; break;
    case 'Dead': statusCss = 'dead'; break;
    default: statusCss = 'unknown';
  }

  return (
    <div className="card text-uppercase card-container">
      <img className="card-img-top" src={character.image} alt="Character" />
      <div className="character-info-container">

          <div className={`status ${statusCss}`}></div>
          <p className='character-name'>{character.name}</p>
          <p className='character-status'>{character.status} {character.species}</p>
      
      </div>
    </div>
  )
}

export default CharacterCard