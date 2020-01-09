import React, {useState} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';

const EditCard = ({
  setItemToEdit,
  editItem,
  itemToEdit,
  item,
  deleteItem
}) => {
  const [items, setItem] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    location: "",
    itemImg: "",
    user_id: `${localStorage.getItem('id')}`
  });
  const putEdit = id => {
    axiosWithAuth()
      .put(`https://african-marketplace-1.herokuapp.com/api/items/${id}`, items)
      .then(response => {
        console.log("putEdit ", response);
        // setEditItem(false);
      })
      .catch(error => console.log("PUT failed", error));
  };

  return (
    <div>
      <form onSubmit={putEdit} className="form">
        <legend>Edit an item</legend>
        <label>
          Item name:
          <input className="border"
            onChange={e => 
              setItem({ ...items, name: e.target.value })
            }
            value={items.name}
          />
        </label> <label>
          Description:
          <input className="border"
            onChange={e =>
              setItem({ ...items, description: e.target.value })
            }
            value={items.description}
          />
        </label>
        <label>
          Price:
          <input className="border"
            onChange={e =>
              setItem({ ...items, price: e.target.value })
            }
            value={items.price}
          />
        </label>
        <label>
          Category:
          <input className="border"
            onChange={e =>
              setItem({ ...items, category: e.target.value })
            }
            value={items.category}
          />
        </label>
        <label>
          Location:
          <input className="border"
            onChange={e =>
              setItem({ ...items, location: e.target.value })
            }
            value={items.location}
          />
        </label>
        <label>
          Image URL:
          <input className="border"
            onChange={e =>
              setItem({ ...items, itemImg: e.target.value })
            }
            value={items.itemImg}
          />
        </label>
        <div>
          <button className="add-btn" type="submit" onClick={() => putEdit}>Submit</button>
          <button  className="del-btn" onClick={(e) => deleteItem(item.id, e)}>Delete</button>
        </div>
      </form>
    </div>
  );
};

export default EditCard;
