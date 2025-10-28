import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Avatar,
  Chip,
  Divider
} from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';

const People = () => {
  const faculty = [
    {
      name: "Dr. Sarah Chen",
      title: "Director & Professor",
      department: "Computer Science & Engineering",
      email: "chen.123@osu.edu",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Dr. Chen leads research in distributed systems and AI optimization. Her work focuses on scalable machine learning architectures.",
      research: ["Distributed Systems", "AI Optimization", "Machine Learning"],
      linkedin: "https://linkedin.com/in/sarahchen",
      github: "https://github.com/sarahchen"
    },
    {
      name: "Dr. Michael Rodriguez",
      title: "Associate Professor",
      department: "Electrical & Computer Engineering",
      email: "rodriguez.456@osu.edu",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Dr. Rodriguez specializes in computer vision and robotics. His research bridges AI theory with practical applications.",
      research: ["Computer Vision", "Robotics", "Deep Learning"],
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      github: "https://github.com/mrodriguez"
    }
  ];

  const researchers = [
    {
      name: "Alex Thompson",
      title: "PhD Student",
      department: "Computer Science",
      email: "thompson.789@osu.edu",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Researching federated learning systems and their applications in healthcare.",
      research: ["Federated Learning", "Healthcare AI", "Privacy"],
      linkedin: "https://linkedin.com/in/alexthompson",
      github: "https://github.com/alexthompson"
    },
    {
      name: "Priya Patel",
      title: "PhD Student",
      department: "Electrical Engineering",
      email: "patel.321@osu.edu",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Working on autonomous systems and reinforcement learning for robotics applications.",
      research: ["Autonomous Systems", "Reinforcement Learning", "Robotics"],
      linkedin: "https://linkedin.com/in/priyapatel",
      github: "https://github.com/priyapatel"
    },
    {
      name: "David Kim",
      title: "MS Student",
      department: "Computer Science",
      email: "kim.654@osu.edu",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Focusing on natural language processing and large language models.",
      research: ["NLP", "LLMs", "Text Processing"],
      linkedin: "https://linkedin.com/in/davidkim",
      github: "https://github.com/davidkim"
    },
    {
      name: "Maria Garcia",
      title: "Research Associate",
      department: "Data Science",
      email: "garcia.987@osu.edu",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "Specializing in data visualization and human-computer interaction.",
      research: ["Data Visualization", "HCI", "UX Design"],
      linkedin: "https://linkedin.com/in/mariagarcia",
      github: "https://github.com/mariagarcia"
    }
  ];

  const PersonCard = ({ person }) => (
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
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Avatar
            src={person.image}
            sx={{ width: 120, height: 120, mb: 2, border: '3px solid #C8102E' }}
          />
          <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
            {person.name}
          </Typography>
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 500, mb: 1 }}>
            {person.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {person.department}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, minHeight: '3em' }}>
            {person.bio}
          </Typography>
          
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center' }}>
            {person.research.map((area, index) => (
              <Chip 
                key={index} 
                label={area} 
                size="small" 
                variant="outlined"
                sx={{ fontSize: '0.75rem' }}
              />
            ))}
          </Box>

          <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
            <Box 
              component="a" 
              href={`mailto:${person.email}`}
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': { color: 'primary.main' }
              }}
            >
              <Email fontSize="small" />
            </Box>
            <Box 
              component="a" 
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': { color: 'primary.main' }
              }}
            >
              <LinkedIn fontSize="small" />
            </Box>
            <Box 
              component="a" 
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': { color: 'primary.main' }
              }}
            >
              <GitHub fontSize="small" />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
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
            Our People
          </Typography>
          <Typography variant="h6" sx={{ 
            color: 'text.secondary', 
            maxWidth: '600px', 
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.25rem' }
          }}>
            Meet the brilliant minds driving innovation in Systems and AI research at The Ohio State University
          </Typography>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" sx={{ 
            fontWeight: 600, 
            mb: 4, 
            textAlign: 'center',
            color: '#C8102E'
          }}>
            Faculty
          </Typography>
          <Grid container spacing={4}>
            {faculty.map((person, index) => (
              <Grid item xs={12} md={6} key={index}>
                <PersonCard person={person} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 6 }} />

        <Box>
          <Typography variant="h3" component="h2" sx={{ 
            fontWeight: 600, 
            mb: 4, 
            textAlign: 'center',
            color: '#C8102E'
          }}>
            Researchers & Students
          </Typography>
          <Grid container spacing={4}>
            {researchers.map((person, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <PersonCard person={person} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default People;
