import { Typography, Stack, Toolbar, Button, AppBar } from '@mui/material'
import { navbarTitle } from './Navbar.styles'
import { navbarOptions } from './Navbar.constants'

const Navbar = () => {
	return (
		<>
			<AppBar position='fixed'>
				<Toolbar>
					<Typography component='div' variant='h3' sx={navbarTitle}>
						Navbar
					</Typography>
					<Stack direction='row'>
						{navbarOptions.map((option) => (
							<Button variant='outline' key={option.key}>
								{option.title}
							</Button>
						))}
					</Stack>
				</Toolbar>
			</AppBar>
		</>
	)
}

export default Navbar
