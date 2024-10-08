import "./index.css";
import { ThreeDots } from "react-loader-spinner";
import Cookies from "js-cookie";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import ConfigurationContext from "../../../context";

class GetApiRes extends React.Component {
  static contextType = ConfigurationContext;
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
      DataApi: { videos: [] },
      loading: false,
    };
  }

  componentDidMount = async () => {
    await this.fetchData();
  };
  darkMode = {
    backgroundColor: "white",
  };
  light = {
    backgroundColor: "black",
  };

  fetchData = async () => {
    const cookieToken = Cookies.get("jwt_token");
    const { searchInput } = this.state;

    this.setState({ loading: true });

    try {
      const response = await fetch(
        `https://apis.ccbp.in/videos/all?search=${searchInput}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${cookieToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      this.setState({ DataApi: data, loading: false });
    } catch (error) {
      console.error("Error fetching data:", error.message);
      this.setState({ loading: false });
    }
  };

  handleSearchInput = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchData();
  };

  render() {
    const { searchInput, DataApi, loading } = this.state;
    const videosArray = DataApi.videos;

    return (
      <>
        <div className="entireVideos">
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              className="search"
              type="text"
              onChange={this.handleSearchInput}
              value={searchInput}
              placeholder="Search"
            />
            <div className="submitdiv" type="submit">
              <FaSearch type="submit" />
            </div>
          </form>

          <div className="Videos">
            {loading ? (
              <div className="loader-container" data-testid="loader">
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="blue"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              </div>
            ) : videosArray.length > 0 ? (
              videosArray.map((item) => (
                <a className="BG-container" href={`/video/${item.id}`}>
                  <img
                    src={item.thumbnail_url}
                    alt="thumbnail_url"
                    className="thumbnail_url"
                  />
                  <div className="outer">
                    <img
                      src={item.channel.profile_image_url}
                      className="profile"
                      alt="profile_image_url"
                    />
                    <div className="inner">
                      <h1 className="heading">{item.title}</h1>
                      <p
                        style={{ color: "rgb(120,124,120)" }}
                        className="paragraphInThumb"
                      >
                        {item.channel.name}
                      </p>
                      <div className="count paragraphInThumb">
                        <p
                          style={{ color: "rgb(120,124,120)" }}
                        >{`${item.view_count} Views`}</p>
                        <p style={{ color: "rgb(120,124,120)" }}>
                          {item.published_at}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <p>No videos found</p>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default GetApiRes;
