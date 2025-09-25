import React from "react";

import "app/App.css";
import Header from "components/Header";
import CommentModal from "components/CommentModal";
import CommentsPage from "components/CommentsPage";
import TopCommenters from "components/TopCommenters";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent, Divider } from "@material-ui/core";

// I'm gonna guess making the header fixed was on purpose, so here's my MUI-centric workaround.
const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar, // equals header's height
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Header />

      <CommentModal />

      <div className={classes.offset}></div>

      <TopCommenters />

      <Divider
        style={{
          margin: "24px 0",
        }}
      />

      <CommentsPage />
    </>
  );
}

export default App;
