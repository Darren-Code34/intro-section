const hamburger = document.querySelector('.hamburger-menu');
const cross = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', ()=>{
    menu.style.display = "block";
});

cross.addEventListener('click',()=>{
    menu.style.display = "none";
})

const features = document.querySelector('.features');
const featuresList = document.querySelector('.features-list');
const featuresArrowDown = document.querySelector('.features-icon-arrow-down');
const featuresArrowUp = document.querySelector('.features-icon-arrow-up');

featuresArrowDown.addEventListener('click', ()=>{
    featuresList.style.display = "block";
    featuresArrowDown.style.display = "none";
    featuresArrowUp.style.display = "block";
    featuresArrowUp.style.top = "-12px"
    featuresArrowUp.style.right = "-90px"
})

featuresArrowUp.addEventListener('click', ()=>{
    featuresList.style.display = "none";
    featuresArrowDown.style.display = "block";
    featuresArrowDown.style.top = "-12px";
    featuresArrowDown.style.right = "-90px";
    featuresArrowUp.style.display = "none";
})

const company = document.querySelector('.company');
const companyList = document.querySelector('.company-list');
const companyArrowDown = document.querySelector('.company-icon-arrow-down');
const companyArrowUp = document.querySelector('.company-icon-arrow-up');

companyArrowDown.addEventListener('click', ()=>{
    companyList.style.display = "block";
    companyArrowDown.style.display = "none";
    companyArrowUp.style.display = "block";
    companyArrowUp.style.top = "-12px"
    companyArrowUp.style.right = "-90px"
})

companyArrowUp.addEventListener('click', ()=>{
    companyList.style.display = "none";
    companyArrowDown.style.display = "block";
    companyArrowDown.style.top = "-12px";
    companyArrowDown.style.right = "-90px";
    companyArrowUp.style.display = "none";
})
