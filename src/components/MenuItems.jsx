import React from 'react'

function MenuItems({menuItem}) {
    return (
     <>
     {
         menuItem.map((item)=>{
             return <div className="portfolios-one" key={item.id}>
                 <div className="image-data">
                     <img src={item.image} alt="no image"/>
                     <div className="pro-text">
                        {item.title}
                        
                    </div>
                 </div>

             </div>
         })
     }
     </>
    )
}

export default MenuItems;
