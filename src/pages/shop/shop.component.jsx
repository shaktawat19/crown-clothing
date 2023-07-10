import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopData } from "../../redux/shop/shop.selectors";

const ShopPage = ({ shopCollection }) => {
  return (
    <div className="shop-page">
      {shopCollection.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopCollection: selectShopData,
});

export default connect(mapStateToProps)(ShopPage);
