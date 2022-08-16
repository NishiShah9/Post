import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Logo from "../../Images/logo.png";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { deletePost } from "../../Redux/Actions/PostAction";
import { useDispatch } from "react-redux";
import { ROUTES } from "../../Utils/Constant";
import { useNavigate } from "react-router";

function PostCard(item: any) {
  let token = localStorage.getItem("token") || null;
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const { post } = item;
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = (id: string) => {
    setOpen(false);
    dispatch(deletePost(id));
  };
  return (
    <Card className="post-card">
      <CardMedia
        component="img"
        sx={{ height: 80, width: 80 }}
        image={Logo}
        alt={post.id}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {post.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {post.body}
          </Typography>
        </CardContent>
        {token && (
          <Box className="post-action">
            <div>
              <EditIcon
                className="icon-color"
                onClick={() =>
                  navigate(ROUTES.ADD_POST, { state: { editPost: post } })
                }
              />
            </div>
            <div onClick={() => setOpen(true)}>
              <DeleteIcon className="delete-icon-color" />
            </div>
          </Box>
        )}
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {" Are you sure want to delete the post?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button
            className="header-button"
            variant="contained"
            onClick={() => handleDelete(post?.id)}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default PostCard;
