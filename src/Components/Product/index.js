import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAll, getProductsByfilters } from "../../Redux/Product/Action";
import { Row, Col, Card, Rate, Pagination } from "antd";
import "./style.css";
const { Meta } = Card;
const Product = (props) => {
  useEffect(() => {
    if (props.allProducts.length === 0) props.getAll();
  }, [props]);

  const paginateHandler = (page) => {
    props.getProductsByfilters(props.currentCategory, props.currentColors, props.currentPriceRange, page);
  };

  return (
    <>
      <Row gutter={[16, 16]}>
        {props.allProductWithFilter.length > 0 ? (
          props.allProductWithFilter.map((product) => (
            <Col key={product.id} lg={{ span: 8 }} xl={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }}>
              <Card
                hoverable
                style={{ width: 240, textAlign: "center" }}
                cover={<img alt={product.name} src={product.image} />}
                bodyStyle={{ padding: "10px" }}
              >
                <Meta
                  avatar={
                    <div
                      style={{
                        height: "15px",
                        width: "15px",
                        backgroundColor: product.color,
                        borderRadius: "50%",
                        display: "inline-block",
                        marginTop: "5px",
                      }}
                    ></div>
                  }
                  title={product.name}
                  description={
                    <Col>
                      <Rate allowHalf value={product.rating} />
                      <h3>${product.price}</h3>
                    </Col>
                  }
                  className="metaClass"
                />
              </Card>
            </Col>
          ))
        ) : (
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <h3>No Products</h3>
          </div>
        )}
      </Row>
      <Row gutter={24}>
        <Col span={24} align="right">
          <Pagination
            total={props.productsCount}
            responsive={true}
            hideOnSinglePage={true}
            onChange={paginateHandler}
            showTotal={(total, range) => `${total} Products`}
          />
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    allProducts: state.ProductReducer.allProducts,
    productsCount: state.ProductReducer.productsCount,
    allProductWithFilter: state.ProductReducer.allProductWithFilter,
    currentColors: state.ProductReducer.currentColors,
    currentPage: state.ProductReducer.currentPage,
    currentPriceRange: state.ProductReducer.currentPriceRange,
    currentCategory: state.CategoryReducer.currentCategory,
  };
};
const mapDispatchToProps = { getAll, getProductsByfilters };

export default connect(mapStateToProps, mapDispatchToProps)(Product);
