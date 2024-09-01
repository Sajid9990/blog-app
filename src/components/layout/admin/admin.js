import React from "react";
import AdminNavbar from "../../common/Navbar/AdminNavbar.js";
import Sidebar from "../../common/sidebar/Sidebar.js";
import Footer from "../../common/footer/AdminFooter.js";
import { Container } from "reactstrap";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import routes from "../../routing.js";

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  React.useEffect(() => {
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "",
          imgSrc: "/assets/logo.png",
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar  {...props} />
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/admin/dashboard" />} />
        </Routes>

        <Container fluid>
          <Footer />
        </Container>
      </div>
    </>
  );
};

export default Admin;
