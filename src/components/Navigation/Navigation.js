import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { GlobalState } from "../../Store/GlobalStore";
import { useContext } from "react";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  const global = useContext(GlobalState);
  return (
    <Navbar
      variant='dark'
      bg='dark'
      expand='lg'
      sticky='top'
      className={styles.wrapper}
    >
      <Container fluid>
        <Navbar.Brand href='#home'>Ekstrakqlasa Sportradar App</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-dark-example' />
        <Navbar.Collapse id='navbar-dark-example'>
          <Nav>
            <NavDropdown
              id='nav-dropdown-dark-example'
              title='Choose the season'
              menuVariant='dark'
            >
              <NavDropdown.Item
                onClick={() =>
                  global.globalClickHandler("http://localhost:3007/schedules/")
                }
              >
                2020/2021
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() =>
                  global.globalClickHandler(
                    "http://localhost:3007/schedules21_22/"
                  )
                }
              >
                2021/2022
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() =>
                  global.globalClickHandler(
                    "http://localhost:3007/schedules22_23/"
                  )
                }
              >
                2022/2023
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
