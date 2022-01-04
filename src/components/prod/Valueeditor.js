import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import EditNEWs from './EditNEWs';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AddNews from "./AddNews";
function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (

    <div align="center">
    <Box sx={{ flexGrow: 1, maxWidth: "90%"}} >

        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            新聞編輯列表介面
          </Typography>
          <Demo>
            <List dense={dense}>
              
            <ListItem

                  secondaryAction={

                  <IconButton edge="end" aria-label="delete">
                  {/* <BorderColorIcon /> */}

                  <DeleteIcon />
                  </IconButton>}
                >
                  {/* <ListItemAvatar><Avatar><FolderIcon /></Avatar></ListItemAvatar> */}

                  <ListItemText
                    primary="Omicron恐已進入美國社區 美第2例確診無非洲旅遊史去過紐約"

                    secondary={secondary ? 'Secondary text' : null}/>
                    <EditNEWs/>           
              </ListItem>
              
            </List>
          </Demo>
          {/* <AddIcon variant="contained" href="#contained-buttons"/> */}
          <AddNews/>    
        </Grid>
    </Box>
    </div>
  );
}
