import styled from "styled-components";
import { menufirst } from "../../../../data/Sidebar";
import SidebarItem from "../../../molcules/Youtube/Siderbaritem";
import { useState } from "react";
import { ReactComponent as Rightmenu } from "../../../../assets/images/Rightmenu.svg";
import useDropdownClickBody from "../../../../Hooks/useDropdownClickBody";

const DropdownCamera = () => {
  const [isShow, setIsShow] = useState(false);
  const element = useDropdownClickBody(() => setIsShow(false));
  return (
    <DropdownWrapper>
      <RMenuBtn ref={element} onClick={() => setIsShow((prev) => !prev)}>
        <Rightmenu />
      </RMenuBtn>
      {isShow && (
        <List>
          {menufirst.map(({ icon, name }) => (
            <SidebarItem key={name} name={name} icon={icon} />
          ))}
        </List>
      )}
    </DropdownWrapper>
  );
};
const DropdownWrapper = styled.div`
  position: relative;
`;

const List = styled.div`
  position: absolute;
  background-color: #fff;
  color: black;
  width: 215px;
  border: 1px solid red;
  padding: 0;
  font-size: 14px;
`;
const RMenuBtn = styled.button`
  background-color: transparent;
  border: none;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export default DropdownCamera;
