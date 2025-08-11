// src/components/Dashboard/StatCard2.jsx
import React from "react";
import {
  RiseOutlined,
  FallOutlined,
  ShoppingOutlined,
  UserOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import "../adminStyles/statCards2.css";

const cardData2 = [
  {
    icon: <DollarOutlined />,
    iconBg: "#FFE9D1",
    iconColor: "#A45D00",
    title: "Daily Revenue",
    value: "₹80,000",
    change: "up",
    chartType: "line",
    chartData: [
      { name: "Mon", value: 300 },
      { name: "Tue", value: 450 },
      { name: "Wed", value: 350 },
      { name: "Thu", value: 500 },
      { name: "Fri", value: 400 },
    ],
  },
  {
    icon: <ShoppingOutlined />,
    iconBg: "#D5E8FF",
    iconColor: "#004F9A",
    title: "Daily Orders",
    value: "500",
    change: "up",
    chartType: "bar",
    chartData: [
      { name: "A", value: 120 },
      { name: "B", value: 180 },
      { name: "C", value: 150 },
      { name: "D", value: 210 },
    ],
  },
  {
    icon: <UserOutlined />,
    iconBg: "#FFE0E6",
    iconColor: "#BF1650",
    title: "New Customers",
    value: "11,000",
    change: "down",
    chartType: "pie",
    chartData: [
      { name: "Returning", value: 300 },
      { name: "New", value: 700 },
    ],
  },
];

const StatCard2 = () => {
  return (
    <div className="statcard2-row">
      {cardData2.map((item, index) => (
        <div
          className="statcard2-card"
          key={index}
          style={{
            
            color: item.iconColor, // card text color
          }}
        >
          {/* Top Section */}
          <div className="statcard2-top">
            <div className="icon-circle">{item.icon}</div>

            <div className="statcard2-right">
              <div className="title">{item.title}</div>
              <div className="value-change">
                <span className="value">{item.value}</span>
                {item.change === "up" ? (
                  <RiseOutlined className="arrow up" />
                ) : (
                  <FallOutlined className="arrow down" />
                )}
              </div>
            </div>
          </div>

          {/* Chart Section */}
          {/* Chart Section */}
          <div className="statcard2-chart">
            {item.chartType === "line" && (
              <ResponsiveContainer width="100%" height={80}>
                <LineChart data={item.chartData}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={item.iconColor}
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={true}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}

            {item.chartType === "bar" && (
              <ResponsiveContainer width="100%" height={80}>
                <BarChart data={item.chartData}>
                  <Bar
                    dataKey="value"
                    fill={item.iconColor}
                    radius={[6, 6, 0, 0]}
                    isAnimationActive={true}
                  />
                </BarChart>
              </ResponsiveContainer>
            )}

            {item.chartType === "pie" && (
              <div style={{ width: "100%", height: 100 }}>
                <PieChart width={100} height={100}>
                  <Pie
                    data={item.chartData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={20}
                    outerRadius={35}
                    paddingAngle={3}
                    isAnimationActive={true}
                  >
                    {item.chartData.map((entry, i) => (
                      <Cell
                        key={`cell-${i}`}
                        fill={i === 0 ? "#FEC260" : item.iconColor}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCard2;
