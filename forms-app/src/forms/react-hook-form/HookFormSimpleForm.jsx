import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as yup from "yup";

const validationSchema = yup.object({
  field1: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  field2: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  field3: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  field4: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  field5: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  field6: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  field7: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
});

const HookFormSimpleForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
      field6: "",
      field7: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="xs">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">React Hook Form Simple Form</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <Controller
              name="field1"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.field1?.message)}
                  fullWidth
                  label="Field #1"
                  variant="filled"
                  helperText={errors.field1?.message}
                />
              )}
            />
          </Grid>

          <Grid item sm={12}>
            <Controller
              name="field2"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.field2?.message)}
                  fullWidth
                  label="Field #2"
                  variant="filled"
                  helperText={errors.field2?.message}
                />
              )}
            />
          </Grid>

          <Grid item sm={12}>
            <Controller
              name="field3"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.field3?.message)}
                  fullWidth
                  label="Field #3"
                  variant="filled"
                  helperText={errors.field3?.message}
                />
              )}
            />
          </Grid>

          <Grid item sm={12}>
            <Controller
              name="field4"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.field4?.message)}
                  fullWidth
                  label="Field #4"
                  variant="filled"
                  helperText={errors.field4?.message}
                />
              )}
            />
          </Grid>

          <Grid item sm={12}>
            <Controller
              name="field5"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.field5?.message)}
                  fullWidth
                  label="Field #5"
                  variant="filled"
                  helperText={errors.field5?.message}
                />
              )}
            />
          </Grid>

          <Grid item sm={12}>
            <Controller
              name="field6"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.field6?.message)}
                  fullWidth
                  label="Field #6"
                  variant="filled"
                  helperText={errors.field6?.message}
                />
              )}
            />
          </Grid>

          <Grid item sm={12}>
            <Controller
              name="field7"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.field7?.message)}
                  fullWidth
                  label="Field #7"
                  variant="filled"
                  helperText={errors.field7?.message}
                />
              )}
            />
          </Grid>

          <Grid item sm={12}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default HookFormSimpleForm;
