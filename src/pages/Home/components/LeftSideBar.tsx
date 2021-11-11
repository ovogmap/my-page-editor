import styled from "@emotion/styled";

const LeftSideBarPure: React.FC = () => {
  return (
    <LeftSideBar>
      <Ul>
        <Li>test</Li>
        <Li>test</Li>
        <Li>test</Li>
        <Li>test</Li>
        <Li>test</Li>
        <Li>test</Li>
        <Li>test</Li>
      </Ul>
    </LeftSideBar>
  );
};

export default LeftSideBarPure;

const LeftSideBar = styled.aside`
  height: 100%;
  width: 250px;
  background: #ffffff;
  border-right: 1px solid #ededed;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Ul = styled.ul`
  width: 100%;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Li = styled.li`
  width: 100%;
  padding: 8px 14px;
  border-radius: 4px;

  background: #f8f8f8;
`;
