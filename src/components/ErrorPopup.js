function ErrorPopup({ error, onClose }) {
  return (
    <div className={`popup popup_error ${error.isOpen ? 'popup_opened' : ''}`} onClick={onClose}>
      <div className="popup__container popup__container-error">
        <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
        <h2 className="popup__title popup__title-error">Oops! Что то пошло не так! 👇</h2>
        <span className="popup__error-text">{`${error.errorMessage}`.slice(7)}</span>
      </div>
    </div>
  )
}

export default ErrorPopup