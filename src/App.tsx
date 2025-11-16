
import { Dropdown, DropdownItem } from "flowbite-react";

export default function App() {
  return (
    <div className="flex justify-center p-1">
    <Dropdown label="Dropdown" className="focus:ring-1 focus:ring-blue-500 py-0.5">
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
    </div>
  );
}
