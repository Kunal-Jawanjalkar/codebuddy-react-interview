import { useEffect, useState } from "react";
import PostCard from "./components/PostCard";
import { Col, Row } from "react-bootstrap";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    try {
      const response = await fetch("https://codebuddy.review/posts", {
        method: "GET",
      });

      // Check if the response is successful
      if (response.ok) {
        const data = await response.json();
        setPosts(data.data);
      } else {
        console.error("Error fetching posts:", response.statusText);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  // Example usage
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Row className="g-3 my-5">
        {posts.map((post) => {
          return (
            <Col key={post.id} sm={12} md={6} lg={4}>
              <PostCard post={post} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Posts;
