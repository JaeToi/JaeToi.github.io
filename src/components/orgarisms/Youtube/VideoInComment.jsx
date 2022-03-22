import styled from "styled-components";
import { ReactComponent as CommentSortImg } from "../../../assets/images/CommentSortImg.svg";
import { VideoInOtherComment } from "../../../data/VideoInComment";

const VideoInComment = () => {
  return (
    <Wrapper>
      <Comment>
        <CommentNumber>댓글 2,480개</CommentNumber>
        <CommentSort>
          <CommentSortImg />
        </CommentSort>
        정렬기준
      </Comment>
      <CommentMyText>
        <CommentPeople>
          <CommentPeopleImage src="https://yt3.ggpht.com/a/default-user=s48-c-k-c0x00ffffff-no-rj" />
        </CommentPeople>
        <CommentMyText>
          <InputText placeholder="댓글추가.."></InputText>
        </CommentMyText>
      </CommentMyText>

      {VideoInOtherComment.map(
        ({
          id,
          image,
          nick,
          day,
          comment,
          like,
          dislike,
          othercomment,
          check,
        }) => (
          <CommentOtherPeople key={id}>
            <OtherPeopleImage>
              <Image>{image}</Image>
            </OtherPeopleImage>
            <OtherPeopleInfo>
              <OtherPeopleNick>
                {nick}
                {check}
                {day}
              </OtherPeopleNick>
              <OtherPeopleComment>{comment}</OtherPeopleComment>
              <CommentThree>
                <OtherPeopleLike>{like}</OtherPeopleLike>
                <CheckText>7.3천</CheckText>
                <OtherPeopleDisLikst>{dislike}</OtherPeopleDisLikst>
                <CheckText></CheckText>
                <CommentAnswer>답글</CommentAnswer>
              </CommentThree>
              <OtherPeopleOtherComment>{othercomment}</OtherPeopleOtherComment>
            </OtherPeopleInfo>
          </CommentOtherPeople>
        )
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
`;
const Comment = styled.div`
  display: flex;
`;
const CommentNumber = styled.div``;
const CommentSort = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  margin-left: 50px;
  margin-bottom: 15px;
  padding-right: 5px;
  cursor: pointer;
`;
const CommentPeople = styled.div`
  border-radius: 50%;
`;
const CommentPeopleImage = styled.img`
  border-radius: 50%;
`;
const CommentMyText = styled.div`
  display: flex;
  width: 100%;
`;
const InputText = styled.input`
  display: block;
  flex: 1;
  height: 30px;
  margin-top: 5px;
  margin-left: 15px;
  cursor: text;
  border: none;
  background: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const CursorAll = styled.div`
  cursor: pointer;
`;
const Image = styled(CursorAll)`
  margin-right: 20px;
`;
const CommentAnswer = styled(CursorAll)`
  font-size: 12px;
  margin-left: 10px;
`;

const CheckText = styled.div`
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
`;

const CommentOtherPeople = styled.div`
  display: flex;
  margin-top: 30px;
`;
const CommentThree = styled.div`
  display: flex;
`;
const OtherPeopleImage = styled.div``;
const OtherPeopleInfo = styled.div``;
const OtherPeopleNick = styled(CursorAll)`
  padding-bottom: 10px;
  font-size: 15px;
`;

const OtherPeopleComment = styled.div`
  padding-bottom: 10px;
  font-size: 14px;
`;
const OtherPeopleLike = styled(CursorAll)`
  width: 15px;
  height: 15px;
  padding-bottom: 10px;
`;
const OtherPeopleDisLikst = styled(CursorAll)`
  width: 15px;
  height: 15px;
`;
const OtherPeopleOtherComment = styled(CursorAll)`
  color: rgb(6, 95, 212);
`;
export default VideoInComment;
