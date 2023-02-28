import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onTextError }) {
  const [userName, setUserName] = React.useState(null);
  const [userDescription, setUserDescription] = React.useState(null);
  const [userAvatar, setUserAvatar] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getCards()])
    .then(([{name, about, avatar}, cardData]) => {
      setUserName(name); 
      setUserDescription(about);
      setUserAvatar(avatar);
      setCards([...cards, ...cardData.map(card => (<Card key={card._id} card={card} onCardClick={onCardClick} />))])
    })
    .catch(err => onTextError(err));
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-edit" onClick={onEditAvatar}></div>
        <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" />
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-btn" type="button" aria-label="Редактировать профиль" onClick={onEditProfile}></button>
          <p className="profile__profession">{userDescription}</p>
        </div>
        <button className="profile__add-btn" type="button" aria-label="Добавить фото" onClick={onAddPlace}></button>
      </section>
      <section className="elements" aria-label="Секция карточек">
        <ul className="elements__list">{cards}</ul>
      </section>
    </main>
  )
}



export default Main