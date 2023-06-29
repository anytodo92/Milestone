import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Helmet } from "react-helmet";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { Images } from "../../../utils/assets"

import {
  ScrollPostitionType
} from "../../../@types";
import {
  MainHeaderWrapper
} from "./styled";

let startPosY: number = 0;

const MainHeader: React.FC = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState<string>("/");
  const [linkList, setLinkList] = useState<Array<any>>([
    {
      title: "Auto",
      path: "/auto",
    },
    {
      title: "Motorrad",
      path: "/motorrad",
    },
    {
      title: "VKU",
      path: "/vku",
    },
    {
      title: "Nothelferkurs",
      path: "/nothelferkurs",
    },
    {
      title: "Preise",
      path: "/preise",
    },    
    {
      title: "Über Uns",
      path: "/uber-uns",
    },
    {
      title: "Kontakt",
      path: "/kontakt",
    },
  ]);

  const [showHeader, setShowHeader] = useState<boolean>(false);
  const [stickyBar, setStickyBar] = useState<boolean>(false);
  const [toggleStatus, setToggleSetatus] = useState<boolean>(false);
  useScrollPosition(({ prevPos, currPos }: ScrollPostitionType) => {
    if (Math.abs(currPos.y) > 60) {
      setStickyBar(true);
      setToggleSetatus(false);
    } else {
      setToggleSetatus(false);
      setStickyBar(false);
    }
  });

  const toggleMenu = () => {
    setToggleSetatus(!toggleStatus);
  }

  return (
    <MainHeaderWrapper
      className={
        `navbar
        ${stickyBar ? "sticky-bar" : "normal-bar"}
        ${toggleStatus ? "open" : ""}
        ${location.pathname !== '/' ? "reverse" : ""}
        `
      }
    >
      <div className="content">
        <div className="brand">
          <Link to="/">
          <img src={Images.LightGreenLogoUrl} />
          <img src={Images.LightGreenFullLogoUrl} />
          <img src={Images.WhiteFullLogoUrl} />
          </Link>
        </div>
        <div className="control">
          <ul className="menu">
          {linkList.map((data, index) =>
            <li
              key={index}
              className={
                `${(data.path === location.pathname)
                  ? "active" : ""}
                ${data.path === '/preise' ? "spec" : ""}
                `
              }
            >
              <Link to={data.path}>{data.title}</Link>
              <img className="icon" src={Images.UnderlineGreen} width={105} height={16} />
            </li>
          )}
          </ul>
        </div>
        <div
          className="toggle-btn"
          onClick={toggleMenu}
        >
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </MainHeaderWrapper>
  )
};

export default MainHeader;