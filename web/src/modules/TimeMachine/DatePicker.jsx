import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

export default function MaterialUIPickers({date,setDate}) {

  const handleDateChange = date => {
    setDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
      
        margin="normal"
        id="date-picker-dialog"
        label="Date picker"
        format="dd/MM/yyyy"
        value={date}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
        inputProps={{readOnly: true}}
      />
    </MuiPickersUtilsProvider>
  );
}
