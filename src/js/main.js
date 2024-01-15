import { Modal } from './modal.js'
import { scrollTo } from './scrollTo.js'
import { Accordion } from './accordion.js'
import { Slider } from './slider.js'

const modal = new Modal()
const accordion = new Accordion({
    block: '.accordeon',
    items: '.element',
    itemText: '.element-content'
})
new Slider({
    sliderBlock: '.top-slider',
    slideClassName: '.item',
    autoSlides: true,
    speed: 3000,
    slidesToShow: 1
})

new Slider({
    sliderBlock: '.services-carousel',
    slideClassName: '.element',
    autoSlides: false,
    slidesToShow: 4,
    arrowsBlock: '.services-arrow',
    gap: 20
})

const handleLinkClick = (target) => {
    const sectionId = target.href.split('#')[1]

    if (sectionId === 'callback' || sectionId === 'feedback'|| sectionId === 'application') {
        modal.open()
        return
    }

    if (sectionId === 'services') {
        scrollTo(sectionId)
        return
    }

    if (sectionId === 'faq') {
        scrollTo(sectionId)
        return
    }

    if (sectionId === 'contacts') {
        scrollTo(sectionId)
    }
}

const checkPositionBtn = () => {
    const scrollToTopBtn = document.querySelector('.up');
    const sectionOffsetTop = document.getElementById('services').offsetTop

    scrollToTopBtn.style.display = window.scrollY > sectionOffsetTop ? 'block' : 'none'
}

document.addEventListener('click', (e) => {
    e.preventDefault()

    const { target } = e

    const link = target.closest('a')

    if (link) {
        handleLinkClick(link)
        return
    }

    if (target.closest('.up')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return
    }

    if (target.closest('.modal-overlay') || target.closest('.modal-close')) {
        modal.close()
        return
    }

    const accordionEl = target.closest('.accordeon .element');

    if (accordionEl) {
        accordion.activationElement(accordionEl)
    }
})

document.addEventListener('scroll', checkPositionBtn)

document.addEventListener('submit', (e) => {

})
