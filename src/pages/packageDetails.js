import React, { useState } from "react";
import { useRouter } from "next/router";
//import PackageLayout from "../../components/PackageLayout";
import { getPackageById } from "../../api/packages";

const PackageDetails = ({ packageData }) => {
  const router = useRouter();
  const [numOfTravelers, setNumOfTravelers] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleBooking = () => {
    if (!startDate || !endDate) {
      setErrorMsg("Please select valid dates");
      return;
    }

    const queryParams = `?packageId=${packageData.id}&numOfTravelers=${numOfTravelers}&startDate=${startDate}&endDate=${endDate}`;
    router.push(`/checkout${queryParams}`);
  };

  return (
    <PackageLayout>
      <div className="package-details">
        <h1>{packageData.title}</h1>
        <p>{packageData.description}</p>
        <p>Duration: {packageData.duration} nights</p>
        <p>Price: {packageData.price}</p>
        <div className="booking-form">
          <div className="form-group">
            <label htmlFor="numOfTravelers">Number of Travelers:</label>
            <input
              type="number"
              id="numOfTravelers"
              value={numOfTravelers}
              onChange={(e) => setNumOfTravelers(e.target.value)}
              min="1"
              max="10"
            />
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          {errorMsg && <div className="error-msg">{errorMsg}</div>}
          <button onClick={handleBooking}>Book Now</button>
        </div>
      </div>
    </PackageLayout>
  );
};

export async function getServerSideProps({ params }) {
  const packageId = params.id;
  const packageData = await getPackageById(packageId);
  return {
    props: {
      packageData,
    },
  };
}

export default PackageDetails;
