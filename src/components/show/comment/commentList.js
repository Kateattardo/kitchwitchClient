import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "./CommentForm";

const CommentList = ({ list, onDeleteComment, onUpdateComment, userToken }) => {
  console.log(list, "show comments");
  return (
    <div>
      {list.map((comment) => (
        <CommentForm
          key={comment.id}
          comment={comment}
          onDeleteComment={onDeleteComment}
          onUpdateComment={onUpdateComment}
          userToken={userToken}
        />
      ))}
    </div>
  );
};

export default CommentList;
