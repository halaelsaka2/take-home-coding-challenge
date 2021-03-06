import { useEffect, useState } from "react";
import Category from "../../Components/Category";
import Product from "../../Components/Product";
import SiderBody from "../../Components/Sider";
import { Layout, Row, Col } from "antd";
import { connect } from "react-redux";
const { Header, Sider, Content } = Layout;
function App(props) {
  const [colors, setColors] = useState(new Set());
  useEffect(() => {
    let tempSet = new Set();
    props.allProducts.map((product) => {
      return tempSet.add(product.color);
    });
    setColors(tempSet);
  }, [props]);
  return (
    <Layout>
      <Row justify="center" style={{ backgroundColor: "white" }}>
        <Col>
          <h2 style={{ fontWeight: "bold" }}>Our E-Commerce Store</h2>
          <div>choose one of our category blew</div>
        </Col>
      </Row>

      <Header
        className="header"
        style={{
          backgroundColor: "white",
          height: window.innerWidth < 1000 ? "130px" : window.innerWidth < 760 ? "190px" : "100%",
        }}
      >
        <Category />
      </Header>
      <Layout>
        <Sider width={280} className="site-layout-background" style={{ backgroundColor: "white" }}>
          <SiderBody colors={colors} />
        </Sider>
        <Layout style={{ padding: "0 24px 24px", backgroundColor: "white" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Product />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { allProducts: state.ProductReducer.allProducts };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
