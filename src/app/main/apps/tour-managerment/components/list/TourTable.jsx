import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import withRouter from '@fuse/core/withRouter';
import FuseLoading from '@fuse/core/FuseLoading';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import TourTableHead from './TourTableHead';
import api from 'src/api';
import { Alert, AlertTitle, Button, Collapse, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Menu, MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate } from 'react-router-dom';
import { ConfigStatusTour } from 'src/app/common/helper';

function TourTable(props) {
  const { dataList, loading, setLoading, GetUserAsync } = props
  const navigate = useNavigate()
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openAlert, setOpenAlert] = useState(true);
  const [order, setOrder] = useState({
    direction: 'asc',
    id: null,
  });
  const [selectedId, setSelectedId] = useState(null)
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = (anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };




  function handleRequestSort(event, property) {
    const id = property;
    let direction = 'desc';

    if (order.id === property && order.direction === 'desc') {
      direction = 'asc';
    }

    setOrder({
      direction,
      id,
    });
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      setSelected(dataList.map((n) => n.id));
      return;
    }
    setSelected([]);
  }

  function handleDeselect() {
    setSelected([]);
  }


  function handleCheck(event, id) {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
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
  }

  function handleChangePage(event, value) {
    setPage(value);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <FuseLoading />
      </div>
    );
  }

  const handleDetail = (item) => {
    navigate(`/apps/tour-managerment/${item.idTour}`);
    setAnchorEl(null);
  }

  const handleDelete = () => {
    api.deleteTour({
      idTour: selectedId,
    },
      GetUserAsync(),
      setLoading(true)
    )
    setAnchorEl(null);
    setIsOpenDelete(false);
  }

  const handleOpenDelete = (item) => {
    setIsOpenDelete(true);
    setSelectedId(item.idTour)
  };

  const handleCloseDelete = () => {
    setIsOpenDelete(false);
  };

  if (dataList.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          Không có dữ liệu
        </Typography>
      </motion.div>
    );
  }
  return (
    <div className="w-full flex flex-col min-h-full">
      <FuseScrollbars className="grow overflow-x-auto">
        <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
          <TourTableHead
            selectedProductIds={selected}
            order={order}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={dataList.length}
            onMenuItemClick={handleDeselect}
          />

          <TableBody>
            {
              dataList.map((item, index) => (
                <TableRow
                  className="h-72 cursor-pointer"
                  hover
                  key={index}
                  role="checkbox"
                  // aria-checked={isSelected}
                  tabIndex={-1}
                // selected={isSelected}
                >
                  <TableCell className="w-40 md:w-64 text-center" padding="none">
                    {/* <Checkbox
                      checked={isSelected}
                      onClick={(event) => event.stopPropagation()}
                      onChange={(event) => handleCheck(event, n.id)}
                    /> */}
                  </TableCell>

                  <TableCell onClick={() => handleDetail(item)} className="w-90 md:w-150 text-center" padding="none">
                    {item.tenTour}
                  </TableCell>

                  <TableCell className="w-50 md:w-150 text-center" padding="none">
                    {item.chiPhi}
                  </TableCell>

                  <TableCell className="w-50 md:w-150 text-center" padding="none">
                    {item.ngayBatDau}
                  </TableCell>

                  <TableCell className="w-50 md:w-150 text-center" padding="none">
                    {item.ngayKetThuc}
                  </TableCell>

                  <TableCell className="w-50 md:w-150 text-center" padding="none">
                    {item.soDiaDiem}
                  </TableCell>

                  <TableCell className="w-50 md:w-150 text-center" padding="none">
                    {ConfigStatusTour(item.status)}
                  </TableCell>

                  <TableCell className="w-50 md:w-150 text-center" padding="none">
                    {item.soNgay}
                  </TableCell>

                  <TableCell className="w-50 md:w-150 text-center" padding="none">
                    {item.luotXem}
                  </TableCell>

                  <TableCell className="w-50 md:w-150 text-center" padding="none">
                    <Button
                      className='btn-view-tbl'
                      onClick={() => { handleDetail(item) }}
                      variant="contained"
                      color="success"
                      startIcon={<EditIcon />}
                    >
                      Sửa
                    </Button>
                    <Button
                      className='btn-delete-tbl'
                      onClick={() => { handleOpenDelete(item) }}
                      variant="contained"
                      color="warning"
                      startIcon={<DeleteOutlineIcon />}
                    >
                      Xóa
                    </Button>
                  </TableCell>

                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </FuseScrollbars>

      <TablePagination
        className="shrink-0 border-t-1"
        component="div"
        count={dataList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <Dialog
        open={isOpenDelete}
        onClose={handleOpenDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title">
          {"Xóa mục này?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ color: "red" }} id="alert-dialog-description">
            <ErrorOutlineIcon /> Bạn có chắc chắn muốn xóa?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Hủy bỏ</Button>
          <Button onClick={handleDelete} autoFocus>
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withRouter(TourTable);
