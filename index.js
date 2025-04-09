let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function contact(event) {

    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');

    loading.classList += ' modal__overlay--visible';

    emailjs.sendForm(
        'service_jtibkeo', 
        'template_6v5jgyu',
        event.target,
        'ytQzND-sSB_TkISCl'
    ).then(() => {
        loading.classList.remove('modal__overlay--visible');
        success.classList += ' modal__overlay--visible';
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible');
        alert('The email service is temporarily unavailable. Please contact me directly at adriamooney@gmail.com')
    })

}


function toggleModal() {
    //toggle modal
    if(isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove('modal--open');
    }
    window.scrollTo(0,0);
    isModalOpen = true;
    console.log('toggle modal');
    document.body.classList += ' modal--open';
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    contrastToggle ? document.body.classList += ' dark-theme' : document.body.classList.remove('dark-theme');
}

function moveBackground(event) {
    const shapes = document.querySelectorAll('.shape');
    const scaleFactor = 1 / 20;
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}