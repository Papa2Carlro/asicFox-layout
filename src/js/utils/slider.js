export default class Slider {
    constructor(slider) {
        this.$slider = slider

        this.slide = 1
        this.length = parseInt(this.$slider.dataset.length)

        this.imageW = 0
        this.textrW = 0

        // Component
        this.$text = this.$slider.querySelector('#slider_text')
        this.$dots = this.$slider.querySelector('#slider_dots')
        this.$image = this.$slider.querySelector('#slider_image')

        // Control
        this.$left = this.$slider.querySelector('#slider_left')
        this.$right = this.$slider.querySelector('#slider_right')
    }

    init() {
        this.mount()
        this.initStyles()
        this.initArr()
        this.initDots()
    }

    mount() {
        const style = `grid-template-columns: repeat(${this.length}, 100%); transform: translate`
        const textP = this.$text.querySelector('p')
        const $image = this.$slider.querySelector('#slider_image')

        const $text = this.$slider.querySelector('#slider_text')

        this.textrW = textP.offsetWidth
        this.imageW = this.$image.offsetWidth

        window.addEventListener("resize", function () {
            this.textrW = textP.offsetWidth
            this.imageW = $image.offsetWidth

            $text.setAttribute('style', `${style}(-${(this.slide - 1) * this.textrW}px, 0)`)
            $image.setAttribute('style', `${style}(-${(this.slide - 1) * this.imageW}px, 0)`)
        });
    }

    initArr() {
        this.$left.addEventListener('click', () => this.initSlide('left'))
        this.$right.addEventListener('click', () => this.initSlide('right'))
    }

    change() {
        this.controlArr()
        this.controlDots()
        this.textHandler()
        this.imageHandler()
    }

    textHandler() {
        const style = `grid-template-columns: repeat(${this.length}, 100%); transform: translate`
        this.$text.setAttribute('style', `${style}(-${(this.slide - 1) * this.textrW}px, 0)`)
    }

    imageHandler() {
        const style = `grid-template-columns: repeat(${this.length}, 100%); transform: translate`
        this.$image.setAttribute('style', `${style}(-${(this.slide - 1) * this.imageW}px, 0)`)
    }

    initSlide(direction) {
        switch (direction) {
            case 'left':
                if (this.slide !== 1) {
                    this.slide--
                    this.change()
                }
                break

            case 'right':
                if (this.slide !== this.length) {
                    this.slide++
                    this.change()
                }
                break
        }
    }

    initDots() {
        this.$dots.addEventListener('click', event => {
            const slide = event.target.closest('.dots')

            if (slide) {
                this.slide = parseInt(slide.id.split('N')[1])
                this.change()
            }
        })
    }

    controlDots() {
        for (let i = 1; i <= this.length; i++) {
            const dot = this.$dots.querySelector(`#slideN${i}`)

            if (i === this.slide) {
                dot.classList.add('active')
            } else {
                dot.classList.remove('active')
            }
        }
    }

    controlArr() {
        if (this.slide === 1) {
            this.$left.classList.add('disabled')
            this.$right.classList.remove('disabled')
        } else if (this.slide === this.length) {
            this.$right.classList.add('disabled')
            this.$left.classList.remove('disabled')
        } else {
            this.$left.classList.remove('disabled')
            this.$right.classList.remove('disabled')
        }
    }

    initStyles() {
        for (let i = 1; i <= this.length; i++) {
            this.$dots.insertAdjacentHTML('beforeend', `<div id="slideN${i}" class="dots${i === 1 ? ' active' : ''}"></div>`)
        }

        this.$text.setAttribute('style', `grid-template-columns: repeat(${this.length}, 100%)`)
        this.$image.setAttribute('style', `grid-template-columns: repeat(${this.length}, 100%)`)
    }
}