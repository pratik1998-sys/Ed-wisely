import PropTypes from 'prop-types'

// material-ui
import { useTheme } from '@mui/material/styles'
import { Avatar, Box, ButtonBase, useMediaQuery } from '@mui/material'

const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto',
          },
        }}
      >
        <Box
          component='span'
          sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}
        >
          {/* <Logo /> */}
        </Box>

        {/* {matchDownMd &&(
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              '&:hover': {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light
              }
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <MenuIcon />
          </Avatar>
        </ButtonBase>
        )} */}
      </Box>

      {/* header search */}
      {/* <SearchSection /> */}

      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      {/* notification & profile */}
      {/* <NotificationSection />
      <ProfileSection /> */}
    </>
  )
}

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func,
}

export default Header
