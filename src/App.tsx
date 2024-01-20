import { useContext } from "react";
import "./App.css";
import UseRefExample from "./pages/UseRefExample";
import { TThemeContext, ThemeContext } from "./context/ThemeProvider";
import { MenuItem, MenuList } from "./components/menu";
import GameResults from "./pages/hooksPages/GameResults";
import Profile from "./pages/hooksPages/Profile";
import UsersContainer from "./components/UsersContainer";
import Select from "./components/Select";

function App() {
  const { dark, setDark } = useContext(ThemeContext) as TThemeContext;
  // console.log(dark);
  return (
    <div
      className={`h-screen w-full flex justify-center items-center ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      {/* <button
        onClick={() => setDark(!dark)}
        className="px-5 py-2 border text-red-200"
      >
        toggle
      </button> */}
      {/* <UseRefExample></UseRefExample> */}
      {/* <MenuList>
        <MenuItem></MenuItem>
      </MenuList> */}

      {/* <Profile></Profile> */}
      {/* <GameResults></GameResults> */}
      {/* <UsersContainer /> */}
      <Select>
        <Select.SelectOption value="Option1">Option 1</Select.SelectOption>
        <Select.SelectOption value="Option2">Option 2</Select.SelectOption>
        <Select.SelectOption value="Option3">Option 3</Select.SelectOption>
        <Select.SelectOption value="Option4">Option 4</Select.SelectOption>
      </Select>
    </div>
  );
}

export default App;
