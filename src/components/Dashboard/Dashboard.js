import React, { Fragment } from "react";
import "./Dashboard.css";

import {
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  AreaChart,
  Area,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      revenue: 61000,
    },
  ];

  return (
    <Fragment>
      <div className="row row-cols-md-2 w-100 g-4">
        <div className="col">
          <div className="card border-0">
            <div className="card-body">
              <LineChart
                width={400}
                height={200}
                data={data}
                margin={{ top: 20, right: 10, left: 20, bottom: 2 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
              </LineChart>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <div className="card-body">
              <BarChart width={400} height={200} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#8884d8" />
                <Bar dataKey="investment" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <PieChart width={400} height={200}>
              <Pie
                data={data}
                dataKey="investment"
                nameKey="month"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />
              <Pie
                data={data}
                dataKey="investment"
                nameKey="month"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <div className="card-body">
              <AreaChart
                width={400}
                height={200}
                data={data}
                margin={{ top: 20, right: 10, left: 20, bottom: 2 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="investment"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#colorPv)"
                />
              </AreaChart>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
