import React from "react";
import NotFoundPageWrapper from "./NotFoundPageWrapper";

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <NotFoundPageWrapper key="NotFoundPageWrapper">
        <img
          src="https://media.giphy.com/media/A9EcBzd6t8DZe/giphy.gif"
          alt="Page not found error 404"
          width="400px"
        />
      </NotFoundPageWrapper>
    );
  }
}
