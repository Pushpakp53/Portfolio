// Portfolio.jsx
import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Card,
    CardContent,
    CardHeader,
    Chip,
    Grid,
    Link,
    List,
    ListItem,
    ListItemText,
    Box,
    useMediaQuery,
    ThemeProvider,
    createTheme
} from '@mui/material';
import { Email, Phone, LinkedIn } from '@mui/icons-material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2d3436',
    },
        secondary: {
            main: '#0984e3',
        },
    },
    typography: {
        fontFamily: 'Segoe UI, Roboto, Arial, sans-serif',
    },
});

const data = {
    personal: {
        name: "Pushpak Patil",
        email: "pushpakp53@gmail.com",
        phone: "(+91) 9545002870",
        linkedin: "linkedin.com/in/pushpak-patil-654219164/"
    },
    summary: "Experienced Software Engineer...", // Your summary text
    experience: [
        {
            company: "Adobe",
            role: "Member of Technical Staff",
            duration: "Aug 2022 - Present",
            points: [
                "Developed internal build status dashboard...",
                // Other points
            ]
        },
        // Other experiences
    ],
    projects: [
        {
            title: "Typescript Model Project",
            description: "CLI application...",
            tech: ["TypeScript", "Node.js"],
            link: "https://github.com/..."
        },
        // Other projects
    ],
    skills: {
        languages: ["C++", "Python", "Java"],
        web: ["React", "Next.js"],
        tools: ["Ansible", "Git"],
        blockchain: ["Ethereum", "Smart Contracts"]
    },
    education: "B.Tech in Computer Science..."
};

export default function Portfolio() {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
      <ThemeProvider theme={theme}>
          <AppBar position="static" color="primary">
              <Toolbar>
                  <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                      {data.personal.name}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                      <Link href={`mailto:${data.personal.email}`} color="inherit">
                          <Email sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                          {!isMobile && data.personal.email}
                      </Link>
                      <Link href={`tel:${data.personal.phone}`} color="inherit">
                          <Phone sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                          {!isMobile && data.personal.phone}
                      </Link>
                      <Link
                          href={`https://${data.personal.linkedin}`}
                          target="_blank"
                          rel="noopener"
                          color="inherit"
                      >
                          <LinkedIn sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                          {!isMobile && 'LinkedIn'}
                      </Link>
                  </Box>
              </Toolbar>
          </AppBar>

          <Container maxWidth="lg" sx={{ py: 4 }}>
              {/* Summary Section */}
              <Card sx={{ mb: 4 }}>
                  <CardContent>
                      <Typography variant="h5" gutterBottom color="primary">
                          Professional Summary
                      </Typography>
                      <Typography variant="body1">
                          {data.summary}
                      </Typography>
                  </CardContent>
              </Card>

              {/* Experience Section */}
              <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
                  Experience
              </Typography>
              {data.experience.map((exp, i) => (
            <Card key={i} sx={{ mb: 3 }}>
                <CardHeader
                    title={<Typography variant="h6">{exp.role}</Typography>}
                    subheader={
                        <>
                            <Typography variant="subtitle1">{exp.company}</Typography>
                            <Typography variant="caption">{exp.duration}</Typography>
                        </>
                    }
                />
                <CardContent>
                    <List dense>
                        {exp.points.map((point, j) => (
                    <ListItem key={j}>
                        <ListItemText
                            primary={point}
                            primaryTypographyProps={{ variant: 'body2' }}
                        />
                    </ListItem>
                ))}
                    </List>
                </CardContent>
            </Card>
        ))}

              {/* Projects Section */}
              <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
                  Projects
              </Typography>
              <Grid container spacing={3}>
                  {data.projects.map((project, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flexGrow: 1 }}>
                          <Typography variant="h6" gutterBottom>
                              {project.title}
                          </Typography>
                          <Typography variant="body2" sx={{ mb: 2 }}>
                              {project.description}
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {project.tech.map((t, j) => (
                        <Chip key={j} label={t} size="small" color="secondary" />
                    ))}
                          </Box>
                      </CardContent>
                      <Box sx={{ p: 2 }}>
                          <Link
                              href={project.link}
                              target="_blank"
                              rel="noopener"
                              variant="button"
                          >
                              View on GitHub
                          </Link>
                      </Box>
                  </Card>
              </Grid>
          ))}
              </Grid>

              {/* Skills Section */}
              <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 3 }}>
                  Technical Skills
              </Typography>
              <Grid container spacing={3}>
                  {Object.entries(data.skills).map(([category, items]) => (
              <Grid item xs={12} sm={6} md={3} key={category}>
                  <Card>
                      <CardContent>
                          <Typography variant="subtitle1" gutterBottom>
                              {category.charAt(0).toUpperCase() + category.slice(1)}
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {items.map((item, i) => (
                        <Chip key={i} label={item} size="small" sx={{ mb: 0.5 }} />
                    ))}
                          </Box>
                      </CardContent>
                  </Card>
              </Grid>
          ))}
              </Grid>
          </Container>
      </ThemeProvider>
  );
}