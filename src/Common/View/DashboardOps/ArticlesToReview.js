import PreviewIcon from '@mui/icons-material/Preview';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  borderRadius : '10%',
  padding: theme.spacing(4, 0),
  color: theme.palette.primary.darker,
  backgroundColor: '#c8facd'
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 714000;

export default function ArticlesToReview() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <PreviewIcon width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{TOTAL}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 , fontWeight: 900}}>
        Repices To Review
      </Typography>
    </RootStyle>
  );
}