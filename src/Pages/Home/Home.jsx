import { Typography, Container } from '@mui/material'

import chache from '../../assests/chache.jpeg'

const Home = () => {
	return (
		<Container sx={{ mt: 8, width: 1 }}>
			<Typography variant='h1'>Portfolio - Jose Moreno</Typography>
			<img src={chache} />
		</Container>
	)
}

export default Home
