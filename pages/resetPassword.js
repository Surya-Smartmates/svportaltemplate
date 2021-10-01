import React, { useState, useEffect, useRef } from "react";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
//Axios
import axios from "axios";
//Cookies
import Cookies from "js-cookie";
import * as cookie from "cookie";
//Material UI
import Alert from "@material-ui/lab/Alert";
import LoadingButton from "@material-ui/lab/LoadingButton";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

//React Hook Form
import { useForm, Controller } from "react-hook-form";
// Next Auth
import { signIn } from "next-auth/client";

import img1 from "../assets/images/backgrounds/login-bg1.jpg";
import { CustomTextField } from "../components/custom-elements/CustomTextField";
import { CustomFormLabel } from "../components/custom-elements/CustomFormLabel";
import RegexPattern from "../shared/_helper/RegexPattern";
import FilterPassword from "../shared/_helper/FilterPassword";

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState(null);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { control, handleSubmit, watch, setValue } = useForm();

    console.log("WATCH", watch());

    // const password = useRef({});
    // password.current = watch("password", "");

    useEffect(() => {
        console.log("hello");
        console.log(
            "REMEMBER",
            Cookies.get("remember"),
            "RECORD ID",
            Cookies.get("record_id")
        );
    }, []);

    useEffect(() => {
        let errorMsg;
        errorMsg = setTimeout(() => {
            setError(null);
        }, 5000);
        return () => clearTimeout(errorMsg);
    }, [error]);

    const onSubmit = async (data) => {
        // first check record_id exists in the cookies
        if (Cookies.get("record_id")) {
            setLoading(true);
            const response = await axios.post("/api/resetPassword", {
                password: password,
                password_repeat: passwordRepeat,
                record_id: Cookies.get("record_id"),
            });
            setLoading(false);
            //if password successfully updated then navigate him to the dahshboard page through Next Auth Credential Provider
            if (response.data.ok) {
                signIn("credentials", {
                    email: Cookies.get("user_email"),
                    name: Cookies.get("name"),
                    remember: Cookies.get("remember"),
                    record_id: Cookies.get("record_id"),
                });
            } else {
                setError(response.data.error);
            }
        } else {
            //otherwise navigate him to the login page
            router.push("/login");
        }
    };

    return (
        <Grid
            container
            spacing={0}
            sx={{ height: "100vh", justifyContent: "center" }}>
            <Grid
                item
                xs={12}
                sm={12}
                lg={6}
                sx={{
                    background: (theme) =>
                        `${
                            theme.palette.mode === "dark"
                                ? "#104973"
                                : "#f1fbfe"
                        }`,
                }}>
                <Box
                    sx={{
                        position: "relative",
                    }}>
                    <Box
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        sx={{
                            position: {
                                xs: "relative",
                                lg: "absolute",
                            },
                            height: { xs: "auto", lg: "100vh" },
                            right: { xs: "auto", lg: "-50px" },
                            margin: "0 auto",
                        }}>
                        <Image
                            src={img1}
                            alt='bg'
                            style={{
                                width: "100%",
                                maxWidth: "812px",
                            }}
                        />
                    </Box>

                    <Box
                        display='flex'
                        alignItems='center'
                        sx={{
                            p: 4,
                            position: "absolute",
                            top: "0",
                        }}>
                        {/* <LogoIcon /> */}
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={8} lg={6} display='flex' alignItems='center'>
                <Grid
                    container
                    spacing={0}
                    display='flex'
                    justifyContent='center'>
                    <Grid item xs={12} lg={9} xl={6}>
                        <Box
                            sx={{
                                p: 4,
                            }}>
                            <Typography variant='h2' fontWeight='700'>
                                Reset your password
                            </Typography>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Box
                                    sx={{
                                        mt: 4,
                                    }}>
                                    <CustomFormLabel htmlFor='reset-email'>
                                        Password
                                    </CustomFormLabel>

                                    <FormControl
                                        sx={{ width: "100%" }}
                                        variant='outlined'>
                                        <OutlinedInput
                                            variant='outlined'
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            endAdornment={
                                                <InputAdornment position='end'>
                                                    <IconButton
                                                        aria-label='toggle password visibility'
                                                        onClick={() => {
                                                            setShowPassword(
                                                                (prev) => !prev
                                                            );
                                                        }}
                                                        onMouseDown={(e) =>
                                                            e.preventDefault()
                                                        }
                                                        edge='end'>
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

                                    <CustomFormLabel htmlFor='reset-email'>
                                        Confirm Password
                                    </CustomFormLabel>

                                    <FormControl
                                        sx={{ width: "100%" }}
                                        variant='outlined'>
                                        <OutlinedInput
                                            variant='outlined'
                                            type={
                                                showPasswordRepeat
                                                    ? "text"
                                                    : "password"
                                            }
                                            value={passwordRepeat}
                                            onChange={(e) =>
                                                setPasswordRepeat(
                                                    e.target.value
                                                )
                                            }
                                            endAdornment={
                                                <InputAdornment position='end'>
                                                    <IconButton
                                                        aria-label='toggle password visibility'
                                                        onClick={() => {
                                                            setShowPasswordRepeat(
                                                                (prev) => !prev
                                                            );
                                                        }}
                                                        onMouseDown={(e) =>
                                                            e.preventDefault()
                                                        }
                                                        edge='end'>
                                                        {showPasswordRepeat ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                            <Visibility />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>

                                    <LoadingButton
                                        loading={loading}
                                        loadingPosition='center'
                                        type='submit'
                                        color='secondary'
                                        variant='contained'
                                        size='large'
                                        fullWidth
                                        sx={{
                                            pt: "10px",
                                            pb: "10px",
                                            mt: 4,
                                        }}
                                        disabled={
                                            FilterPassword({
                                                RegexPattern,
                                                password,
                                                passwordRepeat,
                                            }).some(
                                                (pattern) =>
                                                    pattern.checkMark === false
                                            ) || false
                                        }>
                                        Reset Password
                                    </LoadingButton>

                                    <Box
                                        sx={{
                                            mt: 2,
                                            p: 2,
                                            background: "#eff3f5",
                                        }}>
                                        {FilterPassword({
                                            RegexPattern,
                                            password,
                                            passwordRepeat,
                                        }).map((pattern, index) => (
                                            <Box
                                                display='flex'
                                                alignItems='center'
                                                sx={{
                                                    mb:
                                                        RegexPattern.length ===
                                                        index
                                                            ? 0
                                                            : 1,
                                                }}
                                                key={index}>
                                                {pattern.checkMark ? (
                                                    <CheckCircleOutlineIcon
                                                        style={{
                                                            color: "#0f7e03",
                                                            fontSize: "18px",
                                                        }}
                                                    />
                                                ) : (
                                                    <ErrorOutlineIcon
                                                        style={{
                                                            color: "#de2510",
                                                            fontSize: "18px",
                                                        }}
                                                    />
                                                )}

                                                <Typography
                                                    variant='body2'
                                                    sx={{
                                                        ml: 0.5,
                                                    }}>
                                                    {pattern.text}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>

                                    <Button
                                        color='secondary'
                                        variant='outlined'
                                        size='large'
                                        fullWidth
                                        sx={{
                                            pt: "10px",
                                            pb: "10px",
                                            mt: 2,
                                        }}>
                                        <Link href='/login'>
                                            <a>Back to Login</a>
                                        </Link>
                                    </Button>
                                </Box>
                            </form>
                            {error && (
                                <Box mt={2}>
                                    <Alert severity='error' variant='filled'>
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
export async function getServerSideProps(context) {
    const parsedCookies = cookie.parse(context.req.headers.cookie);
    if (!parsedCookies.remember && !parsedCookies.record_id) {
        return {
            redirect: {
                destination: "/login",
            },
        };
    }

    return {
        props: {
            message: "Greetings from reset password page",
        },
    };
}

export default ResetPassword;
