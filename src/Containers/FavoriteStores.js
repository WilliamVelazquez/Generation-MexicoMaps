import React, { Component } from 'react';
import Store from '../Components/Store';

class FavoriteStores extends Component {

  //With the centerMap function we find a location in the map
  findPlace(location){
    //console.log('->',location);
    this.props.centerMap(this.props.map,location);
  }

  render(){
    const list = this.props.storesList;
    //console.log(list);
    const tableStyle={      
      margin: '0 auto'
    }
    return(
      <div>
        <div className="InfoText" style={{marginTop:35}}>
          <h2>Favorite Stores</h2>
        </div>
        <div>
          <table style={tableStyle}>
            <tbody>
        {
          list.map((item)=>{
            return <Store {...item} key={item.id} handleClick={()=>this.findPlace(item.location)} handleRemove={()=>this.props.removeFavorite(item.id)}/>
          })
        }
            </tbody>
          </table>
        </div>

      </div>
    )
  }
}

export default FavoriteStores;
