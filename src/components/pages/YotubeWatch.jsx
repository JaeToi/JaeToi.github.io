import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../orgarisms/Youtube/Header";
import Sidebar from "../orgarisms/Youtube/Sidebar";
import styled from "styled-components";
import { VideoInContents, VideoInInfoMap } from "../../data/VideoIn";
import { ReactComponent as VideoInLikeImg } from "../../../src/assets/images/VideoInLikeImg.svg";
import { ReactComponent as VideoInDisLikeImg } from "../../assets/images/VideoInDisLikeImg.svg";
import { ReactComponent as VideoInshareImg } from "../../assets/images/VideoInshareImg.svg";
import { ReactComponent as VideoInSaveImg } from "../../assets/images/VideoInSaveImg.svg";
import VideoInSidebaritem from "../orgarisms/Youtube/VideoInSideBar";
import VideoInComment from "../orgarisms/Youtube/VideoInComment";
import { videoListMain, videolistMain } from "../../data/videoList";
const YoutubeWatch = () => {
  const { videoId } = useParams();
  const [showSidebar, setShowSidebar] = useState(false);

  const video = videoListMain.find((video) => video.videoId === videoId);

  return (
    <Item>
      <Header toggleSidebar={() => setShowSidebar((prev) => !prev)} />
      {showSidebar && <Sidebar />}
      <Main>
        <VideoWrapper>
          <IframeWrapper>
            <iframe
              width="560"
              height="315"
              src={"https://www.youtube.com/embed/" + videoId}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </IframeWrapper>
          {VideoInContents.map(({ id, tag, title, hit, day }) => (
            <VideoInContentsFS key={id}>
              <VideoInTag>{tag}</VideoInTag>
              <VideoInTitle>{title}</VideoInTitle>
              <VideoInHit>
                조회수{hit}●{day}
                <VideoInClickup>
                  <VideoInLike>
                    <VideoInLikeImg />
                  </VideoInLike>
                  <VideoInLikeText />
                  5.3만
                  <VideoInDisLike>
                    <VideoInDisLikeImg />
                  </VideoInDisLike>
                  <VideoInDisLikeText />
                  싫어요
                  <VideoInshare>
                    <VideoInshareImg />
                  </VideoInshare>
                  <VideoInshareText />
                  공유
                  <VideoInSave>
                    <VideoInSaveImg />
                  </VideoInSave>
                  <VideoInSaveText />
                  저장
                </VideoInClickup>
              </VideoInHit>
            </VideoInContentsFS>
          ))}
          <VideoInInfo>
            {VideoInInfoMap.map(({ id, nick, sub, tag, conten, image }) => (
              <VideoInInfoContents key={id}>
                <VideoInInfoNickImg>
                  <InfoImage>{image}</InfoImage>
                </VideoInInfoNickImg>
                <VideoInInfoCointentstwo>
                  <VideoInInfoNick>{nick}</VideoInInfoNick>
                  <VideoInInfoSub>구독자 {sub}</VideoInInfoSub>
                  <VideoInInfoTag>{tag}</VideoInInfoTag>
                  <VideoInInfoConten>{conten}</VideoInInfoConten>
                  <VideoInInfoMore>더보기</VideoInInfoMore>
                </VideoInInfoCointentstwo>
              </VideoInInfoContents>
            ))}
            <VideoInInfoBtn>구독</VideoInInfoBtn>
          </VideoInInfo>
          <VideoInComment />
        </VideoWrapper>

        <VideoInSidebaritem />
      </Main>
    </Item>
  );
};

const IframeWrapper = styled.div`
  width: 100%;
  padding-top: 56%;
  position: relative;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const VideoWrapper = styled.div`
  flex: 1;
`;

const VideoInInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  border-top: 1px solid rgba(0, 0, 0, 0.15);
`;
const VideoInInfoNickImg = styled.div`
  width: auto;
  cursor: pointer;
  margin-bottom: 100px;
`;
const InfoImage = styled.image`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
const VideoInInfoNick = styled.div`
  font-size: 14px;
`;
const VideoInInfoSub = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
`;
const VideoInInfoTag = styled.div`
  font-size: 14px;
  color: rgb(6, 95, 212);
`;
const VideoInInfoConten = styled.div`
  font-size: 14px;
  margin-bottom: 50px;
`;
const VideoInInfoContents = styled.div`
  display: flex;
  align-items: center;
`;
const VideoInInfoBtn = styled.button`
  width: 72px;
  height: 39px;
  background-color: rgb(204, 0, 0);
  border: none;
  margin: 10px;
  color: white;
  cursor: pointer;
`;
const VideoInInfoMore = styled.div`
  font-size: 12px;
`;
const VideoInInfoCointentstwo = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Item = styled.div``;
const Main = styled.div`
  display: flex;
  margin: 10px 75px;
`;

const VideoInContentsFS = styled.div`
  margin-top: 20px;
  padding-bottom: 10px;
`;
const VideoInTag = styled.div`
  font-size: 12px;
  color: rgb(6, 95, 212);
`;
const VideoInTitle = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;
const VideoInHit = styled.span`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const VideoImgSize = styled.div`
  width: 24px;
  height: 24px;
  padding-left: 30px;
  padding-right: 5px;
  cursor: pointer;
`;
const VideoInClickup = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const VideoInLike = styled(VideoImgSize)``;
const VideoInDisLike = styled(VideoImgSize)``;
const VideoInshare = styled(VideoImgSize)``;
const VideoInSave = styled(VideoImgSize)``;
const VideoInLikeText = styled.div``;
const VideoInDisLikeText = styled.div``;
const VideoInshareText = styled.div``;
const VideoInSaveText = styled.div``;

export default YoutubeWatch;
