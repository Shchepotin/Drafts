import React from "react";
import { Formik, Form, FastField } from "formik";
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

const FormikSimpleForm = () => {
  return (
    <Formik
      initialValues={{
        field1: "",
        field2: "",
        field3: "",
        field4: "",
        field5: "",
        field6: "",
        field7: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(props) => (
        <Form>
          <Container maxWidth="xs">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h4">Formik Simple Form</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item sm={12}>
                <FastField name="field1" type="text">
                  {({ field, meta }) => (
                    <TextField
                      fullWidth
                      label="Field #1"
                      variant="filled"
                      error={Boolean(meta.touched && meta.error)}
                      helperText={meta.touched && meta.error}
                      {...field}
                    />
                  )}
                </FastField>
              </Grid>

              <Grid item sm={12}>
                <FastField name="field2" type="text">
                  {({ field, meta }) => (
                    <TextField
                      fullWidth
                      label="Field #2"
                      variant="filled"
                      error={Boolean(meta.touched && meta.error)}
                      helperText={meta.touched && meta.error}
                      {...field}
                    />
                  )}
                </FastField>
              </Grid>

              <Grid item sm={12}>
                <FastField name="field3" type="text">
                  {({ field, meta }) => (
                    <TextField
                      fullWidth
                      label="Field #3"
                      variant="filled"
                      error={Boolean(meta.touched && meta.error)}
                      helperText={meta.touched && meta.error}
                      {...field}
                    />
                  )}
                </FastField>
              </Grid>

              <Grid item sm={12}>
                <FastField name="field4" type="text">
                  {({ field, meta }) => (
                    <TextField
                      fullWidth
                      label="Field #4"
                      variant="filled"
                      error={Boolean(meta.touched && meta.error)}
                      helperText={meta.touched && meta.error}
                      {...field}
                    />
                  )}
                </FastField>
              </Grid>

              <Grid item sm={12}>
                <FastField name="field5" type="text">
                  {({ field, meta }) => (
                    <TextField
                      fullWidth
                      label="Field #5"
                      variant="filled"
                      error={Boolean(meta.touched && meta.error)}
                      helperText={meta.touched && meta.error}
                      {...field}
                    />
                  )}
                </FastField>
              </Grid>

              <Grid item sm={12}>
                <FastField name="field6" type="text">
                  {({ field, meta }) => (
                    <TextField
                      fullWidth
                      label="Field #6"
                      variant="filled"
                      error={Boolean(meta.touched && meta.error)}
                      helperText={meta.touched && meta.error}
                      {...field}
                    />
                  )}
                </FastField>
              </Grid>

              <Grid item sm={12}>
                <FastField name="field7" type="text">
                  {({ field, meta }) => (
                    <TextField
                      fullWidth
                      label="Field #7"
                      variant="filled"
                      error={Boolean(meta.touched && meta.error)}
                      helperText={meta.touched && meta.error}
                      {...field}
                    />
                  )}
                </FastField>
              </Grid>

              <Grid item sm={12}>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default FormikSimpleForm;
