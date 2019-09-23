import React from 'react'
import slugify from 'slugify';
import Selections from './Selections.js'

export default class ItemSelecter extends React.Component{
    render(){
        //so i gotta map thru my features, and create an input/label pair for each feature
        const selections = this.props.features[this.props.feature].map(item =>{
            return (
                <Selections 
                    item={item}
                    index={this.props.index}
                    feature={this.props.feature}
                    featureHash={this.props.featureHash}
                    selected={this.props.selected}
                    updateFeature={this.props.updateFeature}
                    itemHash={slugify(JSON.stringify(item))}
                />)
        })

        return (
            <fieldset className="feature" key={this.props.featureHash}>
                <legend className="feature__name">
                    <h3>{this.props.feature}</h3>
                </legend>
                {selections}
            </fieldset>
        )
    }
}