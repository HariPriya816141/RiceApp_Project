import { Card } from 'antd';
import {
  FireOutlined,
  BookOutlined,
  BulbOutlined,
  InboxOutlined
} from '@ant-design/icons';
import "../../styles/blog.css"

const categoryData = [
  {
    icon: <FireOutlined style={{ fontSize: '28px', color: '#198754' }} />,
    title: 'Rice Types',
    desc: 'Know your grains: basmati, jasmine, etc.',
  },
  {
    icon: <BookOutlined style={{ fontSize: '28px', color: '#ffc107' }} />,
    title: 'Recipes',
    desc: 'Quick & festive rice-based dishes.',
  },
  {
    icon: <BulbOutlined style={{ fontSize: '28px', color: '#198754' }} />,
    title: 'Cooking Tips',
    desc: 'Perfect water ratio? Rinse or not?',
  },
  {
    icon: <InboxOutlined style={{ fontSize: '28px', color: '#ffc107' }} />,
    title: 'Storage Guide',
    desc: 'How to store rice and keep it fresh.',
  }
];

const PopularCategories = () => (
  <section className="popular-categories">
    <h2 className="section-title">Popular Categories</h2>
    <div className="category-wrapper">
      {categoryData.map((cat, i) => (
        <Card key={i} className="category-card" bordered={false}>
          <div className="icon">{cat.icon}</div>
          <h3>{cat.title}</h3>
          <p>{cat.desc}</p>
        </Card>
      ))}
    </div>
  </section>
);

export default PopularCategories;
