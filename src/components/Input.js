import TextField from "@material-ui/core/TextField";
import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  return (
    <TextField
      {...props}
      variant="outlined"
      margin="normal"
      fullWidth
      ref={ref}
    />
  );
});
