const menuOpen = document.querySelector('#menu-minim-open');
const menuClose = document.querySelector('#menu-minim-close');
const navMinBox = document.querySelector('.nav-min');
const navLink = document.querySelectorAll('.nav-link');
const navBottom = document.querySelector('.nav-bottom');
const HomeButtons = document.querySelector('#buttons-home');
const serviceCard = document.querySelectorAll('#service-card');
const userTexts = document.querySelectorAll('.user-text');
const userPics = document.querySelectorAll('.user-pic');



menuOpen.addEventListener('click', () => {
    navMinBox.classList.toggle('active');
})
menuClose.addEventListener('click', () => {
    navMinBox.classList.remove('active');
});

navLink.forEach(n => {
    n.addEventListener('click', () => {
        navMinBox.classList.remove('active');
    });
});

window.addEventListener("resize", () => {
    if (document.body.clientWidth > 1000) {
        navMinBox.classList.remove('active');
    }
});

window.addEventListener('scroll', () => {

    if (window.scrollY >= 50) {
        navBottom.classList.add('active-nav');

    } else {
        navBottom.classList.remove('active-nav');
    }
});



serviceCard.forEach(n => {
    let goIcon = n.querySelector('.go-icon')
    n.addEventListener('mouseout', () => {

        n.classList.toggle('back-color');
        goIcon.style.display = 'none';

    });
    n.addEventListener('mouseover', () => {
        n.classList.remove('back-color');
        goIcon.style.display = 'block';

    });

})

function showReview() {
    userPics.forEach(n => {
        n.classList.remove("active-pic");
    })
    userTexts.forEach(n => {
        n.classList.remove("active-user");
    })
    let i = Array.from(userPics).indexOf(event.target);

    userPics[i].classList.toggle('active-pic');
    userTexts[i].classList.toggle('active-user');
}










