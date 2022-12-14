import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement,
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FeatureImage = ({ image, imagePopup, title, artist }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Tooltip describeChild title="Agrandir l'oeuvre" arrow>
        <img
          src={image}
          alt=""
          style={{ animation: `fadeIn 1s` }}
          onClick={handleClickOpen}
          elevation={24}
        ></img>
      </Tooltip>
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
              <b>{title}</b> - <i>{artist}</i>
            </Typography>
          </Toolbar>
        </AppBar>
        <img src={imagePopup} alt="" style={{ animation: `fadeIn 1s` }}></img>
      </Dialog>
    </div>
  );
};

export default FeatureImage;
