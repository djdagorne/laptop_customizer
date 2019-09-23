import React from 'react'

import ItemList from './ItemList.js'
import CartTotal from './CartTotal.js'

export default class ShoppingCart extends React.Component{
    render(){

        const summary = Object.keys(this.props.selected).map((feature, index) => {
          return(<ItemList 
            selected={this.props.selected}
            features={this.props.features}
            feature={feature}
            featureHash={feature + '-' + index}
            selectedOption={this.props.selected[feature]}
          />

          )
        });

        return (
          <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <CartTotal selected={this.props.selected}/>
          </section>
        )
    }
}


// return (
//   <div className="summary__option" key={featureHash}>
//     <div className="summary__option__label">{feature} </div>
//     <div className="summary__option__value">{selectedOption.name}</div>
//     <div className="summary__option__cost">
//       {USCurrencyFormat.format(selectedOption.cost)}
//     </div>
//   </div>
// );