import { FaHome, FaGamepad, FaFire } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./index.css";
import { ThreeDots } from "react-loader-spinner";
import Cookies from "js-cookie";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Gaming() {
  const [allData, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const fetchData = async () => {
    const cookieToken = Cookies.get("jwt_token");
    setloading(true);

    try {
      const response = await fetch("https://apis.ccbp.in/videos/gaming", {
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
  console.log(allData);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="trendingVIdeos">
        <div className="tendingIcon">
          <div className="iconback">
            <FaGamepad title="Trending Icon" className="trendingImg" />
          </div>
          <h1 className="text-trend">Gaming</h1>
        </div>
        {!loading ? (
          allData.length > 0 && (
            <div className="gaming-video">
              {allData.map((item) => (
                <a
                  className="BG-container-gaming"
                  style={{ height: "auto" }}
                  href={`/video/${item.id}`}
                >
                  <img
                    src={item.thumbnail_url}
                    alt="thumbnail_url"
                    className="game-Video_photo"
                  />
                  <div className="outer">
                    <div className="inner">
                      <h1 className="heading changeHead">{item.title}</h1>
                      <div className="count paragraphInThumb">
                        <p>{`${item.view_count} Watching Worldwide`}</p>
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
