import React from 'react'
import slugify from 'slugify';
import ItemSelecter from '../ItemSelecter/ItemSelecter.js'

export default class ItemList extends React.Component{
    render(){
        const itemList = Object.keys(this.props.features).map((feature, idx) => {
            return (
                <ItemSelecter 
                    key={idx}
                    feature={feature}
                    idx={idx}
                    featureHash={feature+'-'+idx}
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