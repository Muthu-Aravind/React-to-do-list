import React from "react";
import { IoTrashOutline } from "react-icons/io5";

const LineItem = ({ item, handleCheck, deleteItem }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <IoTrashOutline
        role="button"
        tabIndex="0"
        onClick={() => deleteItem(item.id)}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;
