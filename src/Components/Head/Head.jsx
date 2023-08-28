import Button from "../UI_Components/Button";
import Logo from "/public/images/logo.svg";
import Icon_Menu from "/public/images/icon-hamburger.svg";
import Icon_Close from "/public/images/icon-close.svg";
import Menu from "../UI_Components/Menu";
import { useState } from "react";

const Head = () => {
  const [menuToggleClose, setMenuTogggleOpen] = useState("hidden");

  const toggleMenuHandler = (e) => {
    console.log(e.target.attributes[0]);
    if (e.target.attributes[0].value !== Icon_Close) {
      e.target.attributes[0].value = Icon_Close;
      setMenuTogggleOpen("block");
    } else {
      e.target.attributes[0].value = Icon_Menu;
      setMenuTogggleOpen("hidden");
    }
  };

  return (
    <>
      <section
        className={`flex items-center justify-between px-5 py-5 lg:min-w-[65rem] lg:m-auto lg:max-w-[75rem]`}
      >
        <div>
          <img src={Logo} alt="easybank logo" role='logo'/>
        </div>
        <div
          className={`${menuToggleClose} absolute left-1/2 -translate-x-1/2  top-16 pt-7 bg-c_gradient_bw w-full h-screen lg:block lg:relative lg:left-0 lg:bg-none lg:h-full lg:top-0 lg:w-fit lg:pt-0`}
        >
          <Menu />
        </div>
        <div className={`hidden lg:block`}>
          <Button />
        </div>
        <div className={`lg:hidden cursor-pointer`} onClick={toggleMenuHandler}>
          <img
            src={Icon_Menu}
            alt="menu_icon"
            className={`transition-all duration-1000 ease-in-out`}
          />
        </div>
      </section>
    </>
  );
};

export default Head;
