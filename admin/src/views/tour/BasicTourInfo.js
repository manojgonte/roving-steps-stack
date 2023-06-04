import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const StyledBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        borderRight: `1px solid ${theme.palette.divider}`
    }
}))

const BasicTourInfo = () => {
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
                                <Typography variant='body2'>0001</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={3}>
                                <Typography variant='body2' sx={{ color: 'black', fontWight: 'bold' }}>Tour Name</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant='body2'>Mesmerizing Abu Dhabi</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={3}>
                                <Typography variant='body2' sx={{ color: 'black', fontWight: 'bold' }}>Destination</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant='body2'>Dubai</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={3}>
                                <Typography variant='body2' sx={{ color: 'black', fontWight: 'bold' }}>Tour Type</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant='body2'>International Tours</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={3}>
                                <Typography variant='body2' sx={{ color: 'black', fontWight: 'bold' }}>Price Adult</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant='body2'>10000</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={3}>
                                <Typography variant='body2' sx={{ color: 'black', fontWight: 'bold' }}>Price Child</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant='body2'>6000</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={3}>
                                <Typography variant='body2' sx={{ color: 'black', fontWight: 'bold' }}>Date</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant='body2'>01/05/2023 - 10/05/2023</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={3}>
                                <Typography variant='body2' sx={{ color: 'black', fontWight: 'bold' }}>Duration</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant='body2'>6D - 5N</Typography>
                            </Grid>
                        </Box>
                    </StyledBox>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Box sx={{ mb: 3.75, display: 'flex', alignItems: 'top' }}>
                        <Grid item xs={2}>
                            <Typography variant='body2' sx={{color:'black', fontWight:'bold'}}>Overview </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant='body2'>Dubai...Where everything Glitters... Dazzling Dubai is where the ancient Arabic culture & tradition sit side by side with the modern infrastructure. 
                            Our Dubai Tours are memorable for all times to come, for we make you taste the Arabic delicacies, travel the paths of Gold Souk, thrill at Desert Safari, experience the stunning feat of architecture- the Burj Khalifa, the iconic Burj al-Arab, Palm Jumeirah & more. 
                            With Kesari, you'll not only see Dubai you'll experience it! The Dhow Dinner Cruise, the Desert Dune Safari, the Dubai Fountain Show and Snow World are some of the highlights of our Dubai Tour packages. 
                            The Dubai Shopping Festival and Ferrari Park are entertaining elements that are added to enhance your Dubai Tours.</Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default BasicTourInfo