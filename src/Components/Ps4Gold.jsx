import React from 'react'
import data from '../data';
import Itemcard from './Itemcard';
const Ps4Gold = () => {
  return (
    <div>
      <div className="container mt-5 spiderman">
        {
          data.productData.map((item,index) => {
            if (item.id == 63) {
              return (
                <Itemcard img={item.img}
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

export default Ps4Gold