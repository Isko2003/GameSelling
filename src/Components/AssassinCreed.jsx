import React from 'react'
import Itemcard from './Itemcard';
import data from '../data';
const AssassinCreed = () => {
  return (
    <div>
      <div className="container assassin-creed mt-5">
        {
          data.productData.map((item,index) => {
            if (item.id == 14) {
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

export default AssassinCreed