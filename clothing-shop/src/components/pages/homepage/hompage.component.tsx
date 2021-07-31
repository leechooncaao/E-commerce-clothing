import React from "react";
import Directory from "../../directory/directory.component";

import "./homepage.styles.scss";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
