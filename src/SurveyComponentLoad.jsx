import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./json";
import { themeJson } from "./theme";
import { saveAs } from "file-saver";

function SurveyComponentLoad() {
  const survey = new Model(json);
  survey.applyTheme(themeJson);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(sender.data));
    var dlAnchorElem = document.getElementById("downloadAnchorElem");
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "scene.json");
    dlAnchorElem.click();
  });
  survey.data = {
    "person-form": "jacobo",
    "company-name": "stafi",
    website: "stafi.com",
    "office-address": "dasdasd",
    "number-employees": "adsadsd",
    "operating-hours": "adasdasds",
    "service-need": "dasds",
    "when-need": "dasdsad",
    "volume-call": "adadsd",
  };
  return <Survey model={survey} />;
}

export default SurveyComponentLoad;
