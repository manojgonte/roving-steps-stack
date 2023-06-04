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

    const onChange = file => {
        const reader = new FileReader()
        const { files } = file.target
        if (files && files.length !== 0) {
            reader.onload = () => setImgSrc(reader.result)
            reader.readAsDataURL(files[0])
        }
    }

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
                <TextField fullWidth label='Place to Visit' placeholder='Enter Place to Visit' />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField fullWidth type='text' label='Activity of the Day' placeholder='Enter Activity' />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                    <InputLabel id='form-layouts-separator-select-label'>Travel Option</InputLabel>
                    <Select
                        label='Travel Option'
                        defaultValue=''
                        id='form-layouts-separator-select'
                        labelId='form-layouts-separator-select-label'>
                        <MenuItem value='UK'>UK</MenuItem>
                        <MenuItem value='USA'>USA</MenuItem>
                        <MenuItem value='Australia'>Australia</MenuItem>
                        <MenuItem value='Germany'>Germany</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    fullWidth
                    multiline
                    label='Overview'
                    minRows={2}
                    placeholder='Enter Overview'
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField fullWidth type='text' label='Stay' placeholder='Enter Stay' />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField fullWidth type='text' label='Food' placeholder='Enter Food' />
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
                        startIcon={<FileUpload />}
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