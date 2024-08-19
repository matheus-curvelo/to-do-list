import React from "react";
import {Drawer, List, ListItem} from "@mui/material";
import "./DrawerMenu.scss";
import NavItems from "../NavItems";
import NavButtons from "../NavButtons";

interface DrawerMenuProps {
  open: boolean;
  onClose: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({open, onClose}) => {
  const handleItemClick = () => {
    onClose();
  };

  return (
    <Drawer className="drawer" anchor="left" open={open} onClose={onClose}>
      <List className="drawer_list">
        <ListItem
          className="drawer_list__item"
          button
          onClick={handleItemClick}>
          <NavItems />
        </ListItem>
        <ListItem
          className="drawer_list__item"
          button
          onClick={handleItemClick}>
          <NavButtons />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerMenu;
