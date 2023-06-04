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
import ItineraryDay from '../tour/ItineraryDay'

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
                            <Typography variant='body2' sx={{ fontWeight: 600, marginBottom: 6.75 }}>
                                Add Itinerary
                            </Typography>

                            <ItineraryDay day={1} />
                            <ItineraryDay day={2} />
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider sx={{ margin: 0 }} />
            </form>
        </Card>
    )
}

export default FormLayoutsSeparator
