import Menu from "./menu"
import Theme from "./theme"
import Contact from "./contact"
import Value from "./value"
import Search from "./search"

export default class Header {
    constructor(el) {
        this.$el = el

        this.$search = this.$el.querySelector('#search')
        this.$value = this.$el.querySelector('#m_value')
        this.$value = document.body.querySelector('#m_value')
    }

    init() {
        new Menu(this.$el).init()
        new Theme(this.$el).init()
        new Contact(this.$el).init()
        new Search(this.$search).init()
        new Value(this.$value).init('mobile')
    }
}