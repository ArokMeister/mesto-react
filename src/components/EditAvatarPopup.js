import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

  const avatarRef = React.createRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  } 

  return (
    <PopupWithForm
      title={'Обновить аватар'}
      name={'avatar'}
      btnText={'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      children={(
        <>
          <input 
            ref={avatarRef} className="popup__input popup__input-avatar" type="url" id="avatar" name="avatar" 
            placeholder="Ссылка на картинку" autoComplete="off" required
          />
          <span className="popup__error" id="avatar-error"></span>
        </>
      )}
    />
  )
}

export default EditAvatarPopup