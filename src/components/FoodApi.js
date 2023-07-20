import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import FoodDisplay from './FoodDisplay';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FoodApi() {
    const [data, setData] = useState([]);

    const [search, setSearch] = useState('');

    const [diet, setDiet] = useState('balanced');

    const [meal, setMeal] = useState('breakfast');

    const YOUR_APP_ID = 'd7932635'

    const YOUR_APP_KEY = '913b2d5a3c214896b849230db4868597'


    function apiData() {
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=20&calories=591-722&diet=${diet}&mealType=${meal}`)
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data.hits)
                setData(data.hits)
            })
    }
    useEffect(() => {
        apiData()
    }, [search, diet, meal])

    function dietType(val) {
        console.log(val)
        setDiet(val)
    }

    function mealType(val) {
        console.log(val)
        setMeal(val)
    }


    return (

        <div className='main'>
            <div className='drop1'>
                <div className='subdrop'>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth className='drop'>

                            <InputLabel id="demo-simple-select-label">DIET</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={diet}
                                label="Diet"
                                onChange={(e) => dietType(e.target.value)}
                            >
                                <MenuItem value={'balanced'}>Balanced</MenuItem>
                                <MenuItem value={'high-fiber'}>High-Fiber</MenuItem>
                            </Select>

                        </FormControl>
                    </Box>
                </div>

                <div className='subdrop' >
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth className='drop'>
                            <InputLabel id="demo-simple-select-label">MEAL</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={meal}
                                label="Meal"
                                onChange={(e) => mealType(e.target.value)}
                            >
                                <MenuItem value={'breakfast'}>Breakfast</MenuItem>
                                <MenuItem value={'lunch'}>Lunch</MenuItem>
                                <MenuItem value={'dinner'}>Dinner</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>

                <div>
                    <TextField id="outlined-basic" label="Search Food Item" variant="outlined" onClick={(e) => setSearch(e.target.value)} />
                </div>
            </div>

            <div className='drop2'>
                {
                    data.map((val) => {

                        return (
                            <FoodDisplay
                                image={val.recipe.image}
                                label={val.recipe.label}
                                source={val.recipe.source} />
                        )



                    })
                }

            </div>
        </div>
    )

}
