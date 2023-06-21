// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    return (
        <ApexChartWrapper>
            <Grid container spacing={6}>
                <Grid item xs={12} md={12}>
                    <Trophy />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <ToastContainer position="bottom-right" />
                    <Grid container spacing={6}>
                        <Grid item xs={3}>
                            <CardStatisticsVerticalComponent
                                icon={<Poll />}
                                color='success'
                                title='Total Enquiries'
                                stats='25'
                                trendNumber='+42%'
                                subtitle='Weekly Profit'
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <CardStatisticsVerticalComponent
                                icon={<CurrencyUsd />}
                                title='Total Tours'
                                color='secondary'
                                stats='78'
                                trendNumber='15%'
                                subtitle='Past Month'
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <CardStatisticsVerticalComponent
                                icon={<BriefcaseVariantOutline />}
                                title='Completed Tours'
                                stats='14'
                                trend='negative'
                                trendNumber='-18%'
                                subtitle='Yearly Project'
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <CardStatisticsVerticalComponent
                                icon={<HelpCircleOutline />}
                                color='warning'
                                title='Total Users'
                                stats='15'
                                trend='negative'
                                trendNumber='-18%'
                                subtitle='Last Week'
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ApexChartWrapper>
    )
}

export default Dashboard
