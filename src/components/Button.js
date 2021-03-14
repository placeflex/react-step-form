import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const PrimaryButton = ({ children, props }) => {
  const styles = useStyles();
  return (
    <Button
      {...props}
      className={styles.root}
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
    >
      {children}
    </Button>
  );
};
