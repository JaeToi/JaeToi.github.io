import styled from "styled-components";

const MainPage = () => {
  return (
    <Wrapper>
      <Title>개발자 OOOO</Title>
      <Header>
        <MenuSidebar></MenuSidebar>
        <ProntEndLogo></ProntEndLogo>
      </Header>
      <Main></Main>
      <Footer></Footer>
      <a href="/youtube">
        <h3>유튜브</h3>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Header = styled.div``;
const MenuSidebar = styled.div``;
const ProntEndLogo = styled.div``;
const Main = styled.div``;
const Footer = styled.div``;
const Title = styled.div``;

export default MainPage;
