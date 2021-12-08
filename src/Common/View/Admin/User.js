import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { filter } from 'lodash';
import plusFill from '@mui/icons-material/Add';
import Modal from 'react-awesome-modal';
import { addAdminAction, getAllUserAction } from "../../../redux/actions/User/user.action"
// material
import {
  Grid,
  Card,
  Box,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,

} from '@mui/material';
// components
import Label from '../../components/Labels'
import SearchNotFound from '../../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../UserManager';
import { validateAdmin } from "../Authentication/Validate";

const TABLE_HEAD = [
  { id: 'username', label: 'Username', alignRight: false },
  { id: 'email', label: 'Email', alignRight: false },
  { id: 'password', label: 'Password', alignRight: false },
  { id: 'googleId', label: 'GoogleID', alignRight: false },
  { id: 'roles', label: 'Role', alignRight: false },
  { id: 'gender', label: 'Gender', alignRight: false },

  { id: '' }
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {

  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.username.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function User() {

  const [value, setValue] = useState('Female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addAdmin = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value
    const gender = e.target.gender.value
    const isValid = validateAdmin({ email, password, username })
    if (!isValid) return;
    const res = await dispatch(addAdminAction({ username, password, email, gender }));
    if (res) {
      //history.push("/main")
      return;
    }
  };

  const [visible, setVisible] = useState();
  const openModal = () => {
    setVisible(!visible);

  };
  const closeModal = () => setVisible(false);

  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('username');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const USERLIST = useSelector((state) => state.user.listUser) || []
  useEffect(() => {
    dispatch(getAllUserAction())
  }, [])
  useEffect(() => {

    console.log("log at ==> User.js => LISTUSER: ", USERLIST);
  }, [USERLIST])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.username);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, username) => {
    const selectedIndex = selected.indexOf(username);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, username);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };



  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;

  return (
    <div>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom style={{ color: '#F07D16' }}>
            User Manager
          </Typography>
          <Button
            variant="contained"
            startIcon={<Box component={plusFill} sx={{ color: 'white' }} />}
            onClick={() => openModal()}
          >
            New User
          </Button>
        </Stack>

        <Card>
          <UserListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <UserListHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                rowCount={USERLIST.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
                onSelectAllClick={handleSelectAllClick}
              />
              <TableBody>
                {filteredUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    const { _id, username, email, password, googleId, roles, gender, avt } = row;
                    console.log("row: ", row)
                    const isItemSelected = selected.indexOf(username) !== -1;

                    return (
                      <TableRow
                        hover
                        key={_id}
                        tabIndex={-1}
                        role="checkbox"
                        selected={isItemSelected}
                        aria-checked={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            onChange={(event) => handleClick(event, username)}
                          />
                        </TableCell>
                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar alt={username} src={avt} />
                            <Typography variant="subtitle2" noWrap>
                              {username}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">{email}</TableCell>
                        <TableCell align="left">{password}</TableCell>
                        <TableCell align="left">{googleId}</TableCell>
                        <TableCell align="left">{roles[0].name}</TableCell>
                        <TableCell align="left">{gender}</TableCell>
                        <TableCell align="right">
                          <UserMoreMenu />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              {/* {isUserNotFound && (
                <TableBody>
                  <TableRow>
                    <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                      <SearchNotFound searchQuery={filterName} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              )} */}
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
      <Modal
        visible={visible}
        width="40%"
        height="90%"
        effect="fadeInUp"
        onClickAway={closeModal}

      >
        <div>
          <div className="close-detail">
            <button className="close" onClick={closeModal}><i className="fa fa-times" aria-hidden="true"></i></button>
          </div>
        </div>
        <Typography component="h1" variant="h5">
          ADD USER
        </Typography>
        <Box component="form" onSubmit={addAdmin} sx={{ mt: 3, display: 'flex', alignItems: 'center', flexDirection: 'column', }}>
          <Grid container spacing={2}>
            <Grid item xs={1}>

            </Grid>
            <Grid item xs={10}>
              <TextField
                fullWidth
                id={"username"}
                label={"Username"}
                name={"username"}

              />
            </Grid>
            <Grid item xs={1}>

            </Grid>
            <Grid item xs={1}>

            </Grid>
            <Grid item xs={10}>
              <TextField
                fullWidth
                id={"email"}
                label={"Email"}
                name={"email"}

              />
            </Grid>
            <Grid item xs={1}>

            </Grid>
            <Grid item xs={1}>

            </Grid>
            <Grid item xs={10} mt={2}>
              <TextField
                fullWidth
                id={"password"}
                label={"Password"}
                name={"password"}
                type="password"
              />
            </Grid>
            <Grid item xs={1}>

            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  id="gender"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel value="Female" control={<Radio />} label="Female" />
                  <FormControlLabel value="Male" control={<Radio />} label="Male" />
                  <FormControlLabel value="Other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>

          </Grid>

          <Button className="btn-grad"
            type="submit"

            variant="contained"
            sx={{ mt: 1, mb: 4, color: 'black' }}
          >
            Create
          </Button>{" "}

        </Box>

      </Modal>
    </div>
  );
}