import React from "react";
import { ISection } from "../../types/section";
import { withRouter, RouteComponentProps } from "react-router";

import "./menu-item.styles.scss";

type Props = {
  section: ISection;
};

const MenuItem: React.FC<Props & RouteComponentProps> = ({
  section,
  history,
  match,
}) => {
  return (
    <div
      className={`${section.size} menu-item`}
      onClick={() => history.push(`${match.url}${section.linkUrl}`)}
    >
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

export default withRouter(MenuItem);
