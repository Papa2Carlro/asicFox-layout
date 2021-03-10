export default class Search {
    constructor(search) {
        this.$search = search

        this.$body = this.$search.querySelector('.header__search')
    }

    init() {
        this.$search.addEventListener('click', () => this.$body.classList.add('header__search--active'))

        document.body.addEventListener('click', event => {
            if (!event.target.closest('#search')) this.$body.classList.remove('header__search--active')
        })
    }
}