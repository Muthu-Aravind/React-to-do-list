import ItemsList from "./ItemsList";
const Content = ({ items, handleCheck, deleteItem }) => {
  return (
    <main>
      {items.length ? (
        <ItemsList
          items={items}
          handleCheck={handleCheck}
          deleteItem={deleteItem}
        />
      ) : (
        <p>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
