import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
//MAterial UI
import {
  Grid,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import Alert from "@material-ui/core/Alert";
import LoadingButton from "@material-ui/lab/LoadingButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
//Axios
import axios from "axios";
//Cookies
import Cookies from "js-cookie";
import * as cookie from "cookie";
//React Hook Form
import { useForm, Controller, setValue } from "react-hook-form";
// Next Auth
import { signIn } from "next-auth/client";

// import img1 from "../assets/images/backgrounds/login-bg1.jpg";
import img1 from "../public/theme/backgrounds/login-bg1.png";

import { CustomCheckbox } from "../components/custom-elements/CustomCheckbox";
import { CustomTextField } from "../components/custom-elements/CustomTextField";
import { CustomFormLabel } from "../components/custom-elements/CustomFormLabel";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  //   const [email, setEmail] = useState(null);
  //   const [password, setPassword] = useState(null);
  //   const [remember, setRemember] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  //Empty Email and Password field when there's an error
  useEffect(() => {
    setValue("email", "");
    setValue("password", "");
    let errorMsg;
    errorMsg = setTimeout(() => {
      setError(null);
    }, 5000);
    return () => clearTimeout(errorMsg);
  }, [error]);

  const { control, handleSubmit, watch, setValue } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data) => {
    setLoading(true);

    const response = await axios.post("/api/validateUser", {
      email: data.email,
      password: data.password,
    });

    setLoading(false);

    //if error occured then show error message
    if (!response.data.ok) {
      setError(response.data.error);
      return;
    }

    // if user is new navigate him to the reset password page
    // otherwise set session and navigate him to the dashboard page
    if (response.data.ok) {
      if (response.data.resetPassword) {
        // set email,record_id and remember in cookies
        var inThirtyminutes = new Date(new Date().getTime() + 30 * 60 * 1000);

        Cookies.set("user_email", response.data.email, {
          expires: inThirtyminutes,
        });
        Cookies.set("remember", data.remember, {
          expires: inThirtyminutes,
        });
        Cookies.set("record_id", response.data.record_id, {
          expires: inThirtyminutes,
        });
        Cookies.set("name", response.data.name, {
          expires: inThirtyminutes,
        });

        router.push("/resetPassword");
      } else {
        signIn("credentials", {
          email: response.data.email,
          name: response.data.name,
          record_id: response.data.record_id,
          remember: data.remember,
        });
        console.log("this is " + data.remember)
      }
    }
  };
  useEffect(() => {
    //when this page loads set remember unchecked
    setValue("remember", false);
  }, []);

  return (
    <Grid
      container
      spacing={0}
      sx={{ height: "100vh", justifyContent: "center" }}
    >
      {/* <button>Save Cokkie</button>
      <button></button> */}
      <Grid
        item
        xs={12}
        sm={12}
        lg={6}
        sx={{
          background: (theme) =>
            `${theme.palette.mode === "dark" ? "#104973" : "#f1fbfe"}`,
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              position: {
                xs: "relative",
                lg: "absolute",
              },
              height: { xs: "auto", lg: "100vh" },
              right: { xs: "auto", lg: "-50px" },
              margin: "0 auto",
            }}
          >
            <Image
              src={img1}
              alt="bg"
              style={{
                width: "100%",
                maxWidth: "812px",
              }}
            />
          </Box>

          <Box
            sx={{
              p: 4,
              position: "absolute",
              top: "0",
            }}
          >
            {/* <LogoIcon /> */}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} lg={6} display="flex" alignItems="center">
        <Grid container spacing={0} display="flex" justifyContent="center">
          <Grid item xs={12} lg={9} xl={6}>
            <Box
              sx={{
                p: 4,
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography fontWeight="700" variant="h2">
                  Welcome to
                  <br /> StudyVillage Portal
                </Typography>

                <Box
                  sx={{
                    mt: 4,
                  }}
                >
                  <CustomFormLabel htmlFor="email">
                    Email Address
                  </CustomFormLabel>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Email field is required",
                      pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "PLease Enter Correct Email",
                      },
                    }}
                    render={({ field, fieldState: { error } }) => (
                      <CustomTextField
                        {...field}
                        id="email"
                        variant="outlined"
                        fullWidth
                        defaultValue=""
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    )}
                  />

                  <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: "Password field is required",
                      minLength: {
                        value: 8,
                        message:
                          "Password field must be contain atleast 8 character",
                      },
                    }}
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <FormControl sx={{ width: "100%" }} variant="outlined">
                          <OutlinedInput
                            {...field}
                            variant="outlined"
                            type={showPassword ? "text" : "password"}
                            helperText={error ? error.message : null}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() => {
                                    setShowPassword((prev) => !prev);
                                  }}
                                  onMouseDown={(e) => e.preventDefault()}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                        <Typography
                          variant="body2"
                          style={{ color: "#de2510" }}
                          sx={{ my: 2 }}
                        >
                          {error && error.message}
                        </Typography>
                      </>
                      // <CustomTextField
                      //   id="password"
                      //   type="password"
                      //   variant="outlined"
                      //   fullWidth
                      //   sx={{
                      //     mb: 3,
                      //   }}
                      //   error={!!error}
                      //   onChange={onChange}
                      //   helperText={error ? error.message : null}
                      // />
                    )}
                  />

                  <Box
                    sx={{
                      display: {
                        xs: "block",
                        sm: "flex",
                        lg: "flex",
                      },
                      alignItems: "center",
                    }}
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Controller
                            name="remember"
                            // defaultValue={false}
                            render={({
                              field: { onChange, value, onBlur },
                            }) => {
                              return (
                                <CustomCheckbox
                                  onBlur={onBlur}
                                  onChange={onChange}
                                />
                              );
                            }}
                            control={control}
                          />
                        }
                        label="Remember this Device"
                        sx={{
                          mb: 2,
                        }}
                      />
                    </FormGroup>

                    <Box
                      sx={{
                        ml: "auto",
                      }}
                    >
                      <Typography
                        fontWeight="500"
                        sx={{
                          display: "block",
                          textDecoration: "none",
                          mb: "16px",
                          color: "primary.main",
                        }}
                      >
                        <Link href="/forgotPassword">
                          <a> Forgot Password ?</a>
                        </Link>
                      </Typography>
                    </Box>
                  </Box>

                  <LoadingButton
                    loading={loading}
                    loadingPosition="center"
                    color="secondary"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      pt: "10px",
                      pb: "10px",
                    }}
                    type="submit"
                  >
                    Login
                  </LoadingButton>

                  {/* <Button
                    color="secondary"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      pt: "10px",
                      pb: "10px",
                    }}
                    type="submit"
                  >
                    Sign In
                  </Button> */}
                </Box>
              </form>
              {error && (
                <Box mt={2}>
                  <Alert severity="error" variant="filled">
                    {error}
                  </Alert>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;

//get input from frontend (email and password)
//then validate email and password. if first time login true then store the necessary info to the db , then go to the reset page and set a new password and verify it with next auth
//if first time login false then verify it with next auth
