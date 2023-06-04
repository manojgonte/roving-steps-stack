// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import { FaDownload, FaShareAlt, FaRegEdit, FaTrashAlt } from "react-icons/fa"

const tours = [
    {
        name: 'Dubai',
        tourist: 27,
        status: 'Active',
        date: '09/27/2018',
        tour_type: '23',
        email: 'eebsworth2m@sbwire.com',
        desc: 'Human Resources Assistant'
    },
    {
        name: 'Bali',
        tourist: 61,
        date: '09/23/2016',
        tour_type: '35',
        status: 'Active',
        email: 'kocrevy0@thetimes.co.uk',
        desc: 'Nuclear Power Engineer'
    },
    {
        name: 'Thailand',
        tourist: 59,
        date: '10/15/2017',
        status: 'Inactive',
        tour_type: '67',
        email: 'ediehn6@163.com',
        desc: 'Environmental Specialist'
    },
    {
        name: 'Japan',
        tourist: 30,
        date: '06/12/2018',
        status: 'Active',
        tour_type: '12',
        email: 'dfalloona@ifeng.com',
        desc: 'Sales Representative'
    },
    {
        name: 'UAE',
        tourist: 66,
        status: 'Inactive',
        date: '03/24/2018',
        tour_type: '28',
        desc: 'Operator',
        email: 'sganderton2@tuttocitta.it'
    },
    {
        name: 'Adeline Day',
        tourist: 33,
        date: '08/25/2017',
        tour_type: '52',
        status: 'Active',
        email: 'hnisius4@gnu.org',
        desc: 'Senior Cost Accountant'
    },
    {
        name: 'Lora Jackson',
        tourist: 61,
        status: 'Active',
        date: '06/01/2017',
        tour_type: '80',
        desc: 'Geologist',
        email: 'ghoneywood5@narod.ru'
    },
    {
        name: 'Rodney Sharp',
        tourist: 22,
        date: '12/03/2017',
        tour_type: '17',
        status: 'Active',
        desc: 'Cost Accountant',
        email: 'dcrossman3@google.co.jp'
    }
]

const statusObj = {
    Inactive: { color: 'error' },
    Active: { color: 'success' }
}

const DashboardTable = () => {
    return (
        <Card>
            <TableContainer>
                <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Tour ID</TableCell>
                            <TableCell>Tour Name</TableCell>
                            <TableCell>Tour Type</TableCell>
                            <TableCell>Tourist Count</TableCell>
                            <TableCell>Start Date</TableCell>
                            <TableCell>End Date</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tours.map((row, index) => (
                            <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                                <TableCell>{index+1}</TableCell>
                                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                                        <Typography variant='caption'>{row.desc}</Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>{row.tour_type}</TableCell>
                                <TableCell>{row.tourist}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={row.status}
                                        color={statusObj[row.status].color}
                                        sx={{
                                            height: 24,
                                            fontSize: '0.75rem',
                                            textTransform: 'capitalize',
                                            '& .MuiChip-label': { fontWeight: 500 }
                                        }}
                                        />
                                </TableCell>
                                <TableCell>
                                    <FaDownload color="#3a3541ad" size={20} />
                                    <FaShareAlt color="#3a3541ad" size={20} style={{marginLeft: 10}} />
                                    <FaRegEdit color="#3a3541ad" size={20} style={{marginLeft: 10}} />
                                    <FaTrashAlt color="#3a3541ad" size={20} style={{marginLeft: 10}} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}

export default DashboardTable
