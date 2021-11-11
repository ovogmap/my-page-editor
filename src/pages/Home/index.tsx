import { useEffect, useState } from "react";
import HomePure from "./Home";
import main from "../../assets/main.jpeg";
import { IFullImgContentSize } from "./components/Content";

export type IComponentsTypes =
  | "fullImgContent"
  | "doubleBoxContent"
  | "blankSpace";

interface ISelectObjectTypeListType {
  displayText: string;
  contentTypeKey: IComponentsTypes;
}

export const selectObjectTypeList: ISelectObjectTypeListType[] = [
  {
    displayText: "이미지",
    contentTypeKey: "fullImgContent",
  },
  {
    displayText: "더블박스 컨포넌트",
    contentTypeKey: "doubleBoxContent",
  },
  {
    displayText: "공백",
    contentTypeKey: "blankSpace",
  },
];

const initialContent: {
  [key in IComponentsTypes]: IEditorDataType;
} = {
  fullImgContent: {
    type: "fullImgContent",
    props: {
      imgSrc: main,
      size: "small",
      title: "토스커뮤니티 합류 여정",
      titleColor: "#fff",
      subText:
        "그동안 경험하셨던 채용 프로세스, 길고 지루하게 느껴졌나요?\n걱정 마세요. 토스커뮤니티 합류 여정을 무사히 완주하실 수 있도록, 토스채용팀이 마라톤\n페이스메이커처럼 도와드리겠습니다.",
      subTextColor: "#fff",
      textAlign: "flex-start",
      textVertical: "flex-end",
    },
  },
  doubleBoxContent: {
    type: "doubleBoxContent",
  },
  blankSpace: {
    type: "blankSpace",
  },
};

export type ISrcType = {
  imgSrc?: string;
  size?: IFullImgContentSize;
  title?: string;
  titleColor?: string;
  subText?: string;
  subTextColor?: string;
  textAlign?: string;
  textVertical?: string;
};

export interface IEditorDataType {
  type: IComponentsTypes;
  props?: ISrcType;
}

const Home: React.FC = () => {
  const [editorData, setEditorData] = useState<IEditorDataType[]>([]);

  const [activeIdx, setActiveIdx] = useState(0);

  const [selectContentValue, SetSelectContentValue] =
    useState<IEditorDataType | null>(null);

  const onClick = (key: IComponentsTypes) => {
    setEditorData((v) => [...v, initialContent[key]]);
  };

  useEffect(() => console.log(editorData), [editorData]);

  const [seletedKey, setSlectedKey] = useState({
    displayText: "이미지",
    contentTypeKey: "fullImgContent",
  });

  return <HomePure editorData={editorData} onClick={onClick} />;
};

export default Home;
