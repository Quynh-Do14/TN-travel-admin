import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller, useFormContext } from 'react-hook-form';
import { InputLabel } from '@mui/material';

function BasicInfoTab(props) {
  const methods = useFormContext();
  const { control, formState } = methods;
  const { errors } = formState;

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
              id="name"
              variant="outlined"
              fullWidth
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
              id="name"
              variant="outlined"
              fullWidth
              type='number'
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
              id="name"
              variant="outlined"
              fullWidth
              type='date'
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
              id="name"
              variant="outlined"
              fullWidth
              type='date'
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
              id="name"
              variant="outlined"
              fullWidth
              type='number'
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
              variant="outlined"
              fullWidth
              type='number'
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
              variant="outlined"
              fullWidth
              type='number'
            />
          </>

        )}
      />
    </div>
  );
}

export default BasicInfoTab;
