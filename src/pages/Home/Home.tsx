import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { IComponentsTypes, IEditorDataType } from ".";
import { LeftSideBar, Content } from "./components";

interface IHomePureProps {
  editorData: IEditorDataType[];
  onClick: (key: IComponentsTypes) => void;
}

const HomePure: React.FC<IHomePureProps> = ({ editorData, onClick }) => {
  return (
    <Container>
      <Header>
        <Link to="">
          <h1>myEditor</h1>
        </Link>
        <button onClick={() => onClick("fullImgContent")}>
          fullImgContent
        </button>
        <button onClick={() => onClick("doubleBoxContent")}>
          doubleBoxContent
        </button>
      </Header>
      <Main>
        <LeftSideBar />
        <Content editorData={editorData} />
        {/* <RightSidebar></RightSidebar> */}
      </Main>
    </Container>
  );
};

export default HomePure;

interface IContainerProps {
  bgColor?: string;
}

const Container = styled.div<IContainerProps>`
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.bgColor || "#fff"};

  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background: #fff;
  border-bottom: 1px solid #ededed;

  h1 {
    color: #333;
    font-size: 16px;
  }
`;

const Main = styled.section`
  width: 100%;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

const RightSidebar = styled.aside`
  height: 100%;
  width: 250px;
  background: #ffffff;
  border-left: 1px solid #ededed;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
