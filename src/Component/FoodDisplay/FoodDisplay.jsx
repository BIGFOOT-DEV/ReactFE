import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const npage = Math.ceil(food_list.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const records = food_list.slice(firstIndex, lastIndex);
  return (
    <>
      <div className="food-display" id="food-display">
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
          {records.map((item, index) => {
            if (category === "ALL" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                />
              );
            }
          })}
        </div>
      </div>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" onClick={prePage}>
              Prev
            </a>
          </li>
          {numbers.map((item, index) => (
            <li
              className={`page-link ${currentPage === item ? "active" : ""}`}
              key={index}
            >
              <a className="page-link" onClick={() => changeCPage(item)}>
                {item}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default FoodDisplay;
