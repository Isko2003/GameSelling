import React from 'react'
import Itemcard from './Itemcard';
import data from '../data';
const Vr2 = () => {
  return (
    <div>
      <div className="container mt-5 spiderman">
        {
          data.productData.map((item,index) => {
            if (item.id == 37) {
              return (
                <Itemcard img={item.img}
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

export default Vr2