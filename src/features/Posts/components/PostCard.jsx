import { Card, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const PostCard = ({ post }) => {
  return (
    <Card>
      <Card.Img variant="top" loading="lazy" src={post.image} alt="Post Image" />
      <Card.Body>
        <Row className="align-items-center mb-3">
          <Col xs={3}>
            <Card.Img loading="lazy" src={post.avatar} alt="Avatar" className="post-avatar" />
          </Col>
          <Col xs={9}>
            <Card.Title>
              {post.firstName} {post.lastName}
            </Card.Title>
          </Col>
        </Row>
        <Card.Text>{post.writeup}</Card.Text>
      </Card.Body>
    </Card>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
