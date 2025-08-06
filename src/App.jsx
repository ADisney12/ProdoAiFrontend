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
  createTheme,
  Tabs,
  Tab,
  Paper
} from '@mui/material'
import { 
  PrivacyTip as PrivacyTipIcon,
  DeleteOutline as DeleteOutlineIcon,
  PlayArrow as PlayArrowIcon
} from '@mui/icons-material'

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF', // white
    },
    secondary: {
      main: '#3B82F6', // blue-500
    },
    background: {
      default: '#FFFFFF', // white
      paper: '#F8FAFC', // light gray
    },
    text: {
      primary: '#1F2937', // dark gray
      secondary: '#6B7280', // medium gray
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
  const [backgroundColor, setBackgroundColor] = useState('linear-gradient(to bottom right, #FFFFFF, #F1F5F9, #E2E8F0)')
  const [activeTab, setActiveTab] = useState(0)

  const handleTabNavigation = (tabIndex) => {
    setActiveTab(tabIndex)
    const element = document.getElementById('policy-tabs')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)

      // Calculate color based on scroll position
      const scrollPercentage = Math.min(position / 1000, 1) // Cap at 1000px scroll
      
      // Color transitions
      const startColor = '#FFFFFF' // white
      const midColor = '#F1F5F9'   // light gray
      const endColor = '#E2E8F0'   // lighter gray
      
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
        color: '#1F2937',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.3s ease-in-out',
      }}>
        <AppBar position="fixed" sx={{ 
          background: 'transparent', 
          boxShadow: 'none',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          transition: 'all 0.3s ease-in-out',
          zIndex: 1000,
        }}>
          <Container maxWidth="xl">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <Typography variant="h2" component="div" sx={{ fontWeight: 'bold', color: '#3B82F6' }}>
                ShopMe
              </Typography>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
                <Button sx={{ color: '#1F2937' }} onClick={() => handleTabNavigation(0)}>Privacy Policy</Button>
                <Button sx={{ color: '#1F2937' }} onClick={() => handleTabNavigation(1)}>Account Deletion</Button>
              </Box>
              <Button 
                variant="contained" 
                sx={{ 
                  borderRadius: '9999px',
                  px: 4,
                  py: 1,
                  backgroundColor: '#3B82F6',
                  color: '#FFFFFF',
                  '&:hover': {
                    backgroundColor: '#2563EB',
                  },
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
                Never second guess your purchases <span style={{ color: '#3B82F6', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>again</span>
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
                  size="large"
                  startIcon={<PlayArrowIcon />}
                  sx={{ 
                    px: 6, 
                    py: 2,
                    backgroundColor: '#3B82F6',
                    color: '#FFFFFF',
                    '&:hover': {
                      backgroundColor: '#2563EB',
                    },
                  }}
                >
                  Free trial coming soon
                </Button>

              </Box>
            </Box>
          </Container>
        </Box>

        {/* Policy Tabs Section - Full Viewport */}
        <Box id="policy-tabs" sx={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          py: 8,
        }}>
          <Container maxWidth="xl">
            <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6 }}>
              Privacy & Account Management
            </Typography>
            
            <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto' }}>
              <Tabs 
                value={activeTab} 
                onChange={(event, newValue) => setActiveTab(newValue)}
                sx={{ 
                  mb: 4,
                  '& .MuiTab-root': {
                    color: '#6B7280',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    minWidth: 200,
                  },
                  '& .Mui-selected': {
                    color: '#3B82F6 !important',
                  },
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#3B82F6',
                    height: 3,
                  },
                }}
                centered
              >
                <Tab 
                  icon={<PrivacyTipIcon sx={{ fontSize: 28 }} />} 
                  label="Privacy Policy" 
                  iconPosition="start"
                />
                <Tab 
                  icon={<DeleteOutlineIcon sx={{ fontSize: 28 }} />} 
                  label="Account Deletion" 
                  iconPosition="start"
                />
              </Tabs>

              <Card sx={{ 
                minHeight: '70vh',
                background: '#FFFFFF',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                border: '1px solid #E5E7EB',
              }}>
                <CardContent sx={{ p: 6 }}>
                  {activeTab === 0 && (
                    <Box>
                      <Typography variant="h3" gutterBottom sx={{ color: '#3B82F6', mb: 3 }}>
                        Privacy Policy
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                        <strong>Last updated:</strong> December 2024
                      </Typography>
                      
                      <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: '#3B82F6' }}>
                        1. Information We Collect
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 2 }}>
                        We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
                      </Typography>
                      <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                        <Typography component="li" sx={{ mb: 1 }}>Personal information (name, email, phone number)</Typography>
                        <Typography component="li" sx={{ mb: 1 }}>Account credentials and preferences</Typography>
                        <Typography component="li" sx={{ mb: 1 }}>Usage data and analytics</Typography>
                      </Box>

                      <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: '#3B82F6' }}>
                        2. How We Use Your Information
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 2 }}>
                        We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
                      </Typography>

                      <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: '#3B82F6' }}>
                        3. Data Security
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 2 }}>
                        We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                      </Typography>

                      <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: '#3B82F6' }}>
                        4. Your Rights
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 2 }}>
                        You have the right to access, update, or delete your personal information. You may also object to processing or request data portability.
                      </Typography>

                      <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: '#3B82F6' }}>
                        5. Contact Us
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ fontSize: '1rem', lineHeight: 1.7 }}>
                        If you have questions about this privacy policy, please contact us at privacy@prodoai.com
                      </Typography>
                    </Box>
                  )}

                  {activeTab === 1 && (
                    <Box>
                      <Typography variant="h3" gutterBottom sx={{ color: '#3B82F6', mb: 3 }}>
                        Account Deletion
                      </Typography>
                      
                      <Box sx={{ 
                        background: 'rgba(220, 38, 38, 0.1)', 
                        border: '1px solid rgba(220, 38, 38, 0.3)', 
                        borderRadius: 2, 
                        p: 3, 
                        mb: 4 
                      }}>
                        <Typography variant="h5" gutterBottom sx={{ color: '#EF4444' }}>
                          ⚠️ Important Warning
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#FCA5A5' }}>
                          Account deletion is permanent and cannot be undone. All your data will be permanently removed from our servers.
                        </Typography>
                      </Box>

                      <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: '#3B82F6' }}>
                        What Gets Deleted
                      </Typography>
                      <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                        <Typography component="li" sx={{ mb: 1 }}>Your profile information and personal details</Typography>
                        <Typography component="li" sx={{ mb: 1 }}>All account settings and preferences</Typography>
                        <Typography component="li" sx={{ mb: 1 }}>Your usage history and activity logs</Typography>
                        <Typography component="li" sx={{ mb: 1 }}>Any content you've created or uploaded</Typography>
                        <Typography component="li" sx={{ mb: 1 }}>Communication history within the app</Typography>
                      </Box>

                      <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: '#3B82F6' }}>
                        How to Delete Your Account
                      </Typography>
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ color: '#3B82F6' }}>
                          Method 1: Through Your Account Settings
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1rem', lineHeight: 1.7 }}>
                          1. Log into your Prodo AI account<br/>
                          2. Go to Account Settings<br/>
                          3. Find "Account Management" section<br/>
                          4. Click "Delete Account"<br/>
                          5. Confirm your identity<br/>
                          6. Review and confirm deletion
                        </Typography>
                      </Box>

                      <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ color: '#3B82F6' }}>
                          Method 2: Email Request
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1rem', lineHeight: 1.7 }}>
                          Send an email to <strong>support@prodoai.com</strong> with the subject "Account Deletion Request" and include:
                        </Typography>
                        <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                          <Typography component="li" sx={{ mb: 1 }}>Your registered email address</Typography>
                          <Typography component="li" sx={{ mb: 1 }}>Your full name</Typography>
                          <Typography component="li" sx={{ mb: 1 }}>Confirmation that you understand this is permanent</Typography>
                        </Box>
                      </Box>

                      <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: '#3B82F6' }}>
                        Data Retention
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ fontSize: '1rem', lineHeight: 1.7 }}>
                        Most data is deleted immediately. Some information may be retained for legal compliance (up to 7 years for financial records, 2 years for security logs).
                      </Typography>

                      <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: '#3B82F6' }}>
                        Need Help?
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.7 }}>
                        Contact our support team at <strong>support@prodoai.com</strong> or use the live chat feature in your account.
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Box>
          </Container>
        </Box>

        {/* CTA Section - Full Viewport */}
        <Box sx={{ 
          marginTop: '0',
          height: '20vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F8FAFC',
          border: '1px solid #E5E7EB',
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
                size="large"
                sx={{ 
                  px: 8,
                  py: 2,
                  fontSize: '1.25rem',
                  backgroundColor: '#3B82F6',
                  color: '#FFFFFF',
                  '&:hover': {
                    backgroundColor: '#2563EB',
                  },
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
          background: '#1F2937',
        }}>
          <Container maxWidth="xl">
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 4
            }}>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
                ShopMe
              </Typography>
              <Box sx={{ display: 'flex', gap: 4 }}>
                <Button sx={{ color: '#FFFFFF' }} onClick={() => handleTabNavigation(0)}>Privacy Policy</Button>
                <Button sx={{ color: '#FFFFFF' }} onClick={() => handleTabNavigation(1)}>Account Deletion</Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
