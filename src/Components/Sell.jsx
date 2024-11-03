import React from 'react'
import data from '../data';
import Itemcard2 from './Itemcard2';
const Sell = () => {
  return (
    <div>
      <div className="container mt-5 spiderman card-sell-wrapper">
        {
          data.productData.map((item,index) => {
            return (
              <Itemcard2 img={item.img}
                  title={item.title}
                  desc={item.desc}
                  price={item.price}
                  item={item}
                  key={index}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Sell