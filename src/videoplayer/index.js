import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import Cookies from "js-cookie";
import { ThreeDots } from "react-loader-spinner";
import { FaThumbsUp, FaThumbsDown, FaBookmark } from "react-icons/fa";
import { useContext } from "react";
import ConfigurationContext from "../context";
// function VideoPlayer() {
//   const { savedList, handleSavedList } = useContext(ConfigurationContext);
//   const { id } = useParams();
//   const [allData, setData] = useState({});
//   const [loading, setloading] = useState(false);
//   const OnclickhandleSavedList = (list) => {
//     handleSavedList(list);
//     console.log(savedList);
//   };
//   useEffect(() => {
//     console.log(savedList);
//   });
//   const fetchData = async () => {
//     const cookieToken = Cookies.get("jwt_token");
//     setloading(true);

//     try {
//       const response = await fetch(`https://apis.ccbp.in/videos/${id}`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${cookieToken}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const data = await response.json();
//       setData(data.video_details);
//       setloading(false);
//     } catch (error) {
//       console.log("CATCH EXICUTED");
//       console.error("Error fetching data:", error.message);
//       setloading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
//   const videoUrl = allData.video_url;
//   const videoId = videoUrl ? videoUrl.split("=")[1] : null;

//   // console.log(allData);

//   return (
//     <>
//       {!loading ? (
//         <div className="totalVideo">
//           <div className="video-player">
//             <iframe
//               width="600"
//               height="400"
//               src={videoId ? `https://www.youtube.com/embed/${videoId}` : ""}
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//             <div>
//               <h2>{allData.title}</h2>
//               <div className="media">
//                 <div className="ViewCount para">
//                   <p>{`${allData.view_count} views`}</p>
//                   <p>{allData.published_at}</p>
//                 </div>
//                 <div className="Liked para">
//                   <div className="intenction">
//                     <FaThumbsUp /> Like
//                   </div>
//                   <div className="intenction">
//                     <FaThumbsDown /> Dislike
//                   </div>
//                   <div
//                     className="intenction"
//                     onClick={() => OnclickhandleSavedList(allData)}
//                   >
//                     <FaBookmark /> Save
//                   </div>
//                 </div>
//               </div>

//               {allData.channel && (
//                 <div className="outer OuterIm">
//                   <div className="image">
//                     <img
//                       src={allData.channel.profile_image_url}
//                       className="profileInVideo"
//                       alt="profile_image_url"
//                     />
//                   </div>
//                   <div className="inner">
//                     <h3>{allData.channel.name}</h3>
//                     <p className="paragraphInThumb darkPara">
//                       {allData.description}
//                     </p>
//                     <div className="count paragraphInThumb">
//                       <p className="paragraphInThumb ">{`${allData.channel.subscriber_count} Views`}</p>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="loader-container" data-testid="loader">
//           <ThreeDots
//             height="80"
//             width="80"
//             radius="9"
//             color="blue"
//             ariaLabel="three-dots-loading"
//             visible={true}
//           />
//         </div>
//       )}
//     </>
//   );
// }

// export default VideoPlayer;

function VideoPlayer() {
  const { savedList, handleSavedList } = useContext(ConfigurationContext);
  const { id } = useParams();
  const [allData, setData] = useState({});
  const [loading, setloading] = useState(false);

  const onClickHandleSavedList = () => {
    handleSavedList(allData);
    console.log(savedList);
  };

  const fetchData = async () => {
    const cookieToken = Cookies.get("jwt_token");
    setloading(true);

    try {
      const response = await fetch(`https://apis.ccbp.in/videos/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookieToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setData(data.video_details);
      setloading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const videoUrl = allData.video_url;
  const videoId = videoUrl ? videoUrl.split("=")[1] : null;

  return (
    <>
      {!loading ? (
        <div className="totalVideo">
          <div className="video-player">
            <iframe
              width="600"
              height="400"
              src={videoId ? `https://www.youtube.com/embed/${videoId}` : ""}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div>
              <h2>{allData.title}</h2>
              <div className="media">
                <div className="ViewCount para">
                  <p>{`${allData.view_count} views`}</p>
                  <p>{allData.published_at}</p>
                </div>
                <div className="Liked para">
                  <div className="intenction">
                    <FaThumbsUp /> Like
                  </div>
                  <div className="intenction">
                    <FaThumbsDown /> Dislike
                  </div>
                  <div className="intenction" onClick={onClickHandleSavedList}>
                    <FaBookmark /> Save
                  </div>
                </div>
              </div>

              {allData.channel && (
                <div className="outer OuterIm">
                  <div className="image">
                    <img
                      src={allData.channel.profile_image_url}
                      className="profileInVideo"
                      alt="profile_image_url"
                    />
                  </div>
                  <div className="inner">
                    <h3>{allData.channel.name}</h3>
                    <p className="paragraphInThumb darkPara">
                      {allData.description}
                    </p>
                    <div className="count paragraphInThumb">
                      <p className="paragraphInThumb ">{`${allData.channel.subscriber_count} Subscribers`}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
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
    </>
  );
}

export default VideoPlayer;
