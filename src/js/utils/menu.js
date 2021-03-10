export default class Menu {
    constructor(el) {
        this.$el = el

        this.isOpened = false

        this.$body = document.body
        this.$btn = el.querySelector('#menu_btn')
        this.$menu = el.querySelector('.mobile')
        this.$header = el.querySelector('.header')
    }

    init() {
        this.fixed()
        this.mobile()
    }

    fixed() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                this.$header.classList.add('header--anim')
                document.body.classList.add('fixed__header')

                setTimeout(() => this.$header.classList.add('header--fixed'), 200)
            } else {
                document.body.classList.remove('fixed__header')
                this.$header.classList.remove('header--fixed')
                this.$header.classList.remove('header--anim')
            }
        })
    }

    action() {
        this.isOpened = !this.isOpened

        if (this.isOpened) {
            this.$btn.classList.add('open')
            this.$body.classList.add('fixed')
            this.$menu.classList.add('mobile--open')
        } else {
            this.$btn.classList.remove('open')
            this.$body.classList.remove('fixed')
            this.$menu.classList.remove('mobile--open')
        }
    }

    mobile() {
        this.$btn.addEventListener('click', () => this.action())

        document.body.addEventListener('click', event => {
            if (!event.target.closest('.mobile') && !event.target.closest('.header') && this.isOpened) this.action()
        })
    }
}