import { Component } from "react";
import request from "../../api/api";
import { toast } from "react-toastify";
import "./NewsCard.scss";

export class NewsCard extends Component {
  state = {
    data: {},
  };
  pageName = location.href.split("/")[3];
  id = new URLSearchParams(location.search).get("id");

  getData = async () => {
    let { pageName, id } = this;
    if (pageName == `NewsCard?id=${id}`) {
      pageName = "general";
    }
    try {
      let { data } = await request(`top-headlines?topic=${pageName}`);
      this.setState({
        data: data.articles.find(
          (el) => new Date(el.publishedAt).getTime() == id
        ),
      });
    } catch (error) {
      toast.error(error.message);
    }
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    let {
      data: { urlToImage, description, author, publishedAt, title, content },
    } = this.state;
    return (
      <>
        <section className="news-card-header">
          <div className="container">
            <h3>Published at {new Date(publishedAt).toLocaleDateString()}</h3>
            <h2>{title}</h2>
            <div className="news-card-author">
              <img src={urlToImage} alt="" />
              <h4>{author}</h4>
            </div>
          </div>
        </section>
        <section className="news-card-footer">
          <div className="container">
            <p>{description}</p>
            <p>{content}</p>
          </div>
        </section>
      </>
    );
  }
}
export default NewsCard;
