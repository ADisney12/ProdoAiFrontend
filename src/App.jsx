import { useState, useEffect } from 'react'
import './App.css'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Box,
  IconButton,
  useTheme,
  ThemeProvider,
  createTheme
} from '@mui/material'
import { 
  Search as SearchIcon,
  Bolt as BoltIcon,
  Security as SecurityIcon,
  Dashboard as DashboardIcon,
  PlayArrow as PlayArrowIcon
} from '@mui/icons-material'

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#9333EA', // purple-600
    },
    secondary: {
      main: '#3B82F6', // blue-500
    },
    background: {
      default: '#1E1B4B', // indigo-900
      paper: 'rgba(255, 255, 255, 0.1)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.75rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          textTransform: 'none',
          padding: '0.75rem 2rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '1rem',
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  },
})

function App() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [backgroundColor, setBackgroundColor] = useState('linear-gradient(to bottom right, #1E1B4B, #312E81, #1E40AF)')

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)

      // Calculate color based on scroll position
      const scrollPercentage = Math.min(position / 1000, 1) // Cap at 1000px scroll
      
      // Color transitions
      const startColor = '#1E1B4B' // indigo-900
      const midColor = '#312E81'   // indigo-800
      const endColor = '#1E40AF'   // blue-900
      
      // Interpolate between colors based on scroll position
      const r1 = parseInt(startColor.slice(1, 3), 16)
      const g1 = parseInt(startColor.slice(3, 5), 16)
      const b1 = parseInt(startColor.slice(5, 7), 16)
      
      const r2 = parseInt(midColor.slice(1, 3), 16)
      const g2 = parseInt(midColor.slice(3, 5), 16)
      const b2 = parseInt(midColor.slice(5, 7), 16)
      
      const r3 = parseInt(endColor.slice(1, 3), 16)
      const g3 = parseInt(endColor.slice(3, 5), 16)
      const b3 = parseInt(endColor.slice(5, 7), 16)
      
      // Calculate intermediate colors
      const r = Math.round(r1 + (r2 - r1) * scrollPercentage)
      const g = Math.round(g1 + (g2 - g1) * scrollPercentage)
      const b = Math.round(b1 + (b2 - b1) * scrollPercentage)
      
      const rEnd = Math.round(r2 + (r3 - r2) * scrollPercentage)
      const gEnd = Math.round(g2 + (g3 - g2) * scrollPercentage)
      const bEnd = Math.round(b2 + (b3 - b2) * scrollPercentage)
      
      // Convert to hex
      const color1 = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
      const color2 = `#${rEnd.toString(16).padStart(2, '0')}${gEnd.toString(16).padStart(2, '0')}${bEnd.toString(16).padStart(2, '0')}`
      
      setBackgroundColor(`linear-gradient(to bottom right, ${color1}, ${color2})`)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        minHeight: '100vh',
        background: backgroundColor,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.3s ease-in-out',
      }}>
        <AppBar position="fixed" sx={{ 
          background: 'transparent', 
          boxShadow: 'none',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(30, 27, 75, 0.5)',
          transition: 'all 0.3s ease-in-out',
          zIndex: 1000,
        }}>
          <Container maxWidth="xl">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <Typography variant="h2" component="div" sx={{ fontWeight: 'bold' }}>
                Prodo Ai 
              </Typography>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
                <Button color="inherit" href="#features">Features</Button>
                <Button color="inherit" href="#pricing">Pricing</Button>
                <Button color="inherit" href="#contact">Contact</Button>
              </Box>
              <Button 
                variant="contained" 
                color="primary"
                sx={{ 
                  borderRadius: '9999px',
                  px: 4,
                  py: 1,
                }}
              >
                Get Started
              </Button>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Hero Section - Full Viewport */}
        <Box sx={{ 
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '0',
        }}>
          <Container maxWidth="xl" sx={{ 
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            marginTop: '-20%',
          }}>
            <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
              <Typography variant="h2" gutterBottom sx={{ 
                fontSize: { xs: '2.5rem', md: '4rem' },
                lineHeight: 1.2,
                mb: 2,
              }}>
                Never second guess your purchases <span style={{ color: '#9046c4', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>again</span>
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph sx={{ 
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                maxWidth: '800px',
                mx: 'auto',
                mb: 3,
              }}>
                Prodo Ai is a platform that assists you in everyday purchases, helping you find the best product for your circumstances.
              </Typography>
              <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mt: 2 }}>
                <Button 
                  variant="contained" 
                  color="primary"
                  size="large"
                  startIcon={<PlayArrowIcon />}
                  sx={{ px: 6, py: 2 }}
                >
                  Free trial coming soon
                </Button>

              </Box>
            </Box>
          </Container>
        </Box>

        {/* Features Section - Full Viewport */}
        <Box id="features" sx={{ 
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          <Container maxWidth="xl">
            <Typography variant="h2" align="center" gutterBottom sx={{ mb: 8, marginTop:"40%" }}>
              Why Choose Us
            </Typography>
            <Grid container spacing={6} sx={{ maxWidth: '1400px', mx: 'auto', display: 'flex', justifyContent: 'center' }}>
              <Grid item xs={12} md={4}>
                <Card sx={{height: '50vh',width: '60vh', marginTop:"10vh",  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CardContent sx={{ 
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 4,
                  }}>
                    <IconButton 
                      color="primary" 
                      sx={{ 
                        mb: 4,
                        width: 80,
                        height: 80,
                        backgroundColor: 'primary.dark',
                        '&:hover': { backgroundColor: 'primary.dark' }
                      }}
                    >
                      <SearchIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Typography variant="h3" gutterBottom>
                      Find the perfect fit
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontSize: '1.25rem' }}>
                      Our product lets you scour the internet for the best product for your circumstances.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '50vh',width: '60vh', marginBottom:"0%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CardContent sx={{ 
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 4,
                  }}>
                    <IconButton 
                      color="secondary" 
                      sx={{ 
                        mb: 4,
                        width: 80,
                        height: 80,
                        backgroundColor: 'secondary.dark',
                        '&:hover': { backgroundColor: 'secondary.dark' }
                      }}
                    >
                      <SecurityIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Typography variant="h3" gutterBottom>
                      Secure & Reliable
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontSize: '1.25rem' }}>
                      Your data is protected with enterprise-grade security.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '50vh',width: '60vh', marginBottom:"10vh",  display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"5%"}}>
                  <CardContent sx={{ 
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 4,
                  }}>
                    <IconButton 
                      sx={{ 
                        mb: 4,
                        width: 80,
                        height: 80,
                        backgroundColor: 'info.main',
                        '&:hover': { backgroundColor: 'info.dark' }
                      }}
                    >
                      <DashboardIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Typography variant="h3" gutterBottom>
                      Easy to Use
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontSize: '1.25rem' }}>
                      Intuitive interface designed for both beginners and pros.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* CTA Section - Full Viewport */}
        <Box sx={{ 
          marginTop: '70%',
          height: '20vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(8px)',
        }}>
          <Container maxWidth="xl">
            <Box sx={{ 
              textAlign: 'center', 
              maxWidth: '1200px', 
              mx: 'auto',
            }}>
              <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
                Ready to Get Started?
              </Typography>
              <Typography variant="h7" color="text.secondary" paragraph sx={{ 
                fontSize: '1rem',
                mb: 6,
              }}>
                Join thousands of satisfied users who have transformed their workflow with our platform.
              </Typography>
              <Button 
                variant="contained" 
                color="primary"
                size="large"
                sx={{ 
                  px: 8,
                  py: 2,
                  fontSize: '1.25rem',
                }}
              >
                Free trial coming soon
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Footer */}
        <Box sx={{ 
          py: 6,
          background: 'rgba(0, 0, 0, 0.2)',
        }}>
          <Container maxWidth="xl">
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 4
            }}>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                Prodo Ai
              </Typography>
              <Box sx={{ display: 'flex', gap: 4 }}>
                <Button color="inherit">Privacy</Button>
                <Button color="inherit">Terms</Button>
                <Button color="inherit">Contact</Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
