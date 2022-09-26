import { Button, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material";
import React, { useState } from "react";


const defaultValues = {
  name: "",
  age: 0,
  gender: "",
  food: "",
  favoriteNumber: 0,
};
const Form = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="age-input"
            name="age"
            label="Age"
            type="number"
            value={formValues.age}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={formValues.gender}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="male"
                value="male"
                control={<Radio size="small" />}
                label="Male"
              />
              <FormControlLabel
                key="female"
                value="female"
                control={<Radio size="small" />}
                label="Female"
              />
              <FormControlLabel
                key="other"
                value="other"
                control={<Radio size="small" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <Select
              name="food"
              value={formValues.food}
              onChange={handleInputChange}
            >
              <MenuItem key="Hambruger" value="hamburger">
                Hamburger
              </MenuItem>
              <MenuItem key="Steak" value="steak">
                Steak
              </MenuItem>
              <MenuItem key="Chicken " value="Chicken">
                Chicken
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            id="number-input"
            name="favoriteNumber"
            label="Favorite Number"
            type="number"
            value={formValues.favoriteNumber}
            onChange={handleInputChange}
          />
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default Form;