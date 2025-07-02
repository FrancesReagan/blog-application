// PostDetailPage//
import React, { use } from "react";
import { useState, useEffect } from "react";
import { useParams,Link} from "react-router-dom";

function PostDetailPage() {
  // extract the postId from the URL (e.g. like/posts/222->postId="222")
  const { postId } = useParams();

  // state to store the individual post data//
  const [post, setPost] = useState(null);

  // state to track loading status//
  const [loading, setLoading] = useState(true);

  // state to handle errors//
  const [error, setError] = useState("null");

  // fetch a specific post when the component loads or postId changes//
  useEffect(() => {
    const fetchPost = async() => {
      try {
        // fetch a specific post using the postId from the URL//
        const response = await fetch(`https://dummyjson.com/posts/${postId}`);

        if(!response.ok) {
          throw new Error("Post is not found");
        }

        const postData = await response.json();
        setPost(postData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
      };

      fetchPost();
      // re-run if postId changes//
    },[postId];

    // show loading state//
    if (loading) {
      return (
        <div className="loading-container">
          <h2 className="loading-title">📖 Loading post details...</h2>
          <p className="loading-text">Fetching post #{postId} for you.</p>
        </div>
      );
    }

// show error state//
if (error) {
  return (
    <div className="error-container">
     <h2 className="error-title">Post Not Found...</h2>
     <p className="error-text">#{postId} could not be found...</p>
     <Link to="/posts" className="error-button">
      ↩ Back to All Posts
     </Link>
    </div>
  );
}

// main render--show the post details//
return (
  <header className="post-detail-container">
    {/* navigation "breadcrumb" */}
    <div className="breadcrumb">
      <Link to="/posts" className="breadcrumb-link">
      ←Back to All Posts
      </Link>
    </div>

    {/* post content */}
    <article className="post-article">
      {/* post header */}
      <header className="post-header">
        <h1 className="post-main-title">
          {post.title}
        </h1>

        {/* post metadata */}
        <div className="post-meta">
          <span>📜Post #{post.id}</span>
          <span>👨🏻‍💻User ID: {post.userId}</span>
          <span>😊 {post.reactions?.likes || 0}likes</span>
          <span>😒{post.reactions?.dislikes || 0} dislikes</span>
        </div>
      </header>

      {/* post body content */}
      <div className="post-content">
        <p>{post.body}</p>
      </div>

      {/* post tags (if available) */}
       {post.tags && post.tags.length > 0 && (
        <div className="tags-section">
          <h3 className="tags-title">
            🔖Tags:
          </h3>
          <div className="tags-container">
            {post.tags.map((tag,index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
       )}

    {/* post engagement section */}
     <div className="engagement-section">
      <h3 className="engagement-title">
        📶 Post Engagement
      </h3>
       <div className="engagement-grid">
        <div className="engagement-stat">
          <div className="engagement-number likes">
            {post.reactions?.likes || 0}
          </div>
           <div className="engagement-label">😊Likes</div>
        </div>
         <div className="engagement-stat">
           <div className="engagement-number dislikes">
            {post.reactions?.dislikes || 0}
           </div>
            <div className="engagement-label">😒Dislikes</div>
         </div>
          <div className="engagment-stat">
            <div className="engagement-number views">
              {post.views || "N/A"}
            </div>
             <div className="engagement-label">👁️Views</div>
          </div>
       </div>
     </div>
  </article>

{/* navigation buttons */}
 <div className="post-navigation">
  {/* previous post button */}
  {parseInt(postId) > 1 && (
    <Link to={`/posts/${parseInt(postId) - 1}`}
      className="nav-button secondary"
      >
       ⬅ Previous Post
      </Link>
  )}

{/* spacer for nav */}
 <div className="nav-spacer"></div>

 {/* next post button */}
  <Link to={`/posts${parseInt(postId) + 1}`}
    className="nav-button primary"
    >
      Next Post ➡
  </Link>
  </div>
</div>
);
}

export default PostDetailPage;


