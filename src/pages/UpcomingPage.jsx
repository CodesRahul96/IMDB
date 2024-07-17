import React, { useEffect, useState } from "react";
import { UPCOMING_MOVIES } from "../utils/db";
import Card from "../components/Card";

const UpcomingPage = () => {
  const [data, setData] = useState([]);
  const [filterdata, setFilterData] = useState([]);
  const [serachQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAllData();
    document.title = "IMDB | Upcoming";
  }, []);

  async function getAllData() {
    const fetchData = await fetch(UPCOMING_MOVIES);
    const res = await fetchData.json();
    console.log(res.results);
    setData(res.results);
    setFilterData(res.results);
  }

  return (
    <div className="container">
      <h2>Upcoming</h2>
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

export default UpcomingPage;
