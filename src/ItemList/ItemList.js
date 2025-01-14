import React from 'react'

import ItemSelecter from './ItemSelecter.js'

export default class ItemList extends React.Component{
    render(){
        const itemList = Object.keys(this.props.features).map((feature, index) => {
            return (
                <ItemSelecter 
                    key={index}
                    feature={feature}
                    index={index}
                    featureHash={feature+'-'+index}

                    features={this.props.features}
                    selected={this.props.selected}

                    updateFeature={this.props.updateFeature}
                />
            )
        })

        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {itemList}
            </form>
        )
    }
}