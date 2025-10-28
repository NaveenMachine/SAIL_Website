import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  Chip,
  Button,
  Divider
} from '@mui/material';
import { CalendarToday, Person, ArrowForward } from '@mui/icons-material';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "SAIL Lab Receives $2M NSF Grant for Distributed AI Research",
      excerpt: "Our team has been awarded a major NSF grant to advance research in distributed artificial intelligence systems, focusing on scalability and efficiency in large-scale deployments.",
      content: "The Systems and AI Lab at Ohio State University has been awarded a $2 million grant from the National Science Foundation to advance research in distributed artificial intelligence systems. This three-year project will focus on developing novel algorithms for scalable AI deployment across heterogeneous computing environments.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      category: "Research",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "New Paper Accepted at ICML 2024",
      excerpt: "Our research on federated learning optimization has been accepted for presentation at the International Conference on Machine Learning.",
      content: "We're excited to announce that our paper 'Optimizing Federated Learning in Resource-Constrained Environments' has been accepted for presentation at ICML 2024. This work presents novel techniques for improving the efficiency of federated learning systems.",
      author: "Alex Thompson",
      date: "2024-01-10",
      category: "Publications",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "SAIL Lab Partners with Industry Leaders",
      excerpt: "We're proud to announce new partnerships with leading technology companies to advance AI research and development.",
      content: "The SAIL Lab has established strategic partnerships with several industry leaders to accelerate AI research and development. These collaborations will provide our researchers with access to cutting-edge resources and real-world datasets.",
      author: "Dr. Michael Rodriguez",
      date: "2024-01-05",
      category: "Partnerships",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=300&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "Student Research Showcase 2024",
      excerpt: "Join us for our annual student research showcase featuring cutting-edge projects in AI and systems research.",
      content: "The SAIL Lab will host its annual student research showcase on March 15th, 2024. This event will feature presentations from graduate and undergraduate students working on innovative AI and systems research projects.",
      author: "Priya Patel",
      date: "2024-01-01",
      category: "Events",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Open Source AI Toolkit Released",
      excerpt: "We've released our new open-source toolkit for distributed machine learning, available on GitHub.",
      content: "The SAIL Lab has released DistML, an open-source toolkit for distributed machine learning. This toolkit provides researchers and practitioners with powerful tools for building scalable AI systems.",
      author: "David Kim",
      date: "2023-12-20",
      category: "Software",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "AI Ethics Workshop Series",
      excerpt: "Join our monthly workshop series exploring ethical considerations in AI development and deployment.",
      content: "The SAIL Lab is launching a monthly workshop series on AI ethics, bringing together researchers, practitioners, and policymakers to discuss critical issues in responsible AI development.",
      author: "Maria Garcia",
      date: "2023-12-15",
      category: "Education",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=300&fit=crop",
      featured: false
    }
  ];

  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  const NewsCard = ({ news, featured = false }) => (
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
      <CardMedia
        component="img"
        height={featured ? 250 : 200}
        image={news.image}
        alt={news.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ mb: 2 }}>
          <Chip 
            label={news.category} 
            size="small" 
            color="primary" 
            variant="outlined"
            sx={{ mb: 1 }}
          />
        </Box>
        
        <Typography variant={featured ? "h5" : "h6"} component="h3" sx={{ 
          fontWeight: 600, 
          mb: 2,
          lineHeight: 1.3
        }}>
          {news.title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ 
          mb: 2,
          display: '-webkit-box',
          WebkitLineClamp: featured ? 3 : 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {news.excerpt}
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1, 
          mb: 2,
          color: 'text.secondary',
          fontSize: '0.875rem'
        }}>
          <Person fontSize="small" />
          <Typography variant="body2">{news.author}</Typography>
          <CalendarToday fontSize="small" />
          <Typography variant="body2">{new Date(news.date).toLocaleDateString()}</Typography>
        </Box>

        <Button 
          variant="outlined" 
          size="small"
          endIcon={<ArrowForward />}
          sx={{ 
            alignSelf: 'flex-start',
            textTransform: 'none',
            fontWeight: 500
          }}
        >
          Read More
        </Button>
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
            News & Updates
          </Typography>
          <Typography variant="h6" sx={{ 
            color: 'text.secondary', 
            maxWidth: '600px', 
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.25rem' }
          }}>
            Stay informed about the latest research breakthroughs, publications, and developments from the SAIL Lab
          </Typography>
        </Box>

        {featuredNews && (
          <Box sx={{ mb: 6 }}>
            <Typography variant="h4" component="h2" sx={{ 
              fontWeight: 600, 
              mb: 3, 
              color: '#C8102E'
            }}>
              Featured News
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <NewsCard news={featuredNews} featured={true} />
              </Grid>
            </Grid>
          </Box>
        )}

        <Divider sx={{ my: 4 }} />

        <Box>
          <Typography variant="h4" component="h2" sx={{ 
            fontWeight: 600, 
            mb: 3, 
            color: '#C8102E'
          }}>
            Latest News
          </Typography>
          <Grid container spacing={4}>
            {regularNews.map((news) => (
              <Grid item xs={12} sm={6} md={4} key={news.id}>
                <NewsCard news={news} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              backgroundColor: '#C8102E',
              '&:hover': { backgroundColor: '#A00D26' },
              px: 4,
              py: 1.5
            }}
          >
            View All News
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default News;
