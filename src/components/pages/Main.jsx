import styled from "styled-components";
import { MainSidebar } from "../../data/MainSidebar";

const MainPage = () => {
  return (
    <Wrapper>
      <Title>개발자 OOOO</Title>
      <Container>
        <List>
          {MainSidebar.map(({ name, icon }) => (
            <MenuSidebar key={name} name={name} icon={icon} />
          ))}
        </List>
        <Header>
          <MenuSidebar></MenuSidebar>
          <ProntEndLogo></ProntEndLogo>
        </Header>
        <Main></Main>
        <Footer></Footer>
        <a href="/youtube">
          <h3>유튜브</h3>
        </a>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const List = styled.div``;
const Container = styled.div`
  width: 250px;
  height: calc(100vh - 56px);
  position: fixed;
  top: 56px;
  overflow: auto;
`;
const MenuSidebaricon = styled.div``;
const Header = styled.div``;
const MenuSidebar = styled.div``;
const ProntEndLogo = styled.div``;
const Main = styled.div``;
const Footer = styled.div``;
const Title = styled.div``;

export default MainPage;
