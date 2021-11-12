import styled from "@emotion/styled";
import { useState } from "react";
import { IComponentsTypes, IEditorDataType, selectObjectTypeList } from "..";

interface ILeftSideBarPureProps {
  onClick: (key: IComponentsTypes) => void;
  editorData: IEditorDataType[];
}

const LeftSideBarPure: React.FC<ILeftSideBarPureProps> = ({
  onClick,
  editorData,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <LeftSideBar>
      <PositionContainer>
        <CreateButton onClick={() => setOpen((v) => !v)}>추가</CreateButton>
        {open && (
          <PositionItem>
            <Ul>
              {selectObjectTypeList.map((item, i) => (
                <Li
                  key={i}
                  onClick={() => {
                    setOpen(false);
                    onClick(item.contentTypeKey);
                  }}
                >
                  <ListItemButton>{item.displayText}</ListItemButton>
                </Li>
              ))}
            </Ul>
          </PositionItem>
        )}
      </PositionContainer>
      <Ul>
        {editorData.map((v) => (
          <Li>{v.type}</Li>
        ))}
      </Ul>
    </LeftSideBar>
  );
};

export default LeftSideBarPure;

const PositionContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 20px 20px;

  display: flex;
  justify-content: center;
`;

const CreateButton = styled.button`
  width: 100%;
  border-radius: 8px;
  padding: 8px 0;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  background: #3182f6;
  border: none;
  cursor: pointer;
`;

const PositionItem = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, 0);
  box-shadow: 0 1px 1px rgb(0 0 0 / 6%), 0 3px 12px rgb(0 0 0 / 15%);
  width: 210px;
  border-radius: 8px;
  background: #fff;
`;

const ListItemButton = styled.button`
  width: 100%;
  text-align: left;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  font-weight: 700;
  background: #fff;
  color: #333;
  border: none;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background: #ededed;
  }
`;

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
`;
