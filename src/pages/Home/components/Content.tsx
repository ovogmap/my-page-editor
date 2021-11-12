import styled from "@emotion/styled";
import React from "react";
import { IComponentsTypes, IEditorDataType, ISizeType, ISrcType } from "..";

interface IContentPureProps {
  editorData: IEditorDataType[];
}

const ContentPure: React.FC<IContentPureProps> = ({ editorData }) => {
  console.log("editorData", editorData);

  const getComponent = (
    key: IComponentsTypes,
    props?: ISrcType,
    contents?: ISrcType[]
  ) => {
    switch (key) {
      case "fullImgContent":
        return <FullImgContent props={props} />;
      case "doubleBoxContent":
        return <DoubleBoxContent props={props} contents={contents} />;
      case "blankSpace":
        return <div style={{ padding: "20px 0" }} />;
    }
  };

  return (
    <Content>
      <Board>
        {editorData.map((item, i) => (
          <Col key={i}>
            {getComponent(item.type, item.props, item.contents)}
          </Col>
        ))}
      </Board>
    </Content>
  );
};
export default ContentPure;

interface IDoubleBoxContent
  extends Pick<IEditorDataType, "contents" | "props"> {}

const DoubleBoxContent: React.FC<IDoubleBoxContent> = ({ props, contents }) => {
  console.log("props", props);
  console.log("contents", contents);
  return (
    <DoubleBoxContainer {...props}>
      {contents?.map((item) => (
        <BoxContent {...item}>
          <TextContent>
            <TItle {...item}>{item.title}</TItle>
            <SubText {...item}>{item.subText}</SubText>
          </TextContent>
        </BoxContent>
      ))}
    </DoubleBoxContainer>
  );
};

const DoubleBoxContainer = styled.div<ISrcType>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: ${(props) => props.doubleContentGap};
`;

const BoxContent = styled.div<ISrcType>`
  width: ${(props) => props.contentWidth || "320px"};
  height: ${(props) => props.contentHeight || "400px"};

  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: ${(props) => props.textVertical || "flex-end"};
  justify-content: ${(props) => props.textAlign || "flex-start"};
  color: ${(props) => props.titleColor || "#fff"};
  font-size: ${(props) => props.titleFontSize || "14px"};
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-repeat: no-repeat;
`;

/**
 *
 * FullImgContent Component
 *
 */

interface IFullImgContentProps extends Pick<IEditorDataType, "props"> {}

const FullImgContent: React.FC<IFullImgContentProps> = ({ props }) => {
  const clacHeight = (size?: ISizeType) => {
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

  if (!props || !props.imgSrc) return <div>이미지를 등록해주세요.</div>;
  return (
    <FullImgContainer height={clacHeight(props.size)} {...props}>
      <TextContent>
        <TItle {...props}>{props.title}</TItle>
        <SubText {...props}>{props.subText}</SubText>
      </TextContent>
    </FullImgContainer>
  );
};

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const SubText = styled.p<ISrcType>`
  color: ${(props) => props.subTextColor || "#fff"};
  font-size: ${(props) => props.subTextFontSize || "14px"};
  white-space: pre-wrap;
`;

const TItle = styled.h2<ISrcType>`
  color: ${(props) => props.titleColor || "#fff"};
  font-size: ${(props) => props.titleFontSize || "20px"};
  white-space: pre-wrap;
`;

interface IImgContainerProps extends ISrcType {
  height: string;
}

const FullImgContainer = styled.div<IImgContainerProps>`
  width: 100%;
  padding: 20px;
  height: ${(props) => props.height};
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: ${(props) => props.textVertical || "flex-end"};
  justify-content: ${(props) => props.textAlign || "flex-start"};
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
  min-width: 1200px;
  min-height: 500px;
  border-radius: 8px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 6%), 0 3px 12px rgb(0 0 0 / 15%);
  background: #fff;
  overflow: hidden;

  padding: 0;
`;
