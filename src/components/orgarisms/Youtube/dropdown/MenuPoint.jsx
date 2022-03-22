import styled from "styled-components";
import { MenuPointFirst } from "../../../../data/Sidebar";
import SidebarItem from "../../../molcules/Youtube/Siderbaritem";
import { useState } from "react";
import { ReactComponent as RightmenuE } from "../../../../assets/images/RightmenuE.svg";
import useDropdownClickBody from "../../../../Hooks/useDropdownClickBody";

const DropdownCameratwo = () => {
  const [isShow, setIsShow] = useState(false);
  const element = useDropdownClickBody(() => setIsShow(false));
  return (
    <DropdownWrapperTwo>
      <RmenuE ref={element} onClick={() => setIsShow((prev) => !prev)}>
        <RightmenuE />
      </RmenuE>
      {isShow && (
        <List>
          {MenuPointFirst.map(({ icon, name }) => (
            <SidebarItem key={name} name={name} icon={icon} />
          ))}
        </List>
      )}
    </DropdownWrapperTwo>
  );
};

const DropdownWrapperTwo = styled.div`
  position: relative;
`;
const List = styled.div`
  position: absolute;
  background-color: #fff;
  color: black;
  width: 230px;
  border: 1px solid red;
  padding: 0;
  right: 37px;
  font-size: 14px;
`;
const RmenuE = styled.button`
  background-color: transparent;
  border: none;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export default DropdownCameratwo;
