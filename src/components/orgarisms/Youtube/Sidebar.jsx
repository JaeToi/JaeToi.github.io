import styled from "styled-components";
import SidebarItem from "../../molcules/Youtube/Siderbaritem";
import {
  firstList,
  fifthList,
  fourthList,
  secondList,
  thirdList,
  sixthList,
} from "../../../data/Sidebar";
import { ReactComponent as Loginbtn } from "../../../assets/images/Loginbtn.svg";

const Sidebar = () => {
  return (
    <Container>
      <List>
        {firstList.map(({ icon, name }) => (
          <SidebarItem key={name} name={name} icon={icon} />
        ))}
      </List>
      <List>
        {secondList.map(({ icon, name }) => (
          <SidebarItem key={name} name={name} icon={icon} />
        ))}
      </List>
      <List>
        <Loginvideo>
          <Loginfont>
            로그인하면 동영상에 좋아요
            <br />를 표시하고 댓글을 달거나
            <br /> 구독할수있습니다
          </Loginfont>
          <Loginbtnt>
            <Btnlogin>
              <Loginbtn />
            </Btnlogin>
            로그인
          </Loginbtnt>
        </Loginvideo>
      </List>
      <List>
        <Title>인기 Youtube</Title>
        {thirdList.map(({ icon, name }) => (
          <SidebarItem Key={name} name={name} icon={icon} />
        ))}
      </List>
      <List>
        {fourthList.map(({ icon, name }) => (
          <SidebarItem key={name} name={name} icon={icon} />
        ))}
      </List>
      <List>
        <Title>YOTUBE 더보기</Title>
        {fifthList.map(({ icon, name }) => (
          <SidebarItem key={name} name={name} icon={icon} />
        ))}
      </List>
      <List>
        {sixthList.map(({ icon, name }) => (
          <SidebarItem key={name} icon={icon} name={name} />
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 250px;
  height: calc(100vh - 56px);
  position: fixed;
  top: 56px;
  overflow: auto;
`;
const List = styled.div`
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const Loginvideo = styled.div`
  padding: 0 20px;
  font-weight: 400px;
`;

const Loginfont = styled.div`
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 20px;
`;

const Loginbtnt = styled.button`
  border: 1px solid rgb(6, 95, 212);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  padding: 5px 15px;
  color: rgb(6, 95, 212);
`;

const Btnlogin = styled.span`
  width: 29px;
  height: 27px;
  border: none;
  color: rgb(6, 95, 212);
  padding-right: 5px;
`;
const Title = styled.div``;

export default Sidebar;
