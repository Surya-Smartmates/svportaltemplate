import React from "react";
import { styled } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { withTheme } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

const useStyles = ({ props, theme }) =>
  makeStyles({
    root: {
      "& .MuiOutlinedInput-input::-webkit-input-placeholder": {
        color: "#767e89",
        opacity: "1",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: `${
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.12)"
            : "#dee3e9"
        }`,
      },
      "& .MuiOutlinedInput-input.Mui-disabled": {
        backgroundColor: `${
          theme.palette.mode === "dark" ? "rgba(0, 0, 0, 0.12) " : "#f8f9fb "
        }`,
      },
      "& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder": {
        color: "#767e89",
        opacity: "1",
      },
    },
  });

const CustomTextField = (props) => {
  const theme = useTheme();
  const classes = useStyles({ props, theme });
  return <TextField className={classes.root} {...props} />;
};

export { CustomTextField };
