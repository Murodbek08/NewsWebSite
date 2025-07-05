import { Component } from "react";
import { noImg } from "../../assets";
import { Link } from "react-router-dom";
import "./Card.scss";

export class Card extends Component {
  render() {
    let { urlToImage, title, author, publishedAt } = this.props;
    let day = new Date(publishedAt).toLocaleDateString().split(".")[0];
    let today = new Date().toLocaleDateString().split(".")[0];
    let newDate = today - day;
    return (
      <Link to={`NewsCard?id=${new Date(publishedAt).getTime()}`}>
        <div className="e-card playing">
          <div className="image" />
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
          <div className="infotop">
            <div className="card">
              <div className="card-img">
                <img src={urlToImage ? urlToImage : noImg} alt="No img ?" />
              </div>
              <h3 className="card-description">
                {title ? title : "No tiltle"}
              </h3>
              <div className="card-footer">
                <p className="card-author">
                  {author ? author.split(",")[0] : "No author"}
                </p>
                <p className="card-publishedAt">{newDate} Days Ago</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Card;
