import styled from "styled-components";
import { ReactComponent as Imgmenu } from "../../../assets/images/Imgmenu.svg";
import { ReactComponent as Imglogo } from "../../../assets/images/Imglogo.svg";
import { ReactComponent as Searchimg } from "../../../assets/images/Searchimg.svg";
import { ReactComponent as Mikeimage } from "../../../assets/images/Mikeimage.svg";
import { ReactComponent as RightmenuE } from "../../../assets/images/RightmenuE.svg";
import { ReactComponent as Loginbtn } from "../../../assets/images/Loginbtn.svg";
import { useState } from "react";
import MenuBlock from "./dropdown/MenuBlock";
import MenuPoint from "./dropdown/MenuPoint";
import { Link } from "react-router-dom";
const YoutubeHedaer = ({ toggleSidebar }) => {
  return (
    <Wrapper>
      <Header>
        <Bar>
          <MenuImg>
            <span onClick={toggleSidebar}>
              <Imgmenu />
            </span>
          </MenuImg>
          <LogoImg>
            <Link to="/youtube">
              <Imglogo />
            </Link>
          </LogoImg>
        </Bar>
        <Search>
          <Input>
            <InputText placeholder="검색" />
            <BtnKey>
              <KeyLogo
                img
                src="https://www.gstatic.com/inputtools/images/tia.png"
              />
            </BtnKey>
          </Input>
          <LogoSearch>
            <ImgSearch>
              <Searchimg />
            </ImgSearch>
          </LogoSearch>
          <LogoMike>
            <ImgMike>
              <Mikeimage />
            </ImgMike>
          </LogoMike>
        </Search>
        <Right>
          <MenuBlock />
          <MenuPoint />
          <LoginBtnA>
            <Btnlogin>
              <Loginbtn />
            </Btnlogin>
            로그인
          </LoginBtnA>
        </Right>
      </Header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 75px;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: 0;
  position: fixed;
  z-index: 9999;
  background-color: #fff;
`;

const MenuImg = styled.div`
  width: 25px;
  height: 34px;
  margin-right: 22px;
`;
const LogoImg = styled.div`
  width: 90px;
  height: 40px;
`;
const Bar = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  width: 175px;
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-left: 24px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #efefef;
`;

const InputText = styled.input`
  border: none;
  flex: 1;
  width: 559px;
  height: 34px;
`;
const BtnKey = styled.button`
  display: flex;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
const KeyLogo = styled.image`
  width: 19px;
  height: 11px;
`;
const LogoSearch = styled.div`
  border: none;
  height: 35px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #efefef;
  background-color: transparent;
  padding: 1px 6px;
`;

const ImgSearch = styled.button`
  padding: 17px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const LogoMike = styled.button`
  height: 35px;
  width: 36px;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #efefef;
  border-radius: 100px;
  background-color: transparent;
  padding: 0;
`;
const ImgMike = styled.span`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;

const Right = styled.div`
  display: flex;
  margin: 5px 10px;
`;

const LoginBtnA = styled.button`
  width: 130px;
  height: 40px;
  border: 1px solid rgb(6, 95, 212);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  color: rgb(6, 95, 212);
  margin-top: 6px;
`;

const Btnlogin = styled.span`
  display: flex;

  width: 29px;
  border: none;
  color: rgb(6, 95, 212);
  padding-right: 5px;
`;

export default YoutubeHedaer;
