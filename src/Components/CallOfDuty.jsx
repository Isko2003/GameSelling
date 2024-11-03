import React from 'react'
import Itemcard from './Itemcard'
import data from '../data';
const CallOfDuty = () => {
  return (
    <div>
      <div className='call-of-duty mt-5'>
      {data.productData.map((item, index)=> {
          if (item.id == 1) {
            return (
              <Itemcard img={item.img}
                title = {item.title}
                desc = {item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            )
          } else {
            return [];
          }
        })
        }
      </div>
  </div>
  )
}

export default CallOfDuty