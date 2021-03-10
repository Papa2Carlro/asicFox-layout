export default class Theme {
    constructor(el) {
        this.$el = el

        this.$dark = el.querySelector('#theme_dark')
        this.$white = el.querySelector('#theme_white')

        this.$mdark = el.querySelector('#m_theme_dark')
        this.$mwhite = el.querySelector('#m_theme_white')
    }

    change(theme) {
        switch (theme) {
            case 'dark':
                localStorage.setItem('theme', 'dark')

                this.$el.classList.add('dark')
                this.$el.classList.remove('white')

                this.$dark.classList.add('active')
                this.$white.classList.remove('active')

                this.$mdark.classList.add('active')
                this.$mwhite.classList.remove('active')
                break

            case 'white':
                localStorage.setItem('theme', 'white')

                this.$el.classList.add('white')
                this.$el.classList.remove('dark')

                this.$white.classList.add('active')
                this.$dark.classList.remove('active')

                this.$mwhite.classList.add('active')
                this.$mdark.classList.remove('active')
                break
        }
    }

    init() {
        if (localStorage.getItem('theme') === 'white') this.change('white')

        this.$dark.addEventListener('click', () => this.change('dark'))
        this.$white.addEventListener('click', () => this.change('white'))

        this.$mdark.addEventListener('click', () => this.change('dark'))
        this.$mwhite.addEventListener('click', () => this.change('white'))
    }
}