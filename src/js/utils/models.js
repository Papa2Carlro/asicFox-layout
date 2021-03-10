export default class Models {
    constructor(models) {
        this.$models = models

        this.$tabs = this.$models.querySelector('.products__panel-tabs')
        this.list = ['$bit', '$zec', '$miner']

        // Tabs
        this.$bit = this.$tabs.querySelector('[data-tabs="Bitcoin"]')
        this.$zec = this.$tabs.querySelector('[data-tabs="Zec"]')
        this.$miner = this.$tabs.querySelector('[data-tabs="Miner pack"]')

        // List
        this.$bitList = this.$models.querySelector('[data-body="Bitcoin"]')
        this.$zecList = this.$models.querySelector('[data-body="Zec"]')
        this.$minerList = this.$models.querySelector('[data-body="Miner pack"]')
    }

    init() {
        this.list.map(block => {
            this[`${block}`].addEventListener('click', () => {
                this.list.map(el => this[`${el}`].classList.remove('active'))
                this.list.map(el => this[`${el}List`].classList.remove('visible'))

                this[`${block}`].classList.add('active')
                this[`${block}List`].classList.add('visible')
            })
        })
    }
}