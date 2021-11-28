import { Box, Grid, Container, Typography } from '@mui/material';
import { CurrentUser, CollectionPost, NewUser, ArticlesToReview, AppNewsUpdate, Clock } from '../DashboardOps';
// ----------------------------------------------------------------------

export default function Dashboard() {
  return (
    <div>
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <CurrentUser />
          </Grid>
            <Grid item xs={12} sm={6} md={3}>
          < CollectionPost />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NewUser />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ArticlesToReview />
          </Grid>
         
          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Clock />
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}
