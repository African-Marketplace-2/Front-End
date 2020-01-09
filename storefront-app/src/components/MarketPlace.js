import React from "react";
import CardItem from "./CardItem";

const MarketPlace = props => {
  return (
    <>
      {props.items.map(item => (
        <CardItem item={item} editItems={props.editItems} deleteItem={props.deleteItem} />
      ))}
    </>
  );
};

export default MarketPlace;
