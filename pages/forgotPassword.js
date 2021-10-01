import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
//material ui
import LoadingButton from "@material-ui/lab/LoadingButton";
import Alert from "@material-ui/core/Alert";

import img1 from "../assets/images/backgrounds/login-bg1.jpg";
import { CustomTextField } from "../components/custom-elements/CustomTextField";
import { CustomFormLabel } from "../components/custom-elements/CustomFormLabel";

//React Hook Form
import { useForm, Controller } from "react-hook-form";

const ResetPassword = () => {
    const { control, handleSubmit, watch, setValue } = useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const router = useRouter();

    useEffect(() => {
        let errorMsg;
        errorMsg = setTimeout(() => {
            setError(null);
        }, 5000);
        return () => clearTimeout(errorMsg);
    }, [error]);

    useEffect(() => {
        let successMsg;
        successMsg = setTimeout(() => {
            setSuccessMessage(null);
        }, 5000);
        return () => {
            clearTimeout(successMsg);
        };
    }, [successMessage]);

    const onSubmit = async (data) => {
        setLoading(true);
        console.log("DATA", data);
        const response = await axios.post("/api/forgotPassword", {
            email: data.email,
        });
        setLoading(false);
        //if error occured then show error message
        if (!response.data.ok) {
            setError(response.data.error);
            return;
        }

        //navigate him to the login page
        setSuccessMessage(response.data.message);
        // router.push("/login");
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
                                Forgot your password?
                            </Typography>

                            {/* <Typography
                color="textSecondary"
                variant="h5"
                fontWeight="400"
                sx={{
                  mt: 2,
                }}
              >
                Please enter the email address associated with your account and
                We will email you a random password. First login the site using
                that password then and reset it.
              </Typography>
              <Alert severity="error" variant="filled" sx={{ mt: 2 }}>
                You won't reset your password twice in 30 minutes!!
              </Alert> */}

                            <Box
                                sx={{
                                    mt: 4,
                                }}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <CustomFormLabel htmlFor='reset-email'>
                                        Email
                                    </CustomFormLabel>
                                    <Controller
                                        name='email'
                                        control={control}
                                        rules={{
                                            required: "Email field is required",
                                            pattern: {
                                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message:
                                                    "PLease Enter Correct Email",
                                            },
                                        }}
                                        render={({
                                            field: { onChange, value },
                                            fieldState: { error },
                                        }) => (
                                            <CustomTextField
                                                id='email'
                                                variant='outlined'
                                                fullWidth
                                                defaultValue=''
                                                error={!!error}
                                                onChange={onChange}
                                                helperText={
                                                    error ? error.message : null
                                                }
                                                sx={{ mb: 2 }}
                                            />
                                        )}
                                    />

                                    <LoadingButton
                                        loading={loading}
                                        loadingPosition='center'
                                        color='secondary'
                                        variant='contained'
                                        size='large'
                                        fullWidth
                                        sx={{
                                            pt: "10px",
                                            pb: "10px",
                                        }}
                                        type='submit'>
                                        Send
                                    </LoadingButton>
                                </form>

                                <Button
                                    color='secondary'
                                    size='large'
                                    fullWidth
                                    // component={Link}
                                    // href="/auth/login"
                                    sx={{
                                        pt: "10px",
                                        pb: "10px",
                                        mt: 2,
                                    }}>
                                    <Link href='/login'>
                                        <a>Back to Login</a>
                                    </Link>
                                </Button>
                                {error && (
                                    <Box mt={2}>
                                        <Alert
                                            severity='error'
                                            variant='filled'>
                                            {error}
                                        </Alert>
                                    </Box>
                                )}
                                {successMessage && (
                                    <Box mt={2}>
                                        <Alert
                                            severity='success'
                                            variant='filled'>
                                            {successMessage}
                                        </Alert>
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        // </PageContainer>
    );
};

export default ResetPassword;
