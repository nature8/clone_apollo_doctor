import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Input,
  Button,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import { FaSearch, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.svg'; // Place logo in src/assets folder or adjust path

export default function Header() {
  return (
    <div className="border-bottom bg-white">
      {/* Row 1 */}
      <Navbar expand="md" className="py-2">
        <Container fluid>
          <Row className="w-100 align-items-center">
            {/* Left: Logo + Location */}
            <Col md="3" className="d-flex align-items-center">
              <NavbarBrand href="/">
                <img src={logo} alt="Apollo Logo" height="40" />
              </NavbarBrand>
              <div className="ms-3">
                <div className="fw-semibold small">Select Location</div>
                <div className="text-muted small">Select Address</div>
              </div>
            </Col>

            {/* Center: Search */}
            <Col md="6">
              <div className="d-flex bg-light rounded-pill px-3 py-1 align-items-center">
                <FaSearch className="text-secondary me-2" />
                <Input
                  type="search"
                  placeholder="Search doctors, specialists, conditions etc"
                  className="border-0 bg-transparent"
                />
              </div>
            </Col>

            {/* Right: Login */}
            <Col md="3" className="d-flex justify-content-end align-items-center">
              <Button color="link" className="text-decoration-none text-primary d-flex align-items-center">
                <FaUser className="me-2" />
                Login
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>

      {/* Horizontal Line */}
      <hr className="m-0" />

      {/* Row 2: Menu */}
      <Container fluid className="py-2 bg-white">
  <Nav className="d-flex justify-content-center flex-row align-items-center text-dark" navbar>
    <NavItem>
      <NavLink href="#" className="mx-3 text-dark">Buy Medicines</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#" className="mx-3 text-dark">Find Doctors</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#" className="mx-3 text-dark">Lab Tests</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#" className="mx-3 text-dark">Circle Membership</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#" className="mx-3 text-dark">Health Records</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#" className="mx-3 text-dark">Diabetes Reversal</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#" className="mx-3 text-dark">Buy Insurance</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#" className="mx-3 text-danger fw-bold">New</NavLink>
    </NavItem>
  </Nav>
</Container>

    </div>
  );
}
