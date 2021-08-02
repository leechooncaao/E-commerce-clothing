import React from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview, {
  CollectionProps,
} from "../../collection-preview/collection-preview.component";

type State = {
  collections: CollectionProps[];
};

type Props = {};

class ShopPage extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
