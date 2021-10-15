const items = document.querySelectorAll('.chars__item-header');

const onClickChangeActiveItem = (evt) => { 
    items.forEach(item => {
        item.classList.remove('opened')
    });
    evt.currentTarget.classList.add('opened')
};

items.forEach((item, i) => {
    i !== 0 ?
    item.classList.remove('opened') : null;

    item.addEventListener('click', onClickChangeActiveItem);
});

