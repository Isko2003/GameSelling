import React from 'react'
import data from '../data';
import Itemcard from './Itemcard';
const Ps5Slim = () => {
  return (
    <div>
      <div className="container spiderman mt-5">
        {
          data.productData.map((item,index) => {
            if (item.id == 24) {
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

export default Ps5Slim