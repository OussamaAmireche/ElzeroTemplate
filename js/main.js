/* Animate Width On Scroll */

let section = document.querySelector('.skills');
let spans = document.querySelectorAll('.fill');

/* Activating Counter */

let days = document.querySelector('#days p');
let hours = document.querySelector('#hours p');
let minutes = document.querySelector('#minutes p');
let seconds = document.querySelector('#seconds p');

let counter = setInterval(() => {
    let time = new Date('december 31, 2024 23:59:59').getTime() - new Date().getTime();
    let day = Math.floor(time / (1000 * 3600 * 24));
    let hour = Math.floor(time % (1000 * 3600 * 24) / (1000 * 3600));
    let minute = Math.floor((time % (1000 * 3600 * 24)) % (1000 * 3600) / (1000 * 60));
    let second = Math.floor(((time % (1000 * 3600 * 24)) % (1000 * 3600)) % (1000 * 60) / 1000);
    days.textContent = day < 10 ? `0${day}` : day;
    hours.textContent = hour < 10 ? `0${hour}` : hour;
    minutes.textContent = minute < 10 ? `0${minute}` : minute;
    seconds.textContent = second < 10 ? `0${second}` : second;
}, 1000);

/* Incresing Numbers On Scroll */

let statSection = document.querySelector('.stats');
let divs = document.querySelectorAll('.stats .num');
let active = false;

const incrementNumber = (el) => {
    let max = Number(el.dataset.num);
    let counter = setInterval(() => {
        el.textContent++
        if(el.textContent == max){
            clearInterval(counter);
        }
    }, 1000 / max);
}

window.onscroll = () => {
    // Animating Width
    if(window.scrollY >= section.offsetTop - 250) {
        spans.forEach((ele) => {
            ele.style.width = ele.dataset.skill;
        });
    }

    // Increasing numbers
    if (window.scrollY >= statSection.offsetTop - 500) {
        if(active === false){
            divs.forEach((ele) => {
                incrementNumber(ele);
            });
        }
        active = true;
    }
}
