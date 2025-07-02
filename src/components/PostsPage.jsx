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
        const repsone = await fetc("https://dummyjson.com/posts");
      }
    )};

    // making a requset to the DummyJson API//
    const response = await fetch('http://dummyjson.com/posts');
    // check if the request was successful//
    if (!response.ok) {
      throw new Error(`Failed to fetch posts`);
    }

    // convert response to JSON//
    const data = await response.json();

    // stores the posts in the state(take only first 10 for better display
  setPosts(data.posts.slice(0,10));
  setLoading(false);
