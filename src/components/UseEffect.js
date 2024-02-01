import React, { useState, useEffect } from "react";
import "./UseEffect.css";
const UseEffect = () => {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);
  document.title = `${state} people online`;
  useEffect(() => {
    async function getData() {
      const data = await fetch(
        `https://hub.dummyapis.com/products?noofRecords=${state}&idStarts=1001&currency=usd`
      );
      const res = await data.json();
      setData(res);
      console.log(res);
    }
    getData();
    console.log("this useEffect being called");
  }, [state]);
  return (
    <div>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        click me {state}
      </button>
      {data.map((e, index) => {
        return (
          <div className="useEffect" key="index">
            <h5>{e.id}</h5>
            <h5>{e.name}</h5>
            <h5>{e.price} </h5>
          </div>
        );
      })}
    </div>
  );
};

export default UseEffect;
