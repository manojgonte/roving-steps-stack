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

import { Box } from '@mui/material';

// ** Third Party Imports
import DatePicker from 'react-datepicker'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Icons Imports
import FileUpload from 'mdi-material-ui/FileUpload'

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
    const [language, setLanguage] = useState([])
    const [fromDate, setFromDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    const [checked, setChecked] = useState([true, false]);

    const ImgStyled = styled('img')(({ theme }) => ({
        width: 120,
        height: 120,
        marginRight: theme.spacing(6.25),
        borderRadius: theme.shape.borderRadius
    }))

    const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')

    const onChange = file => {
        const reader = new FileReader()
        const { files } = file.target
        if (files && files.length !== 0) {
            reader.onload = () => setImgSrc(reader.result)
            reader.readAsDataURL(files[0])
        }
    }

    // Handle Select
    const handleSelectChange = event => {
        setLanguage(event.target.value)
    }

    const resetForm = () => { 
        document.getElementById("tour-form").reset();
    }

    return (
        <Card>
            <Divider sx={{ margin: 0 }} />
            <form id="tour-form" onSubmit={e => e.preventDefault()}>
                <CardContent>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <Typography variant='body2' sx={{ fontWeight: 600 }}>
                                1. Tour Details
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth label='Tour Name' placeholder='Enter Tour Name' />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id='form-layouts-separator-select-label'>Destination</InputLabel>
                                <Select
                                    label='Destination'
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
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                                Upload Picture
                                <input
                                    hidden
                                    type='file'
                                    onChange={onChange}
                                    accept='image/png, image/jpeg'
                                    id='account-settings-upload-image'
                                    starticon={<FileUpload />}
                                />
                            </ButtonStyled>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id='form-layouts-separator-select-label'>Tour Type</InputLabel>
                                <Select
                                    label='Tour Type'
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
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth label='Price per person (Adult)' placeholder='Enter Price' />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth label='Price per person (Child)' placeholder='Enter Price' />
                        </Grid>

                        <Grid item xs={2}>
                            <TextField
                                fullWidth
                                id="account-settings-date"
                                label="From Date"
                                type="date"
                                onChange={date => setFromDate(date)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                fullWidth
                                id="account-settings-date"
                                label="End Date"
                                type="date"
                                onChange={date => setEndDate(date)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        
                        <Grid item xs={2}>
                            <FormControl fullWidth>
                                <InputLabel id='form-layouts-separator-multiple-select-label'>Day/s</InputLabel>
                                <Select
                                    value={language}
                                    onChange={handleSelectChange}
                                    id='form-layouts-separator-multiple-select'
                                    labelId='form-layouts-separator-multiple-select-label'
                                    input={<OutlinedInput label='Day/s'  />} >
                                    <MenuItem value='1'>1</MenuItem>
                                    <MenuItem value='2'>2</MenuItem>
                                    <MenuItem value='3'>3</MenuItem>
                                    <MenuItem value='4'>4</MenuItem>
                                    <MenuItem value='5'>5</MenuItem>
                                    <MenuItem value='6'>6</MenuItem>
                                    <MenuItem value='7'>7</MenuItem>
                                </Select>
                            </FormControl>    
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl fullWidth>
                                <InputLabel id='form-layouts-separator-multiple-select-label'>Night/s</InputLabel>
                                <Select
                                    value={language}
                                    onChange={handleSelectChange}
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
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                label='Overview'
                                minRows={2}
                                placeholder='Enter Overview'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                label="Popular Tour Package"
                                control={<Checkbox checked={checked[1]} onChange={(event)=>setChecked([checked[0], event.target.checked])} />}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider sx={{ margin: 0 }} />
                <CardActions>
                    <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
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
