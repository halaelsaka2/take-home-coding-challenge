import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAll } from "../../Redux/Category/Action";
const Category = (props) => {
  useEffect(() => {
    props.getAll();
  }, []);

  return props.allCategories.map((product) => <div>{product.name}</div>);
};

const mapStateToProps = (state, ownProps) => {
  return { allCategories: state.CategoryReducer.allCategories };
};
const mapDispatchToProps = { getAll };

export default connect(mapStateToProps, mapDispatchToProps)(Category);
