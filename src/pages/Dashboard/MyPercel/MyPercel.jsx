import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAsioxSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyPercel = () => {
  const { user } = useAuth();
  const axiosSecure = useAsioxSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handleView = (id) => {
    console.log(id);
  };
  const handleEdit = (id) => {
    console.log(id);
  };
  const handleDelete = (id) => {
    // console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          // console.log(res.data);
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handlePayment = async (parcel) => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };

    const res = await axiosSecure.post(
      "/payment-checkout-session",
      paymentInfo
    );
    window.location.assign(res.data.url);
    // console.log(res.data.url)
  };

  return (
    <div>
      <h2>Total percell: {parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Parcel Name</th>
              {/* <th>Parcel Type</th> */}
              <th>Weight (kg)</th>
              {/* <th>Sender</th> */}
              {/* <th>Receiver</th> */}
              <th>Cost (৳)</th>
              <th>Payment (৳)</th>
              <th>Delivery Status (৳)</th>
              {/* <th>Pickup Info</th> */}
              {/* <th>Delivery Info</th> */}
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id || index}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                {/* <td>{parcel.parcelType}</td> */}
                <td>{parcel.parcelWeight}</td>
                {/* <td>
                  {parcel.senderName} <br />
                  {parcel.senderPhoneNo} <br />
                  {parcel.senderEmail}
                </td> */}
                {/* <td>
                  {parcel.receiverName} <br />
                  {parcel.receiverPhoneNo} <br />
                  {parcel.receiverEmail}
                </td> */}
                <td>{parcel.cost}</td>
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <span className="text-white bg-green-800 px-4 py-1 rounded-2xl">
                      Paid
                    </span>
                  ) : (
                    // <Link to={`/dashboard/payments/${parcel._id}`}>
                    // </Link>
                    <button
                      onClick={() => handlePayment(parcel)}
                      className="text-white btn bg-red-800"
                    >
                      Pay
                    </button>
                  )}
                </td>
                <td>{parcel.deliveryStatus}</td>
                {/* <td>{parcel.senderPickupInfo}</td> */}
                {/* <td>{parcel.receiverdeliveryInfo}</td> */}
                <td>{new Date(parcel.created_at).toLocaleString()}</td>
                <td>
                  <button
                    onClick={() => handleView(parcel._id)}
                    className="btn btn-sm btn-primary"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleEdit(parcel._id)}
                    className="btn btn-sm btn-success ml-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(parcel._id)}
                    className="btn btn-sm btn-danger ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPercel;
