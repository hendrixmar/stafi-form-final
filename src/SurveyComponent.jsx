import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./json";
import { themeJson } from "./theme";
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';


function SurveyComponent(props) {
  const survey = new Model(json);
    const { userId } = useParams();
    const [searchParams] = useSearchParams();

  // Get a specific query parameter
  survey.applyTheme(themeJson);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
    console.log(userId, "dasdadasd");
      const apiKey = searchParams.get('api-key');

      let url = "https://stafi-86f4.restdb.io/rest/forms";
    let method = "POST"
    if (userId){
      url = `https://stafi-86f4.restdb.io/rest/forms/${userId}`;
      method = "PUT"
    }
    const now = new Date();
    const option = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false // 24-hour time
    };

    const formattedDateTime = now.toLocaleString('en-US', option);
    console.log(formattedDateTime); // e.g., 05/18/2024, 14:30:45
   const result = {
      "company_name": sender.data["company_name"],
      "person" : sender.data["person-form"],
      "creation_date": formattedDateTime,
      "data": sender.data
    }
    fetch(url, {
      method: method, // Specify the request method
      headers: {
        'Content-Type': 'application/json',
        "x-apikey": searchParams.get('api-key') // Specify the content type
      },
      body: JSON.stringify(result) // Convert the data to a JSON string
    })
        .then(response => {
          // Check if the response status is OK (status code 200-299)
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          // Parse the JSON from the response
          return response.json();
        })
        .then(data => {
          // Handle the parsed JSON data
          console.log(data);
        })
        .catch(error => {
          // Handle any errors that occurred during the fetch
          console.error('There has been a problem with your fetch operation:', error);
        });


  });

  console.log(JSON.stringify(props, null, 2))
  console.log("SEANSJNNSJNNJANNJANSJNS")
  console.log(props._id)
  if (props){
    survey.data = props.props;
  }
  return <Survey model={survey} />;
}

export default SurveyComponent;
