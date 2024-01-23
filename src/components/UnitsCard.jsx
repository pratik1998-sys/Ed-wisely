import { Box, Stack, Typography } from '@mui/material'
import ArrowInCard from '../assets/ArrowInCard'
import OneCourses from '../assets/OneCourses'
const UnitsCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '285px',
        padding: '10px 27px 10px 10px',
        alignItems: 'center',
        gap: '15px',
        borderRadius: '10px',
        border: '1px solid #F4F6F8',
        background: '#FFF',
        boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
      }}
    >
      <Box
        sx={{
          width: '60px',
          height: '60px',
          borderRadius: '5px',
          background: '#DFE3E8',
          padding: '15px',
          alignItems: 'flex-start',
          gap: '10px',
        }}
      >
        <OneCourses />
      </Box>
      <Typography
        sx={{
          color: '#161C24',
          textLeading: 'both',
          textEdge: 'cap',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 300,
          lineHeight: 'normal',
          width: '135px',
          height: '32px',
        }}
      >
        Euler and Hamilton Paths
      </Typography>
      <Box marginRight={'17px'}>
        <ArrowInCard />
      </Box>
    </Box>
  )
}
export default UnitsCard
