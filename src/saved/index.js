import { MdVideoLibrary } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import "./index.css";
import { ThreeDots } from "react-loader-spinner";
import Cookies from "js-cookie";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import ConfigurationContext from "../context";
export default function Saved() {
  const { savedList } = useContext(ConfigurationContext);

  useEffect(() => {
    console.log(savedList);
  }, [savedList]);

  return (
    <>
      <div className="trendingVIdeos">
        <div className="tendingIcon">
          <div className="iconback">
            <MdVideoLibrary title="Saved Videos Icon" className="trendingImg" />
          </div>
          <h1 className="text-trend">Saved</h1>
        </div>
        {console.log(savedList)}
        {savedList.length > 0 ? (
          <div className="ghnj">
            {savedList.map((item) => (
              <a
                className="BG-container-2"
                href={`/video/${item.id}`}
                key={item.id}
              >
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
        ) : (
          <p>No videos saved yet.</p>
        )}
      </div>
    </>
  );
}
