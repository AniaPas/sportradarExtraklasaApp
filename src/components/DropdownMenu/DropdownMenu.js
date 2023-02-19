import Dropdown from "react-bootstrap/Dropdown";
import { GlobalState } from "../../Store/GlobalStore";
import { useContext } from "react";

export const DropdownMenu = ({ clickHandler }) => {
  const global = useContext(GlobalState);
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id='dropdown-button-dark-example1' variant='secondary'>
          Choose season
        </Dropdown.Toggle>

        <Dropdown.Menu variant='dark'>
          <Dropdown.Item
            as='button'
            onClick={() =>
              global.globalClickHandler("http://localhost:3007/schedules/")
            }
            active
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
          {/* <Dropdown.Divider />
        <Dropdown.Item href='#/action-4'>Separated link</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
