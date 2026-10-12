
import React, { useEffect, useState } from 'react';
import Loader from "../Components/Loader";
import Card from './Card';

const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data.products)
        setData(data.products);
      });
  }, []);

  if (data.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#141414]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#141414] p-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {
          data.map((item, index) => {
            return <Card key={index} info={item} />;
          })
        }
      </div>

    </div>
  );
};

export default Home;
