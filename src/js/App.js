import Faq from "./utils/faq"
import Tabs from "./utils/tabs"
import Value from "./utils/value"
import Header from "./utils/header"
import Slider from "./utils/slider"
import Models from "./utils/models"
import Loader from "./utils/loader"
import Product from "./utils/product"
import Catalog from "./utils/catalog"

export default class App {
    constructor(el) {
        this.$el = document.body.querySelector(el)

        this.$faq = this.$el.querySelector('#faq')
        this.$tabs = this.$el.querySelector('#tabs')
        this.$value = this.$el.querySelector('#value')
        this.$slider = this.$el.querySelector('#slider')
        this.$models = this.$el.querySelector('#models')
        this.$product = this.$el.querySelector('#product')
        this.$catalog = this.$el.querySelector('#catalog')
    }

    init() {
        console.info('App start initialization')
        // Loader
        new Loader('#loader').init()
        // Header
        new Header(this.$el).init()
        // Pages
        if (this.$faq)      new Faq(this.$faq).init()
        if (this.$tabs)     new Tabs(this.$tabs).init()
        if (this.$slider)   new Slider(this.$slider).init()
        if (this.$models)   new Models(this.$models).init()
        if (this.$product)  new Product(this.$product).init()
        if (this.$catalog)  new Catalog(this.$catalog).init()
        if (this.$value)    new Value(this.$value).init('component')
        console.info('App end initialization')
    }
}