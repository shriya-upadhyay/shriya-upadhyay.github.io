import { useState, useEffect } from 'react';
import './Writing.css';

function Writing() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('/medium.json')
            .then(res => {
                if (!res.ok) throw new Error('Not found');
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    setPosts(data);
                } else {
                    setError(true);
                }
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    const formatDate = (dateStr) => {
        const d = new Date(dateStr);
        return isNaN(d) ? '' : d.toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric',
        });
    };

    return (
        <div className="Writing">
            <h1 id="title">Writing</h1>
            <p className="writing-subtitle">
                Thoughts on tech, building things, and everything in between. Published on Medium.
            </p>

            {loading && (
                <div className="writing-loading">
                    <div className="loading-dots">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            )}

            {!loading && (error || posts.length === 0) && (
                <div className="writing-fallback">
                    <p>
                        {error ? "Couldn't load articles right now." : "No articles yet — check back soon."}
                    </p>
                    <a
                        href="https://medium.com/@shriyau19"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="writing-medium-link"
                    >
                        Read on Medium →
                    </a>
                </div>
            )}

            {!loading && posts.length > 0 && (
                <div className="writing-grid">
                    {posts.map((post, index) => (
                        <a
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="writing-card"
                            key={index}
                        >
                            {post.thumbnail && (
                                <div className="writing-thumbnail">
                                    <img src={post.thumbnail} alt={post.title} />
                                </div>
                            )}
                            <div className="writing-card-body">
                                <span className="writing-date">{formatDate(post.pubDate)}</span>
                                <h2 className="writing-title">{post.title}</h2>
                                <p className="writing-excerpt">{post.excerpt}…</p>
                                <span className="writing-read-more">Read on Medium →</span>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Writing;
