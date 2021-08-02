import React from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";

import HomePage from "./components/pages/homepage/hompage.component";

const TopicDetail = (props: any) => {
  console.log(props);
  return (
    <div>
      <h1>topic detail: {props.match.params.topicId} </h1>
    </div>
  );
};

const Home = (props: any) => {
  return (
    <div>
      <button onClick={() => props.history.push("/topics/1")}>Topic</button>
      <h1>Home</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route path="/topics/:topicId" component={TopicDetail} />
      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
