const btns = document.querySelectorAll('.js-modal-opener');

const onClickShowModal = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    const body = document.querySelector('body');
    let modalName = evt.currentTarget.getAttribute("data-id");
    let modal = document.querySelector("." + modalName);
    let content = document.querySelector("." + modalName + "__wrapper");

    modal.classList.remove('closed');
    body.style.overflow = 'hidden';

    const onClickCloseModal = (evt) => {
        const clickArea = evt.target == content || content.contains(evt.target);

        if(!clickArea) {
            modal.classList.add('closed');
            body.style.overflow = 'scroll';
            window.removeEventListener('click', onClickCloseModal);
        }
    }

    window.addEventListener('click', onClickCloseModal)
}

btns.forEach(btn => {
    btn.addEventListener('click', onClickShowModal)
})