import styled from "@emotion/styled";
import { IComponentsTypes, IEditorDataType, ISrcType } from "..";
import main from "../../../assets/main.jpeg";

interface IContentPureProps {
  editorData: IEditorDataType[];
}

const ContentPure: React.FC<IContentPureProps> = ({ editorData }) => {
  const getComponent = (key: IComponentsTypes, props?: ISrcType) => {
    switch (key) {
      case "fullImgContent":
        return <FullImgContent {...props} />;
      case "doubleBoxContent":
        return <div>test</div>;
    }
  };

  return (
    <Content>
      <Board>
        {editorData.map((item) => getComponent(item.type, item.props))}
        {/* <Col>
          <FullImgContent
            imgSrc={main}
            size="small"
            title="토스커뮤니티 합류 여정"
            titleColor="#fff"
            subText={
              "그동안 경험하셨던 채용 프로세스, 길고 지루하게 느껴졌나요?\n걱정 마세요. 토스커뮤니티 합류 여정을 무사히 완주하실 수 있도록, 토스채용팀이 마라톤\n페이스메이커처럼 도와드리겠습니다."
            }
            subTextColor="#fff"
            textAlign="flex-start"
            textVertical="flex-end"
          />
        </Col> */}
        {/* <Col></Col> */}
      </Board>
    </Content>
  );
};
export default ContentPure;

export type IFullImgContentSize = "small" | "ragular" | "large";

interface IFullImgContentProps {
  imgSrc?: string;
  size?: IFullImgContentSize;
  title?: string;
  titleColor?: string;
  subText?: string;
  subTextColor?: string;
  textAlign?: string;
  textVertical?: string;
}

const FullImgContent: React.FC<IFullImgContentProps> = ({
  imgSrc,
  size = "ragular",
  title,
  titleColor,
  subText,
  subTextColor,
  textAlign = "flex-start",
  textVertical = "flex-end",
}) => {
  const clacHeight = (size: IFullImgContentSize) => {
    switch (size) {
      case "small":
        return "300px";
      case "ragular":
        return "400px";
      case "large":
        return "500px";
      default:
        return "400px";
    }
  };

  if (!imgSrc) return <div>이미지를 등록해주세요.</div>;
  return (
    <ImgContainer
      height={clacHeight(size)}
      imgSrc={imgSrc}
      textAlign={textAlign}
      textVertical={textVertical}
    >
      <TextContent>
        <TItle titleColor={titleColor}>{title}</TItle>
        <SubText subTextColor={subTextColor}>{subText}</SubText>
      </TextContent>
    </ImgContainer>
  );
};

interface ITextContentProps
  extends Pick<IFullImgContentProps, "textAlign" | "textVertical"> {}

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

interface ISubTextProps extends Pick<IFullImgContentProps, "subTextColor"> {}

const SubText = styled.p<ISubTextProps>`
  color: ${(props) => props.subTextColor || "#fff"};
  white-space: pre-wrap;
`;

interface ITitleProps extends Pick<IFullImgContentProps, "titleColor"> {}

const TItle = styled.h2<ITitleProps>`
  color: ${(props) => props.titleColor || "#fff"};
`;

interface IImgContainerProps
  extends Pick<IFullImgContentProps, "imgSrc" | "textAlign" | "textVertical"> {
  height: string;
}

const ImgContainer = styled.div<IImgContainerProps>`
  width: 100%;
  padding: 20px;
  height: ${(props) => props.height};
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const Content = styled.article`
  flex: 1;
  background: #f7f9fb;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 50px 0;
  overflow: auto;
`;

const Col = styled.div`
  width: 100%;
  min-height: 50px;
  padding: 16px 0;
  &:active {
    background: #f9f9f9;
    border-radius: 4px 0 0 4px;
    border-left: 2px solid #73c0ff;
    border-left-width: 4px;
  }
`;

const Board = styled.section`
  width: 80px;
  min-width: 800px;
  min-height: 500px;
  border-radius: 8px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 6%), 0 3px 12px rgb(0 0 0 / 15%);
  background: #fff;

  padding: 20px 0;
`;
