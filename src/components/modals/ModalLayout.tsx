import React, { useEffect } from "react";
import styled from "styled-components";

const ModalLayoutWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;

  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.38);
    z-index: 100;
  }
`

type ModalLayoutProps = {
  children: React.ReactNode,
  opened: boolean,
  onClose: () => void,
}

const ModalLayout = ({ children, opened, onClose }: ModalLayoutProps): JSX.Element => {
  useEffect(() => {
    if (opened) {
      (document.querySelector("body") as any).style.overflow = "hidden";
    } else {
      (document.querySelector("body") as any).style.overflow = "unset";
    }

  }, [opened])
  if (opened) {
    return (
      <ModalLayoutWrapper>
        <div className="overlay" onClick={() => {
          (document.querySelector("body") as any).style.overflow = "unset";
          onClose();
        }}></div>
        {children}
      </ModalLayoutWrapper>
    );
  } else {
    return <></>
  }
  
}

export default ModalLayout;