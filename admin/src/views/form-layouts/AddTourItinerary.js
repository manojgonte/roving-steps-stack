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

// ** Icons Imports
import BasicTourInfo from '../tour/BasicTourInfo'
import AddItineraryDay from '../tour/AddItineraryDay'

const FormLayoutsSeparator = () => {
    // ** States

    return (
        <Card>
            <Divider sx={{ margin: 0 }} />
            <form onSubmit={e => e.preventDefault()}>
                <CardContent>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <Typography variant='body2' sx={{ fontWeight: 600, marginBottom:5 }}>
                                Tour Details
                            </Typography>
                            
                            <BasicTourInfo />
                                
                            <Divider sx={{ marginTop: 6.5, marginBottom: 6.75 }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body2' sx={{ fontWeight: 600 }}>
                                Add Itinerary
                            </Typography>
                        </Grid>
                        <AddItineraryDay day={1} />
                        <AddItineraryDay day={2} />
                    </Grid>
                </CardContent>
                <Divider sx={{ margin: 0 }} />
                <CardActions>
                    <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
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
