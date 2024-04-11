import React, { useEffect, useState } from 'react';

const PrimaryData = () => {
    const [data,setData] = useState([])
    useEffect(() =>{
        const allData = async () =>{
            const response = await fetch('/commercial-estate-data.json')
            const data = await response.json()
            console.log(data)
            setData(data)
        }
        return allData;
    },{})
    return {data};
};

export default PrimaryData;