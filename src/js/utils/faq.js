export default class Faq {
    constructor(faq) {
        this.$faq = faq
    }

    init() {
        this.$faq.addEventListener('click', event => {
            const faqTitle = event.target.closest('.faq__question-title')
            const faq = faqTitle.parentElement

            if (faqTitle) {
                const body = faq.querySelector('.faq__question-body')
                const bodyH = body.querySelector('p').offsetHeight

                if (!faq.classList.contains('faq__question--open')) {
                    faq.classList.add('faq__question--open')
                    body.setAttribute('style', `height: ${bodyH}px`)
                } else {
                    faq.classList.remove('faq__question--open')
                    body.setAttribute('style', 'height: 0')
                }
            }
        })
    }
}