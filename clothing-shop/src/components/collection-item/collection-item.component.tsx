import React from "react";

import "./collection-item.styles.scss";

type CollectionItemProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const CollectionItem: React.FC<CollectionItemProps> = ({
  id,
  name,
  price,
  imageUrl,
}) => (
  <div className="collection-item">
    <div
      className="image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
