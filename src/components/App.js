import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import ErrorPopup from './ErrorPopup.js';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: null, link: null, isOpen: false });
  const [error, setError] = React.useState({ errorMessage: null, isOpen: false })


  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen)
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen)
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }

  function handleCardClick({ name, link }) {
    setSelectedCard({ name, link, isOpen: selectedCard })
  }

  function handleErrorMessage(errorMessage) {
    setError({ errorMessage, isOpen: !error.isOpen})
  }

  function closeAllPopups(evt) {
    const currentPopup = evt.target.closest('.popup');
    if (evt.target === currentPopup || evt.target.classList.contains('popup__close-button')) {
      if (isAddPlacePopupOpen) { setAddPlacePopupOpen(!isAddPlacePopupOpen) }
      if (isEditAvatarPopupOpen) { setEditAvatarPopupOpen(!isEditAvatarPopupOpen) }
      if (isEditProfilePopupOpen) { setEditProfilePopupOpen(!isEditProfilePopupOpen) }
      if (selectedCard) { setSelectedCard(!selectedCard) }
      if (error) { setError(!error) }
    }
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onTextError={handleErrorMessage}
      />
      <Footer />
      <PopupWithForm
        title={'Редактировать профиль'}
        name={'profile'}
        btnText={'Сохранить'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={(
          <>
            <input className="popup__input popup__input-name" type="text" id="name" name="name" placeholder="Имя" autoComplete="off" required minLength="2" maxLength="40" />
            <span className="popup__error" id="name-error"></span>
            <input className="popup__input popup__input-job" type="text" id="job" name="about" placeholder="О себе" autoComplete="off" required minLength="2" maxLength="200" />
            <span className="popup__error" id="job-error"></span>
          </>
        )}
      />
      <PopupWithForm
        title={'Новое место'}
        name={'place'}
        btnText={'Создать'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={(
          <>
            <input className="popup__input popup__input-place" type="text" id="place" name="name" placeholder="Название" autoComplete="off" required minLength="2" maxLength="30" />
            <span className="popup__error" id="place-error"></span>
            <input className="popup__input popup__input-url" type="url" id="url" name="link" placeholder="Ссылка на картинку" autoComplete="off" required />
            <span className="popup__error" id="url-error"></span>
          </>
        )}
      />
      <PopupWithForm
        title={'Обновить аватар'}
        name={'avatar'}
        btnText={'Сохранить'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={(
          <>
            <input className="popup__input popup__input-avatar" type="url" id="avatar" name="avatar" placeholder="Ссылка на картинку" autoComplete="off" required />
            <span className="popup__error" id="avatar-error"></span>
          </>
        )}
      />
      <PopupWithForm
        title={'Вы уверены?'}
        styleTitle={30}
        name={'remove'}
        btnText={'Да'}
        isOpen={''}
        onClose={closeAllPopups}
        children={''}
      />
      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <ErrorPopup
        error={error}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;
