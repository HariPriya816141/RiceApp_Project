import { Card, Col, Row } from 'antd';
import "../../styles/blog.css"

const blogData = [
  {
    title: "5 Everyday Uses of Basmati Rice",
    desc: "Discover quick recipes and storage tips for your kitchen.",
    image: "/images/basmati-dish.jpg",
  },
  {
    title: "Is Organic Rice Worth It?",
    desc: "A dive into what makes organic rice different and beneficial.",
    image: "/images/organic-rice.jpg",
  },
  {
    title: "Festive Rice Recipes to Try",
    desc: "Cook delicious rice dishes this festive season!",
    image: "/images/festival-rice.jpg",
  }
];

const RecentBlogPosts = () => (
  <section className="recent-blogs">
    <h2 className="section-title">Recent Blog Posts</h2>
    <Row gutter={[24, 24]} justify="center">
      {blogData.map((post, index) => (
        <Col xs={24} sm={12} md={8} key={index}>
          <Card
            hoverable
            cover={<img alt={post.title} src={post.image} />}
            className="blog-card"
          >
            <Card.Meta title={post.title} description={post.desc} />
          </Card>
        </Col>
      ))}
    </Row>
  </section>
);

export default RecentBlogPosts;
