import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser])

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
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
              className="popup__input popup__input-name" type="text" id="name" name="name" defaultValue={name}
              placeholder="Имя" autoComplete="off" required minLength="2" maxLength="40" onChange={handleChangeName} 
            />
            <span className="popup__error" id="name-error"></span>
            <input 
              className="popup__input popup__input-job" type="text" id="job" name="about" defaultValue={description}
              placeholder="О себе" autoComplete="off" required minLength="2" maxLength="200" onChange={handleChangeDescription} 
            />
            <span className="popup__error" id="job-error"></span>
          </>
        )}
      />
    </>
  )
}

export default EditProfilePopup