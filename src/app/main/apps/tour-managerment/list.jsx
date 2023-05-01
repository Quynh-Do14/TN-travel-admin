import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import TourHeader from './components/list/TourHeader';
import TourTable from './components/list/TourTable';
import api from 'src/api';
import { useEffect, useState } from 'react';
import { DebounceInput } from 'src/app/common/helper';
import { useNavigate } from 'react-router-dom';

function Tours() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("")

  const GetUserAsync = async () => {
    const response = await api.getAllTour(
      `search=${searchText}`,
      setLoading(true)
      )
    setLoading(false)
    if (response.data.tours.length > 0) {
      setData(response.data.tours)
    }
  }
  useEffect(() => {
    DebounceSearch()
  }, [searchText])

  const DebounceSearch = DebounceInput(GetUserAsync, 1000)

  const onChangeSearchText = (e) => {
    setSearchText(e.target.value)
  }
  return (
    <FusePageCarded
      header={
        <TourHeader
          searchText={searchText}
          onChangeSearchText={onChangeSearchText}
        />
      }
      content={
        <TourTable
          dataList={data}
          loading={loading}
          setLoading={setLoading}
          GetUserAsync={DebounceSearch}
        />
      }
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}


export default Tours;
