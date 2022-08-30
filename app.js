console.table(products)

class App extends React.Component {

    constructor (props) {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = {
        products: products ,
        // value: ''
        item: '' ,
        brand: '' ,
        units: '' ,
        quantity: '' ,
        isPurchased: false
    }
    
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newItem = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity
        }
        this.setState({
            products: [newItem, ...this.state.products],
            item: '' ,
            brand: '' ,
            units: '' ,
            quantity: ''
        })
    }
    render () {
        return (
            <div>
                <h1> Grocery Shopping List!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='item'>Item</label>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/> <br />
                    <label htmlFor='brand'>Brand</label>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/> <br />
                    <label htmlFor='units'>Units</label>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/> <br />
                    <label htmlFor='quantity'>Quantity</label>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/> <br />
                    <input className='button' type='submit' />
                </form>
                <ul>
                    <h3> Staples: </h3>
                    {this.state.products.map(item => {
                    return (
                        <li>{item.item} <br /> Brand: {item.brand} Units: {item.units} Quantity: {item.quantity} </li> )}
                    )
                }
                </ul>
            </div>
        )
    }
}


ReactDOM.render(
    <App /> ,
    document.querySelector('.container')
)