import React from "react";

const EditCard = ({
  setItemToEdit,
  editItem,
  itemToEdit,
  saveEdit,
  setItems
}) => {
  return (
    <div>
      <form onSubmit={saveEdit}>
        <legend>edit an item</legend>
        <label>
          item name:
          <input
            onChange={e =>
              setItemToEdit({ ...itemToEdit, item: e.target.value })
            }
            value={itemToEdit.item}
          />
        </label> <label>
          Description:
          <input
            onChange={e =>
              setItemToEdit({ ...itemToEdit, item: e.target.value })
            }
            value={editItem.item}
          />
        </label>
        <label>
          Price:
          <input
            onChange={e =>
              setItemToEdit({ ...itemToEdit, item: e.target.value })
            }
            value={editItem.item}
          />
        </label>
        <label>
          Category:
          <input
            onChange={e =>
              setItemToEdit({ ...itemToEdit, item: e.target.value })
            }
            value={editItem.item}
          />
        </label>
        <label>
          Location:
          <input
            onChange={e =>
              setItemToEdit({ ...itemToEdit, item: e.target.value })
            }
            value={editItem.item}
          />
        </label>
        <label>
          Image URL:
          <input
            onChange={e =>
              setItemToEdit({ ...itemToEdit, item: e.target.value })
            }
            value={editItem.item}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
          <button onClick={() => setItems(false)}>Delete</button>
        </div>
      </form>
    </div>
  );
};

export default EditCard;
