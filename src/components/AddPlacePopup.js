import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

  const [cardTitle, setCardTitle] = useState('')
  const [cardLink, setCardLink] = useState('')

  function handleChangeTitle(e) {
    setCardTitle(e.target.value)
  }

  function handleChangeLink(e) {
    setCardLink(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: cardTitle,
      link: cardLink,
    });
  } 

  return (
    <PopupWithForm
      title={'Новое место'}
      name={'place'}
      btnText={'Создать'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      children={(
        <>
          <input className="popup__input popup__input-place" type="text" id="place" name="name" 
          placeholder="Название места" autoComplete="off" required minLength="2" maxLength="30" onChange={handleChangeTitle} value={cardTitle} />
          <span className="popup__error" id="place-error"></span>
          <input className="popup__input popup__input-url" type="url" id="url" name="link" 
          placeholder="Ссылка на картинку" autoComplete="off" required onChange={handleChangeLink} value={cardLink} />
          <span className="popup__error" id="url-error"></span>
        </>
      )}
    />
  )
}

export default AddPlacePopup