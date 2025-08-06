import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box,
  Card,
  CardContent,
  ThemeProvider,
  createTheme
} from '@mui/material'
import { 
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

// Home Component
function Home() {
  return (
    <>
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
              ShopMe is a platform that assists you in everyday purchases, helping you find the best product for your circumstances.
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

      {/* CTA Section */}
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
    </>
  )
}

// Privacy Policy Component
function PrivacyPolicy() {
  return (
    <Container maxWidth="xl" sx={{ py: 8, minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Box sx={{ textAlign: 'center', mb: 6, pt: 8 }}>
        <Typography variant="h2" gutterBottom sx={{ color: '#3B82F6' }}>
          Privacy Policy
        </Typography>
        <Typography variant="body1" sx={{ color: '#6B7280', fontSize: '1.1rem' }}>
          Last updated: December 2024
        </Typography>
      </Box>

      <Card sx={{ 
        background: '#FFFFFF',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        border: '1px solid #E5E7EB',
        maxWidth: '1000px',
        mx: 'auto'
      }}>
        <CardContent sx={{ p: 6 }}>
          <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: '#3B82F6' }}>
            1. Information We Collect
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 2 }}>
            ShopMe collects minimal information to provide our shopping assistance service. We only collect:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
            <Typography component="li" sx={{ mb: 1 }}>Your email address (for account creation and communication)</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Your password (encrypted and stored securely)</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Limited search history data (to improve product recommendations)</Typography>
          </Box>

          <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: '#3B82F6' }}>
            2. How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 2 }}>
            We use your information solely to:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
            <Typography component="li" sx={{ mb: 1 }}>Provide and maintain your ShopMe account</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Send you important account updates and service notifications</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Improve our product recommendations based on your search patterns</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Respond to your support requests</Typography>
          </Box>

          <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: '#3B82F6' }}>
            3. Information Sharing
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 2 }}>
            We do not sell, trade, or share your personal information with third parties. Your email, password, and search history remain private and are never shared with external companies or advertisers.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: '#3B82F6' }}>
            4. Data Security
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 2 }}>
            We implement industry-standard security measures to protect your data:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
            <Typography component="li" sx={{ mb: 1 }}>Password encryption using secure hashing algorithms</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Secure data transmission with SSL/TLS encryption</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Regular security audits and updates</Typography>
          </Box>

          <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: '#3B82F6' }}>
            5. Your Rights
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 2 }}>
            You have the right to:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
            <Typography component="li" sx={{ mb: 1 }}>Access your personal data</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Update or correct your information</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Delete your account and all associated data</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Request a copy of your search history data</Typography>
          </Box>

          <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: '#3B82F6' }}>
            6. Data Retention
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 2 }}>
            We retain your email and search history only as long as your account is active. When you delete your account, all data is permanently removed within 30 days.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: '#3B82F6' }}>
            7. Contact Us
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.7 }}>
            If you have any questions about this privacy policy or our data practices, please contact us at <strong>privacy@shopme.com</strong>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

// Account Deletion Component
function AccountDeletion() {
  return (
    <Container maxWidth="xl" sx={{ py: 8, minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Box sx={{ textAlign: 'center', mb: 6, pt: 8 }}>
        <Typography variant="h2" gutterBottom sx={{ color: '#3B82F6' }}>
          Account Deletion
        </Typography>
        <Typography variant="body1" sx={{ color: '#6B7280', fontSize: '1.1rem' }}>
          Complete guide to permanently deleting your account and data
        </Typography>
      </Box>

      <Card sx={{ 
        background: '#FFFFFF',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        border: '1px solid #E5E7EB',
        maxWidth: '1000px',
        mx: 'auto'
      }}>
        <CardContent sx={{ p: 6 }}>
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
            <Typography variant="body1" sx={{ color: '#DC2626' }}>
              Account deletion is permanent and cannot be undone. All your data will be permanently removed from our servers.
            </Typography>
          </Box>

          <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: '#3B82F6' }}>
            What Gets Deleted
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
            <Typography component="li" sx={{ mb: 1 }}>Your email address and account credentials</Typography>
            <Typography component="li" sx={{ mb: 1 }}>All search history and preferences</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Account settings and configurations</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Any saved product recommendations</Typography>
          </Box>

          <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: '#3B82F6' }}>
            How to Delete Your Account
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#3B82F6' }}>
              Method 1: Through Your Account Settings
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1rem', lineHeight: 1.7 }}>
              1. Log into your ShopMe account<br/>
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
              Send an email to <strong>support@shopme.com</strong> with the subject "Account Deletion Request" and include:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography component="li" sx={{ mb: 1 }}>Your registered email address</Typography>
              <Typography component="li" sx={{ mb: 1 }}>Confirmation that you understand this is permanent</Typography>
            </Box>
          </Box>

          <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: '#3B82F6' }}>
            Data Retention
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1rem', lineHeight: 1.7 }}>
            All data is deleted immediately upon account deletion. We do not retain any personal information, email addresses, or search history after account deletion.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, color: '#3B82F6' }}>
            Need Help?
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.7 }}>
            Contact our support team at <strong>support@shopme.com</strong> if you need assistance with the account deletion process.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

function AppContent() {
  const [backgroundColor, setBackgroundColor] = useState('linear-gradient(to bottom right, #FFFFFF, #F1F5F9, #E2E8F0)')
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      const scrollPercentage = Math.min(position / 1000, 1)
      
      const startColor = '#FFFFFF'
      const midColor = '#F1F5F9'
      const endColor = '#E2E8F0'
      
      const r1 = parseInt(startColor.slice(1, 3), 16)
      const g1 = parseInt(startColor.slice(3, 5), 16)
      const b1 = parseInt(startColor.slice(5, 7), 16)
      
      const r2 = parseInt(midColor.slice(1, 3), 16)
      const g2 = parseInt(midColor.slice(3, 5), 16)
      const b2 = parseInt(midColor.slice(5, 7), 16)
      
      const r3 = parseInt(endColor.slice(1, 3), 16)
      const g3 = parseInt(endColor.slice(3, 5), 16)
      const b3 = parseInt(endColor.slice(5, 7), 16)
      
      const r = Math.round(r1 + (r2 - r1) * scrollPercentage)
      const g = Math.round(g1 + (g2 - g1) * scrollPercentage)
      const b = Math.round(b1 + (b2 - b1) * scrollPercentage)
      
      const rEnd = Math.round(r2 + (r3 - r2) * scrollPercentage)
      const gEnd = Math.round(g2 + (g3 - g2) * scrollPercentage)
      const bEnd = Math.round(b2 + (b3 - b2) * scrollPercentage)
      
      const color1 = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
      const color2 = `#${rEnd.toString(16).padStart(2, '0')}${gEnd.toString(16).padStart(2, '0')}${bEnd.toString(16).padStart(2, '0')}`
      
      setBackgroundColor(`linear-gradient(to bottom right, ${color1}, ${color2})`)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
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
            <Typography 
              variant="h2" 
              component={Link}
              to="/"
              sx={{ 
                fontWeight: 'bold', 
                color: '#3B82F6',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'none',
                }
              }}
            >
              ShopMe
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
              <Button 
                component={Link}
                to="/privacy-policy"
                sx={{ 
                  color: location.pathname === '/privacy-policy' ? '#3B82F6' : '#1F2937',
                  fontWeight: location.pathname === '/privacy-policy' ? 600 : 500
                }}
              >
                Privacy Policy
              </Button>
              <Button 
                component={Link}
                to="/account-deletion"
                sx={{ 
                  color: location.pathname === '/account-deletion' ? '#3B82F6' : '#1F2937',
                  fontWeight: location.pathname === '/account-deletion' ? 600 : 500
                }}
              >
                Account Deletion
              </Button>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/account-deletion" element={<AccountDeletion />} />
      </Routes>

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
              <Button 
                component={Link}
                to="/privacy-policy"
                sx={{ color: '#FFFFFF' }}
              >
                Privacy Policy
              </Button>
              <Button 
                component={Link}
                to="/account-deletion"
                sx={{ color: '#FFFFFF' }}
              >
                Account Deletion
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}

export default App
