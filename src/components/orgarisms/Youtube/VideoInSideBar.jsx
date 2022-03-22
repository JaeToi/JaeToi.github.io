import { VideoInSidebarInfo } from "../../../data/VideoIn";
import { Link } from "react-router-dom";
import styled from "styled-components";

const VideoInSidebaritem = () => {
  return (
    <VideoSidebarAll>
      {VideoInSidebarInfo.map(({ id, img, title, nick, sidehit, sideday }) => (
        <VideoInSidebar key={id}>
          <Link to="/youtube">
            <VideoInSidebarImg>{img}</VideoInSidebarImg>
          </Link>
          <VideoInSidebarImgInfo>
            <VideoInSidebarImgTitle>{title}</VideoInSidebarImgTitle>
            <VideoInSidebarImgNick>{nick}</VideoInSidebarImgNick>
            <VideoInSidebarImgsidehit>
              조회수{sidehit}●{sideday}
            </VideoInSidebarImgsidehit>
          </VideoInSidebarImgInfo>
        </VideoInSidebar>
      ))}
    </VideoSidebarAll>
  );
};

const VideoSidebarAll = styled.div``;
const VideoInSidebar = styled.div`
  display: flex;
  margin-left: 15px;
`;
const VideoInSidebarImg = styled.div``;
const VideoInSidebarImgInfo = styled.div`
  margin-left: 15px;
`;
const VideoInSidebarImgTitle = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;
const VideoInSidebarImgNick = styled.div`
  font-size: 12px;
`;
const VideoInSidebarImgsidehit = styled.div`
  font-size: 12px;
`;

export default VideoInSidebaritem;
