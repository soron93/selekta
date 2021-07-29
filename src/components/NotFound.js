import React, { Component } from "react";
import LottieControl from "./Loading/LottieControl";
import notFound from "../animation/notFound.json";

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>Sorry no request 404! </h1>
        <LottieControl width={400} height={400} animation={notFound} />
      </div>
    );
  }
}

export default NotFound;
