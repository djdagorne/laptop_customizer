import React from 'react'
import slugify from 'slugify';

export default class ItemSelecter extends React.Component{
    render(){
        //so i gotta map thru my features, and create an input/label pair for each feature
        const selections = this.props.features[this.props.feature].map(item =>{
            return (<Selections 
                features={this.props.features}
                selected={this.props.selected}
                updateFeature={e=>this.props.updateFeature(this.props.feature, item)}
                itemHash={slugify(JSON.stringify(item))} 
                //keep copying that commented code below into a new Component----
            />)
        })

        return (
            <div>0</div>
        )
    }
}

// const options = this.props.features[this.props.feature].map(item => {
//     const itemHash = slugify(JSON.stringify(item));
//     return (
//       <div key={this.props.itemHash} className="feature__item">
//         <input
//           type="radio"
//           id={itemHash}
//           className="feature__option"
//           name={slugify(this.props.feature)}
//           checked={item.name === this.state.selected[this.props.feature].name}
//           onChange={e => this.updateFeature(this.props.feature, item)}
//         />
//         <label htmlFor={itemHash} className="feature__label">
//           {item.name} ({USCurrencyFormat.format(item.cost)})
//         </label>
//       </div>
//     );
//   });
