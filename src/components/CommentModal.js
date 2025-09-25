import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";

import {
  closeCommentsModal,
  getViewCommentsModalOpen,
} from "store/slices/view";

import { addComment } from "store/slices/comments";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const CommentModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const isOpen = useSelector(getViewCommentsModalOpen);

  const handleClose = () => dispatch(closeCommentsModal());

  // tied to our submit button for a new comment. dispatches the appropriate action, resets state, closes the modal.
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment({ name, comment }));
    setName("");
    setComment("");
    dispatch(closeCommentsModal());
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className={classes.modal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.form}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            label="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            variant="outlined"
          />
          <Button type="submit">Add Comment</Button>
        </form>
      </div>
    </Modal>
  );
};

export default CommentModal;
