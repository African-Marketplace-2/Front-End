import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import CardItem from "./CardItem";
import EditCard from "./EditCard";
import { Route } from "react-router-dom";
import MarketPlace from "./MarketPlace";

const ItemList = props => {
  const [editItem, setEditItem] = useState(false);
  const [itemToEdit, setItemToEdit] = useState([]);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState();
  console.log(item);
  console.log(items);
  const editItems = items => {
    setEditItem(true);
    setItemToEdit(items);
  };

  useEffect(() => {
    getItem();
  }, []);
  useEffect(() => {
    setItem(items.filter(item => item.id != props.match.params.id));
  }, []);
  console.log(props.match.params.id);
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
      .get("https://african-marketplace-1.herokuapp.com/api/items")
      .then(response => setItems(response.data))
      .catch(error => console.log("GET request Failed", error));
  };
  useEffect(() => {
    getItem();
  }, []);

  const deleteItem = (id, e) => {
    console.log("delete", id);
    e.preventDefault();
    axiosWithAuth()
      .delete(`https://african-marketplace-1.herokuapp.com/api/items/${id}`)
      .then(response => {
        console.log(response);
        // getItem()
        //   editItem (items.filter(item => item.id !== response.data));
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <p>African Item Market</p>
      {/* <div>
        <Route
          to="/marketplace"
          render={props => (
            <MarketPlace
              {...props}
              items={items}
              editItems={editItems}
              deleteItem={deleteItem}
            />
          )}
        />
      </div> */}
      <Route to="/editcard" />
      <EditCard
        item={item}
        setItemToEdit={setItemToEdit}
        editItem={editItem}
        itemToEdit={itemToEdit}
        setItems={setItems}
        deleteItem={deleteItem}
      />
      <div />
    </div>
  );
};
export default ItemList;
