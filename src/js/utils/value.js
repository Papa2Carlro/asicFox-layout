import axios from "axios"
import bit from '/assets/img/value/bitcoin.svg'
import ethereum from '/assets/img/value/ethereum.svg'
import zcash from '/assets/img/value/zcash.svg'
import litecoin from '/assets/img/value/litecoin.svg'
import monero from '/assets/img/value/monero.svg'
import fullcolor from '/assets/img/value/fullcolor.svg'
import eferiumClassic from '/assets/img/value/eferium-classic.svg'

export default class Value {
    constructor(value) {
        this.$value = value

        this.link = `${window.location.href}wp-content/themes/asicfox/assets/`
        // this.link = ''
        this.value = [
            {
                title: 'Bitcoin',
                price: '$36 522.00',
                status: 'up',
                difference: .37,
                logo: bit
            },
            {
                title: 'Ethereum',
                price: '$1 569.89',
                status: 'down',
                difference: .37,
                logo: ethereum
            },
            {
                title: 'Zcash',
                price: '$94.92',
                status: 'up',
                difference: .37,
                logo: zcash
            },
            {
                title: 'Litecoin',
                price: '$36 522.00',
                status: 'up',
                difference: .37,
                logo: litecoin
            },
            {
                title: 'Monero',
                price: '$1 569.89',
                status: 'down',
                difference: .37,
                logo: monero
            },
            {
                title: 'Dash',
                price: '$94.92',
                status: 'down',
                difference: .37,
                logo: fullcolor
            },
            {
                title: 'Ethereum Classic',
                price: '$94.92',
                status: 'up',
                difference: .37,
                logo: eferiumClassic
            }
        ]
    }

    mobile() {
        this.value.length = 3
        this.$value.textContent = ''

        this.value.map(content => {
            this.$value.insertAdjacentHTML('beforeend', `
                <div class="mobile__value-item">
                    <img src="${this.link + content.logo}" alt="" class="mobile__value-image">
                    
                    <div class="mobile__value-title">${content.title}</div>

                    <div class="mobile__value-price">${content.price}</div>
                </div>`)
        })
    }

    component() {
        const $container = this.$value.querySelector('.value__container')
        $container.innerHTML = ''

        this.value.map(content => {
            $container.insertAdjacentHTML('beforeend', `
                <div class="value__group">
                    <img src="${this.link + content.logo}" alt="" class="value__group-image">
        
                    <div class="value__group-info">
                        <div class="value__group-title">${content.title}</div>
                        
                        <div class="value__group-price">
                            <p>${content.price}</p>
                            <b class="${content.status}">
                                <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 8.5H2M2 8.5L9.33333 1M2 8.5L9.33333 16" stroke-width="2"/>
                                </svg>
                                ${content.difference}%
                            </b>
                        </div>
                    </div>
                </div>`)
        })
    }

    setData(i, data) {
        this.value[i].price = `$${data.current_price.toLocaleString('en-US', {style: 'decimal'})}`
        this.value[i].difference = data.price_change_percentage_24h > 0
            ? data.price_change_percentage_24h.toFixed(2)
            : data.price_change_percentage_24h.toFixed(2).substring(1)
        this.value[i].status = data.price_change_percentage_24h > 0 ? 'up' : 'down'
    }

    init(pos) {
        axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                this.setData(0, res.data[0])
                this.setData(1, res.data[1])
                this.setData(2, res.data[56])
                this.setData(3, res.data[7])
                this.setData(4, res.data[19])
                this.setData(5, res.data[41])
                this.setData(6, res.data[57])

                if (pos === 'component') {
                    this.component()
                } else if (pos === 'mobile') {
                    this.mobile()
                }
            })
    }
}