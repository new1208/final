import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import background  from './test130098.png';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {styled, Drawer, Button, Container, Card, CardContent, CardMedia, Typography, CardActionArea, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider} from '@mui/material';


function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box
      sx={{
      bgcolor: 'background.paper',
      boxShadow: 1,
      borderRadius: 1,
      p: 2,
      //border color: #696969,
      minWidth: 300,
      flexShrink: 0, ml: 2.5 
    }}
  >

      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('Cupcake', "體育", <img src={background} alt="Background"  height={80}/>),
  createData('Donut', "體育", 25.0),
  createData('Eclair',"體育", 16.0),
  createData('王力宏暫退演藝圈還不夠！《環時》重砲：失德藝人必須涼', '台灣', 6.0),
  createData('Gingerbread', '台灣', 16.0),
  createData('Honeycomb', "體育", 3.2),
  createData('Ice cream sandwich', "體育", 9.0),
  createData('Jelly Bean', "Covid", 0.0),
  createData('KitKat', "國際", 26.0),
  createData('Lollipop', "Covid", 0.2),
  createData('Marshmallow', "Covid", 0),
  createData('Nougat', "國際", 19.0),
  createData('Oreo', "國際", 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
 

   /* <TableContainer maxWidth="sm">

      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">

        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (

            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.calories}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.fat}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>*/
       /* {*//* <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter> *//*}
      </Table>
    </TableContainer>*/
<Container maxWidth="sm">

 {/* 台灣的新聞start */}
    <Box sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper'}}>
        
            <List sx={{border: 1, borderRadius: 10, borderColor: 'primary.main'}}>
            <ListItem  disablePadding>
                <ListItemButton component="a" href="https://www.chinatimes.com/realtimenews/20211203000653-260408">
                <ListItemText primary="Omicron恐已進入美國社區 美第2例確診無非洲旅遊史去過紐約" />
                </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
                <ListItemButton component="a" href="https://udn.com/news/story/6809/5934611">
                <ListItemText primary="富士山周邊一夜三震 網友驚「日本要沉沒了？」氣象廳回應" />
                </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
                <ListItemButton component="a" href="https://udn.com/news/story/122190/5935357">
                <ListItemText primary="百貨賣場最快下周設站開打 僅提供1款疫苗廠牌防誤打" />
                </ListItemButton>
            </ListItem>
            </List>
        
        </Box>
{/* 台灣的新聞end */}

              <br/>
        <Box sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper'}}>
        
        <List sx={{border: 1, borderRadius: 10, borderColor: '#FF4D00'}}>
        <ListItem  disablePadding>
            <ListItemButton component="a" href="https://www.chinatimes.com/realtimenews/20211203000653-260408">
            <ListItemText primary="不肯供出500枚金幣寶藏下落 科學家被判入獄日繳萬元罰金" />
            </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
            <ListItemButton component="a" href="https://udn.com/news/story/6809/5934611">
            <ListItemText primary="富士山周邊一夜三震 網友驚「日本要沉沒了？」氣象廳回應" />
            </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
            <ListItemButton component="a" href="https://udn.com/news/story/122190/5935357">
            <ListItemText primary="百貨賣場最快下周設站開打 僅提供1款疫苗廠牌防誤打" />
            </ListItemButton>
        </ListItem>
        </List>
    
    </Box>
      </Container>

  );
}