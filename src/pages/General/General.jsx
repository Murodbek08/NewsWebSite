import { Component } from "react";
import Card from "../../components/Card/Card";
import request from "../../api/api";
import Loading from "../../components/Loading/Loading";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import NoNews from "../../components/NoNews/NoNews";
import { toast } from "react-toastify";
import "./General.scss";

export class General extends Component {
  state = {
    data: [],
    loading: false,
    search: "",
    pageSize: 12,
    page: 1,
    total: 1,
  };
  getData = async () => {
    this.setState({ loading: true });
    try {
      let { data } = await request(
        `top-headlines?category=general&q=${this.state.search}&pageSize=${this.state.pageSize}&page=${this.state.page}`
      );
      const pageCount = Math.ceil(data.totalResults / this.state.pageSize);
      this.setState({ data: data.articles, total: pageCount });
    } catch (error) {
      toast.error(error.message);
    } finally {
      this.setState({ loading: false });
    }
  };
  formSubmit = (e) => {
    e.preventDefault();
    this.setState({ search: e.target.search.value.trim().toLowerCase() });
  };
  handleChange = (event, value) => {
    console.log(value);
    this.setState({ page: value });
  };
  componentDidMount() {
    this.getData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.getData();
    }
  }
  render() {
    let { data, loading, total, page } = this.state;
    return (
      <section className="general-section">
        <div className="container">
          <form onSubmit={this.formSubmit}>
            <div className="input-container">
              <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                </g>
              </svg>
              <input
                id="search"
                placeholder="Searching..."
                type="text"
                className="input"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          {loading ? (
            <Loading />
          ) : data.length == 0 ? (
            <NoNews />
          ) : (
            <>
              <div className="general-section-cards">
                {data.map((el, idx) => (
                  <Card key={idx} {...el} />
                ))}
              </div>
              <div className="pagination">
                <Stack spacing={2}>
                  <Pagination
                    count={total}
                    page={page}
                    onChange={this.handleChange}
                    variant="outlined"
                    color="primary"
                  />
                </Stack>
              </div>
            </>
          )}
        </div>
      </section>
    );
  }
}

export default General;
