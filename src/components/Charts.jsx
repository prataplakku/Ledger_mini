import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import '../styles/charts.css'
import Multichart from "./Multichart";
import SingleChart from "./SingleChart";

const checklist = {
  total: 2000,
  Prepared: 100,
  Reviewed: 50,
};

const reconcile = {
  total: 3000,
  Complete: 70,
  Prepared: 150,
  Reviewed: 80,
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
      <h4>Close Status</h4>
      <div className="charts">

        <div className="chart1">
          <Multichart name='Checklist' data = {checklistData} COLORS = {COLORS}/>
          <h5>Checklist</h5>
          <div className="single-charts">
            <SingleChart className='small-chart' name = 'Prepared' percentage={checklist.Prepared} color = {"#4CAF50"} />
            <SingleChart className='small-chart' name = 'Reviewed' percentage={checklist.Reviewed} color = {"#FF8DA1"} />
          </div>
        </div>

        <div className="boundary-line"></div>
        
        <div className="chart2">
          <Multichart name='Reconcile' data = {reconcileData} COLORS = {COLORS}/>
          <h5>Reconcile</h5>
          <div className="single-charts">
            <SingleChart className='small-chart' name = 'Complete' percentage={reconcile.Complete} color = {"#4CAF50"} />
            <SingleChart className='small-chart' name = 'Prepared' percentage={reconcile.Prepared} color = {"#FF8DA1"} />
            <SingleChart className='small-chart' name = 'Reviewed' percentage={reconcile.Reviewed} color = {"#FF8DA1"} />
          </div>
        </div>
        


      </div>

    </div>
  );
};

export default Charts;
//Not USED
