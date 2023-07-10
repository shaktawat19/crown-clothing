import "./collection.styles.scss";
import { connect } from "react-redux";
import React from "react";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItemComponent from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2>{title || "CheckoutPageeee"}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItemComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(),
});

export default connect(mapStateToProps)(CollectionPage);
