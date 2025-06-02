'use client';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,

} from '@mui/material';


const LoginScreen = () => {
    return(
        <>
              <Box
        sx={{
          bgcolor: 'background.default',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth:'100vw'
        }}
      >
        <Container maxWidth="xs">
          <Box
            sx={{
              backgroundColor: 'background.paper',
              padding: 4,
              borderRadius: 3,
              boxShadow: 3,
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Zub Meals
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                margin="normal"
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
              />
              <TextField
                margin="normal"
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  bgcolor: '#000000',
                  color: '#ffffff',
                  '&:hover': {
                    bgcolor: '#333333',
                  },
                }}
              >
                Sign In
              </Button>
            </Box>
            <Typography variant="body2" sx={{ mt: 3 }}>
              Don’t have an account?{' '}
              <a href="#" style={{ color: '#000000', textDecoration: 'underline' }}>
                Sign Up
              </a>
            </Typography>
          </Box>
        </Container>
      </Box>
        </>
    )
}

export default LoginScreen;