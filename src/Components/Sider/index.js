import React, { useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Card, Slider, Checkbox } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { getProductsByfilters, savePriceRange, saveColors } from "../../Redux/Product/Action";

const SiderBody = (props) => {
  const [rangeValue, setRangeValue] = useState([]);
  const [colors, setColors] = useState([]);

  const rangePriceHandler = (value, l) => {
    console.log(value, l);
    setRangeValue(value);
  };
  const afterChangeRangePriceHandler = (values, l) => {
    console.log(values, l);
    console.log(rangeValue);
    props.savePriceRange(values);
    props.getProductsByfilters(props.currentCategory, colors, values, props.currentPage);
  };
  const clearRangeHandler = (e) => {
    setRangeValue([]);
    props.savePriceRange([]);
    props.getProductsByfilters(props.currentCategory, colors, [], props.currentPage);
  };
  const clearColorHandler = () => {
    setColors([]);
    props.saveColors([]);
    props.getProductsByfilters(props.currentCategory, [], rangeValue, props.currentPage);
  };
  const colorHandler = (values) => {
    console.log(values);
    setColors(values);
    props.saveColors(values);
    props.getProductsByfilters(props.currentCategory, values, rangeValue, props.currentPage);
  };
  return (
    <Card style={{ width: "100%", height: "100%" }}>
      <Row gutter={24} style={{ marginBottom: "2rem" }}>
        <Col span={24}>
          <Card
            actions={[
              <Row gutter={6} style={{ cursor: "pointer", marginLeft: ".5rem" }}>
                <Col>
                  <CloseOutlined onMouseUp={clearRangeHandler} />
                </Col>
                <Col>
                  <h4 onMouseUp={clearRangeHandler}>Clear</h4>
                </Col>
              </Row>,
            ]}
            style={{ width: "100% " }}
          >
            <Row gutter={24}>
              <Col span={24}>
                <h4>Price Range</h4>
                <Slider
                  style={{ width: "100%" }}
                  max={1000}
                  range={{ draggableTrack: true }}
                  value={rangeValue}
                  onChange={rangePriceHandler}
                  onAfterChange={afterChangeRangePriceHandler}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row gutter={24} style={{ marginBottom: "2rem" }}>
        <Col span={24}>
          <Card
            style={{ width: "100%" }}
            actions={[
              <Row gutter={6} style={{ cursor: "pointer", marginLeft: ".5rem" }}>
                <Col>
                  <CloseOutlined onClick={clearColorHandler} />
                </Col>
                <Col>
                  <h4 onClick={clearColorHandler}>Clear</h4>
                </Col>
              </Row>,
            ]}
            bodyStyle={{ height: "50vh", overflowY: "auto" }}
          >
            <Row gutter={24}>
              <Col span={24}>
                <h4>Colors</h4>
                <Checkbox.Group style={{ width: "100%" }} onChange={colorHandler} value={colors}>
                  {[...props.colors].length > 0 &&
                    [...props.colors].map((color) => (
                      <div style={{ width: "100%" }} key={color}>
                        <Checkbox style={{ width: "100%" }} value={color}>
                          {color}
                        </Checkbox>
                      </div>
                    ))}
                </Checkbox.Group>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.ProductReducer.currentPage,
    currentCategory: state.CategoryReducer.currentCategory,
  };
};
const mapDispatchToProps = {
  getProductsByfilters,
  savePriceRange,
  saveColors,
};

export default connect(mapStateToProps, mapDispatchToProps)(SiderBody);
