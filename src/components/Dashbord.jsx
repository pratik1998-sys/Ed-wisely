import { useEffect } from 'react'
import { Box, Stack, Typography, Grid, Button } from '@mui/material'
import DashBordCards from './DashBordCards'
import UserProfile from './UserProfile'
import Calander from './Calander'
import CourseCards from './CourseCards'
import useFetchData from '../CustomHooks'
import LeaderBoardCard from '../components/LeaderBoardCard'
import Bargraph from '../components/Bargraph'
import MuiCustomTable from '../components/MuiCustomTable'
import CommonLayout from './CommonLayout'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './authSlice'
import ErrorPage from './ErrorPage'
import './Dashbord.css'
import ReactErrorBoundary from './ReactErrorBoundary'
import { getAssessmentdata } from '../store/actions/dashboard.actions'
const Dashbord = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const dispatch = useDispatch()
  // const { tableData, loadingTableData, errorLoadingTableData } = useSelector(
  //   (state) => state.dashboard
  // )

  // console.log(tableData, loadingTableData, errorLoadingTableData)

  useEffect(() => {
    dispatch(getAssessmentdata())
  }, [])
  const fetchDataFromApi = async () => {
    try {
      const response = await fetch(
        'https://stagingstudentpython.edwisely.com/reactProject/dashboardData'
      )
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json()
      return data
    } catch (error) {
      throw error
    }
  }
  const { assessmentsData, error, isLoading, setAssessmentsData } =
    useFetchData(fetchDataFromApi)
  const {
    name,
    email,
    profile_picture,
    analytics,
    recent_assessments,
    leaderboard,
    courses,
  } = {
    ...assessmentsData,
  }
  const { analysis, title, xtitle, ytitle } = { ...recent_assessments }
  const { attendance, avg_performance, assessment, assignment, coding } = {
    ...analytics,
  }
  const coursesData = Object.values({ ...courses })

  const colors = ['#0B58F5', '#D89932', '#4ECD56', '#D89932']
  const bgcolors = ['#E7EEFE', '#FFF0D8', '#EDFAEE', '#FFF0D8']

  if (error) {
    return (
      // change to componet
      <Box justifyContent={'center'} sx={{ display: 'flex' }}>
        <Button
          variant='contained'
          color='primary'
          onClick={window.location.reload()}
        >
          Try Again!
        </Button>
      </Box>
    )
  }
  if (!isLoggedIn) {
    return <p>please login</p>
  }
  if (isLoggedIn) {
    return (
      <CommonLayout>
        <DashBordCards analytics={analytics} isLoading={isLoading} />
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Stack
            justifyContent='space-around'
            // alignContent="center"
            // alignItems={'center'}
            spacing={'20px'}
            width={'100%'}
          >
            <Box
              sx={{
                borderRadius: '10px',
                border: '1px solid #F4F6F8',
                background: '#FFF',
                boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
              }}
            >
              <Bargraph analysis={analysis} />
            </Box>
            <Box
              sx={{
                borderRadius: '10px',
                border: '1px solid #F4F6F8',
                background: '#FFF',
                boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
              }}
            >
              <MuiCustomTable />
            </Box>
          </Stack>

          <Stack spacing='20px' sx={{ width: '319px' }}>
            <UserProfile name={name} email={email} imgUrl={profile_picture} />
            <Calander />
            <LeaderBoardCard leaderboard={leaderboard} />
          </Stack>
        </Stack>

        <Typography
          sx={{
            color: 'var(--Basic-700, #2E3A59)',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '28px',
            my: '15px',
          }}
        >
          Your courses
        </Typography>
        <Stack direction='row' justifyContent={'space-around'}>
          {coursesData.map((course, index) => (
            <CourseCards
              key={course.id}
              chipname={course.tag}
              name={course.name}
              imgUrl={course.image}
              color={colors[course.id - 1]}
              bgcolor={bgcolors[course.id - 1]}
              index={index}
            />
          ))}
        </Stack>
      </CommonLayout>
    )
  }
}
export default Dashbord
