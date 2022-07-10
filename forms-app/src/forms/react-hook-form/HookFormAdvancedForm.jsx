import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
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

const HookFormAdvancedForm = () => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      field1: "",
      field2: "",
      options1: "option1",
      additional1: "",
      field4: "",
      field5: "",
      field6: "",
      field7: "",
    },
  });

  const { options1 } = watch();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="xs">
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <Typography variant="h4">Hook Form Advanced Form</Typography>
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
            <FormControl fullWidth>
              <InputLabel>Options #1</InputLabel>
              <Controller
                name="options1"
                control={control}
                render={({ field }) => (
                  <Select label="Options1" {...field}>
                    <MenuItem value="option1">Option1</MenuItem>
                    <MenuItem value="option2">Option2</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </Grid>

          {options1 === "other" && (
            <Grid item sm={12}>
              <Controller
                name="additional1"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={Boolean(errors.additional1?.message)}
                    fullWidth
                    label="Additional #1"
                    variant="filled"
                    helperText={errors.additional1?.message}
                  />
                )}
              />
            </Grid>
          )}

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

export default HookFormAdvancedForm;
