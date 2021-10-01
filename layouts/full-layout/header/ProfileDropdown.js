import React, { useState } from "react"

import {
	Box,
	MenuItem,
	Typography,
	Avatar,
	Button,
	Divider,
} from "@material-ui/core"

import FeatherIcon from "feather-icons-react"
//material ui
import LoadingButton from "@material-ui/lab/LoadingButton"
import Cookies from "js-cookie"
import { useSession, signOut } from "next-auth/client"
// import userimg from "../../../../assets/images/users/user2.jpg";

const ProfileDropdown = () => {
	const [loading, setLoading] = useState(false)
	const [session] = useSession()

	return (
		<Box>
			<h1>{loading}</h1>
			<Box
				sx={{
					pb: 3,
					mt: 3,
				}}
			>
				<Box display='flex' alignItems='center'>
					{/* <Avatar
            src={userimg}
            alt={userimg}
            sx={{
              width: "90px",
              height: "90px",
            }}
          ></Avatar> */}
					<Box
						sx={{
							ml: 2,
						}}
					>
						<Typography
							variant='h4'
							sx={{
								lineHeight: "1.235",
							}}
						>
							Julia Roberts
						</Typography>
						<Typography color='textSecondary' variant='h6' fontWeight='400'>
							Administrator
						</Typography>
						<Box display='flex' alignItems='center'>
							<Typography
								color='textSecondary'
								display='flex'
								alignItems='center'
								sx={{
									color: (theme) => theme.palette.grey.A200,
									mr: 1,
								}}
							>
								<FeatherIcon icon='mail' width='18'></FeatherIcon>
							</Typography>
							<Typography color='textSecondary' variant='h6'>
								info@Flexy.com
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
			<Divider
				style={{
					marginTop: 0,
					marginBottom: 0,
				}}
			/>

			<Box>
				<MenuItem
					sx={{
						pt: 3,
						pb: 3,
					}}
				>
					<Box display='flex' alignItems='center'>
						<Button
							sx={{
								backgroundColor: (theme) => theme.palette.primary.light,
								color: (theme) => theme.palette.primary.main,
								boxShadow: "none",
								minWidth: "50px",
								width: "45px",
								height: "40px",
								borderRadius: "10px",
							}}
						>
							<FeatherIcon
								icon='dollar-sign'
								width='18'
								height='18'
							></FeatherIcon>
						</Button>
						<Box
							sx={{
								ml: 2,
							}}
						>
							<Typography
								variant='h5'
								sx={{
									lineHeight: "1.235",
								}}
							>
								My Profile
							</Typography>
							<Typography color='textSecondary' variant='h6' fontWeight='400'>
								Account Settings
							</Typography>
						</Box>
					</Box>
				</MenuItem>
				<Divider
					style={{
						marginTop: 0,
						marginBottom: 0,
					}}
				/>
				<MenuItem
					sx={{
						pt: 3,
						pb: 3,
					}}
				>
					<Box display='flex' alignItems='center'>
						<Button
							sx={{
								backgroundColor: (theme) => theme.palette.success.light,
								color: (theme) => theme.palette.success.main,
								boxShadow: "none",
								minWidth: "50px",
								width: "45px",
								height: "40px",
								borderRadius: "10px",
							}}
						>
							<FeatherIcon icon='shield' width='18' height='18'></FeatherIcon>
						</Button>
						<Box
							sx={{
								ml: 2,
							}}
						>
							<Typography
								variant='h5'
								sx={{
									lineHeight: "1.235",
								}}
							>
								My Inbox
							</Typography>
							<Typography color='textSecondary' variant='h6' fontWeight='400'>
								Messages & Emails
							</Typography>
						</Box>
					</Box>
				</MenuItem>
				<Divider
					style={{
						marginTop: 0,
						marginBottom: 0,
					}}
				/>
				<MenuItem
					sx={{
						pt: 3,
						pb: 3,
					}}
				>
					<Box display='flex' alignItems='center'>
						<Button
							sx={{
								backgroundColor: (theme) => theme.palette.error.light,
								color: (theme) => theme.palette.error.main,
								boxShadow: "none",
								minWidth: "50px",
								width: "45px",
								height: "40px",
								borderRadius: "10px",
							}}
						>
							<FeatherIcon
								icon='credit-card'
								width='18'
								height='18'
							></FeatherIcon>
						</Button>
						<Box
							sx={{
								ml: 2,
							}}
						>
							<Typography
								variant='h5'
								sx={{
									lineHeight: "1.235",
								}}
							>
								My Tasks
							</Typography>
							<Typography color='textSecondary' variant='h6' fontWeight='400'>
								To-do and Daily Tasks
							</Typography>
						</Box>
					</Box>
				</MenuItem>
				<LoadingButton
					loading={loading}
					loadingPosition='center'
					color='primary'
					variant='contained'
					size='large'
					fullWidth
					sx={{
						pt: "10px",
						pb: "10px",
						mt: 2,
					}}
					onClick={async () => {
						setLoading(true)
						if (Cookies.get("expiredTime")) {
							Cookies.remove("expiredTime", { path: "" })
						}
						signOut()
						// setLoading(false)
					}}
				>
					Logout
				</LoadingButton>
			</Box>
		</Box>
	)
}

export default ProfileDropdown
