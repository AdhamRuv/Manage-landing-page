const barElements = document.querySelectorAll('.bar div');
const bar = document.querySelector('.bar');
const slider = document.querySelector('header nav ul');
const shadow = document.querySelector('.shadow');
const submitButton = document.querySelector('form button');
const errMsg = document.querySelector(`form span`);
const slideBar = document.querySelector(`.slide-bar`);
const boxs = document.querySelectorAll('.slide-bar .box');
const dots = document.querySelectorAll('.slide-container .dots li');

// Toggle Classes While Clicking on Each Element :
bar.onclick = ()=>{
    barElements.forEach((el, i)=>{
        el.classList.toggle(`translate-${i+1}`);
    });
    slider.classList.toggle(`slide`);
    shadow.classList.toggle(`shadow-active`);
};
shadow.onclick = ()=>{
    barElements.forEach((el, i)=>{
        el.classList.remove(`translate-${i+1}`);
    });
    slider.classList.remove(`slide`);
    shadow.classList.remove(`shadow-active`);
};

// Check E-Mail Validation:
const regEx = /^[a-zA-Z0-9\-_]+@(gmail|outlook|hotmail)\.(com|net|org)/ig;
submitButton.onclick = (e)=>{
    var emailValue = document.querySelector('form input').value;
    if (emailValue.match(regEx)){
        return true
    } else{
        e.preventDefault();
        errMsg.classList.add('validErr');
    };
};

// Scroll to The Center of The Box While Clicking on It:
boxs.forEach((el)=>{
    el.onclick = ()=>{
        el.scrollIntoView({inline: 'center', block: 'nearest'});
    };
});

// Adding Click Effects on Dots:
dots.forEach((el, i)=>{
    el.onclick = ()=>{
        dots.forEach((dot)=>{
            dot.classList.remove('dot-active'); // Remove the Click Style First
        });
        el.classList.add('dot-active'); // Add Click Style to The Clicked Dot
        boxs[i].scrollIntoView({inline: 'center', block: 'nearest'}); // Scroll to The Center of Box While Clicking on Its Box
    };
});