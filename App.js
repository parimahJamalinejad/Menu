import React ,{useState} from 'react';
import Categories from './Categories';
import items from './data';
import Menu from './Menu';

const allCategories=['All' , ...new Set(items.map((item =>item.category)))]
const App = () =>{
const [menuItems , setMenuItems] = useState (items);
const [categories]= useState (allCategories);

const filterItems= (category) =>{
  if( category ==='All'){
    setMenuItems(items);
    return
  }
  const newItems=items.filter((item =>item.category===category))
  setMenuItems(newItems)
}


  return (
    <main className='menu-section'>
      <h1 className='head'>Our Menu</h1>
      <div className='under'></div>
      <div className='cat'>
      <Categories categories={categories} filterItems={filterItems}/>
      </div> 
      <div className='items'>
      <Menu items={menuItems}/>
      </div>
    </main>
  )
}

export default App;
