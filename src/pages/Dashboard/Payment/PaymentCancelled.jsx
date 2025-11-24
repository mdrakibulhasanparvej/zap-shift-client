import React from "react";
import { Link } from "react-router";

const PaymentCancelled = () => {
  return (
    <div>
      <h2>Payment Cancel</h2>
      <Link to="/dashboard/my-percels">
        <button className="btn">Try Again</button>
      </Link>
    </div>
  );
};

export default PaymentCancelled;
