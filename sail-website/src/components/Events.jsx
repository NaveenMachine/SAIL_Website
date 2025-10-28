import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Chip,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import { 
  CalendarToday, 
  LocationOn, 
  AccessTime, 
  Person,
  ArrowForward,
  Event,
  School
} from '@mui/icons-material';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI Systems Research Symposium 2024",
      description: "Join us for our annual research symposium featuring cutting-edge presentations on AI systems, distributed computing, and machine learning innovations.",
      date: "2024-03-15",
      time: "9:00 AM - 5:00 PM",
      location: "Ohio State University, Columbus, OH",
      type: "Conference",
      speakers: ["Dr. Sarah Chen", "Dr. Michael Rodriguez", "Industry Panel"],
      registration: "https://osu.edu/sail-symposium",
      featured: true
    },
    {
      id: 2,
      title: "Machine Learning Workshop Series",
      description: "A comprehensive workshop series covering advanced topics in machine learning, from theory to practical applications.",
      date: "2024-02-20",
      time: "2:00 PM - 4:00 PM",
      location: "SAIL Lab, Dreese Labs 395",
      type: "Workshop",
      speakers: ["Alex Thompson", "Priya Patel"],
      registration: "https://osu.edu/sail-workshop",
      featured: false
    },
    {
      id: 3,
      title: "Industry Collaboration Day",
      description: "Connect with industry partners and explore collaboration opportunities in AI and systems research.",
      date: "2024-02-28",
      time: "10:00 AM - 3:00 PM",
      location: "Ohio State University, Columbus, OH",
      type: "Networking",
      speakers: ["Industry Representatives", "SAIL Faculty"],
      registration: "https://osu.edu/sail-industry",
      featured: false
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Student Research Showcase 2023",
      description: "Annual showcase of student research projects in AI and systems.",
      date: "2023-12-15",
      type: "Showcase",
      location: "SAIL Lab"
    },
    {
      id: 5,
      title: "AI Ethics Panel Discussion",
      description: "Panel discussion on ethical considerations in AI development.",
      date: "2023-11-20",
      type: "Panel",
      location: "Ohio State University"
    },
    {
      id: 6,
      title: "Distributed Systems Seminar",
      description: "Technical seminar on advances in distributed systems research.",
      date: "2023-10-25",
      type: "Seminar",
      location: "SAIL Lab"
    }
  ];

  const EventCard = ({ event, featured = false }) => (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
      }
    }}>
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ mb: 2 }}>
          <Chip 
            label={event.type} 
            size="small" 
            color="primary" 
            variant="outlined"
            sx={{ mb: 1 }}
          />
          {featured && (
            <Chip 
              label="Featured" 
              size="small" 
              color="secondary" 
              sx={{ ml: 1 }}
            />
          )}
        </Box>
        
        <Typography variant={featured ? "h5" : "h6"} component="h3" sx={{ 
          fontWeight: 600, 
          mb: 2,
          lineHeight: 1.3
        }}>
          {event.title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ 
          mb: 3,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {event.description}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <CalendarToday fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {new Date(event.date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </Typography>
          </Box>
          
          {event.time && (
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <AccessTime fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {event.time}
              </Typography>
            </Box>
          )}
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LocationOn fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {event.location}
            </Typography>
          </Box>
        </Box>

        {event.speakers && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
              Speakers:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {event.speakers.join(', ')}
            </Typography>
          </Box>
        )}

        {event.registration && (
          <Button 
            variant="contained" 
            size="small"
            href={event.registration}
            target="_blank"
            sx={{ 
              backgroundColor: '#C8102E',
              '&:hover': { backgroundColor: '#A00D26' },
              textTransform: 'none',
              fontWeight: 500
            }}
          >
            Register Now
          </Button>
        )}
      </CardContent>
    </Card>
  );

  const PastEventItem = ({ event }) => (
    <ListItem sx={{ px: 0 }}>
      <ListItemIcon>
        <Event color="primary" />
      </ListItemIcon>
      <ListItemText
        primary={event.title}
        secondary={
          <Box>
            <Typography variant="body2" color="text.secondary">
              {event.description}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {new Date(event.date).toLocaleDateString()} • {event.location}
            </Typography>
          </Box>
        }
      />
    </ListItem>
  );

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h1" sx={{ 
            fontWeight: 700, 
            color: '#C8102E', 
            mb: 2,
            fontSize: { xs: '2.5rem', md: '3.5rem' }
          }}>
            Events
          </Typography>
          <Typography variant="h6" sx={{ 
            color: 'text.secondary', 
            maxWidth: '600px', 
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.25rem' }
          }}>
            Join us for conferences, workshops, seminars, and networking events that advance AI and systems research
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" sx={{ 
            fontWeight: 600, 
            mb: 3, 
            color: '#C8102E'
          }}>
            Upcoming Events
          </Typography>
          <Grid container spacing={4}>
            {upcomingEvents.map((event) => (
              <Grid item xs={12} md={event.featured ? 12 : 6} key={event.id}>
                <EventCard event={event} featured={event.featured} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 6 }} />

        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" sx={{ 
            fontWeight: 600, 
            mb: 3, 
            color: '#C8102E'
          }}>
            Past Events
          </Typography>
          <Card>
            <CardContent sx={{ p: 0 }}>
              <List>
                {pastEvents.map((event) => (
                  <React.Fragment key={event.id}>
                    <PastEventItem event={event} />
                    {event.id !== pastEvents[pastEvents.length - 1].id && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" component="h3" sx={{ 
            fontWeight: 600, 
            mb: 3, 
            color: '#C8102E'
          }}>
            Stay Updated
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
            Subscribe to our newsletter to receive updates about upcoming events and research activities.
          </Typography>
          <Button 
            variant="outlined" 
            size="large"
            endIcon={<ArrowForward />}
            sx={{ 
              borderColor: '#C8102E',
              color: '#C8102E',
              '&:hover': { 
                borderColor: '#A00D26',
                backgroundColor: 'rgba(200, 16, 46, 0.04)'
              },
              px: 4,
              py: 1.5
            }}
          >
            Subscribe to Newsletter
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Events;
