import FuseLoading from '@fuse/core/FuseLoading';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import _ from '@lodash';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import api from 'src/api';
import ViewTourHeader from './components/view/ViewTourHeader';
import ContentView from './components/view/Content';
import NotificationComon from 'src/app/common/notification';
import { Alert, Snackbar } from '@mui/material';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
    name: yup
        .string()
        .required('You must enter a product name')
        .min(5, 'The product name must be at least 5 characters'),
});

function ViewTour(props) {
    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
    const routeParams = useParams();
    const [tabValue, setTabValue] = useState(0);
    const [openNoti, setOpenNoti] = useState(false);

    const navigate = useNavigate();

    const methods = useForm({
        mode: 'onChange',
        defaultValues: {},
        resolver: yupResolver(schema),
    });
    const { reset, watch, control, onChange, formState } = methods;
    const form = watch();
    const [dataDetail, setDataDetail] = useState({})
    const [data, setData] = useState({
        tenTour: "",
        chiPhi: null,
        ngayBatDau: "",
        ngayKetThuc: "",
        soNgay: null,
        khoangCach: null,
        soDiaDiem: null,
    })
    const [isUpdate, setIsUpdate] = useState(false)
    //   if (
    //     _.isEmpty(form) ||
    //     (product && routeParams.productId !== product.id && routeParams.productId !== 'new')
    //   ) {
    //     return <FuseLoading />;
    //   }

    function handleBack() {
        navigate('/apps/tour-managerment');
    }


    useEffect(() => {
        if (dataDetail) {
            setData({
                tenTour: dataDetail.tenTour,
                chiPhi: dataDetail.chiPhi,
                ngayBatDau: dataDetail.ngayBatDau,
                ngayKetThuc: dataDetail.ngayKetThuc,
                soNgay: dataDetail.soNgay,
                khoangCach: dataDetail.khoangCach,
                soDiaDiem: dataDetail.soDiaDiem,
            })
        }
    }, [dataDetail])
    const getDetailTour = async () => {
        const reponse = await api.getDetailTour(routeParams.idTour)
        setDataDetail(reponse.tour)
    }
    useEffect(() => {
        getDetailTour()
    }, [])

    function handleSubmit() {
        api.updateTour({
            idTour: dataDetail.idTour,
            tenTour: data.tenTour,
            chiPhi: data.chiPhi,
            ngayBatDau: data.ngayBatDau,
            ngayKetThuc: data.ngayKetThuc,
            soNgay: data.soNgay,
            khoangCach: data.khoangCach,
            soDiaDiem: data.soDiaDiem,
            luotXem: 0,
            userId: 0,
            status: 1
        },
        navigate('/apps/tour-managerment')
        )
    }

    const onOpenUpdate = () => {
        setIsUpdate(true)
    }

    const onCloseUpdate = () => {
        setIsUpdate(false)
    }

    return (
        <>
            <FormProvider {...methods}>
                <FusePageCarded
                    header={<ViewTourHeader
                        handleSubmit={handleSubmit}
                        isUpdate={isUpdate}
                        onOpenUpdate={onOpenUpdate}
                        onCloseUpdate={onCloseUpdate}
                        handleBack={handleBack}
                    />}
                    content={
                        <div style={{ padding: "30px" }}>
                            <ContentView
                                data={data}
                                setData={setData}
                                isUpdate={isUpdate}
                            />
                        </div>
                    }
                    scroll={isMobile ? 'normal' : 'content'}
                />
            </FormProvider>

        </>
    );
}

export default ViewTour;
