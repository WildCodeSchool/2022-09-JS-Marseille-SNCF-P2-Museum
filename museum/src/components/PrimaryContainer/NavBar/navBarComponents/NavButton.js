import React, {useContext } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import IsSelectedContext from '../../../../contexts/IsSelectedContext'
import SelectedCardBody from "./SelectedCards/SelectedCardBody"
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";

function NavButton() {
    const {isSelected} = useContext(IsSelectedContext);    
    const [state, setState] = React.useState({
          right: false,
        });
      
        const toggleDrawer = (right, open) => (event) => {
          if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
      
          setState({ ...state, [right]: open });
        };
    const list = (anchor) => (
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <Typography
            variant="titleDrawer"
            gutterBottom
            ml={2}
            mt={4}
            variant="button"
          >
            Vos oeuvres d'art favorites
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
          >
            {isSelected.map((item, index) => (
              <SelectedCardBody
                key={index}
                image={item?.webImage.url.replace("s0", "w310")}
                imagePopup={item?.webImage.url.replace("s0", "w3000")}
                title={item?.title}
                artist={item?.principalOrFirstMaker}
              />
            ))}
          </List>
        </List>
      </Box>
    );
    return (
      <div>
        {["Mes Favoris"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              startIcon={<FavoriteIcon />}
              variant="outlined"
              onClick={toggleDrawer(anchor, true)}
              sx={{
                color: "secondary.main",
              }}
            >
              {anchor}
            </Button>
            <Drawer
              anchor={"right"}
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