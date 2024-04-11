import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [properties, setProperties] = useState([])
    useEffect(()=>{
        fetch('/comercialData.JSON')
        .then(res => res.json())
        .then(data => setProperties(data))
    },[])
    return (
        <div className='space-y-4'>
            <h1 className="text-xl font-bold border-2 border-green">Commercial Properties</h1>
            {
                properties.map(property =>
                     <Link className='block ml-4 text-xl'
                      key={property.id}
                      to={`/property/${property.id}`}>
                        {property.name}
                     </Link>)
            }
        </div>
    );
};

export default LeftSideNav;