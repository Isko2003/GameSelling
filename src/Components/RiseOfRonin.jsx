import React from 'react'
import Itemcard from './Itemcard';
import data from '../data';
const RiseOfRonin = () => {
  return (
    <div>
      <div className="container rise-of-ronin mt-5">
        {
          data.productData.map((item,index) => {
            if (item.id == 13) {
              return (
                <Itemcard 
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
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

export default RiseOfRonin