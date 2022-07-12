import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Banner from "../sections/home/banner";
import Cards from "../sections/home/cards";
import api from "../services/api";

const Home: React.FC = () => {
  const [data, setData] = useState<any>([]);

  const getData = async () => {
    const response = await api.get("summary");
    const parseContries = [];
    for (let index = 0; index < 5; index++) {
      const number = Math.floor(Math.random() * response.data.Countries.length);
      parseContries.push(response.data.Countries[number]);
    }
    setData(parseContries);
  };

  useEffect(() => {
    setInterval(() => {
      getData();
    }, 5000);
  }, []);
  return (
    <>
      <Header />
      <Banner />
      {data?.map((item: any) => (
        <Cards key={item.id} {...item} />
      ))}
    </>
  );
};

export default Home;
