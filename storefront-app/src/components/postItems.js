import React, { useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';

const PostItems = props => {
  const { addItem } = props;
  const [item, setItem] = useState({});

  const handleChange = event => {
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    });
  };

  console.log("item", item)


  function submitForm(event){
    event.preventDefault();
    const newItem = {
      name: item.name,
      description: item.description,
      price: item.price,
      category: item.category,
      location: item.location,
      itemImg: item.itemImg, 
      user_id: `${localStorage.getItem('id')}`
    }
    axiosWithAuth()
      .post('/items', newItem)
      .then(response => {
        console.log("response", response)
        props.history.push(`/MarketPlace/${response.data.id}`)
      })
      .catch(err => console.log(err))
  }

   

  return (
    <div>
      <h1>Welcome to the African Market App!</h1>
      <form onSubmit={submitForm}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={item.name}
          onChange={handleChange}
        />
        <label>Descripition</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={item.description}
          onChange={handleChange}
        />
        <label>Price</label>
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={item.price}
          onChange={handleChange}
        />
        <label>Category</label>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={item.category}
          onChange={handleChange}
        />
        <label>Location</label>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={item.location}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PostItems;