import React from "react";

function Card1() {
  return (
    <div style={{
      width: 320,
      padding: 20,
      border: "1px solid #ddd",
      borderRadius: 8,
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      background: "#fff",
      margin: 12
    }}>
      <h3>Card Title</h3>
      <p>This is a simple Card1 placeholder component.</p>
      <button style={{
        padding: "8px 12px",
        borderRadius: 4,
        border: "none",
        background: "#1976d2",
        color: "#fff",
        cursor: "pointer"
      }}>Action</button>
    </div>
  );
}

export default Card1;
