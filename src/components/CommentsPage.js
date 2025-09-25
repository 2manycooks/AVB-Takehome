import { useSelector } from "react-redux";
import { selectComments } from "store/slices/comments";

export default function CommentsPage() {
  const comments = useSelector(selectComments);

  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li>
            {comment.name}: {comment.comment}
          </li>
        );
      })}
    </ul>
  );
}
