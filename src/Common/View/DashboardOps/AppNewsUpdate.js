import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Card, Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function AppNewsUpdate() {
  return (
    <Card >
        <Box sx={{ p: 2, textAlign: 'left', fontSize: '24px' }}>
          News Update
        </Box>
        <List sx={{ width: '100%', maxWidth: 720  }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="..." />
          </ListItemAvatar>
          <ListItemText
            primary="Đi chợ đúng cách?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Messi
                </Typography>
                {" — Xin chào các bạn, hôm nay tôi sẽ hướng dẫn cách đi chợ…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="..." />
          </ListItemAvatar>
          <ListItemText
            primary="Nướng BBQ kiểu Irắc"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Obama
                </Typography>
                {" — Lại là Obama đây, chương trình hôm này là tiệc tại nhà với món chính là BBQ…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="..." />
          </ListItemAvatar>
          <ListItemText
            primary="Luộc trứng kiểu Pháp"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Khalama
                </Typography>
                {' — Bạn muốn ở nhà nhưng vẫn muốn ăn đồ Pháp, bài viết…'}
              </React.Fragment>
            }
          />
        </ListItem>
        </List>
        <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          to="#"
          size="small"
          color="inherit"
          component={RouterLink}
          endIcon={<ArrowForwardIcon/>}
        >
          View all
        </Button>
      </Box>
    </Card>
  );
}