import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:5000/posts");
    setPosts(res.data);
  };

  const submitPost = async () => {
    if (!text.trim()) return;
    await axios.post("http://localhost:5000/posts", { text });
    setText("");
    fetchPosts();
  };

  return (
    <div className="app-container">
      {/* Animated Background Layers */}
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <div className="content">
        <h1 className="title">✨ Let's Make the World a Little Kinder ✨</h1>

        <div className="post-box">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="💖 Share a kind act you did or witnessed..."
            className="post-input"
            rows={3}
          />
          <button onClick={submitPost} className="post-button">
            🌟 Post It
          </button>
        </div>

        <div className="posts">
          {posts.length === 0 ? (
            <p className="no-posts">No posts yet — be the first to spread kindness! 💫</p>
          ) : (
            posts.map((p) => (
              <div key={p._id} className="post-card">
                <p>{p.text}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;


//dfmsdl;mf