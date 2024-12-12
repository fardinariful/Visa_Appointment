import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import VisaCard from './VisaCard';

const AllVisa = () => {
    const loadedVisa = useLoaderData();
    const [visas, setVisas] = useState(loadedVisa);
    const [selectedType, setSelectedType] = useState('All');

  
    const visaTypes =['All']

    loadedVisa.forEach(visa=> {
        if (!visaTypes.includes(visa.visaType)){
            visaTypes.push(visa.visaType)
        }
    })

    // console.log("visa types",visaTypes)
    // const visaTypes = ['All', ...new Set(loadedVisa.map((visa) => visa.visaType))];

    const handleFilterChange = (event) => {
        const selectedVisaType = event.target.value;
        setSelectedType(selectedVisaType);

        if (selectedVisaType === 'All') {
            setVisas(loadedVisa);
        } else {
            setVisas(loadedVisa.filter((visa) => visa.visaType === selectedVisaType));
        }
    };

    return (
        <div>
            
            <div className="mb-5">
                <label htmlFor="visaType" className="mr-3">Filter by Visa Type:</label>
                <select
                    id="visaType"
                    value={selectedType}
                    onChange={handleFilterChange}
                    className="border p-2 rounded"
                >
                    {visaTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            
            <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
                {visas.map((visa) => (
                    <VisaCard key={visa._id} visa={visa}></VisaCard>
                ))}
            </div>
        </div>
    );
};

export default AllVisa;
