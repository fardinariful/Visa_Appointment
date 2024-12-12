import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ApplicationCard from './ApplicationCard';
import { getAuth } from 'firebase/auth';

const MyApplication = () => {
    const loadedVisas =useLoaderData();
    const auth = getAuth()
    const user = auth?.currentUser;
    const email =user.email;
    console.log(email)
    const [visas,setvisas] =useState(loadedVisas)
    const [search,setSearch]=useState('')
    console.log(search)
    useEffect(()=>{
        fetch(`https://visa-navigator-server-zeta.vercel.app/users/${email}?searchParam=${search}`)
        .then(res=>res.json())
        .then(data=>{console.log('data',data);
            setvisas(data)
    })
        
    },[search]);

    return (
        <div>
            <div className='flex justify-center mb-5'>
            <input onChange={e=>setSearch(e.target.value)} type="text" placeholder="search" name='search' className="input  input-bordered w-full max-w-xs" />
            </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
            {
                visas.map(visa=><ApplicationCard key={visa._id} visa={visa} visas={visas} setvisas={setvisas}></ApplicationCard>)
            }
            
        </div>
        </div>
    );
};

export default MyApplication;