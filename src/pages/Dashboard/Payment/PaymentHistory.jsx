import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: paymentHistory=[], refetch } = useQuery({
    queryKey: ["paymentHistory", user.email],
    queryFn: async () => {
      const res = await axiosSecure(`/payments-history?email=${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h2>Payment history: {paymentHistory.length} </h2>
    </div>
  );
};

export default PaymentHistory;
