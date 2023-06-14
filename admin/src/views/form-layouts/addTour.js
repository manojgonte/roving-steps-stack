// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles'

// ** Third Party Imports
import DatePicker from 'react-datepicker'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Icons Imports
import FileUpload from 'mdi-material-ui/FileUpload'
import { BASE_URL } from 'src/config'

const FromDate = forwardRef((props, ref) => {
    return <TextField fullWidth {...props} inputRef={ref} label='From Date' autoComplete='off' />
})

const EndDate = forwardRef((props, ref) => {
    return <TextField fullWidth {...props} inputRef={ref} label='End Date' autoComplete='off' />
})

const ButtonStyled = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        textAlign: 'center'
    }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
    marginLeft: theme.spacing(4.5),
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginLeft: 0,
        textAlign: 'center',
        marginTop: theme.spacing(4)
    }
}))

const FormLayoutsSeparator = () => {
    // ** States
    const [name, setName] = useState('mers');
    const [destination, setDestination] = useState('USA');
    const [tourType, setTourType] = useState('Domestic');
    const [pricePerson, setPricePerson] = useState(100);
    const [childPerson, setChildPerson] = useState(80);
    const [fromDate, setFromDate] = useState('2023-06-10');
    const [endDate, setEndDate] = useState('2023-06-15');
    const [days, setDays] = useState(5);
    const [nights, setNights] = useState(4);
    const [amenities, setAmenities] = useState('test ame');
    const [inclusions, setInclusions] = useState('incl');
    const [exclusions, setExclusions] = useState('excl');
    const [note, setNote] = useState('note');
    const [overview, setOverview] = useState('desc');
    const [popularPackage, setPopularPackage] = useState(false);

    const [image, setImage] = useState();
    const [error, setError] = useState(false);

    const addTour = async () => {
        
        if(!name || !destination || !image || !tourType || !pricePerson || !childPerson || !fromDate || !endDate || !days || !nights || !overview || !amenities || !inclusions || !exclusions || !note){
            setError(true);
        }

        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', name);
        formData.append('type', tourType);
        formData.append('destination', destination);
        formData.append('adult_price', pricePerson);
        formData.append('child_price', childPerson);
        formData.append('from_date', fromDate);
        formData.append('end_date', endDate);
        formData.append('days', days);
        formData.append('nights', nights);
        formData.append('description', overview);
        formData.append('amenities', amenities);
        formData.append('inclusions', inclusions);
        formData.append('exclusions', exclusions);
        formData.append('note', note);
        formData.append('is_popular', popularPackage);
        formData.append('status', '0');

        // const userId = JSON.parse(localStorage.getItem("user"))._id;
        try {
            let result = await fetch (`${BASE_URL}/tour/create/`, {
                method: "POST",
                body: formData,
            });
            result = await result.json();
            console.warn(result);
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
    
    const ImgStyled = styled('img')(({ theme }) => ({
        width: 120,
        height: 120,
        marginRight: theme.spacing(6.25),
        borderRadius: theme.shape.borderRadius
    }))

    const resetForm = () => { 
        document.getElementById("tour-form").reset();
    }

    return (
        <Card>
            <Divider sx={{ margin: 0 }} />
            <form id="tour-form" encType='multipart/form-data' onSubmit={e => e.preventDefault()}>
                <CardContent>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <Typography variant='body2' sx={{ fontWeight: 600 }}>
                                1. Tour Details
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth label='Tour Name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Tour Name' />
                            { error && !name && <label style={{fontSize: 13, color:'red'}}>Enter valid input</label> }
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id='form-layouts-separator-select-label'>Destination</InputLabel>
                                <Select
                                    label='Destination'
                                    value={destination}
                                    onChange={(e)=>setDestination(e.target.value)}
                                    defaultValue=''
                                    id='form-layouts-separator-select'
                                    labelId='form-layouts-separator-select-label' >
                                    <MenuItem value='Dubai'>Dubai</MenuItem>
                                    <MenuItem value='Abu Dhabi'>Abu Dhabi</MenuItem>
                                    <MenuItem value='UK'>UK</MenuItem>
                                    <MenuItem value='USA'>USA</MenuItem>
                                    <MenuItem value='Australia'>Australia</MenuItem>
                                    <MenuItem value='Germany'>Germany</MenuItem>
                                </Select>
                            </FormControl>
                            { error && !destination && <label style={{fontSize: 13, color:'red'}}>Enter valid input</label> }
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                                Upload Picture
                                <input
                                    hidden
                                    type='file'
                                    onChange={(e)=>setImage(e.target.files[0])}
                                    accept='image/png, image/jpeg'
                                    id='account-settings-upload-image'
                                />
                            </ButtonStyled>
                            { error && !image && <label style={{fontSize: 13, color:'red'}}>Choose image</label> }
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id='form-layouts-separator-select-label'>Tour Type</InputLabel>
                                <Select
                                    label='Tour Type'
                                    value={tourType}
                                    onChange={(e)=>setTourType(e.target.value)}
                                    defaultValue=''
                                    id='form-layouts-separator-select'
                                    labelId='form-layouts-separator-select-label' >
                                    <MenuItem value='Domestic'>Domestic</MenuItem>
                                    <MenuItem value='International'>International</MenuItem>
                                </Select>
                            </FormControl>
                            { error && !tourType && <label style={{fontSize: 13, color:'red'}}>Enter valid input</label> }
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth label='Price per person (Adult)' value={pricePerson} onChange={(e)=>setPricePerson(e.target.value)} placeholder='Enter Price' />
                            { error && !pricePerson && <label style={{fontSize: 13, color:'red'}}>Enter valid input</label> }
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth label='Price per person (Child)' value={childPerson} onChange={(e)=>setChildPerson(e.target.value)} placeholder='Enter Price' />
                            { error && !childPerson && <label style={{fontSize: 13, color:'red'}}>Enter valid input</label> }
                        </Grid>

                        <Grid item xs={2}>
                            <TextField
                                fullWidth
                                id="account-settings-date"
                                label="From Date"
                                type="date"
                                value={fromDate}
                                onChange={e => setFromDate(e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            { error && !fromDate && <label style={{fontSize: 13, color:'red'}}>Enter valid input</label> }
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                fullWidth
                                id="account-settings-date"
                                label="End Date"
                                type="date"
                                value={endDate}
                                onChange={e => setEndDate(e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            { error && !endDate && <label style={{fontSize: 13, color:'red'}}>Enter valid input</label> }
                        </Grid>                        
                        <Grid item xs={2}>
                            <FormControl fullWidth>
                                <InputLabel id='form-layouts-separator-multiple-select-label'>Day/s</InputLabel>
                                <Select
                                    value={days}
                                    onChange={(e)=>setDays(e.target.value)}
                                    id='form-layouts-separator-multiple-select'
                                    labelId='form-layouts-separator-multiple-select-label'
                                    input={<OutlinedInput label='Day/s' />} >
                                    <MenuItem value='1'>1</MenuItem>
                                    <MenuItem value='2'>2</MenuItem>
                                    <MenuItem value='3'>3</MenuItem>
                                    <MenuItem value='4'>4</MenuItem>
                                    <MenuItem value='5'>5</MenuItem>
                                    <MenuItem value='6'>6</MenuItem>
                                    <MenuItem value='7'>7</MenuItem>
                                </Select>
                            </FormControl>
                            { error && !days && <label style={{fontSize: 13, color:'red'}}>Enter valid input</label> }
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl fullWidth>
                                <InputLabel id='form-layouts-separator-multiple-select-label'>Night/s</InputLabel>
                                <Select
                                    value={nights}
                                    onChange={(e)=>setNights(e.target.value)}
                                    id='form-layouts-separator-multiple-select'
                                    labelId='form-layouts-separator-multiple-select-label'
                                    input={<OutlinedInput label='Night/s' id='select-multiple-language' />} >
                                    <MenuItem value='1'>1</MenuItem>
                                    <MenuItem value='2'>2</MenuItem>
                                    <MenuItem value='3'>3</MenuItem>
                                    <MenuItem value='4'>4</MenuItem>
                                    <MenuItem value='5'>5</MenuItem>
                                    <MenuItem value='6'>6</MenuItem>
                                    <MenuItem value='7'>7</MenuItem>
                                </Select>
                            </FormControl>  
                            { error && !nights && <label style={{fontSize: 13, color:'red'}}>Enter valid input</label> }  
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth label='Amenities' value={amenities} onChange={(e)=>setAmenities(e.target.value)} placeholder='Enter Amenities' />
                            { error && !amenities && <label style={{fontSize: 13, color:'red'}}>Enter valid input</label> }
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                label='Overview'
                                minRows={2}
                                placeholder='Enter Overview'
                                value={overview}
                                onChange={(e)=>setOverview(e.target.value)}
                            />
                            { error && !overview && <label style={{fontSize: 13, color:'red'}}>Enter valid input</label> }
                        </Grid>

                        <Grid item xs={6} sm={6}>
                            <TextField
                                fullWidth
                                multiline
                                label='Inclusions'
                                minRows={2}
                                placeholder='Enter Inclusions'
                                value={inclusions}
                                onChange={(e)=>setInclusions(e.target.value)}
                            />
                            { error && !inclusions && <label style={{fontSize: 13, color:'red'}}>Enter valid input</label> }
                        </Grid>

                        <Grid item xs={6} sm={6}>
                            <TextField
                                fullWidth
                                multiline
                                label='Exclusions'
                                minRows={2}
                                placeholder='Enter Exclusions'
                                value={exclusions}
                                onChange={(e)=>setExclusions(e.target.value)}
                            />
                            { error && !exclusions && <label style={{fontSize: 13, color:'red'}}>Enter valid input</label> }
                        </Grid>

                        <Grid item xs={12}>
                            <TextField fullWidth label='Note' value={note} onChange={(e)=>setNote(e.target.value)} placeholder='Enter Note' />
                            { error && !note && <label style={{fontSize: 13, color:'red'}}>Enter valid input</label> }
                        </Grid>

                        <Grid item xs={12}>
                            <FormControlLabel
                                label="Popular Tour Package"
                                control={<Checkbox checked={popularPackage} value={1} onChange={(e)=>setPopularPackage(e.target.checked)} />}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider sx={{ margin: 0 }} />
                <CardActions>
                    <Button onClick={addTour} size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                        Add
                    </Button>
                    <Button onClick={resetForm} size='large' color='secondary' variant='outlined'>
                        Reset
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
