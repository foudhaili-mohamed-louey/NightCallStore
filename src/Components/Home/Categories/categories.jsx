import React, { useState, useEffect } from 'react';
import './categories.css';

const Categories = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/categoriesItem.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const info = await response.json();
        setData(info);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong, please try again later!</h1>;
  }

  return (
    <>
      <h1 className="category-title-style">Our Categories</h1>
      <div className="cards-container">
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <div className="card-categories-style">
                <img src={item.photo} alt={item.name} className="card-photo" />
                <h4 className="card-title">{item.name}</h4>
                <h6 className="card-prix">{item.prix}</h6>
                <p className="card-views">{item.views} views</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
