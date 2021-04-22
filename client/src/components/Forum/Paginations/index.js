import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(3),
      display: "flex",
      justifyContent: "center",
    },
  },
}));

export default function BasicPagination({ page, handleChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        value={2}
        onChange={handleChange}
        count={page}
        color="secondary"
      />
    </div>
  );
}
