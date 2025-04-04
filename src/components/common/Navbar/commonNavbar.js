import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, Row, Col, Input, Button, } from "reactstrap";

const CommonNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleNavbar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide or show navbar based on scroll direction
      if (currentScrollY > 200) {
        if (currentScrollY > prevScrollY) {
          setIsNavbarVisible(false); // Scrolling down
        } else {
          setIsNavbarVisible(true); // Scrolling up
        }
      } else {
        setIsNavbarVisible(true); // Always show if scrolled less than 100px
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <Navbar className="navbar-top navbar-horizontal" expand="md">
      <Container className="px-2 d-flex align-items-center">
        <NavbarBrand to="/" tag={Link}>
          <img style={{ width: "140px", height: "auto" }} alt="..." src={"/blog-app/assets/logo.png"} />
        </NavbarBrand>
        <div className="ml-auto">
          <button className="navbar-toggler" onClick={toggleNavbar} aria-expanded={isOpen} style={{ border: 'none', background: 'transparent' }}>
            <svg width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd"
                d="M2.5 12.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0-4a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0-4a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11z"
              />
            </svg>
          </button>
        </div>
        <Collapse isOpen={isOpen} style={{ background: "#439C8B" }} navbar>
          <div className="navbar-collapse-header d-md-none">
            <Row>
              <Col className="collapse-brand" xs="6">
                <Link to="/">
                  <img alt="..." src={"/blog-app/assets/logo.png"} />
                </Link>
              </Col>
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  onClick={toggleNavbar}
                  aria-expanded={isOpen}
                  style={{ border: 'none', background: 'transparent' }} // Optional styling for button
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          <Nav className="ml-auto" navbar >
            {
              localStorage.getItem("token") ?
                <>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      to="/admin"
                      target="_blank"
                      tag={Link}
                      onClick={() => setIsOpen(false)}
                      style={{ color: "white" }} // Change text color to white
                    >
                      <i className="ni ni-planet" style={{ color: "white" }} /> {/* Change icon color to white */}
                      <span className="nav-link-inner--text" style={{ color: "white" }}>Dashboard</span> {/* Change text color to white */}
                    </NavLink>
                  </NavItem>
                </>
                : null
            }

            {
              !localStorage.getItem("token") ?
                <>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      style={{ color: "white" }} // Change text color to white
                    >
                      <div className="input-group">
                        <Input size="sm" type="text" className="form-control" placeholder="Search articles..." />
                        <div className="input-group-append">
                          <Button size="sm" color="secondary">Search</Button>
                        </div>
                      </div>
                      {/* <Input size={"sm"} type="text" placeholder="Search article..." /> */}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      to="/auth/login"
                      tag={Link}
                      target="_blank"
                      onClick={() => setIsOpen(false)}
                      style={{ color: "white" }} // Change text color to white
                    >
                      <i className="ni ni-key-25" style={{ color: "white" }} /> {/* Change icon color to white */}
                      <span className="nav-link-inner--text" style={{ color: "white" }}>Login</span> {/* Change text color to white */}
                    </NavLink>
                  </NavItem>
                </>
                : null
            }

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default CommonNavbar;
