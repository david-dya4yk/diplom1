export class Slider {
    constructor(params) {
        this.sliderBlock = document.querySelector(params.sliderBlock);

        this.sliderBlock.style.transition = 'transform 1s'
        this.sliderBlock.style.width = '100%'

        this.slides = this.sliderBlock.querySelectorAll(params.slideClassName)

        if(this.slides.length === 0) {
            throw new Error("slides not found");
        }
        this.autoSlides = params.autoSlides
        this.currentPosition = 0
        this.speed = params.speed

        this.arrowsBlock = document.querySelector(params.arrowsBlock)
        this.slidesToShow = params.slidesToShow

        this.gap = params.gap

        const visibleGapsWidth = this.gap * (this.slidesToShow - 1)

        this.slideWidth = (this.sliderBlock.clientWidth - visibleGapsWidth) / this.slidesToShow
        this.maxLengthSlideScroll = (this.slideWidth + this.gap) * (this.slides.length - this.slidesToShow)

        this.start()
    }

    

    getSlidesWidth() {
        this.slides.forEach((slide, index) => {
            slide.style.width = this.slideWidth + 'px'

            if (index !== this.slides.length - 1) {
                slide.style.marginRight = this.gap + 'px'
            }
        })
    }

    scrollRight() {
        if (!(this.maxLengthSlideScroll > Math.abs(this.currentPosition))) return

        this.currentPosition = this.currentPosition - this.slideWidth - this.gap
        this.sliderBlock.style.transform = `translateX(${this.currentPosition}px)`
    }

    scrollLeft() {
        if (this.currentPosition >= 0) return

        this.currentPosition = this.currentPosition + this.slideWidth + this.gap
        this.sliderBlock.style.transform = `translateX(${this.currentPosition}px)`
    }

    start() {
        if (this.autoSlides) {
            this.scrollSlides()
            return
        }

        this.getSlidesWidth()

        this.arrowsBlock.addEventListener('click', (e) => {
            if (e.target.closest('.arrow-right')) {
                this.scrollRight()
                return
            }

            if (e.target.closest('.arrow-left')) {
                this.scrollLeft()
            }
        })
    }

    deactivateSlides() {
        this.slides.forEach((slide) => {
            slide.style.opacity = 0
            slide.style.transition = 'opacity 1s'
        })
    }

    activateSlide() {
        this.slides[this.currentPosition].style.opacity = 1;
    }

    scrollSlides() {
        // TODO clear the interval
        const interval = setInterval(() => {
            this.deactivateSlides()
            this.activateSlide()

            this.currentPosition++

            if (this.currentPosition === this.slides.length) return this.currentPosition = 0
        }, this.speed || 1000)
    }

}

