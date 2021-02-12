// console.log('yes')

document.querySelectorAll('.dropdown-item')
    .forEach(item => {
        if ((item.textContent) === "Reply") {
            item.addEventListener('click', () => {
                document.querySelector('.replyInput__toggle__dyna').style.display = 'block';
            })
        }
    })


document.querySelector('#close__Reply__input').addEventListener('click', () => {
    document.querySelector('.replyInput__toggle__dyna').style.display = 'none';
})


// document.querySelector('.chat__items__list').document.querySelectorAll('.chat__item')
//     .forEach(item => {
//        const firstItem = item.findIndex( ( item, index ) => {
//            console.log(item, index)
//        } )
//     })


document.querySelectorAll('.chat__info__contact')
    .forEach(item => {
        item.addEventListener('click', () => location.href = 'chat-item-contact-info.html');
    })

