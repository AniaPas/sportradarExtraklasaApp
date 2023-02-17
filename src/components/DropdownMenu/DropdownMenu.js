import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export const DropdownMenu = ({ clickHandler }) => {
  return (
    <>
      <DropdownButton
        id='dropdown-button-dark-example2'
        variant='secondary'
        menuVariant='dark'
        title='Dropdown button'
        className='mt-2'
      >
        <Dropdown.Item
          as='button'
          onClick={() => clickHandler("http://localhost:3007/schedules/")}
          active
        >
          20/21
        </Dropdown.Item>
        <Dropdown.Item
          as='button'
          onClick={() => clickHandler("http://localhost:3007/schedules21_22/")}
        >
          21/22
        </Dropdown.Item>
        <Dropdown.Item
          as='button'
          onClick={() => clickHandler("http://localhost:3007/schedules22_23/")}
        >
          22/23
        </Dropdown.Item>
        {/* <Dropdown.Divider />
        <Dropdown.Item href='#/action-4'>Separated link</Dropdown.Item> */}
      </DropdownButton>
    </>
  );
};
