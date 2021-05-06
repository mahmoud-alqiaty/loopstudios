var nav = document.querySelector('.nav')
var menu_list = document.querySelector('.nav .menu-list')
var menu_icon = document.querySelector('.menu-icon')
var menu_icon_img = document.querySelector('.menu-icon img')

var creations_imgs = document.querySelectorAll('.creations-section .img-box img')
// console.log(creations_imgs[0].src.replace("desktop", "mobile"))


menu_icon.addEventListener('click', function(){
    nav.classList.toggle('active')
    menu_list.classList.toggle('active')

    if(nav.classList.contains('active')){
        menu_icon_img.src = './images/icon-close.svg'
    }
    else{
        menu_icon_img.src = './images/icon-hamburger.svg'
    }
})

var desktopSrc = []
var mobileSrc = []
for(let i=0; i < creations_imgs.length; i++){
    desktopSrc[i] = creations_imgs[i].src
    mobileSrc[i] = desktopSrc[i].replace("desktop", "mobile")
}

const fitImgsWithWith = () => {
    if(window.innerWidth <= 450){
        for(let i=0; i < creations_imgs.length; i++){
            creations_imgs[i].src = mobileSrc[i]
        }
    }
    else{
        for(let i=0; i < creations_imgs.length; i++){
            creations_imgs[i].src =  desktopSrc[i]
        }
    }
}
fitImgsWithWith();

window.addEventListener('resize', fitImgsWithWith)


