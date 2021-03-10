export default class Tabs {
    constructor(tabs) {
        this.$tabs = tabs

        this.tab = this.$tabs.querySelectorAll('[data-tabs]')
        this.contant = this.$tabs.querySelectorAll('[data-content]')
    }

    init() {
        this.$tabs.addEventListener('click', e => {
            const target = e.target.closest('.product-tabs__header-item')

            if (target) {
                const index = target.dataset.tabs

                this.tab.forEach(el => el.classList.remove('active'))
                this.contant.forEach(el => el.classList.remove('visible'))

                this.tab[index].classList.add('active')
                this.contant[index].classList.add('visible')
            }
        })
    }
}