// ** React Imports
import Image from "next/image";

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar'
import { FaBed, FaChild, FaUtensils } from "react-icons/fa";

const StyledBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        borderRight: `1px solid ${theme.palette.divider}`
    }
}))

const DemoGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      paddingTop: `${theme.spacing(1)} !important`
    }
  }))

const ItineraryDay = (props) => {
    return (
        <>
            <Typography variant='body2' sx={{ fontWeight: 600, marginBottom: 1.75 }}>
                {`Day ${props.day}`} : Arriving in Dubai
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={8}>
                    <StyledBox>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={4}>
                                <Image src={"/images/itinerary.jpg"}
                                    width={250} height={140}
                                    alt="image"
                                    sx={{ borderRadius: 20, objectFit: "contain", borderRadius: 150 / 2,
                                    overflow: "hidden",
                                    borderWidth: 3,
                                    borderColor: "red" }}
                                />
                            </Grid>
                            <Grid item xs={8} sx={{ px: 3.75 }}>
                                <Typography variant='body2'>
                                    Welcome to Dubai!!! A land full of surprises and a complete destination.
                                    Dubai offers an extensive horizon of things to do, see, experience and learn. 
                                    It is surrounded by mysterious deserts, sand dunes and within the city you'll find amazing beach resorts, incredibly high tech buildings with old traditional houses and mosques.
                                    Upon arrival at the airport, you will be transferred to your hotel.
                                    And later in the evening will be proceed to Dhow cruise. Overnight at the hotel in Dubai
                                </Typography>
                            </Grid>
                        </Box>
                    </StyledBox>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box sx={{ mb: 3.75, display: 'flex', alignItems: 'top' }}>
                        <Grid item xs={12}>
                            <Box sx={{ mr: 2, display: 'flex', alignItems: 'center', marginBottom: 2.75 }}>
                                <Box sx={{backgroundColor:'#aaa', borderRadius:'50%', padding:2, marginRight:5}}>
                                    <FaBed color="#fff" size={25} />
                                </Box>
                                <Box>
                                    <Typography variant='body2' sx={{ color: 'common.black' }}>
                                        Activity
                                    </Typography>
                                    <Typography variant='caption' sx={{ color: 'common.black' }}>
                                        Hotel Name
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ mr: 2, display: 'flex', alignItems: 'center', marginBottom: 2.75 }}>
                                <Box sx={{backgroundColor:'#aaa', borderRadius:'50%', padding:2, marginRight:5}}>
                                    <FaChild color="#fff" size={25} />
                                </Box>
                                <Box>
                                    <Typography variant='body2' sx={{ color: 'common.black' }}>
                                        Stay
                                    </Typography>
                                    <Typography variant='caption' sx={{ color: 'common.black' }}>
                                        Hotel Name
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ mr: 2, display: 'flex', alignItems: 'center', marginBottom: 2.75 }}>
                                <Box sx={{backgroundColor:'#aaa', borderRadius:'50%', padding:2, marginRight:5}}>
                                    <FaUtensils color="#fff" size={25} />
                                </Box>
                                <Box>
                                    <Typography variant='body2' sx={{ color: 'common.black' }}>
                                        Food
                                    </Typography>
                                    <Typography variant='caption' sx={{ color: 'common.black' }}>
                                        Breakfast | Lunch | Dinner
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default ItineraryDay