import { useContext } from "react";
import "./App.css";
import UseRefExample from "./pages/UseRefExample";
import { TThemeContext, ThemeContext } from "./context/ThemeProvider";
import { MenuItem, MenuList } from "./components/menu";
import GameResults from "./pages/hooksPages/GameResults";
import Profile from "./pages/hooksPages/Profile";
import UsersContainer from "./components/UsersContainer";

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
      <UsersContainer />
    </div>
  );
}

export default App;
