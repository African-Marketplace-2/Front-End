import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import CardItem from "./CardItem";
import EditCard from "./EditCard";
import { Route } from "react-router-dom";

const ItemList = () => {
  const [editItem, setEditItem] = useState(false);
  const [itemToEdit, setItemToEdit] = useState([]);
  const [items, setItems] = useState([]);

  const editItems = items => {
    setEditItem(true);
    setItemToEdit(items);
  };

  // const handleChange = event => {
  //   setItem({
  //     ...item,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const saveEdit = id => {
  //   axiosWithAuth()
  //     .put(`https://african-marketplace-1.herokuapp.com/api/items/${id}`, itemToEdit)
  //     .then(response => {
  //       console.log("saveEdit", response);
  //       setEditItem(false);
  //     })
  //     .catch(error => console.log("PUT failed", error));
  // };

  const getItem = () => {
    axiosWithAuth()
      .get('https://african-marketplace-1.herokuapp.com/api/items')
      .then(response => setItems(response.data))
      .catch(error => console.log("GET request Failed", error));
  }
    useEffect(() => { 
      getItem()
  }, []);

  const deleteItem = id => {
    console.log("delete", id);
    axiosWithAuth()
      .delete(`https://african-marketplace-1.herokuapp.com/api/items/${id}`)
      .then(response => {
        console.log(response)
        getItem()
      //   editItem (items.filter(item => item.id !== response.data));
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <p>African Item Market</p>
      <div>
        <Route to="/marketplace" />
        {items.map(item => (
          <CardItem 
            item={item}
            editItems={editItems}
            deleteItem={deleteItem}
            // saveEdit={saveEdit}
          />
        ))}
      </div>
      <Route to="/editcard" />
      <EditCard
        setItemToEdit={setItemToEdit}
        editItem={editItem}
        itemToEdit={itemToEdit}
        // saveEdit={saveEdit}
        setItems={setItems}
        deleteItem={deleteItem}
      />
      <div />
    </div>
  );
};

export default ItemList;
