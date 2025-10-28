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
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  Science, 
  School, 
  Group, 
  TrendingUp,
  CheckCircle,
  ArrowForward,
  Lightbulb,
  Computer,
  Psychology
} from '@mui/icons-material';

const About = () => {
  const missionPoints = [
    "Advance the state-of-the-art in artificial intelligence and distributed systems",
    "Foster interdisciplinary collaboration between computer science, engineering, and domain experts",
    "Develop practical solutions for real-world challenges in AI and systems",
    "Train the next generation of researchers and practitioners",
    "Promote ethical and responsible AI development"
  ];

  const researchAreas = [
    {
      title: "Distributed AI Systems",
      description: "Developing scalable AI architectures that can operate across distributed computing environments",
      icon: <Computer />,
      topics: ["Federated Learning", "Edge Computing", "Distributed Training"]
    },
    {
      title: "Machine Learning Optimization",
      description: "Creating efficient algorithms and optimization techniques for modern machine learning systems",
      icon: <TrendingUp />,
      topics: ["Neural Architecture Search", "Model Compression", "Optimization Theory"]
    },
    {
      title: "AI Ethics & Fairness",
      description: "Ensuring AI systems are developed and deployed responsibly with consideration for ethical implications",
      icon: <Psychology />,
      topics: ["Algorithmic Fairness", "Bias Detection", "Responsible AI"]
    },
    {
      title: "Computer Vision & Robotics",
      description: "Advancing visual perception and autonomous systems through cutting-edge AI research",
      icon: <Science />,
      topics: ["Object Detection", "Autonomous Navigation", "Visual SLAM"]
    }
  ];

  const stats = [
    { label: "Active Projects", value: "15+", icon: <Science /> },
    { label: "Publications", value: "50+", icon: <School /> },
    { label: "Team Members", value: "25+", icon: <Group /> },
    { label: "Industry Partners", value: "10+", icon: <TrendingUp /> }
  ];

  const timeline = [
    {
      year: "2020",
      title: "SAIL Lab Founded",
      description: "The Systems and AI Lab was established at The Ohio State University with initial funding from NSF and industry partners."
    },
    {
      year: "2021",
      title: "First Major Grant",
      description: "Received $1.5M NSF grant for distributed AI research, establishing our core research program."
    },
    {
      year: "2022",
      title: "Industry Partnerships",
      description: "Formed strategic partnerships with leading technology companies to advance practical AI applications."
    },
    {
      year: "2023",
      title: "Research Expansion",
      description: "Expanded research focus to include AI ethics, computer vision, and robotics applications."
    },
    {
      year: "2024",
      title: "New Facilities",
      description: "Opened new state-of-the-art research facilities and expanded our team to 25+ researchers."
    }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h1" sx={{ 
            fontWeight: 700, 
            color: '#C8102E', 
            mb: 2,
            fontSize: { xs: '2.5rem', md: '3.5rem' }
          }}>
            About SAIL Lab
          </Typography>
          <Typography variant="h6" sx={{ 
            color: 'text.secondary', 
            maxWidth: '800px', 
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.25rem' },
            lineHeight: 1.6
          }}>
            The Systems and AI Lab (SAIL) at The Ohio State University is dedicated to advancing 
            the frontiers of artificial intelligence and distributed systems research through 
            innovative solutions and collaborative partnerships.
          </Typography>
        </Box>

        {/* Mission Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" sx={{ 
            fontWeight: 600, 
            mb: 4, 
            textAlign: 'center',
            color: '#C8102E'
          }}>
            Our Mission
          </Typography>
          <Card sx={{ p: 4 }}>
            <List>
              {missionPoints.map((point, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={point}
                    primaryTypographyProps={{ variant: 'body1', sx: { fontWeight: 500 } }}
                  />
                </ListItem>
              ))}
            </List>
          </Card>
        </Box>

        {/* Stats Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" sx={{ 
            fontWeight: 600, 
            mb: 4, 
            textAlign: 'center',
            color: '#C8102E'
          }}>
            By the Numbers
          </Typography>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Card sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ color: '#C8102E', mb: 2 }}>
                    {stat.icon}
                  </Box>
                  <Typography variant="h3" component="div" sx={{ 
                    fontWeight: 700, 
                    color: '#C8102E',
                    mb: 1
                  }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Research Areas */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" sx={{ 
            fontWeight: 600, 
            mb: 4, 
            textAlign: 'center',
            color: '#C8102E'
          }}>
            Research Areas
          </Typography>
          <Grid container spacing={4}>
            {researchAreas.map((area, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ height: '100%', p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ color: '#C8102E', mr: 2 }}>
                      {area.icon}
                    </Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                      {area.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {area.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {area.topics.map((topic, topicIndex) => (
                      <Chip 
                        key={topicIndex} 
                        label={topic} 
                        size="small" 
                        variant="outlined"
                        sx={{ fontSize: '0.75rem' }}
                      />
                    ))}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Timeline */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" sx={{ 
            fontWeight: 600, 
            mb: 4, 
            textAlign: 'center',
            color: '#C8102E'
          }}>
            Our Journey
          </Typography>
          <Box sx={{ position: 'relative' }}>
            {/* Timeline line */}
            <Box sx={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: '#C8102E',
              transform: 'translateX(-50%)',
              display: { xs: 'none', md: 'block' }
            }} />
            
            <Grid container spacing={4}>
              {timeline.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card sx={{ 
                    p: 3,
                    ml: { xs: 0, md: index % 2 === 0 ? 0 : 'auto' },
                    mr: { xs: 0, md: index % 2 === 0 ? 'auto' : 0 },
                    maxWidth: { md: '400px' }
                  }}>
                    <Typography variant="h6" component="h3" sx={{ 
                      fontWeight: 600, 
                      color: '#C8102E',
                      mb: 1
                    }}>
                      {item.year}
                    </Typography>
                    <Typography variant="h6" component="h4" sx={{ 
                      fontWeight: 500, 
                      mb: 2
                    }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h3" sx={{ 
            fontWeight: 600, 
            mb: 3, 
            color: '#C8102E'
          }}>
            Join Our Mission
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}>
            Interested in collaborating with us or joining our research team? 
            We welcome partnerships with industry, academia, and talented individuals.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              size="large"
              endIcon={<ArrowForward />}
              sx={{ 
                backgroundColor: '#C8102E',
                '&:hover': { backgroundColor: '#A00D26' },
                px: 4,
                py: 1.5
              }}
            >
              Contact Us
            </Button>
            <Button 
              variant="outlined" 
              size="large"
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
              View Research
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
