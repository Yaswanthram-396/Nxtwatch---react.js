import { FaHome, FaGamepad, FaFire } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./index.css";
import { ThreeDots } from "react-loader-spinner";
import Cookies from "js-cookie";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Trending() {
  const [allData, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const fetchData = async () => {
    const cookieToken = Cookies.get("jwt_token");
    setloading(true);

    try {
      const response = await fetch("https://apis.ccbp.in/videos/trending", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookieToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setData(data.videos);

      setloading(false);
    } catch (error) {
      console.log("CATCH EXICUTED");
      console.error("Error fetching data:", error.message);
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="trendingVIdeos">
        <div className="tendingIcon">
          <div className="iconback"> 
          <FaFire title="Trending Icon" className="trendingImg" />
        </div>
        <h1>Trending</h1>
        </div>
        {!loading ? (
          allData.length > 0 && (
            <div className="ghnj">
              {allData.map((item) => (
                <a className="BG-container-2" href={`/video/${item.id}`}>
                  <img
                    src={item.thumbnail_url}
                    alt="thumbnail_url"
                    className="Video_photo"
                  />
                  <div className="outer">
                    <div className="inner">
                      <h1 className="heading changeHead">{item.title}</h1>
                      <p className="paragraphInThumb">{item.channel.name}</p>
                      <div className="count paragraphInThumb">
                        <p>{`${item.view_count} Views`}</p>
                        <p>{item.published_at}</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )
        ) : (
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
        )}
      </div>
    </>
  );
}
