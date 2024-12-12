import React from "react";
import { NavLink } from "react-router-dom";

const VisaCard = ({ visa }) => {
  const {
    _id,
    image,
    countryName,
    visaType,
    processingTime,
    requiredDocuments,
    description,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
  } = visa;

  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img src={image} alt="Visa pic" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {countryName}
          <div className="badge badge-neutral">{visaType}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <NavLink className={"btn"} to={`/visaDetails/${_id}`}>
            Visa Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
