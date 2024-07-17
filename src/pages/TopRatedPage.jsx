import React, { useEffect, useState } from "react";
import { TOP_RATED_URL } from "../utils/db";
import Card from "../components/Card";

const TopRatedPage = () => {
  const [data, setData] = useState([]);
  const [filterdata, setFilterData] = useState([]);
  const [serachQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAllData();
    document.title = "IMDB | Top Rated";
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
      <h2>Top Rated</h2>
      <main>
        <div className="cards">
          {filterdata?.map((item) => (
            <Card {...item} key={item.id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default TopRatedPage;
