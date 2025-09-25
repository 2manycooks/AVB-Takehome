import { useSelector } from "react-redux";
import { selectComments } from "store/slices/comments";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar, //didn't know this even existed, just looked for it because the avatar request in the instructions seemed specific.
  ListItemText,
  Divider, // not actually needed but the visual separation feels good
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// thought it would be fun to use the colors from step 1 in coloring the avatars.
const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

function initials(name) {
  const splitName = name.trim().split(/\s+/); // simple cleanup and split along whitespace
  const first = splitName[0]?.[0]?.toUpperCase() || ""; // optional chaining not necessarily needed here, but it covers our bases and I like optional chaining
  const last = splitName[1]?.[0]?.toUpperCase() || "";
  return first + last || first || "🥸"; // once again, just covering for future possible first/last name combos. especially if I grab from an API later or something. also sorry if the emoji is unprofessional, wasn't sure what to use as a fallback. other consideration was just a question mark or an X or something.
}

export default function CommentsPage() {
  const comments = useSelector(selectComments);
  const classes = useStyles();

  return (
    <List>
      {comments.map((comment) => {
        return (
          <>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  {initials(comment.name)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText>{comment.comment}</ListItemText>
              {/* feel a little bad about comment.comment but I didn't like using c or e or something from a visual standpoint. */}
            </ListItem>
            <Divider component="li" />
            {/* the docs recommend adding this component property so that they properly render as list items in the HTML */}
          </>
        );
      })}
    </List>
  );
}
