import styled from "styled-components";
import { videoListMain } from "../../../data/videoList";
import { Link } from "react-router-dom";

const VideoList = ({ data }) => {
  return (
    <List>
      {videoListMain.map(
        ({ id, thumbnail, title, channel, name, hit, createAt, videoId }) => (
          <Item key={id}>
            <Link to={`/youtube/${videoId}`}>
              <SumImg src={thumbnail} />
            </Link>
            <Info>
              <VideoProfileImg>
                <ProfileImg src={channel.thumbnail} />
              </VideoProfileImg>
              <VideoInfo>
                <Link to={`/youtube/${videoId}`}>
                  <VideoTitle>{title}</VideoTitle>
                </Link>
                <ChannelNick>{channel.name}</ChannelNick>
                <VideoRefer>
                  조회수 {hit}회●{createAt}
                </VideoRefer>
              </VideoInfo>
            </Info>
          </Item>
        )
      )}
    </List>
  );
};

const List = styled.div`
  @media screen and (max-width: 1144px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
    margin-left: 40px;
    margin-right: 40px;
    flex: 1;
  }
  @media screen and (max-width: 890px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-left: 40px;
    margin-right: 40px;
  }
  @media screen and (width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    margin-left: 40px;
    margin-right: 40px;
  }
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  margin-left: 40px;
  margin-right: 40px;
`;
const Item = styled.div`
  margin: 10px 0;
`;
const SumImg = styled.img`
  width: 100%;
`;
const Info = styled.div`
  display: flex;
`;
const VideoProfileImg = styled.span`
  margin-right: 10px;
`;
const ProfileImg = styled.img`
  border-radius: 50%;
  width: 36px;
  height: 36px;
`;
const VideoInfo = styled.div`
  padding-left: 5px;
`;
const VideoTitle = styled.h4`
  line-height: 24px;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin: 0;
  margin-bottom: 5px;
`;
const ChannelNick = styled.h6`
  margin: 0;
`;
const VideoRefer = styled.h6`
  margin: 0;
`;
export default VideoList;
