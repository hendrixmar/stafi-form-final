import SurveyComponent from "./SurveyComponent";
import {useParams, useSearchParams} from "react-router-dom";
import React, {useEffect, useState} from "react";

function About() {

  const { userId } = useParams();
  const [searchParams] = useSearchParams();

  const [data, setData] = useState(null);
  const [header, setHeaders] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the async function to fetch data
    const fetchData = async () => {
      try {
        if (userId) {
          console.log(userId)
          const url = `https://stafi-86f4.restdb.io/rest/forms/${userId}`;
          const headers = {
            "Content-Type": "application/json",
            "x-apikey": searchParams.get('api-key'),
          };
          const response = await fetch(url, {
            method: "GET", // or 'POST', 'PUT', 'DELETE', etc.
            headers: headers,
          });
          if (!response.ok) {
            console.log(response.status)
            throw new Error(`Network response was not ok ${response.status}`);
          }
          const result = await response.json();
          setData(result);
        }
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

  return <SurveyComponent props={data ? data.data : null} />;
}
export default About;
