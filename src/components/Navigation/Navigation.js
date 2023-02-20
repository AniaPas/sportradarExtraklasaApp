//Router
import { Link } from "react-router-dom";
//Style
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./Navigation.module.scss";
export const Navigation = () => {
  return (
    <Navbar variant='dark' expand='lg' sticky='top' className={styles.wrapper}>
      <Container fluid>
        <Navbar.Brand>
          <Link to='/'>Ekstraklasa Sportradar App</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-dark-example' />
        <Navbar.Collapse id='navbar-dark-example'>
          <Nav>
            <NavDropdown
              id='nav-dropdown-dark-example'
              title='Ready? Go!'
              menuVariant='dark'
            >
              <Link to='/' className={styles.link}>
                Results table
              </Link>

              <NavDropdown.Item></NavDropdown.Item>
              <NavDropdown.Divider />
              <Link to='/matchtimeline' className={styles.link}>
                Match timeline
              </Link>
              <NavDropdown.Item></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
