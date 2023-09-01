import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) 
{

  const [selectedCategory, setSelectedCategory] = useState("All")
  const filteredItems = items.filter(obj=>{
    if(selectedCategory==='All')
    {
      return true

    } 
    
    else 
    {
      return obj.category === selectedCategory
    }
  })

  function handleChange(event)
  {
    setSelectedCategory(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;