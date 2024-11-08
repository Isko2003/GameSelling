import React from "react";
import { useCart } from "react-use-cart";
import Swal from "sweetalert2";
const Basket = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) {
    return <h1 className="text-center empty-message">Your Cart is Empty...</h1>;
  }
  const console2 = () => {
    Swal.fire({
      title: "Now You Can Sell Your Product",
      text: "Product Added to Sell Cart!",
      icon: "success",
    });
  };

  return (
    <>
      <section className="py-4 container basket-section mt-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <h5>
              Cart ({totalUniqueItems}) Total Items: {totalItems}{" "}
            </h5>
            <table className="card-table m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="table-image">
                        <img src={item.img} alt="productImg"/>
                      </td>
                      <td className="table-title">{item.title}</td>
                      <td>₹ {item.price}</td>
                      <td>Quantity: ({item.quantity})</td>
                      <td>
                        <button
                          className="btn ms-2 update-button"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <button
                          className="btn ms-2 update-button"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button
                          className="btn btn-danger ms-2 remove-item"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-lg-auto d-flex align-items-center total-price">
            <h2>Total Price: ₹ {cartTotal}</h2>
          </div>
          <div className="col-auto d-flex align-items-center">
            <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
              Clear Cart
            </button>
          </div>
          <div className="col-auto d-flex align-items-center">
            <button className="btn btn-info m-2" onClick={() => console2()}>
              Sell Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Basket;
