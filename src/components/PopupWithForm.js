function PopupWithForm({ title, name, btnText, children, isOpen, onClose }) {
  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`} onClick = {onClose}>
      <div className={`popup__container popup__container-${name}`}>
        <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
        <h2 className="popup__title">{title}</h2>
        <form className={`popup__form popup__form-${name}`} name={name} id={name} noValidate>
          {children}
          <button className="popup__button" type="submit">{btnText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm