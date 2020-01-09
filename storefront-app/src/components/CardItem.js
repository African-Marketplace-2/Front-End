import React from 'react';
import { Link} from 'react-router-dom'; 

const CardItem = ({item, deleteItem, saveEdit}) => {
console.log(item);

    return(
        <div>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <p>{item.location}</p>
            <div>
            <Link to="/editcard" onClick={() => saveEdit(item.id)}>Edit</Link>
          </div>
          <div>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
      </div>
        </div>
    )



}
export default CardItem;