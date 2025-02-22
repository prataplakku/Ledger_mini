import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import '../styles/charts.css'
import Multichart from "./Multichart";
const checklist = {
  total: 2856,
  Prepared: 53,
  Reviewed: 18,
};

const reconcile = {
  total: 3912,
  Complete: 68,
  Prepared: 42,
  Reviewed: 8,
};

// Colors for pie chart
const COLORS = ["#4CAF50", "#FFD700", "#FF6B6B"]; // Green, Yellow, Red

// Data for Checklist & Reconcile Donut Charts
const checklistData = [
  { name: "Completed", value: 514 },
  { name: "Pending", value: 1485 },
  { name: "Late", value: 957 },
];

const reconcileData = [
  { name: "Completed", value: 514 },
  { name: "Pending", value: 1485 },
  { name: "Late", value: 957 },
];

// Small charts for Prepared, Reviewed, Complete
const smallChartData = [
  { name: "Prepared", value: checklist.Prepared },
  { name: "Reviewed", value: checklist.Reviewed },
  { name: "Complete", value: reconcile.Complete },
];

const Charts = () => {
  return (
    <div className="chart-container">
      <h3>Close Status</h3>
      <div className="charts">
        <div className="chart1">

        </div>
        
        <div className="chart">
          <Multichart name='Checklist' data = {checklistData} COLORS = {COLORS}/>

        </div>


      </div>

    </div>
  );
};

export default Charts;
