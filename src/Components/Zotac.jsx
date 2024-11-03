import React from 'react'
import data from '../data';
import Itemcard from './Itemcard';
const Zotac = () => {
  return (
    <div className='mt-5 container spiderman'>
      {
        data.productData.map((item,index) => {
          if (item.id == 51) {
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

export default Zotac