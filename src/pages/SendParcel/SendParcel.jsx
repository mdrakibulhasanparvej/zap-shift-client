import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAsioxSecure from "../../hooks/UseAsioxSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const serviceCenters = useLoaderData();
  const axiosSecure = useAsioxSecure();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

  const regionsduplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsduplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const distByRegions = (regions) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === regions);
    const districts = regionDistricts.map((r) => r.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log(cost);

    Swal.fire({
      title: `Are you agree with the cost: ${cost} ?`,
      text: `You will be charged at ${cost} Taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, take it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // save the parcel into to the database
        axiosSecure.post("/parcels", data).then((res) => {
          console.log(res.data);
        });

        // Swal.fire({
        //   title: "Proccing to Confirm Booking!",
        //   text: "Your Parcel has been Submited.",
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-10 min-h-screen my-10">
      <h2 className="text-2xl font-bold">Send A Parcel</h2>
      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-5 pb-10">
        {/* parcel type */}
        <div>
          <label className="label mr-5">
            <input
              type="radio"
              {...register("parcelType")}
              className="radio"
              value="document"
              defaultChecked
            />{" "}
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>

        {/*parcel info: name, weight  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (kg)</label>
            <input
              type="text"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        {/* two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          {/* sender Details */}
          <fieldset className="fieldset">
            <h2 className="text-xl font-bold my-2">Sender Details</h2>
            {/* sender name */}
            <label className="label">Sender Name</label>
            <input
              type="text"
              {...register("senderName")}
              defaultValue={user?.displayName}
              className="input w-full"
              placeholder="Sender Name"
            />
            {/* sender email */}
            <label className="label">Sender Email</label>
            <input
              type="text"
              {...register("senderEmail")}
              defaultValue={user?.email}
              className="input w-full"
              placeholder="Sender Email"
            />
            {/* sender address */}
            <label className="label">Address</label>
            <input
              type="text"
              {...register("senderAddress")}
              className="input w-full"
              placeholder="Address"
            />
            {/* sender Phone */}
            <label className="label">Sender Phone No</label>
            <input
              type="text"
              {...register("senderPhoneNo")}
              className="input w-full"
              placeholder="Sender Phone No"
            />

            {/* sender region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Your Region </legend>
              <select
                {...register("senderRegion")}
                defaultValue="Pick a browser"
                className="select"
              >
                <option>Select Your Region</option>
                {regions.map((region, i) => (
                  <option key={i} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Your District</legend>
              <select
                {...register("senderDistrict")}
                defaultValue="Pick a browser"
                className="select"
              >
                <option disabled={true}>Select Your District</option>
                {distByRegions(senderRegion).map((district, i) => (
                  <option key={i} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender pickup */}
            <label className="label">Pickup Instruction</label>
            <input
              type="text"
              {...register("senderPickupInfo")}
              className="input w-full"
              placeholder="Pickup Instruction"
            />
          </fieldset>
          {/* receiver info */}
          <fieldset className="fieldset">
            <h2 className="text-xl font-bold my-2">Receiver Details</h2>
            {/* receiver name */}
            <label className="label">Receiver Name</label>
            <input
              type="text"
              {...register("receiverName")}
              className="input w-full"
              placeholder="Receiver Name"
            />
            {/* sender email */}
            <label className="label">Recevier Email</label>
            <input
              type="text"
              {...register("receiverEmail")}
              className="input w-full"
              placeholder="Recevier Email"
            />
            {/*  receiver address */}
            <label className="label">Receiver Address</label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="Receiver Address"
            />
            {/*  receiver phone */}
            <label className="label">Receiver Phone No</label>
            <input
              type="text"
              {...register("receiverPhoneNo")}
              className="input w-full"
              placeholder="Receiver Phone No"
            />
            {/* receiver region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver Region </legend>
              <select
                {...register("receiverRegion")}
                defaultValue="Pick a browser"
                className="select"
              >
                <option>Select Receiver Region</option>
                {regions.map((reg, i) => (
                  <option key={i} value={reg}>
                    {reg}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver District</legend>
              <select
                {...register("receiverDistrict")}
                defaultValue="Pick a browser"
                className="select"
              >
                <option disabled={true}>Select Receiver District</option>
                {distByRegions(receiverRegion).map((dis, i) => (
                  <option key={i} value={dis}>
                    {dis}
                  </option>
                ))}
              </select>
            </fieldset>

            {/*  receiver delivery instruction */}
            <label className="label">Delivery Instruction</label>
            <input
              type="text"
              {...register("receiverdeliveryInfo")}
              className="input w-full"
              placeholder="Delivery Instruction"
            />
          </fieldset>
        </div>
        <p className="mb-8">* PickUp Time 4pm-7pm Approx.</p>
        <button type="submit" className="btn">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
