import { useSelector } from "react-redux";
import { selectTopCommenters } from "store/slices/comments";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

// just copied over from comments page component
function initials(name) {
  const splitName = name.trim().split(/\s+/);
  const first = splitName[0]?.[0]?.toUpperCase() || "";
  const last = splitName[1]?.[0]?.toUpperCase() || "";
  return first + last || first || "🥸";
}

// thought it would be an easy, fun little addition to make each top commenter's avatar the appropriate medal color.
const useStyles = makeStyles((theme) => ({
  gold: {
    backgroundColor: "#D4AF37",
  },
  silver: {
    backgroundColor: "#C0C0C0",
  },
  bronze: {
    backgroundColor: "#CD7F32",
  },
}));

export default function TopCommenters() {
  const topCommenters = useSelector(selectTopCommenters);
  const classes = useStyles();
  const medalClasses = [classes.gold, classes.silver, classes.bronze];

  return (
    <>
      <h2>Top Commenters</h2>
      <List>
        {topCommenters.map((commenter, i) => (
          <>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={medalClasses[i]}>
                  {initials(commenter.name)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText>
                {commenter.name}:
                {` ${commenter.count} comment${commenter.count > 1 ? "s" : ""}`}
              </ListItemText>
            </ListItem>
          </>
        ))}
      </List>
    </>
  );
}
