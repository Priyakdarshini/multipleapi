import React, { useEffect, useState } from 'react'
import CountriesDisplay from './CountriesDisplay';
import { TextField } from '@mui/material';

export default function CountriesApi() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    function apiData() {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data)
                setData(data)
            })
    }
    useEffect(() => {
        apiData()
    }, [])

    const filterdata = data.filter((val) => {
        return val.name.common.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className='mt-5'>
            <div className=' d-flex justify-content-center'>
                <TextField id="outlined-basic" label="search" variant="outlined" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className='display'>
                {
                    filterdata.map((val) => {
                        return (
                            <CountriesDisplay
                                image={val.flags.png}
                                name={val.name.common}
                                capital={val.capital}
                                population={val.population}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
