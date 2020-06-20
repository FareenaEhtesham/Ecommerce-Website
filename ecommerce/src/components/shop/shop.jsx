import React,{Component} from 'react'
import SHOP_DATA from './ShopDetails'
import PreviewCollections from '../Preview-Collections/previewCollection'


class Shop extends Component{
     
    constructor(){
    super();

    this.state={
        collections :SHOP_DATA
    }
    }

    render(){
        return(
            <div className="shop-page">

                {this.state.collections.map(({id, ...otherprops}) =>(
                   

                    <PreviewCollections key={id} {...otherprops} />
                    

                ))}
            
            </div>
        )
    }
}

export default Shop