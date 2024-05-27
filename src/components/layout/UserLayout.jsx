import { Col, Container, Row } from "react-bootstrap";

import { AuthRoute } from "../auth/AuthRoute";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { UserSideBar } from "./UserSideBar";
import { useSelector } from "react-redux";

export const UserLayout = ({ children, pageTitle }) => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <AuthRoute>
      <Header />

      {/* main-section */}
      <Container fluid>
        <Row>
          <Col xs={3} className="bg-dark text-light">
            <div className="p-3">
              <div className="">Welcome Back</div>
              <h3>{user.firstName + " " + user.lastName}</h3>
            </div>
            <hr />
            <UserSideBar />
          </Col>
          <Col>
            <div className="p-2">{pageTitle}</div>
            <div className="main">{children}</div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </AuthRoute>
  );
};
