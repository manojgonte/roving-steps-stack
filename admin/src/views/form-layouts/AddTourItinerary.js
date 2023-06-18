// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import TextField from '@mui/material/TextField'
import Chip from '@mui/material/Chip'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'

// ** Icons Imports
import BasicTourInfo from '../tour/BasicTourInfo'
import AddItineraryDay from '../tour/AddItineraryDay'

import { BASE_URL } from 'src/config'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Alert } from '@mui/material'

const ButtonStyled = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        textAlign: 'center'
    }
}))

const FormLayoutsSeparator = ({ tourId }) => {
    const router = useRouter();
    const [tourDetails, setTourDetails] = useState('');
    const [itineraryArray, setItineraryArray] = useState([]);
    const activity = {
        place: "",
        activity: "",
        travelOption: "",
        description: "",
        stay: "",
        food: "",
        image: ""
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        itineraryArray?.map(async (days) => {

            days?.activities?.map(async (activity, index) => {
                let activityIndex = index
                let tour_id = days.tourId
                let title = ""
                let day = days?.day + 1
                let description = activity?.description
                let myActivity = activity?.activity
                let stay = activity?.stay
                let food = activity?.food
                let status = ""
                let places_to_visit = activity?.place
                let travel = activity?.travelOption
                let image = activity?.image
                let overview = activity?.description
                let travel_options = activity?.travelOption

                let ActivityData = {
                    activityIndex: activityIndex,
                    tour_id: tour_id,
                    title: title,
                    day: day,
                    description: description,
                    myActivity: myActivity,
                    stay: stay,
                    food: food,
                    status: status,
                    places_to_visit: places_to_visit,
                    travel: travel,
                    image: image,
                    overview: overview,
                    travel_options: travel_options
                }

                try {

                    var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: JSON.stringify(ActivityData),
                        redirect: 'follow'
                    };

                    const data = await fetch('http://localhost:5000/tour-itinerary/create-itinerary', requestOptions);
                    const result = await data.json();
                    if (result?.message === "Itinerary created successfully") {
                        <Alert severity="error">Itinerary created successfully</Alert>
                    }
                } catch (error) {
                    console.error("An error occurred:", error);
                }

            })
        })
    }

    useEffect(() => {
        getTourBasicDetails();
    }, []);

    const getTourBasicDetails = async () => {
        if (tourId) {
            let result = await fetch(`${BASE_URL}/tour/get/id/${tourId}`);
            result = await result.json();
            setTourDetails(result.data[0]);
            if (result.data[0].id) {
                setItineraryArray(() => [...Array.from({ length: result.data[0]?.days }, (x, i) => ({ tourId: result.data[0].id, day: i, activities: [activity] }))]);
            }
        }
    }

    const handleChange = (dayIndex, activityIndex, event) => {
        const { name, value } = event.target;
        const updatedArray = itineraryArray.map((obj, index) => {
            if (index === dayIndex) {
                const updatedData = obj.activities.map((nestedObj, nestedIndex) => {
                    if (nestedIndex === activityIndex) {
                        return { ...nestedObj, [name]: value }; // Update the name property
                    }
                    return nestedObj; // Keep the nested object unchanged
                });
                return { ...obj, activities: updatedData }; // Update the data property
            }
            return obj; // Keep the object unchanged
        });
        setItineraryArray((prevFormData) => updatedArray);
    };

    const onclick = () => {
        router.push("/tours");
    }

    const addFormFields = (index) => {
        let newArr = itineraryArray;
        let updatedActArr = newArr.map((data, ind) => {
            if (ind === index) {
                return {
                    ...data,
                    activities: [
                        ...data?.activities,
                        activity
                    ]
                }
            } else return data;
        });
        setItineraryArray(() => updatedActArr)
    }

    const removeFormField = (dayIndex, activityIndex) => {
        let newArr = itineraryArray;
        let updatedActArr = newArr.map((data, ind) => {
            if (ind === dayIndex) {
                return {
                    ...data,
                    activities: data?.activities?.filter((act, index) => index !== activityIndex)
                }
            } else return data;
        });
        setItineraryArray(() => updatedActArr)
    }

    return (
        <Card>

            <Divider sx={{ margin: 0 }} />
            <form onSubmit={e => e.preventDefault()}>
                <CardContent>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <Typography variant='body2' sx={{ fontWeight: 600, marginBottom: 5 }}>
                                Tour Details
                            </Typography>

                            <BasicTourInfo tourDetails={tourDetails} />

                            <Divider sx={{ marginTop: 6.5, marginBottom: 6.75 }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body2' sx={{ fontWeight: 600 }}>
                                Add Itinerary
                            </Typography>
                        </Grid>
                    </Grid>

                    {itineraryArray.map((days, index) => (
                        <Grid container spacing={5} key={index}>
                            <Grid item xs={12} sx={{ mt: 3 }}>
                                <Chip
                                    label={`Day ${index + 1}`}
                                    variant="outlined"
                                    sx={{ fontWeight: 600, backgroundColor: '#76809F', color: '#fff' }}
                                />
                            </Grid>

                            {
                                days?.activities?.map((element, ind) => (
                                    (
                                        <>
                                            <Grid item xs={12} sx={{ mt: 3 }}>
                                                <Chip
                                                    label={`Activity ${ind + 1}`}
                                                    variant="outlined"
                                                    sx={{ fontWeight: 600, backgroundColor: '#76809F', color: '#fff' }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={4}>
                                                <TextField fullWidth label='Place to Visit' type="text" name="place" value={itineraryArray[index]?.activities[ind]?.place || ""} onChange={(e) => handleChange(index, ind, e)} placeholder='Enter Place to Visit' />
                                            </Grid>
                                            <Grid item xs={12} sm={4}>
                                                <TextField fullWidth type='text' label='Activity of the Day' name="activity" value={itineraryArray[index]?.activities[ind]?.activity || ""} onChange={e => handleChange(index, ind, e)} placeholder='Enter Activity' />
                                            </Grid>
                                            <Grid item xs={12} sm={4}>
                                                <FormControl fullWidth>
                                                    <InputLabel id='form-layouts-separator-select-label'>Travel Option</InputLabel>
                                                    <Select
                                                        label='Travel Option'
                                                        name="travelOption"
                                                        value={itineraryArray[index]?.activities[ind]?.travelOption || ""}
                                                        onChange={e => handleChange(index, ind, e)}
                                                        defaultValue=''
                                                        id='form-layouts-separator-select'
                                                        labelId='form-layouts-separator-select-label'>
                                                        <MenuItem value='Bike'>Bike</MenuItem>
                                                        <MenuItem value='Private Car'>Private Car</MenuItem>
                                                        <MenuItem value='Common Vehicle'>Common Vehicle</MenuItem>
                                                        <MenuItem value='Train'>Train</MenuItem>
                                                        <MenuItem value='Aeroplane'>Aeroplane</MenuItem>
                                                        <MenuItem value='Cruite'>Cruite</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <TextField
                                                    fullWidth
                                                    multiline
                                                    name="description"
                                                    value={itineraryArray[index]?.activities[ind]?.description || ""}
                                                    onChange={e => handleChange(index, ind, e)}
                                                    label='Overview'
                                                    minRows={2}
                                                    placeholder='Enter Overview'
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={4}>
                                                <TextField fullWidth type='text' label='Stay' name="stay" value={itineraryArray[index]?.activities[ind]?.stay || ""} onChange={e => handleChange(index, ind, e)} placeholder='Enter Stay' />
                                            </Grid>
                                            <Grid item xs={12} sm={4}>
                                                <TextField fullWidth type='text' label='Food' name="food" value={itineraryArray[index]?.activities[ind]?.food || ""} onChange={e => handleChange(index, ind, e)} placeholder='Enter Food' />
                                            </Grid>
                                            <Grid item xs={12} sm={4}>
                                                <ButtonStyled component='label' variant='contained' htmlFor={`account-settings-upload-image-${index + "." + ind + "." + 1}`}>
                                                    Upload Picture
                                                    <input
                                                        hidden
                                                        type='file'
                                                        name="image"
                                                        value={itineraryArray[index]?.activities[ind]?.image || ""}
                                                        onChange={e => handleChange(index, ind, e)}
                                                        accept='image/png, image/jpeg'
                                                        id={`account-settings-upload-image-${index + "." + ind + "." + 1}`}
                                                    />
                                                </ButtonStyled>
                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: 3 }}>
                                                <Button disabled={days?.activities?.length < 2} size='small' type='button' sx={{ mr: 2 }} variant='outlined' onClick={() => removeFormField(index, ind)}>Remove activity</Button>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Divider sx={{ marginBottom: 0 }} />
                                            </Grid>
                                        </>
                                    )
                                ))
                            }
                            <Grid item xs={12} sx={{ mt: 3 }}>
                                <Button size='small' type='button' sx={{ mr: 2 }} variant='contained' onClick={() => addFormFields(index)}>Add activity</Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Divider sx={{ marginBottom: 0 }} />
                            </Grid>
                        </Grid>
                    ))}

                    {/* <AddItineraryDay day={2} /> */}

                </CardContent>
                <Divider sx={{ margin: 0 }} />
                <CardActions>
                    <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained' onClick={handleSubmit}>
                        Save
                    </Button>
                    <Button onClick={() => onclick()} size='large' color='secondary' variant='outlined'>
                        Cancel
                    </Button>
                </CardActions>
            </form>
        </Card>
    )
}

export default FormLayoutsSeparator
