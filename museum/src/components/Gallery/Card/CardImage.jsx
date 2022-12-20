import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import CardMedia from "@mui/material/CardMedia";
import { TransitionProps } from "@mui/material/transitions";
import { Image } from "mui-image";
import Artist from "../../PrimaryContainer/Content/SearchBar/Filter/Artist";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CardImage = ({ image, imagePopup, title, artist }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CardMedia
        component="img"
        src={image}
        alt=""
        style={{ animation: `fadeIn 1s` }}
        onClick={handleClickOpen}
        showLoading
      />
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {title} - {artist}
            </Typography>
          </Toolbar>
        </AppBar>
        <img src={imagePopup} alt="" style={{ animation: `fadeIn 1s` }}></img>
      </Dialog>
    </>
  );
};

export default CardImage;
