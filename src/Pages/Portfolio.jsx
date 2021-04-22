import React, { useState } from 'react'
import Categories from '../components/Categories'
import MenuItems from '../components/MenuItems'
import portfolios from "../components/Portfolio-all"

const allCategories = ["All",...new Set(portfolios.map(item=>item.category))];

function Portfolio() {
    const[categories,setCategories]=useState(allCategories);
    const[menuItems,setMenuItems]=useState(portfolios);
    const filter= (category)=>{
        if (category==="All"){
            setMenuItems(portfolios)
            return;
        }
        const filteredData = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        
       <>
       <div className="portfolio-full">
           <div className="portfolio-head">
               <h1>Portfolio</h1>
               <p>What I have Done</p>
           </div>
           <div className="port-menu">
               <div className="port-two">
                    <Categories filter={filter} categories={categories}/>
               </div>
               <div data-aos="fade" data-aos-delay="100"  className="port-main">
               <MenuItems menuItem={menuItems}/>
               </div>
               
              
               
           </div>
       </div>
       </>
    )
}

export default Portfolio
