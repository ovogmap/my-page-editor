import styled from "@emotion/styled";
import { useState } from "react";
import { IComponentsTypes, selectObjectTypeList } from "..";

interface ILeftSideBarPureProps {
  onClick: (key: IComponentsTypes) => void;
}

const LeftSideBarPure: React.FC<ILeftSideBarPureProps> = ({ onClick }) => {
  const [open, setOpen] = useState(false);
  return (
    <LeftSideBar>
      <button onClick={() => setOpen((v) => !v)}>추가</button>
      {open && (
        <Ul>
          {selectObjectTypeList.map((item, i) => (
            <Li
              key={i}
              onClick={() => {
                setOpen(false);
                onClick(item.contentTypeKey);
              }}
            >
              {item.displayText}
            </Li>
          ))}
        </Ul>
      )}
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
