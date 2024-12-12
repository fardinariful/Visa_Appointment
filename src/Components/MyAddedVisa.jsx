import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import VisaCard from './VisaCard';
import MyAddedVisaCard from './MyAddedVisaCard';

const MyAddedVisa = () => {
    const loadedVisas = useLoaderData();
    const [visas,setvisas] = useState(loadedVisas)
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-8 '>
            {
                visas.map(visa=><MyAddedVisaCard visas={visas} setvisas={setvisas} key={visa._id} visa={visa}></MyAddedVisaCard>)
            }
            
        </div>
    );
};

export default MyAddedVisa;