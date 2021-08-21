import { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";
import CloseButton from "./Buttons";
import Drawer from "@material-ui/core/Drawer";

import "./style.css";

export default function NavMenu() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const handleClose = () => {
    setDrawerIsOpen((prev) => !prev);
  };
  const handleHamburger = () => {
    setDrawerIsOpen((prev) => !prev);
  };

  const paths = [
    { name: "home", path: "/", exact: true },
    { name: "articles", path: "/articles", exact: true },
    { name: "contact", path: "/contact", exact: true },
    { name: "login", path: "/login", exact: true },
  ];

  const links = paths.map((e) => (
    <NavLink key={e.name} className="menu" to={e.path} exact={e.exact && true}>
      {e.name}
    </NavLink>
  ));

  return (
    <div>
      <Hamburger
        handleHamburger={handleHamburger}
        drawerIsOpen={drawerIsOpen}
      />
      <Drawer width={300} open={drawerIsOpen} variant={"persistent"}>
        <CloseButton handleClose={handleClose} />
        {links}
      </Drawer>
    </div>
  );
}
