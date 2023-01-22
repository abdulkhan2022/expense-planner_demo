import React from "react";

export default function ViewBudget(props) {
  return (
    <>
      <span>Budget: £{props.budget}</span>
      <button
        type="button"
        class="btn btn-primary"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </>
  );
}
