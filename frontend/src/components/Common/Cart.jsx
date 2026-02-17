import React, { useEffect, useState } from "react";
import { Card, List, Button, Typography, Empty } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Empty description="Your cart is empty" />
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <Title level={3}>Your Cart</Title>

      <Card>
        <List
          itemLayout="horizontal"
          dataSource={cartItems}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <Button
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </Button>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: 60, height: 60, objectFit: "cover" }}
                  />
                }
                title={item.name}
                description={`₹${item.price}`}
              />
            </List.Item>
          )}
        />
      </Card>

      <Card className="mt-3 text-end">
        <Text strong>Total: ₹{totalAmount}</Text>
      </Card>
    </div>
  );
};

export default Cart;
