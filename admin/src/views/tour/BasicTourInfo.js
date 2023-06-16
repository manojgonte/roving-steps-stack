import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { BASE_URL } from 'src/config'

const StyledBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        borderRight: `1px solid ${theme.palette.divider}`
    }
}))

const BasicTourInfo = ({tourDetails}) => {

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={5}>
                    <StyledBox>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={3}>
                                <Typography variant='body2' sx={{ color: 'black', fontWight: 'bold' }}>Tour ID</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant='body2'>{tourDetails?.id}</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={3}>
                                <Typography variant='body2' sx={{ color: 'black', fontWight: 'bold' }}>Tour Name</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant='body2'>{tourDetails?.name}</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={3}>
                                <Typography variant='body2' sx={{ color: 'black', fontWight: 'bold' }}>Destination</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant='body2'>{tourDetails?.destination}</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={3}>
                                <Typography variant='body2' sx={{ color: 'black', fontWight: 'bold' }}>Tour Type</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant='body2'>{tourDetails?.type}</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={3}>
                                <Typography variant='body2' sx={{ color: 'black', fontWight: 'bold' }}>Price Adult</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant='body2'>₹{tourDetails?.adult_price}</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={3}>
                                <Typography variant='body2' sx={{ color: 'black', fontWight: 'bold' }}>Price Child</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant='body2'>₹{tourDetails?.child_price}</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={3}>
                                <Typography variant='body2' sx={{ color: 'black', fontWight: 'bold' }}>Date</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant='body2'>{tourDetails?.from_date} - {tourDetails?.end_date}</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={3}>
                                <Typography variant='body2' sx={{ color: 'black', fontWight: 'bold' }}>Duration</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant='body2'>{tourDetails?.days}D - {tourDetails?.nights}N</Typography>
                            </Grid>
                        </Box>
                    </StyledBox>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Box sx={{ mb: 3.75, display: 'flex', alignItems: 'top' }}>
                        <Grid item xs={2}>
                            <Typography variant='body2' sx={{color:'black', fontWight:'bold'}}>Amenities </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant='body2'>{tourDetails?.amenities}</Typography>
                        </Grid>
                    </Box>
                    <Box sx={{ mb: 3.75, display: 'flex', alignItems: 'top' }}>
                        <Grid item xs={2}>
                            <Typography variant='body2' sx={{color:'black', fontWight:'bold'}}>Overview </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant='body2'>{tourDetails?.description}</Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default BasicTourInfo