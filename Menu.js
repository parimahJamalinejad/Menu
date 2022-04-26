import React from 'react';

const Menu=({items}) =>{
  


  return (
     <div className='section-center'>
      
       {items.map(menuItem =>{
         const {id,title,img,price,category,desc}=menuItem
         return (
           <article className='menu-item' key={id}>
             <img src={img} alt={title}/>
         <div className='item-info'>
           <div className='tipr'>
         <h4 className='title'>{title}</h4>
         <h4 className='price'>${price}</h4>
         </div>
         <p className='desc'>{desc}</p>
         </div>
         
           </article>
         )
       })}
     </div>
  )
}
export default Menu;