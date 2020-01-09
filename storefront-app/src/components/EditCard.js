import React from "react";

const EditCard = ({
  setItemToEdit,
  editItem,
  itemToEdit,
  saveEdit,
  item,
  deleteItem
}) => {
  return (
    <div>
      <form onSubmit={saveEdit} className="form">
        <legend>Edit an item</legend>
        <label>
          Item name:
          <input className="border"
            onChange={e =>
              setItemToEdit({ ...itemToEdit, item: e.target.value })
            }
            value={editItem.item}
          />
        </label> <label>
          Description:
          <input className="border"
            onChange={e =>
              setItemToEdit({ ...itemToEdit, item: e.target.value })
            }
            value={editItem.item}
          />
        </label>
        <label>
          Price:
          <input className="border"
            onChange={e =>
              setItemToEdit({ ...itemToEdit, item: e.target.value })
            }
            value={editItem.item}
          />
        </label>
        <label>
          Category:
          <input className="border"
            onChange={e =>
              setItemToEdit({ ...itemToEdit, item: e.target.value })
            }
            value={editItem.item}
          />
        </label>
        <label>
          Location:
          <input className="border"
            onChange={e =>
              setItemToEdit({ ...itemToEdit, item: e.target.value })
            }
            value={editItem.item}
          />
        </label>
        <label>
          Image URL:
          <input className="border"
            onChange={e =>
              setItemToEdit({ ...itemToEdit, item: e.target.value })
            }
            value={editItem.item}
          />
        </label>
        <div>
          <button className="add-btn" type="submit" onClick={() => saveEdit}>Submit</button>
          <button  className="del-btn" onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      </form>
    </div>
  );
};

export default EditCard;
