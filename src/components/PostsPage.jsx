import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function PostsPage() {
  // state to store the posts data//
  const [post, setPosts] = useState([]);
  // state to track if user is still loading data//
  const [loading, setLoading] = useState(true);
  // state to handle any eroors that could occur//
  const [error, setError] = useState(null);

  // this effect runs when the componen first load/mounts//
  useEffect(() => {
    // function to fetch posts from the API//
    const fetchPosts = async () => {
      try {
        // make a request to DummyJSON API
        const repsone = await fetc"https://dummyjson.com/posts");
      }
 

