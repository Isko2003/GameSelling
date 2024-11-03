import React from 'react'
import Itemcard from './Itemcard';
import data from '../data';
const Cyberpunk = () => {
  return (
    <div className='container cyberpunk mt-5'>
      {
        data.productData.map((item,index) => {
          if (item.id == 12) {
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
  )
}

export default Cyberpunk