import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentForm = ({ recipeId, userToken }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingCommentText, setEditingCommentText] = useState('');
  const [error, setError] = useState(null);