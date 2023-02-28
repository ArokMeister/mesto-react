function Card({ card, onCardClick }) {

  function openImage() {
    onCardClick(card)
  }

  return (
    <li className="elements__item">
      <article className="element">
        <button className="element__remove-btn" type="button" aria-label="Кнопка удаления"></button>
        <img className="element__image element__image-temp" alt={card.name} src={card.link} onClick={openImage} />
        <div className="element__description">
          <h2 className="element__title element__title-temp">{card.name}</h2>
          <div className="element__container">
            <button className="element__like-btn" type="button" aria-label="Нравится"></button>
            <span className="element__like-counter"></span>
          </div>
        </div>
      </article>
    </li>
  )
}

export default Card