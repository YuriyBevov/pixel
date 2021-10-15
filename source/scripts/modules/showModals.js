const btns = document.querySelectorAll('.js-modal-opener');

const onClickShowModal = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    
    let modalName = evt.currentTarget.getAttribute("data-id");
    let modal = document.querySelector("." + modalName);
    let content = document.querySelector("." + modalName + "__wrapper");

    modal.classList.remove('closed');

    const onClickCloseModal = (evt) => {
        const clickArea = evt.target == content || content.contains(evt.target);

        if(!clickArea) {
            modal.classList.add('closed');
            window.removeEventListener('click', onClickCloseModal);
        }
    }

    window.addEventListener('click', onClickCloseModal)
}

btns.forEach(btn => {
    btn.addEventListener('click', onClickShowModal)
})