import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAll } from "../../Redux/Product/Action";
const Product = (props) => {
  useEffect(() => {
    props.getAll();
  }, []);

  return props.allProducts.map((product) => <div>{product.name}</div>);
};

const mapStateToProps = (state, ownProps) => {
  return { allProducts: state.ProductReducer.allProducts };
};
const mapDispatchToProps = { getAll };

export default connect(mapStateToProps, mapDispatchToProps)(Product);
