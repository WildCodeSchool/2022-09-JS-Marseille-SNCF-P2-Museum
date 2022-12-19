import React, { useState, useEffect, useContext } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IsSelectedContext from '../../../../contexts/IsSelectedContext'


function NavButton() {
    const {isSelected, setIsSelected} = useContext(IsSelectedContext);    
    const [state, setState] = React.useState({
          right: false,
        });
      
        const toggleDrawer = (right, open) => (event) => {
          if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
      
          setState({ ...state, [right]: open });
        };
    const list = (anchor) =>(
        <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {isSelected.map((item, index) => (
                <ListItem key={item} disablePadding>
                    <ListItemText style={{ textDecoration: "none" }} to="/">
                            Your favorites Work of Art:
                    </ListItemText>
                    <ListItemText style={{ textDecoration: "none" }} to="/">
                        {item?.webImage.url.replace("s0", "w310")}
                    </ListItemText>
                </ListItem>
                ))}
            </List>
        </Box>
    );
    return(
        <div>
            {['My Favorites'].map((anchor) => (
                <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                <Drawer
                    anchor={'right'}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

export default NavButton;