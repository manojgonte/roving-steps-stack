import { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

import TourInfo from 'src/views/form-layouts/addTour'
import AddTourItinerary from 'src/views/form-layouts/AddTourItinerary'

import InformationOutline from 'mdi-material-ui/InformationOutline'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'

import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'

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

const Tours = () => {

    const [value, setValue] = useState('info');
    const [tourID, setTourID] = useState('');
    const [isItineraryEdit, setIsItineraryEdit] = useState(false);
    const router = useRouter();
    const { id, isEdit } = router?.query;

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleAddItinerary = (newValue, id, isItiEdit) => {
        setTourID(id);
        setIsItineraryEdit(isItiEdit);
    }

    useEffect(() => {
        if(id && id !== "" && isEdit === true) {
            setValue("info");
        } else if (tourID !== "") {
            setValue("itinerary");
        }
    }, [tourID]);

    // useEffect(() => {
    //     console.log(id, isEdit)
    //     if (id && id !== "" && isEdit === true) {
    //         setTourID(id)
    //     }
    // }, [router?.query])


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
                                    </Box>}
                            />
                            <Tab
                                value='itinerary'
                                label={
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <InformationOutline />
                                        <Link href="/tours"><TabName>Itinerary Builder</TabName></Link>
                                    </Box>
                                }
                                disabled={true}
                            />
                        </TabList>

                        <TabPanel sx={{ p: 0 }} value='info'>
                            <Grid item xs={12}>
                                <TourInfo goToItinerary={handleAddItinerary} tourId={id} />
                            </Grid>
                        </TabPanel>
                        <TabPanel sx={{ p: 0 }} value='itinerary' className='pointer-events-none'>
                            <Grid item xs={12}>
                                <AddTourItinerary tourId={tourID} isItineraryEdit={isItineraryEdit} />
                            </Grid>
                        </TabPanel>
                    </TabContext>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Tours
