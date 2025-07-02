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
    // making a requset to the DummyJson API//
    const response = await fetch('http://dummyjson.com/posts');
    // check if the request was successful//
    if (!response.ok) {
      throw new Error(`Failed to fetch posts`);
    }
    // convert response to JSON//
      const data = await response.json();
    // stores the posts in the state(take only first 10 to display---looks more neat)
     setPosts(data.posts.slice(0,10));
    // done loading//
      setLoading(false);
   } catch (error) {
    // if something goes wrong--store the error//
    setError(error.message);
    setLoading(false);
   }
  };

  // call the function to fetch posts---empty dependency array means this runs once when component mounts//
  fetchPosts();
  }, []);
  // show loading message when data is begin fetched.//
  if (loading) {
    return (
      <div className="loading-container">
        <h2 className="loading-title"> Loading Posts...</h2>
        <p className="loading-text">The latest posts are being fetched...</p>
      </div>
      );
     }

    //  show error message if something went wrong//
     if (error) {
      return (
        <div className="error-container">
          <h2 className="error-title"> Error--in fetching post...</h2>
          <p className="error-text">Error:{error}</p>
        </div>
        );
       }
      // main render - show the list of posts//
      return (
        <div className="page-container">
        <div className="posts-header">
          <h1 className="posts-title">Latest Posts</h1>
          <p className="posts-subtitle">
            Click on post title of your choice to read full article
          </p>
        </div>
        {/* container for all posts */}
        <div className="posts-grid">
          {posts.map((post) => (
            // each post wrapped in card container//
            <div key={post.id} className="post-card"> 
            {/* post title as a clickable link */}
            <h2 className="post-title">
              <Link to={`/posts/${post.id}`} className="post-title-link">
              {post.title}
              </Link>
            </h2>
          }
        </div>
        </div>
      )

  
