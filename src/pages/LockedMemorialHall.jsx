import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import ContentItem from "./ContentItem";
import * as H from "../css/StyledMemorialHallList";
import Nav from "./Nav";

const LockedMemorialHall = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Extract token and postId from query parameters
  const token = queryParams.get("token");
  const postId = queryParams.get("postId");

  const [postItem, setPostItem] = useState(null); // State to hold the specific memorial hall
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Log extracted parameters for debugging
    console.log("Extracted token:", token);
    console.log("Extracted postId:", postId);

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `/memorialHall/${postId}/access?token=${token}`,
          {
            params: {
              token: token,
            },
            headers: {
              Authorization: `Token ${token}`, // Ensure format is correct
            },
          }
        );
        setPostItem(response.data); // Set the specific memorial hall data

      } catch (error) {
        console.error(
          "Error fetching memorial hall:",
          error.response ? error.response.data : error.message
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (token && postId) {
      fetchData();
    } else {
      console.error("No token or postId provided");
    }
  }, [token, postId]);

  return (
    <H.Body>
      <H.Container>
        <Nav />
        <H.Content>
          <H.TitleContent>
            <img
              id="flower"
              src={`${process.env.PUBLIC_URL}/img/flower.svg`}
              alt="flower"
            />
            <H.Title>추모관 상세 정보</H.Title>
          </H.TitleContent>
          <H.ListContent>
            {isLoading ? (
              <p>로딩 중...</p>
            ) : (
              postItem && (
                <ContentItem
                  key={postItem.id}
                  postId={postItem.id}
                  img={postItem.thumbnail}
                  name={postItem.name}
                  date={postItem.date}
                  info={postItem.info}
                  isPrivate={postItem.private}
                  public={postItem.public}
                  wreathCount={postItem.wreathCount}
                  messageCount={postItem.messageCount}
                  status={postItem.status}
                  token={postItem.token} // If needed
                />
              )
            )}
          </H.ListContent>
        </H.Content>
      </H.Container>
    </H.Body>
  );
};


export default LockedMemorialHall;
