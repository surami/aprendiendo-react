import React, {Component} from 'react'

class FetchExample extends Component {
    state = { bpi: {} }

    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res=> res.json())
            .then(data => {
                const { bpi } = data;
                this.setState({ bpi });
            })
    }

    _renderCurrencies () {
        const bpi = this.state.bpi;
        console.log(bpi);
        const currencies = Object.keys(bpi) // ['EUR', 'GBP', 'USD']
        return currencies.map(currency => (
            <div key={currency}>
                <span>1 BTC is {bpi[currency].rate} </span>
                <span>{currency} </span>
                <span dangerouslySetInnerHTML={{__html: bpi[currency].symbol}}></span>
            </div>
        ))
    }

    render () {
        console.log('actualizaRender')
        return(
            <div>
                <h4>BitCoin price Index</h4>
                {this._renderCurrencies()}
            </div>
        )
    }
}

export default FetchExample;