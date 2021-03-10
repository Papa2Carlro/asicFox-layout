export default class Product {
    constructor(product) {
        this.$product = product

        // Slider
        this.active = 1
        this.position = 0
        this.count = this.$product.querySelector('.product-home__image-thumb').dataset.count
        this.$list = this.$product.querySelector('.product-home__image-list')
        this.$image = this.$product.querySelector('.product-home__image-body')

        this.$thumbItems = this.$list.querySelectorAll('.product-home__image-item')

        this.$left = this.$product.querySelector('#left')
        this.$right = this.$product.querySelector('#right')

        // Adaptive
        this.adaptive = false
        this.height = 95
        this.gap = 16
    }

    init() {
        this.adaptiveHandler()
        this.styleInit()
        this.listHandler()
        this.sliderHandler()
    }

    adaptiveHandler() {
        const adaptive = () => {
            this.adaptive = document.body.offsetWidth <= 768
            this.height = this.adaptive ? 70 : 95
            this.gap = this.adaptive ? 10 : 16
        }
        adaptive()

        window.addEventListener('resize', () => {
            adaptive()

            this.$list.style.transform = this.position
                ? `translate(-${this.position * (this.height + this.gap)}px,0)`
                : 'translate(0,0)'
        })
    }

    sliderHandler() {
        this.$left.addEventListener('click', () => this.arrowHandler('<'))
        this.$right.addEventListener('click', () => this.arrowHandler('>'))
    }

    arrowHandler(direction) {
        switch (direction) {
            case '>':
                if (this.position < this.count - 3) {
                    this.position++

                    if (this.active < this.position + 1) this.changeImage(this.$thumbItems[this.active])
                    if (this.position) this.$list.style.transform = `translate(-${this.position * (this.height + this.gap)}px,0)`
                }
                break

            case '<':
                if (this.position > 0) {
                    this.position--

                    if (this.active > this.position + 3) this.changeImage(this.$thumbItems[this.active - 2])
                    this.$list.style.transform = this.position
                        ? `translate(-${this.position * (this.height + this.gap)}px,0)`
                        : 'translate(0,0)'
                }

                break
        }
    }

    listHandler() {
        this.$list.addEventListener('click', e => {
            const $imageBlock = e.target.closest('.product-home__image-item')

            if ($imageBlock && !$imageBlock.classList.contains('active')) this.changeImage($imageBlock)
        })
    }

    changeImage($image) {
        this.$thumbItems.forEach(thumb => thumb.classList.remove('active'))
        $image.classList.add('active')

        this.active = $image.dataset.pos

        const $img = this.$image.querySelector('img')
        const src = $image.querySelector('img').getAttribute('src')

        this.$image.classList.add('hide')

        setTimeout(() => {
            $img.setAttribute('src', src)
            this.$image.classList.remove('hide')
        }, 300)
    }

    styleInit() {
        const width = (this.count * this.height) + (this.count - 1) * this.gap
        this.$list.setAttribute('style', `width: ${width}px`)
    }
}
