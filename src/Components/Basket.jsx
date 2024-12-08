import React, { useEffect } from "react";
import { useCart } from "react-use-cart";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
const Basket = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

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
    return <h1 className="text-center empty-message">{t("emptyCart")}...</h1>;
  }
  const console2 = () => {
    Swal.fire({
      title: t("nowSell"),
      text: t("productAddSell"),
      icon: "success",
    });
  };

  return (
    <>
      <section className="py-4 container basket-section mt-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <h5>
              {t("cart")} ({totalUniqueItems}) {t("totalItems")}: {totalItems}{" "}
            </h5>
            <table className="card-table m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="table-image">
                        <img src={item.img} alt="productImg" />
                      </td>
                      <td className="table-title">{item.title}</td>
                      <td>₹ {item.price}</td>
                      <td>
                        {t("quantity")}: ({item.quantity})
                      </td>
                      <td className="update-row">
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
                          {t("removeItem")}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-lg-auto d-flex align-items-center total-price">
            <h2>
              {t("totalPrice")}: ₹ {cartTotal}
            </h2>
          </div>
          <div className="col-auto d-flex align-items-center">
            <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
              {t("clearCart")}
            </button>
          </div>
          <div className="col-auto d-flex align-items-center">
            <button className="btn btn-info m-2" onClick={() => console2()}>
              {t("sellNow")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Basket;
