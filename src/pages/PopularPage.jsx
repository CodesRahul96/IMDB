import React, { useEffect, useState } from "react";
import { POPULAR_MOVIES } from "../utils/db";
import Card from "../components/Card";


const PopularPage = () => {
  const [data, setData] = useState([]);
  const [filterdata, setFilterData] = useState([]);
  const [serachQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAllData();
    document.title = "Popular";
  }, []);

  async function getAllData() {
    const fetchData = await fetch(POPULAR_MOVIES);
    const res = await fetchData.json();
    console.log(res.results);
    setData(res.results);
    setFilterData(res.results);
  }

  return (
    <div className="container">
      <h1>Popular</h1>
      <div className="cards-container">
        {filterdata?.map((item) => 
          <Card {...item} key={item.id} />
        )}
      </div>
    </div>
  );
};

export default PopularPage;
