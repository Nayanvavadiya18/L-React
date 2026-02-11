import React, { useState } from "react";

function Slider() {
  const [value, setValue] = useState(50);

  return (
    <div style={{ width: "100%", maxWidth: 680, padding: 16 }}>
      <label style={{ display: "block", marginBottom: 8 }}>Adjust value: {value}</label>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default Slider;
