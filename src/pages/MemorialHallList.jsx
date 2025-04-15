import React, { useState, useEffect } from "react";
import ContentItem from "./ContentItem";
import * as H from "../css/StyledMemorialHallList";
import Nav from "./Nav";
import axios from "axios";

const MemorialHallList = () => {
  const [listItems, setListItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [searchKeyword, setSearchKeyword] = useState(""); // 검색 키워드 상태 추가
  const [option, setOption] = useState("none"); // 옵션 상태 추가

  const fetchData = async (page, keyword = "", option = "none") => {
    setIsLoading(true);
    try {
      let response;

      if (option === "myParticipation") {
        response = await axios.get(
          `http://127.0.0.1:8000/memorialHall/my-participation`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );

        setListItems(response.data);
        setTotalPages(1); // Assuming all participated halls are shown on one page
      } else {
        response = await axios.get(
          `http://127.0.0.1:8000/memorialHall?page=${page}&q=${keyword}`
        );
        setListItems(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 6)); // Assuming 6 items per page
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage, searchKeyword, option);
  }, [currentPage, searchKeyword, option]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchData(1, searchKeyword, option);
  };

  const handleOptionChange = (e) => {
    setOption(e.target.value);
    setCurrentPage(1);
    fetchData(1, searchKeyword, e.target.value);
  };

  // Split listItems into two groups
  const upperItems = listItems.slice(0, 3);
  const lowerItems = listItems.slice(3, 6);

  return (
    <H.Body>
      <H.Container>
        <H.Content>
          <H.TitleContent>
            <img
              id="flower"
              src={`${process.env.PUBLIC_URL}/img/flower.svg`}
              alt="flower"
            />
            <H.Title>온라인 헌화 추모관 목록</H.Title>
          </H.TitleContent>
          <H.InputOption>
            <H.Input>
              <img
                id="Search"
                src={`${process.env.PUBLIC_URL}/img/Search.svg`}
                alt="Search"
              />
              <form onSubmit={handleSearchSubmit}>
                <input
                  placeholder="찾고 싶은 추모관 키워드를 입력해보세요. (예: 세월호 추모)"
                  value={searchKeyword}
                  onChange={handleSearchChange}
                />
              </form>
            </H.Input>
            <H.Option>
              <select id="options" onChange={handleOptionChange}>
                <option value="none">전체</option>
                <option value="myParticipation">내가 참여한 추모관</option>
              </select>
            </H.Option>
          </H.InputOption>

          <H.ListContent>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="upper-items">
                  {upperItems.map((item) => (
                    <ContentItem
                      key={item.id}
                      postId={item.id}
                      img={item.thumbnail}
                      name={item.name}
                      date={item.date}
                      info={item.info}
                      isPrivate={item.private}
                      public={item.public}
                      wreathCount={item.wreathCount}
                      messageCount={item.messageCount}
                      status={item.status}
                      token={item.token}
                    />
                  ))}
                </div>

                <div className="lower-items">
                  {lowerItems.map((item) => (
                    <ContentItem
                      key={item.id}
                      postId={item.id}
                      img={item.thumbnail}
                      name={item.name}
                      date={item.date}
                      info={item.info}
                      isPrivate={item.private}
                      public={item.public}
                      wreathCount={item.wreathCount}
                      messageCount={item.messageCount}
                      status={item.status}
                      token={item.token}
                    />
                  ))}
                </div>
              </>
            )}
          </H.ListContent>

          <H.NumberBtn>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{ border: "none", background: "none", color: "black" }}
            >
              {"<"} {/* Previous button */}
            </button>
            <span>
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{ border: "none", background: "none", color: "black" }}
            >
              {">"} {/* Next button */}
            </button>
          </H.NumberBtn>
        </H.Content>
      </H.Container>
    </H.Body>
  );
};

export default MemorialHallList;
