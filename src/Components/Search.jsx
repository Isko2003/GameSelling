import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import data from "../data";
import Itemcard2 from "./Itemcard2";
import { useTranslation } from "react-i18next";

const Search = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const [searchTerm, setSearchTerm] = useState("");
  const [found, setFound] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const isFound = data.productData.some((item) =>
      item.title.toLowerCase().includes(value)
    );
    setFound(isFound);
  };

  return (
    <div className="main-wrapper">
      <div className="search container mt-5 spiderman">
        <div className="search-area d-flex justify-content-center">
          <input
            type="search"
            name="search"
            id="search"
            className="search"
            placeholder={t("searchGame")}
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="search-grid container mt-5 spiderman card-sell-wrapper search-grid-2">
        {found ? (
          data.productData.map((item, index) =>
            item.title.toLowerCase().includes(searchTerm) ? (
              <Itemcard2
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            ) : null
          )
        ) : (
          <div className="nothing-found">
            <div>
              <p className="text-center not-found">
                Nothing Found According to Your Search...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
