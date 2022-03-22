import { useState } from "react";
import MiniSidebar from "../orgarisms/Youtube/MiniSiderbar";
import Header from "../orgarisms/Youtube/Header";
import Sidebar from "../orgarisms/Youtube/Sidebar";
import VideoList from "../orgarisms/Youtube/VideoList";
import styled from "styled-components";
import videoListMain from "../orgarisms/Youtube/VideoList";
const Youtube = () => {
  const [showMini, setShowMini] = useState(false);
  return (
    <>
      <Header toggleSidebar={() => setShowMini((prev) => !prev)} />
      {showMini ? <MiniSidebar /> : <Sidebar />}
      <MainWrapper showMini={showMini}>
        <VideoList data={videoListMain} />
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  margin-left: ${({ showMini }) => (showMini ? "72px" : "250px")};
  min-width: 500px;
`;

export default Youtube;
