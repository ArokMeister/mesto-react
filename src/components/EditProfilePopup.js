import { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser])

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeDescription(e) {
    setAbout(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about
    });
  } 
  
  return (
    <>
      <PopupWithForm
        title={'Редактировать профиль'}
        name={'profile'}
        btnText={'Сохранить'}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        children={(
          <>
            <input 
              className="popup__input popup__input-name"
              type="text"
              id="name"
              name="name"
              placeholder="Имя"
              autoComplete="off"
              required
              minLength="2"
              maxLength="40"
              value={name || ''}
              onChange={handleChangeName}
            />
            <span className="popup__error" id="name-error"></span>
            <input 
              className="popup__input popup__input-job"
              type="text"
              id="job"
              name="about"
              placeholder="О себе"
              autoComplete="off"
              required
              minLength="2"
              maxLength="200"
              value={about || ''}
              onChange={handleChangeDescription}
            />
            <span className="popup__error" id="job-error"></span>
          </>
        )}
      />
    </>
  )
}

export default EditProfilePopup