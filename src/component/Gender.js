import React from "react";

export const Gender = (props) => {
  return (
    <select
      id="type"
      name="cars"
      onChange={(e) => props.gender(e.target.value)}
    >
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
  );
};