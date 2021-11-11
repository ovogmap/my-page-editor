import styled from "@emotion/styled";
import React from "react";
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
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              style={{ width: "200px", height: "200px", background: "#333" }}
            />

            <div
              style={{ width: "200px", height: "200px", background: "#333" }}
            />
          </div>
        );
      case "blankSpace":
        return <div style={{ padding: "20px 0" }} />;
    }
  };

  return (
    <Content>
      <Board>
        {editorData.map((item, i) => (
          <Col key={i}>{getComponent(item.type, item.props)}</Col>
        ))}
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
  /* padding: 16px 0; */
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
