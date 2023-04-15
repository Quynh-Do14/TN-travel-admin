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
import { getProducts, selectProducts, selectProductsSearchText } from '../store/productsSlice';
import ProductsTableHead from './ProductsTableHead';

const dataTour = [
  {
    id: 1,
    tenTour: "Du lịch Hạ Long",
    chiPhi: 300000,
    ngayBatDau: "01/06/2023",
    ngayKetThuc: "10/06/2023",
    soDiaDiem: 6
  },
  {
    id: 2,
    tenTour: "Du lịch Quất Lâm",
    chiPhi: 300000,
    ngayBatDau: "01/06/2023",
    ngayKetThuc: "10/06/2023",
    soDiaDiem: 6
  },
  {
    id: 3,
    tenTour: "Du lịch Đồ Sơn",
    chiPhi: 300000,
    ngayBatDau: "01/06/2023",
    ngayKetThuc: "10/06/2023",
    soDiaDiem: 6
  },
]
function ProductsTable(props) {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const searchText = useSelector(selectProductsSearchText);

  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState({
    direction: 'asc',
    id: null,
  });

  useEffect(() => {
    dispatch(getProducts()).then(() => setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    setData(dataTour)
  }, [])

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
      setSelected(data.map((n) => n.id));
      return;
    }
    setSelected([]);
  }

  function handleDeselect() {
    setSelected([]);
  }

  function handleClick(item) {
    props.navigate(`/apps/e-commerce/products/${item.id}/${item.handle}`);
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

  if (data.length === 0) {
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
          <ProductsTableHead
            selectedProductIds={selected}
            order={order}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
            onMenuItemClick={handleDeselect}
          />

          <TableBody>
            {
              data.map((item, index) => (
                <TableRow
                  className="h-72 cursor-pointer"
                  hover
                  key={index}
                  role="checkbox"
                  // aria-checked={isSelected}
                  tabIndex={-1}
                  // selected={isSelected}
                  onClick={(item) => handleClick(item)}
                >
                  <TableCell className="w-40 md:w-64 text-center" padding="none">
                    {/* <Checkbox
                      checked={isSelected}
                      onClick={(event) => event.stopPropagation()}
                      onChange={(event) => handleCheck(event, n.id)}
                    /> */}
                  </TableCell>

                  <TableCell className="w-90 md:w-150 text-center" padding="none">
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

                  </TableCell>

                  <TableCell className="w-50 md:w-150 text-center" padding="none">

                  </TableCell>

                  <TableCell className="w-50 md:w-150 text-center" padding="none">

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
        count={data.length}
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
    </div>
  );
}

export default withRouter(ProductsTable);
