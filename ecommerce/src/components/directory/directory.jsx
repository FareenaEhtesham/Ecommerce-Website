
import React,{Component} from 'react'
import './directory.scss'
import Menu from '../menu-items/menu'


class Directory extends Component{

    constructor(){
    super();

    this.state={

            items: [
              {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5
              }
            ]
    };
}

    render(){

        return(
          <div className="directory-menu">

            {this.state.items.map( a =>{

              return(
              <Menu  key={a.id} title={a.title} image={a.imageUrl} size={a.size}/>
              )

    })}


          </div>

        )
    }
}

export default Directory

