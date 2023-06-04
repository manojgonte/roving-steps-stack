import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

import TourInfo from 'src/views/form-layouts/addTour'
import TourItineraryDetails from 'src/views/form-layouts/TourItineraryDetails'

import InformationOutline from 'mdi-material-ui/InformationOutline'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'

const Tab = styled(MuiTab)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        minWidth: 67
    },
    [theme.breakpoints.down('sm')]: {
        minWidth: 100
    }
}))

const TabName = styled('span')(({ theme }) => ({
    lineHeight: 1.71,
    fontSize: '0.875rem',
    marginLeft: theme.spacing(2.4),
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const SingleTourInfo = () => {

    const [value, setValue] = useState('info')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Typography variant='h6'>
                    Tour Planner
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <TabContext value={value}>
                        <TabList
                            onChange={handleChange}
                            aria-label='account-settings tabs'
                            sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }} >
                            <Tab
                                value='info'
                                label={
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <InformationOutline />
                                        <TabName>Basic Information</TabName>
                                    </Box> }
                            />
                            <Tab
                                value='itinerary'
                                label={
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <InformationOutline />
                                        <TabName>Itinerary Builder</TabName>
                                    </Box>
                                }
                            />
                        </TabList>

                        <TabPanel sx={{ p: 0 }} value='info'>
                            <Grid item xs={12}>
                                <TourInfo />
                            </Grid>
                        </TabPanel>
                        <TabPanel sx={{ p: 0 }} value='itinerary'>
                            <Grid item xs={12}>
                                <TourItineraryDetails />
                            </Grid>
                        </TabPanel>
                    </TabContext>
                </Card>
            </Grid>
        </Grid>
    )
}

export default SingleTourInfo
