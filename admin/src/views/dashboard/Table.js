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
import Link from '@mui/material/Link'
import { FaDownload, FaShareAlt, FaRegEdit, FaTrashAlt } from "react-icons/fa"
import { useRouter } from 'next/router'

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
    0: { color: 'error', title: 'Inactive' },
    1: { color: 'success', title: 'Active' }
}

const DashboardTable = ({ tourList }) => {

    const router = useRouter();
    const editTour = (id) => {
        router.push({
            pathname: '/tour-planner',
            query: { id: id, isEdit: true }
        });
    }

    return (
        <Card>
            <TableContainer>
                <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Tour ID</TableCell>
                            {/* <TableCell>Image</TableCell> */}
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
                        {tourList?.map((row, index) => (
                            <TableRow hover key={index + "._"} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                                <TableCell>{index + 1}</TableCell>
                                {/* <TableCell><img src={`http://127.0.0.1:5000/uploads/${row?.image}`} height={50} alt="" /> </TableCell> */}
                                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                                        <Typography variant='caption'>{row.description?.slice(0, 30)}</Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>NA</TableCell>
                                <TableCell>{row?.from_date}</TableCell>
                                <TableCell>{row?.end_date}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={statusObj[row.status].title}
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
                                    <FaDownload color="#3a3541ad" size={20} style={{ marginLeft: 10 }} />
                                    <FaShareAlt color="#3a3541ad" size={20} style={{ marginLeft: 10 }} />
                                    <FaRegEdit onClick={() => editTour(row.id)} color="#3a3541ad" size={20} style={{ marginLeft: 10, cursor: "pointer" }} />
                                    <FaTrashAlt color="#3a3541ad" size={20} style={{ marginLeft: 10 }} />
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
