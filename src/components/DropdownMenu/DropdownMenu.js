//Context
import { GlobalState } from "../../Store/GlobalStore";
import { useContext } from "react";
//Style
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./DropdownMenu.module.scss";
import "./../../variables/_variables.scss";

export const DropdownMenu = () => {
  const global = useContext(GlobalState);
  return (
    <>
      <Dropdown className={styles.dropdown}>
        <Dropdown.Toggle
          style={{
            backgroundColor: "#021b26e4",
            color: "#dddddd",
            border: "0",
          }}
          className={styles.toggle}
          id='dropdown-button-dark-example1'
        >
          Choose the season
        </Dropdown.Toggle>

        <Dropdown.Menu variant='dark'>
          <Dropdown.Item
            as='button'
            onClick={() =>
              global.globalClickHandler("http://localhost:3007/schedules/")
            }
          >
            20/21
          </Dropdown.Item>
          <Dropdown.Item
            as='button'
            onClick={() =>
              global.globalClickHandler("http://localhost:3007/schedules21_22/")
            }
          >
            21/22
          </Dropdown.Item>
          <Dropdown.Item
            as='button'
            onClick={() =>
              global.globalClickHandler("http://localhost:3007/schedules22_23/")
            }
          >
            22/23
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
