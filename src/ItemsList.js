import React from "react";

import LineItem from "./LineItem";

const ItemsList = ({ items, handleCheck, deleteItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          item={item}
          key={item.id}
          handleCheck={handleCheck}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
