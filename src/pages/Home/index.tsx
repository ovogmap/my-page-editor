import { useCallback, useEffect, useState } from "react";
import HomePure from "./Home";
import main from "../../assets/main.jpeg";

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
      titleFontSize: "20px",
      subText:
        "그동안 경험하셨던 채용 프로세스, 길고 지루하게 느껴졌나요?\n걱정 마세요. 토스커뮤니티 합류 여정을 무사히 완주하실 수 있도록, 토스채용팀이 마라톤\n페이스메이커처럼 도와드리겠습니다.",
      subTextFontSize: "14px",
      subTextColor: "#fff",
      textAlign: "flex-start",
      textVertical: "flex-end",
    },
  },
  doubleBoxContent: {
    type: "doubleBoxContent",
    props: {
      doubleContentGap: "30px",
    },
    contents: [
      {
        imgSrc: "https://static.toss.im/assets/homepage/team/team-1core.jpg",
        size: undefined,
        contentWidth: "300px",
        contentHeight: "480px",
        title: `상식적인 금용서비스는\n삶을 윤택하게 합니다.`,
        titleColor: "#333d4b",
        titleFontSize: "20px",
        subText: undefined,
        subTextColor: undefined,
        textAlign: "flex-start",
        textVertical: "flex-start",
      },
      {
        imgSrc:
          "https://static.toss.im/assets/homepage/team/team-2securities.jpg",
        size: undefined,
        contentWidth: "300px",
        contentHeight: "480px",
        title: `투자, 쉽게 시작하고 즐길 수\n있는 문화가 됩니다`,
        titleColor: "#333d4b",
        titleFontSize: "20px",
        subText: undefined,
        subTextColor: undefined,
        textAlign: "flex-start",
        textVertical: "flex-start",
      },
    ],
  },
  blankSpace: {
    type: "blankSpace",
  },
};

export type ISizeType = "small" | "ragular" | "large";

export type ISrcType = {
  imgSrc?: string;
  size?: ISizeType;
  title?: string;
  titleFontSize?: string;
  titleColor?: string;
  subText?: string;
  subTextFontSize?: string;
  subTextColor?: string;
  textAlign?: string;
  textVertical?: string;
  doubleContentGap?: string;
  contentWidth?: string;
  contentHeight?: string;
};

export interface IEditorDataType {
  type: IComponentsTypes;
  props?: ISrcType;
  contents?: ISrcType[];
}

const Home: React.FC = () => {
  const [editorData, setEditorData] = useState<IEditorDataType[]>([]);
  const [open, setOpen] = useState(false);

  const openHandle = useCallback(() => {
    setOpen((v) => !v);
  }, []);

  const [activeIdx, setActiveIdx] = useState(0);

  const [selectContentValue, SetSelectContentValue] =
    useState<IEditorDataType | null>(null);

  const onClick = (key: IComponentsTypes) => {
    setEditorData((v) => [...v, initialContent[key]]);
  };

  // useEffect(() => console.log(editorData), [editorData]);

  const [seletedKey, setSlectedKey] = useState({
    displayText: "이미지",
    contentTypeKey: "fullImgContent",
  });

  return (
    <HomePure
      editorData={editorData}
      onClick={onClick}
      open={open}
      openHandle={openHandle}
    />
  );
};

export default Home;
