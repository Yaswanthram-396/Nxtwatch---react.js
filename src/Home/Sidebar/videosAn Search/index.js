// import "./index.css";
// import Cookies from "js-cookie";
// import React from "react";

// class GetApiRes extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       searchInput: "",
//       DataApi: "",
//     };
//   }
//   componentDidMount = async () => {
//     const cookieTOken = Cookies.get("jwt_token");
//     try {
//       const response = await fetch("https://apis.ccbp.in/videos/all?search=", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${cookieTOken}`,
//         },
//       });

//       const data = await response.json();
//       this.setState({ DataApi: data });
//       console.log(data);
//     } catch (error) {
//       const cookieTOken = Cookies.get("jwt_token");
//       console.log(`Api request: ${cookieTOken}`);
//     }
//   };

//   handleSearchInput = (e) => {
//     this.setState((prevState) => ({
//       ...prevState,
//       searchInput: e.target.value,
//     }));
//   };

//   handleSubmit = () => {};
//   render() {
//     const { searchInput, DataApi } = this.state;
//     const videosArray = DataApi.videos;
//     console.log(videosArray);
//     return (
//       <>
//         <input onChange={this.handleSearchInput} value={searchInput} />
//         {/* {videosArray.map((item) => {
//           console.log(item);
//           return <p>{item.title}</p>;
//         })} */}
//       </>
//     );
//   }
// }

// export default GetApiRes;

import "./index.css";
import Cookies from "js-cookie";
import React from "react";
import { FaSearch } from "react-icons/fa";

class GetApiRes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
      DataApi: { videos: [] }, // Initialize as an object with a videos array
    };
  }

  componentDidMount = async () => {
    await this.fetchData(); // Call the fetchData method
  };

  fetchData = async () => {
    const cookieToken = Cookies.get("jwt_token");
    const { searchInput } = this.state;
    try {
      const response = await fetch(
        `https://apis.ccbp.in/videos/all?search=${searchInput}`, // Using search input dynamically
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
      this.setState({ DataApi: data });
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  handleSearchInput = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchData(); // Fetch data when submitting the search input
  };

  render() {
    const { searchInput, DataApi } = this.state;
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
              placeholder="Search videos"
            />
            {/* <button type="submit">Search</button> */}
            <div className="submitdiv" type="submit">
              <button className="submitOnButton">
                {" "}
                <FaSearch type="submit" />{" "}
              </button>
            </div>
          </form>
          <div className="Videos">
            {videosArray && videosArray.length > 0 ? (
              videosArray.map((item) => (
                <div className="BG-container">
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
                      <h1 className="heading" key={item.id}>
                        {item.title}
                      </h1>
                      <p className="paragraphInThumb">{item.channel.name}</p>
                      <div className="count paragraphInThumb">
                        <p>{`${item.view_count} Views`}</p>
                        <p>{item.published_at}</p>
                      </div>
                    </div>
                  </div>
                </div>
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
