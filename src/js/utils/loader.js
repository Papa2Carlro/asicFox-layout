export default class Loader {
    constructor(loader) {
        this.$body = document.body
        this.$loader = this.$body.querySelector(loader)
    }

    init() {
        window.addEventListener('load', () => {
            this.$body.classList.remove('fixed')
            this.$loader.classList.add('hidden')
        })
    }
}