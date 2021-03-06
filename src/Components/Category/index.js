import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAll, saveCategoryId } from "../../Redux/Category/Action";
import { getProductsByfilters } from "../../Redux/Product/Action";
import { Row, Col } from "antd";

const Category = (props) => {
  useEffect(() => {
    if (props.allCategories.length === 0) props.getAll();
  }, [props]);

  const categoryHandler = (categoryId) => {
    props.saveCategoryId(categoryId);
    props.getProductsByfilters(categoryId, props.currentColors, props.currentPriceRange, props.currentPage);
  };
  return (
    <>
      <Row gutter={{ lg: 20, xl: 20, md: 24, sm: 24, xs: 24 }} justify="center">
        {props.allCategories.map((category) => (
          <Col lg={4} xl={4} md={8} sm={12} xm={12} key={category.id}>
            <h2
              style={{
                cursor: "pointer",
                textAlign: "center",
                width: "100%",
              }}
              onClick={() => categoryHandler(category.id)}
            >
              {category.name}
            </h2>
          </Col>
        ))}
      </Row>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    allCategories: state.CategoryReducer.allCategories,
    currentColors: state.ProductReducer.currentColors,
    currentPage: state.ProductReducer.currentPage,
    currentPriceRange: state.ProductReducer.currentPriceRange,
  };
};
const mapDispatchToProps = { getAll, getProductsByfilters, saveCategoryId };

export default connect(mapStateToProps, mapDispatchToProps)(Category);
