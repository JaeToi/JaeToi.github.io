import styled from "styled-components";

const Minisiderbar = ({ name, icon }) => {
  return (
    <Item>
      <Icon>{icon()}</Icon>
      <Name>{name}</Name>
    </Item>
  );
};

const Item = styled.div`
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px 20px;
  padding: 20px 10px;
  :hover {
    background: rgba(0, 0, 0, 0.05);
  }
  svg {
    width: 20px !important;
    height: 20px !important;
  }
`;
const Icon = styled.div``;
const Name = styled.div`
  width: 40px;
  text-align: center;
  font-size: 10px;
`;

export default Minisiderbar;
