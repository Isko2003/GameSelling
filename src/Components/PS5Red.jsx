import React from 'react';
import Itemcard from './Itemcard';
import data from '../data';

const PS5Red = () => {
  return (
    <div>
      <div className="container ps-5 mt-5">
        {
          data.productData.map((item,index) => {
            if (item.id == 35) {
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

export default PS5Red