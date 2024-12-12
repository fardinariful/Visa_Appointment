import React from 'react';
import Swal from 'sweetalert2';

const ApplicationCard = ({visa, visas,setvisas}) => {
    const {
        _id,
        name,
        email,
        appliedDate,
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
      const handleDelete = id =>{
       
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
              fetch(`https://visa-navigator-server-zeta.vercel.app/users/${_id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success",
                    });
                  }
                })
                .catch((error) => {
                  console.error("Error deleting coffee:", error);
                });
                const remaining = visas.filter(cof=> cof._id !== _id);
                  setvisas(remaining);
                
            }
          });
        }


    return (
        <div className="card bg-base-100  shadow-xl">
      <figure>
        <img src={image} alt="Visa pic" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {countryName || 'unknown country'}
          <div className="badge badge-neutral">{visaType}</div>
        </h2>
        <div className='flex gap-2 items-center'>
          <strong className="text-lg">Applicants Name:</strong>
          <p>{name}</p>
        </div>
        <div className='flex gap-2 items-center'>
          <strong className="text-lg"> Email:</strong>
          <p>{email}</p>
        </div>
        <div className='flex gap-2 items-center'>
          <strong className="text-lg">Fee:</strong>
          <p>${fee}</p>
        </div>
        <div className='flex gap-2 items-center'>
          <strong className="text-lg">Validity:</strong>
          <p>{validity}</p>
        </div>
        <div className='flex gap-2 items-center'>
          <strong className="text-lg">Applied Date:</strong>
          <p>{appliedDate}</p>
        </div>
        <div className='flex gap-2 items-center'>
          <strong className="text-lg">Application Method:</strong>
          <p>{applicationMethod}</p>
        </div>
       

        <div className="card-actions justify-end">
          <button onClick={()=>handleDelete(_id)} className='btn btn-warning'>Cancel</button>
        </div>
      </div>
    </div>
    );
};

export default ApplicationCard;