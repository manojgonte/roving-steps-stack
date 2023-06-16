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

const ButtonStyled = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        textAlign: 'center'
    }
}))

const FormLayoutsSeparator = ({tourId}) => {
    // ** States
    const [tourDetails, setTourDetails] = useState('');
    const [itinerary, setItinerary] = useState({ place: '', activity: '', travelOption: '', description: '', stay: '', food: '', image: '' });
    const [formValues, setFormValues] = useState([{ place: '', activity: '', travelOption: '', description: '', stay: '', food: '', image: '' }])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { place: '', activity: '', travelOption: '', description: '', stay: '', food: '', image: '' }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(JSON.stringify(formValues));

        try {
            let result = await fetch(`${BASE_URL}/tour/itinerary/`, {
                method: "POST",
                body: JSON.stringify(formValues),
            });
            result = await result.json();
            console.warn(result);
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    useEffect(()=>{
        getTourBasicDetails();
        console.log('loaded');
    }, []);

    const getTourBasicDetails = async () => {
        let result = await fetch(`${BASE_URL}/tour/get/id/${tourId}`);
        result = await result.json();
        console.log(result.data[0]);
        setTourDetails(result.data[0]);
    }

    return (
        <Card>
            {/* <form>
                {formValues.map((element, index) => (
                    <div className="form-inline" key={index}>
                        <label>Name</label>
                        <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
                        <label>Email</label>
                        <input type="text" name="email" value={element.email || ""} onChange={e => handleChange(index, e)} />
                        {
                            index ? 
                            <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                            : null
                        }
                    </div>
                ))}
            </form>
            <div className="button-section">
                <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
                <button className="button submit" onClick={handleSubmit} type="button">Submit</button>
            </div> */}

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

                    {/* {Array.from({ length: tourDetails?.days }, (_, index) => ( */}

                    {formValues.map((element, index) => (
                        <Grid container spacing={5} key={index}>
                            <Grid item xs={12} sx={{ mt: 3 }}>
                                <Chip
                                    label={`Day ${index + 1}`}
                                    variant="outlined"
                                    sx={{ fontWeight: 600, backgroundColor: '#76809F', color: '#fff' }}
                                />
                                {index ?
                                    <Button size='small' type='button' sx={{ mr: 2, ml: 2 }} variant='outlined' onClick={() => removeFormFields(index)}>Remove</Button>
                                    : null
                                }
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField fullWidth label='Place to Visit' type="text" name="place" value={element.place || ""} onChange={e => handleChange(index, e)} placeholder='Enter Place to Visit' />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField fullWidth type='text' label='Activity of the Day' name="activity" value={element.activity || ""} onChange={e => handleChange(index, e)} placeholder='Enter Activity' />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth>
                                    <InputLabel id='form-layouts-separator-select-label'>Travel Option</InputLabel>
                                    <Select
                                        label='Travel Option'
                                        name="travelOption"
                                        value={element.travelOption || ""}
                                        onChange={e => handleChange(index, e)}
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
                                    value={element.description || ""}
                                    onChange={e => handleChange(index, e)}
                                    label='Overview'
                                    minRows={2}
                                    placeholder='Enter Overview'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField fullWidth type='text' label='Stay' name="stay" value={element.stay || ""} onChange={e => handleChange(index, e)} placeholder='Enter Stay' />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField fullWidth type='text' label='Food' name="food" value={element.food || ""} onChange={e => handleChange(index, e)} placeholder='Enter Food' />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <ButtonStyled component='label' variant='contained' htmlFor={`account-settings-upload-image-${index + 1}`}>
                                    Upload Picture
                                    <input
                                        hidden
                                        type='file'
                                        name="image"
                                        value={element.image || ""}
                                        onChange={e => handleChange(index, e)}
                                        accept='image/png, image/jpeg'
                                        id={`account-settings-upload-image-${index + 1}`}
                                    />
                                </ButtonStyled>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider sx={{ marginBottom: 0 }} />
                            </Grid>
                        </Grid>
                    ))}

                    <Grid sx={{ mt: 2 }}>
                        <Button size='small' type='button' sx={{ mr: 2 }} variant='contained' onClick={() => addFormFields()}>Add More </Button>
                    </Grid>

                    {/* <AddItineraryDay day={2} /> */}

                </CardContent>
                <Divider sx={{ margin: 0 }} />
                <CardActions>
                    <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained' onClick={handleSubmit}>
                        Save
                    </Button>
                    <Button size='large' color='secondary' variant='outlined'>
                        Cancel
                    </Button>
                </CardActions>
            </form>
        </Card>
    )
}

export default FormLayoutsSeparator
