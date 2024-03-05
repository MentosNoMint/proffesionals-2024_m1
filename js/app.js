let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide()) {
        //scroll down
        header.classList.add('hide');
    }
    else if (scrollPosition() < lastScroll && containHide()) {
        //scroll up
        header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
})


next.addEventListener('click', () => {
    let items = document.querySelectorAll('.item')
    let des = document.querySelectorAll('.des')
    document.querySelector('.slide').append(items[0]);
    document.querySelector('.desDlise').append(des[0]);
})
prev.addEventListener('click', () => {
    let items = document.querySelectorAll('.item')
    let des = document.querySelectorAll('.des')
    document.querySelector('.slide').prepend(items[items.length - 1]);
    document.querySelector('.desDlise').append(des[des.length - 1]);
})



