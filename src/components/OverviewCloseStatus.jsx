import { useState } from "react";
import MultiSegmentProgress from "./MultiSegmentProgress";
import CircleProgressBar from "./CircleProgressBar";

import "../styles/OverviewCloseStatus.css";

export default function OverviewCloseStatus() {
  const [segments] = useState([
    { percentage: 18, color: "#82e5be", label: "Completed", value: "514" },
    { percentage: 52, color: "#f4d674", label: "Pending", value: "1485" },
    { percentage: 30, color: "#f1aeae", label: "Late", value: "957" },
  ]);

  const secondSegments = [
    { percentage: 8, color: "#82e5be", label: "Completed", value: "514" },
    { percentage: 42, color: "#f4d674", label: "Pending", value: "1485" },
    { percentage: 50, color: "#f1aeae", label: "Late", value: "957" },
  ];

  return (
    <div className="overview-container">
      <h2 className="title">Close status</h2>

      <div className="grid-container">
        <div className="section border-right">
          <div className="grid">
            <MultiSegmentProgress segments={segments} size={300} circleStr="Checklist" circleNo="2856" />

            <div className="progress-section">
              <p className="progress-label">Checklist</p>
              <div className="progress-bars">
                <CircleProgressBar percentage={53} color="#7dd3fc" status="Prepared" />
                <CircleProgressBar percentage={18} color="#f1aeae" status="Reviewed" />
              </div>
            </div>
          </div>
        </div>

        <div className="section padding-left">
          <div className="grid">
            <MultiSegmentProgress segments={secondSegments} size={300} circleStr="Reconcile" circleNo="3912" />

            <div className="progress-section">
              <p className="progress-label">Reconcile</p>
              <div className="progress-bars">
                <CircleProgressBar percentage={68} color="#7dd3fc" status="Complete" />
                <CircleProgressBar percentage={42} color="#82e5be" status="Prepared" />
                <CircleProgressBar percentage={8} color="#f1aeae" status="Reviewed" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
