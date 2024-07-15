import React, { useEffect, useState } from "react";
import { TOP_RATED_URL } from "../utils/db";
import Card from "../components/Card";

const TopRatedPage = () => {
  const [data, setData] = useState([]);
  const [filterdata, setFilterData] = useState([]);
  const [serachQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAllData();
    document.title = "Top Rated";
  }, []);

  async function getAllData() {
    const fetchData = await fetch(TOP_RATED_URL);
    const res = await fetchData.json();
    console.log(res.results);
    setData(res.results);
    setFilterData(res.results);
  }

  

  return (
    <div className="container">
      <h1>Top Rated</h1>
      <div className="cards-container">
        {filterdata?.map((item) => 
          <Card {...item} key={item.id} />
        )}
      </div>
    </div>
  );
};

export default TopRatedPage;
