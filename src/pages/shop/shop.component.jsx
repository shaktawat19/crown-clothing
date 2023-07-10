import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
// import { Route, Routes } from "react-router-dom";
// import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  );
};

export default ShopPage;
