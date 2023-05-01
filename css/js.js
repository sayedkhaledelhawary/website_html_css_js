let header = document.querySelector('.header');
window.addEventListener('scroll', function() {
    header.classList.toggle('activee', this.scrollY > 80);
})


let navlist = document.querySelector('.navlist');
document.querySelector('#menu-icon').onclick = () => {
    navlist.classList.toggle('open')
    navlist.classList.remove('active')
}

let search = document.querySelector('.search-from');

document.querySelector('#search').onclick = () => {
    search.classList.toggle('active')
    navlist.classList.remove('open')
    
}

const sr = ScrollReveal ({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true,

})

sr.reveal ('.home-text', {delay: 300});
sr.reveal ('.home-img', {delay: 400});
sr.reveal ('.continer', {delay: 400});
sr.reveal ('.about-img', {});
sr.reveal ('.about-text', {delay: 300});


sr.reveal ('.midlle-text', {});
sr.reveal ('.row-btn , .shop-content' ,{delay: 300});

sr.reveal ('.review-content , .contact' ,{delay: 300});




