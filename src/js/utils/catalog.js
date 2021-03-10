export default class Catalog {
    constructor(catalog) {
        this.$catalog = catalog

        this.$close = this.$catalog.querySelector('.catalog__body-close')
        this.$btn = this.$catalog.querySelector('.catalog__header-filter')
        this.$sidebar = this.$catalog.querySelector('.catalog__body-sidebar')
    }

    init() {
        this.$btn.addEventListener('click', () => {
            this.$sidebar.classList.add('open')
            document.body.classList.add('fixed')
        })

        this.$close.addEventListener('click', () => {
            this.$sidebar.classList.remove('open')
            document.body.classList.remove('fixed')
        })
    }
}