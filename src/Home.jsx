import React, { useEffect, useState } from "react";
import "./index.css"; // Import your styles

function Home() {
  const url = "https://stafi-86f4.restdb.io/rest/forms";
  const headers = {
    "Content-Type": "application/json",
    "x-apikey": "6648786e4a707d5838fd44d8",
  };
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET", // or 'POST', 'PUT', 'DELETE', etc.
          headers: headers,
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div class="h-56 grid grid-cols-3 gap-4 content-start ...">
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
      <div>05</div>
    </div>
  );
}
export default Home;
