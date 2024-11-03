import React from 'react'
import Itemcard from './Itemcard';
import data from '../data';
const Zotac3050 = () => {
  return (
    <div>
      <div className="container mt-5 spiderman">
        {
          data.productData.map((item,index) => {
            if (item.id == 61) {
              return (
                <Itemcard 
                  img={item.img}
                  title={item.title}
                  desc = {item.desc}
                  price={item.price}
                  item={item}
                  key={index}
              />
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default Zotac3050