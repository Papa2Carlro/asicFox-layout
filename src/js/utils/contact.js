export default class Contact {
    constructor(el) {
        this.$el = el

        this.state = false

        this.$btn = el.querySelector('#contact_btn')
        this.$panel = el.querySelector('.header__contact')
    }

    click() {
        this.state = !this.state

        if (this.state) {
            this.$panel.classList.add('animation')
            this.$panel.classList.remove('active')

            setTimeout(() => this.$panel.classList.remove('animation'), 300)
        } else {
            this.$panel.classList.add('animation')

            setTimeout(() => this.$panel.classList.add('active'), 120)
        }
    }

    init() {
        this.$btn.addEventListener('click', () => this.click())

        document.body.addEventListener('click', event => {
            if (!event.target.closest('#contact_btn') && !event.target.closest('.header__contact') && !this.state) this.click()
        })
    }
}