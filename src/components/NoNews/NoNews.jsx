import { Component } from "react";
import "./NoNews.scss";

export class NoNews extends Component {
  render() {
    return (
      <div className="container">
        <div className="no-news">
          <h2 className="no-news-title">📰 News Not Found</h2>
          <p className="no-news-text">
            The news feed you were looking for was not found. Try searching
            something else or check another category.
          </p>
        </div>
      </div>
    );
  }
}

export default NoNews;
