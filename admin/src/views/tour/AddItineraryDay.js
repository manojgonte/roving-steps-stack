// ** React Imports
import { forwardRef, useState } from 'react'

import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import FileUpload from 'mdi-material-ui/FileUpload'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

const ButtonStyled = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        textAlign: 'center'
    }
}))

const AddItineraryDay = (props) => {
    const [itinerary, setItinerary] = useState({place:'',activity:'',travelOption:'',description:'',stay:'',food:'',image:''});

    const [place, setPlace] = useState();
    const [activity, setActivity] = useState();
    const [travelOption, setTravelOption] = useState();
    const [description, setDescription] = useState();
    const [stay, setStay] = useState();
    const [food, setFood] = useState();
    const [image, setImage] = useState();

    return (
        <>
            <Grid item xs={12}>
                <Chip
                    label={`Day ${props.day}`}
                    variant="outlined" 
                    sx={{ fontWeight: 600, backgroundColor:'#76809F', color:'#fff' }}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField fullWidth label='Place to Visit' value={place} onChange={(e)=>setPlace(e.target.value)} placeholder='Enter Place to Visit' />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField fullWidth type='text' label='Activity of the Day' value={activity} onChange={(e)=>setActivity(e.target.value)} placeholder='Enter Activity' />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                    <InputLabel id='form-layouts-separator-select-label'>Travel Option</InputLabel>
                    <Select
                        label='Travel Option'
                        value={travelOption} 
                        onChange={(e)=>setTravelOption(e.target.value)}
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
                    value={description} 
                    onChange={(e)=>setDescription(e.target.value)}
                    label='Overview'
                    minRows={2}
                    placeholder='Enter Overview'
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField fullWidth type='text' label='Stay' value={stay} onChange={(e)=>setStay(e.target.value)} placeholder='Enter Stay' />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField fullWidth type='text' label='Food' value={food} onChange={(e)=>setFood(e.target.value)} placeholder='Enter Food' />
            </Grid>
            <Grid item xs={12} sm={4}>
                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                    Upload Picture
                    <input
                        hidden
                        type='file'
                        value={image}
                        onChange={(e)=>setImage(e.target.files[0])}
                        accept='image/png, image/jpeg'
                        id='account-settings-upload-image'
                    />
                </ButtonStyled>
            </Grid>
            <Grid item xs={12}>
                <Divider sx={{ marginBottom: 0 }} />
            </Grid>
        </>
    )
}

export default AddItineraryDay