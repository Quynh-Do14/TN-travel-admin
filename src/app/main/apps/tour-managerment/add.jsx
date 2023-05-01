import FuseLoading from '@fuse/core/FuseLoading';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import _ from '@lodash';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import AddTourHeader from './components/add/AddTourHeader';
import ContentAdd from './components/add/Content';
import api from 'src/api';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
    name: yup
        .string()
        .required('You must enter a product name')
        .min(5, 'The product name must be at least 5 characters'),
});

function AddTour(props) {
    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

    const routeParams = useParams();
    const [tabValue, setTabValue] = useState(0);
    const [noProduct, setNoProduct] = useState(false);
    const methods = useForm({
        mode: 'onChange',
        defaultValues: {},
        resolver: yupResolver(schema),
    });
    const { reset, watch, control, onChange, formState } = methods;
    const form = watch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        tenTour: "",
        chiPhi: null,
        ngayBatDau: "",
        ngayKetThuc: "",
        soNgay: null,
        khoangCach: null,
        soDiaDiem: null,
    })
    //   if (
    //     _.isEmpty(form) ||
    //     (product && routeParams.productId !== product.id && routeParams.productId !== 'new')
    //   ) {
    //     return <FuseLoading />;
    //   }
    function handleSubmit() {
        api.createTour({
            tenTour: data.tenTour,
            chiPhi: parseInt(data.chiPhi),
            ngayBatDau: data.ngayBatDau,
            ngayKetThuc: data.ngayKetThuc,
            soNgay: parseInt(data.soNgay),
            khoangCach: parseInt(data.khoangCach),
            soDiaDiem: parseInt(data.soDiaDiem),
            luotXem: 0,
            userId: 0,
            status: 1
        },
        navigate('/apps/tour-managerment')
        )
    }

    return (
        <FormProvider {...methods}>
            <FusePageCarded
                header={<AddTourHeader handleSubmit={handleSubmit} />}
                content={
                    <div style={{ padding: "30px" }}>
                        <ContentAdd
                            data={data}
                            setData={setData}
                        />
                    </div>
                }
                scroll={isMobile ? 'normal' : 'content'}
            />
        </FormProvider>
    );
}

export default AddTour;
