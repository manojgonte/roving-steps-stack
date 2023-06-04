import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

import InformationOutline from 'mdi-material-ui/InformationOutline'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const Tab = styled(MuiTab)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        minWidth: 100
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

const MUITable = () => {

    const [value, setValue] = useState('account')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Typography variant='h5'>
                    All Tours                    
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
                                value='account'
                                label={
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <InformationOutline />
                                        <TabName>Ongoing</TabName>
                                    </Box> }
                            />
                            <Tab
                                value='security'
                                label={
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <InformationOutline />
                                        <TabName>Upcoming</TabName>
                                    </Box>
                                }
                            />
                            <Tab
                                value='info'
                                label={
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <InformationOutline />
                                        <TabName>Completed</TabName>
                                    </Box>
                                }
                            />
                        </TabList>

                        <TabPanel sx={{ p: 0 }} value='account'>
                            <Grid item xs={12}>
                                <Table />
                            </Grid>
                        </TabPanel>
                        <TabPanel sx={{ p: 0 }} value='security'>
                            <Grid item xs={12}>
                                <Table />
                            </Grid>
                        </TabPanel>
                        <TabPanel sx={{ p: 0 }} value='info'>
                            <Grid item xs={12}>
                                <Table />
                            </Grid>
                        </TabPanel>
                    </TabContext>
                </Card>
            </Grid>
        </Grid>
    )
}

export default MUITable
