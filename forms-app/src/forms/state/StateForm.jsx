import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const StateForm = () => {
  const [formState, setFormState] = useState(() => ({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: "",
    field7: "",
  }));

  const onChange = (name) => (event) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: event.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit", formState);
  };

  return (
    <form onSubmit={onSubmit}>
      <Container maxWidth="xs">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">State Form</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <TextField
              value={formState.field1}
              onChange={onChange("field1")}
              fullWidth
              label="Field #1"
              variant="filled"
            />
          </Grid>

          <Grid item sm={12}>
            <TextField
              value={formState.field2}
              onChange={onChange("field2")}
              fullWidth
              label="Field #2"
              variant="filled"
            />
          </Grid>

          <Grid item sm={12}>
            <TextField
              value={formState.field3}
              onChange={onChange("field3")}
              fullWidth
              label="Field #3"
              variant="filled"
            />
          </Grid>

          <Grid item sm={12}>
            <TextField
              value={formState.field4}
              onChange={onChange("field4")}
              fullWidth
              label="Field #4"
              variant="filled"
            />
          </Grid>

          <Grid item sm={12}>
            <TextField
              value={formState.field5}
              onChange={onChange("field5")}
              fullWidth
              label="Field #5"
              variant="filled"
            />
          </Grid>

          <Grid item sm={12}>
            <TextField
              value={formState.field6}
              onChange={onChange("field6")}
              fullWidth
              label="Field #6"
              variant="filled"
            />
          </Grid>

          <Grid item sm={12}>
            <TextField
              value={formState.field7}
              onChange={onChange("field7")}
              fullWidth
              label="Field #7"
              variant="filled"
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

export default StateForm;
