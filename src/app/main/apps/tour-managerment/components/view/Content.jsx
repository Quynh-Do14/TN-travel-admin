import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller, useFormContext } from 'react-hook-form';
import { Input, InputLabel } from '@mui/material';

function ContentView(props) {
    const { data, setData, isUpdate } = props;
    const methods = useFormContext();
    const { control, formState } = methods;
    const { errors } = formState;

    const onChangeData = (e) => {
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <div style={{ padding: "30px" }}>
            <Controller
                name="tenTour"
                control={control}
                render={({ field }) => (
                    <>
                        <InputLabel required={true}>Tên Tour</InputLabel>
                        <TextField
                            {...field}
                            className="mt-8 mb-16"
                            error={!!errors.name}
                            required
                            helperText={errors?.name?.message}
                            autoFocus
                            id="tenTour"
                            name='tenTour'
                            variant="outlined"
                            fullWidth
                            value={data.tenTour}
                            onChange={onChangeData}
                            disabled={isUpdate == false ? true : false}
                        />
                    </>
                )}
            />

            <Controller
                name="chiPhi"
                control={control}
                render={({ field }) => (
                    <>
                        <InputLabel required={true}>Chi phí</InputLabel>
                        <TextField
                            {...field}
                            className="mt-8 mb-16"
                            error={!!errors.name}
                            required
                            helperText={errors?.name?.message}
                            autoFocus
                            id="chiPhi"
                            name='chiPhi'
                            variant="outlined"
                            fullWidth
                            type='number'
                            value={data.chiPhi}
                            onChange={onChangeData}
                            disabled={isUpdate == false ? true : false}
                        />
                    </>

                )}
            />

            <Controller
                name="ngayBatDau"
                control={control}
                render={({ field }) => (
                    <>
                        <InputLabel required={true}>Ngày bắt đầu</InputLabel>
                        <TextField
                            {...field}
                            className="mt-8 mb-16"
                            error={!!errors.name}
                            required
                            helperText={errors?.name?.message}
                            autoFocus
                            id="ngayBatDau"
                            name='ngayBatDau'
                            variant="outlined"
                            fullWidth
                            type='date'
                            value={data.ngayBatDau}
                            onChange={onChangeData}
                            disabled={isUpdate == false ? true : false}
                        />
                    </>

                )}
            />

            <Controller
                name="ngayKetThuc"
                control={control}
                render={({ field }) => (
                    <>
                        <InputLabel required={true}>Ngày Kết thúc</InputLabel>
                        <TextField
                            {...field}
                            className="mt-8 mb-16"
                            error={!!errors.name}
                            required
                            helperText={errors?.name?.message}
                            autoFocus
                            id="ngayKetThuc"
                            name='ngayKetThuc'
                            variant="outlined"
                            fullWidth
                            type='date'
                            value={data.ngayKetThuc}
                            onChange={onChangeData}
                            disabled={isUpdate == false ? true : false}
                        />
                    </>

                )}
            />

            <Controller
                name="khoangCach"
                control={control}
                render={({ field }) => (
                    <>
                        <InputLabel required={true}>Khoảng cách</InputLabel>
                        <TextField
                            {...field}
                            className="mt-8 mb-16"
                            error={!!errors.name}
                            required
                            helperText={errors?.name?.message}
                            autoFocus
                            id="khoangCach"
                            name='khoangCach'
                            variant="outlined"
                            fullWidth
                            type='number'
                            value={data.khoangCach}
                            onChange={onChangeData}
                            disabled={isUpdate == false ? true : false}
                        />
                    </>

                )}
            />

            <Controller
                name="soDiaDiem"
                control={control}
                render={({ field }) => (
                    <>
                        <InputLabel required={true}>Số địa điểm</InputLabel>
                        <TextField
                            {...field}
                            className="mt-8 mb-16"
                            error={!!errors.name}
                            required
                            helperText={errors?.name?.message}
                            autoFocus
                            id="soDiaDiem"
                            name='soDiaDiem'
                            variant="outlined"
                            fullWidth
                            type='number'
                            value={data.soDiaDiem}
                            onChange={onChangeData}
                            disabled={isUpdate == false ? true : false}
                        />
                    </>

                )}
            />

            <Controller
                name="soNgay"
                control={control}
                render={({ field }) => (
                    <>
                        <InputLabel required={true}>Số ngày</InputLabel>
                        <TextField
                            {...field}
                            className="mt-8 mb-16"
                            error={!!errors.name}
                            required
                            helperText={errors?.name?.message}
                            autoFocus
                            id="soNgay"
                            name='soNgay'
                            variant="outlined"
                            fullWidth
                            type='number'
                            value={data.soNgay}
                            onChange={onChangeData}
                            disabled={isUpdate == false ? true : false}
                        />
                    </>

                )}
            />
        </div>
    );
}

export default ContentView;
