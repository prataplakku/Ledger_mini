import React from "react";
import '../styles/blocker.css'

const data = [
  {
    key: "1",
    name: "Reconcile cash transactions from bank statements (weeks 1/3)",
    preparer: { name: "John", initial: "J" },
    reviewer: { name: "David", initial: "D" },
    status: "Assigned",
  },
  {
    key: "2",
    name: "Reconcile cash transactions from bank statements (weeks 1/2)",
    preparer: { name: "Arnab", initial: "A" },
    reviewer: { name: "Ferdinand", initial: "F" },
    status: "Prepared",
  },
];

const statusColors = {
  Assigned: "blue",
  Prepared: "orange",
  Completed: "green",
  Unassigned: "red",
};



const Blockers = () => {
  return (
    <div>
      <h4>Blockers</h4>
      <div className="blocker-header">
        <span className="blocker-name">Name</span>
        <span className="blocker-preparer">Preparer</span>
        <span className="blocker-reviewer">Reviewer</span>
        <span className="blocker-status">Status</span>
      </div>
    </div>
  )
};

export default Blockers;
