import styled from "styled-components";
import Minisiderbar from "../../molcules/Youtube/Minisiderbar";
import { MinisidebarF } from "../../../data/Minisidebar";

const MiniSidebar = () => {
  return (
    <Container>
      <List>
        {MinisidebarF.map(({ icon, name }) => (
          <Minisiderbar key={name} icon={icon} name={name} />
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 250px;
  height: calc(100vh - 56px);
  position: fixed;
  top: 83px;
  overflow: auto;
`;
const List = styled.div`
  width: 40px;
  height: 24px;
  margin-bottom: 20px;
  padding-bottom: 10px;
`;

export default MiniSidebar;
