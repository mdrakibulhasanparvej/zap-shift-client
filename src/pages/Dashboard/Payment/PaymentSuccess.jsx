import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentinfo, setPaymentinfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();
  //   console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          //   console.log(res.data.transactionId);
          setPaymentinfo({
            trakingId: res.data.trakingId,
            transactionId: res.data.transactionId,
          });
        });
    }
  }, [sessionId, axiosSecure]);

  return (
    <div>
      <h2>payment Successful</h2>

      <p>Your trakingId is : {paymentinfo.trakingId}</p>
      <p>Your transactionId is : {paymentinfo.transactionId}</p>
      <Link to="/dashboard/my-percels">
        <button className="btn">Try Again</button>
      </Link>
    </div>
  );
};

export default PaymentSuccess;
