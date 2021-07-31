import React from "react";
import { ISection } from "../../types/section";

import "./menu-item.styles.scss";

type Props = {
  section: ISection;
};

const MenuItem: React.FC<Props> = ({ section }) => {
  return (
    <div className={`${section.size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${section.imageUrl})`,
        }}
      />
      <div className="content">
        <h2 className="title">{section.title.toUpperCase()}</h2>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
