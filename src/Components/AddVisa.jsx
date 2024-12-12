import { getAuth } from 'firebase/auth';
import React from 'react';
import Swal from 'sweetalert2';

const AddVisa = () => {
    const handleSubmit =e=>{
        e.preventDefault();
        const auth = getAuth();
        const user = auth.currentUser;


        const form = e.target;
        const image = form.image.value;
        const countryName = form.countryName.value;
        const visaType = form.visaType.value;
        const processingTime = form.processingTime.value;
        const requiredDocuments = Array.from(form.requiredDocuments)
            .filter(doc => doc.checked)
            .map(doc => doc.value);
        const description = form.description.value;
        const ageRestriction = form.ageRestriction.value;
        const fee = form.fee.value;
        const validity = form.validity.value;
        const applicationMethod = form.applicationMethod.value;

        const newVisa = {
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
            createdBy: user.email,
            createdAt: new Date().toISOString()
        };
        console.log(newVisa);

        fetch('https://visa-navigator-server-zeta.vercel.app/visa',{
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newVisa)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="bg-gray-200 md:p-24 p-8">
            <h2 className="font-bold text-3xl">Add a Visa</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Country Image and Name */}
                <div className="md:flex justify-between gap-10">
                    <div className="md:w-1/2">
                        <input
                            className="input input-bordered join-item w-full"
                            name="image"
                            placeholder="Country Image URL"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <input
                            className="input input-bordered join-item w-full"
                            name="countryName"
                            placeholder="Country Name"
                        />
                    </div>
                </div>

                {/* Visa Type and Processing Time */}
                <div className="md:flex justify-between gap-10">
                    <div className="md:w-1/2">
                        <select
                            className="input input-bordered join-item w-full"
                            name="visaType"
                        >
                            <option value="Tourist visa">Tourist visa</option>
                            <option value="Student visa">Student visa</option>
                            <option value="Official visa">Official visa</option>
                        </select>
                    </div>
                    <div className="md:w-1/2">
                        <input
                            className="input input-bordered join-item w-full"
                            name="processingTime"
                            placeholder="Processing Time"
                        />
                    </div>
                </div>

                {/* Required Documents */}
                <div>
                    <p className="font-bold">Required Documents:</p>
                    <div className="flex gap-4 space-x-2">
                        <label>
                            <input
                                type="checkbox"
                                name="requiredDocuments"
                                value="Valid passport"
                            />
                            Valid passport
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="requiredDocuments"
                                value="Visa application form"
                            />
                            Visa application form
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="requiredDocuments"
                                value="Recent passport-sized photograph"
                            />
                            Recent passport-sized photograph
                        </label>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <textarea
                        className="textarea textarea-bordered join-item w-full"
                        name="description"
                        placeholder="Description"
                    />
                </div>

                {/* Age Restriction and Fee */}
                <div className="md:flex justify-between gap-10">
                    <div className="md:w-1/2">
                        <input
                            className="input input-bordered join-item w-full"
                            name="ageRestriction"
                            type="number"
                            placeholder="Age Restriction"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <input
                            className="input input-bordered join-item w-full"
                            name="fee"
                            type="number"
                            placeholder="Fee"
                        />
                    </div>
                </div>

                {/* Validity and Application Method */}
                <div className="md:flex justify-between gap-10">
                    <div className="md:w-1/2">
                        <input
                            className="input input-bordered join-item w-full"
                            name="validity"
                            placeholder="Validity"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <input
                            className="input input-bordered join-item w-full"
                            name="applicationMethod"
                            placeholder="Application Method"
                        />
                    </div>
                </div>

                <input className="btn btn-block" type="submit" value="Add Visa" />
            </form>
        </div>
    );
};

export default AddVisa;