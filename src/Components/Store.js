import React from 'react';
import SimpleButton from '../Components/SimpleButton';
import './Store.css';

function Store (props){
  const {id, name, handleClick,handleRemove} = props;
  return(
    <tr>
      <td className="StoreName">{name}</td>
      <td className="StoreBtn">{<SimpleButton btnText='Find Me!' handleClick={handleClick} />}</td>
      <td className="StoreBtn">{<SimpleButton btnText='Remove' handleClick={handleRemove} />}</td>
    </tr>
  );
}

export default Store;
