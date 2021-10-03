//mobile menu//
const bodyActiveMenu = document.body
const mobileMenu = document.querySelector('.header-mobile__menu')
const openButtonMenu = document.querySelector('.header-mobile__menu--open')
const closeButtonMenu = document.querySelector('.header-mobile__menu--close')

openButtonMenu.addEventListener('click', openMobileMenu, false)
closeButtonMenu.addEventListener('click', closeMobileMenu, false)

function openMobileMenu() {
    mobileMenu.classList.add('__active')
    bodyActiveMenu.classList.add('__active-menu')
}

function closeMobileMenu() {
    mobileMenu.classList.remove('__active')
    bodyActiveMenu.classList.remove('__active-menu')
}
//mobile menu//

//show more text//
const showMoreButton = document.querySelectorAll('.show-more__text')
const hideShowMore = document.querySelectorAll('.hide-more__text')

showMoreButton.forEach((buttonsShow) => {
    buttonsShow.addEventListener('click', showMore, false)
})

hideShowMore.forEach((buttonsHide) => {
    buttonsHide.addEventListener('click', hideMore, false)
})


function showMore(e) {
    const target = e.target;
    const parentWrap = target.parentNode.parentNode;
    const parentWrapChildren = parentWrap.children[1]

    target.classList.add('hide__btn')

    if(target) {
        parentWrapChildren.classList.add('show-more__active')
        parentWrapChildren.children[0].classList.remove('active-hide')
    }
}


function hideMore(e) {
    const targetClose = e.target
    const targetParent = targetClose.parentNode.parentNode
    const targetParentChildren = targetParent.children[0].children[0]
    console.log(targetParentChildren)

    targetClose.classList.add('active-hide')
    targetClose.parentNode.classList.remove('show-more__active')

    let receiveButton = targetParent.childNodes[1].childNodes[3]
    receiveButton.classList.remove('hide__btn')
}

//show-more text//
// window.onload = function () {
//     hideTextMobile()
// }
// window.addEventListener('resize', hideTextMobile, false)
//
// function hideTextMobile() {
//     const width = innerWidth
//
//     if(width > 450) {
//
//     }
// }

//footer-menu//
const openFooterMenu = document.querySelectorAll('.footer-nav__heading')
openFooterMenu.forEach((footerOpenBtn) => {
    footerOpenBtn.addEventListener('click', openFooterMobileMenu, false)
})

function openFooterMobileMenu(e) {
    let targetBtn = e.target
    let listWrap = targetBtn.parentNode.children[1]

    if(targetBtn) {
        targetBtn.classList.toggle('rotate')
        listWrap.classList.toggle('active-list')
    }
}
//footer-menu//

