import React, { Component } from 'react';
import Header from '../component/Navbar';
import { Grid, Typography, Container, Button, Link, List, ListItem, ListItemText } from '@material-ui/core';

class CategoryPage extends Component {
	render() {
		const Category = [
			{
				title: 'The Away Luggage Saga Shows Venture Capital Needs a Reality Check',
				image: 'https://miro.medium.com/max/4000/1*TBVJ41WGvXQMDZTLhl0RbA.jpeg',
				author: 'John Doe',
				dateCreated: 'Dec 7 | 16 minutes read'
			},
			{
				title: 'The Away Luggage Saga Shows Venture',
				image: 'https://miro.medium.com/max/4000/1*TBVJ41WGvXQMDZTLhl0RbA.jpeg',
				author: 'Yulia',
				dateCreated: 'Dec 11 | 03 minutes read'
			},
			{
				title: 'Venture Capital Needs a Reality Check',
				image: 'https://miro.medium.com/max/4000/1*TBVJ41WGvXQMDZTLhl0RbA.jpeg',
				author: 'Frank',
				dateCreated: 'Nov 3 | 33 minutes read'
			}
		];
		return (
			<div>
				<Header />
				<Container style={{ marginTop: '100px' }}>
					<Grid container spacing={3} direction='row' alignContent='center' alignItems='center'>
						<Grid item xs={12} md={3}>
							<img
								style={{ maxWidth: '100%', height: 'auto', marginLeft: '10px', marginRight: '10px' }}
								src='https://miro.medium.com/max/540/1*cw32fIqCbRWzwJaoQw6BUg.png'
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<Typography
								variant='h6'
								component='h4'
								style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>
								<span style={{ color: '#6A0BFF' }}>The front lines of the future.</span> A Medium
								publication about tech and science.
							</Typography>
						</Grid>
						<Grid
							item
							xs={6}
							md={3}
							style={{
								display: 'flex',
								justifyContent: 'flex-end',
								alignItems: 'center'
							}}>
							<Button variant='outlined' color='primary' size='small'>
								Follow
							</Button>
						</Grid>
					</Grid>
					{Category.map((categoryList) => (
						<Grid container spacing={0} direction='row' style={{ marginTop: '20px' }}>
							<Grid
								item
								lg={7}
								style={{
									display: 'flex',
									justifyContent: 'center',
									align: 'center'
								}}>
								<img style={{ maxWidth: '100%', height: 'auto' }} src={categoryList.image} />
							</Grid>

							<Grid
								item
								lg={5}
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									backgroundColor: '#6A0BFF'
								}}>
								<Container>
									<div style={{ textAlign: 'center' }}>
										<Typography
											variant='h6'
											component='h4'
											style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>
											{categoryList.title}
										</Typography>

										<Link to='/profile' style={{ textDecoration: 'none', color: '#FFF' }}>
											<Typography
												variant='body2'
												component='p'
												style={{
													fontFamily: 'Poppins',
													fontWeight: 'bold',
													marginTop: 40
												}}>
												{categoryList.author}
											</Typography>
										</Link>
										<Typography
											variant='body2'
											component='p'
											style={{
												fontFamily: 'Poppins',
												color: '#000',
												fontWeight: 'bold'
											}}>
											{categoryList.dateCreated}
										</Typography>
									</div>
								</Container>
							</Grid>
						</Grid>
					))}
					{Category.map((categoryList) => (
						<Grid container spacing={1} direction='Column' style={{ marginTop: '20px' }}>
							<Grid item>
								<Container>
									<Container>
										<hr />
										<List>
											<ListItem alignItems='flex-start'>
												<ListItemText
													primary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.?'
													secondary={
														<React.Fragment>
															<Typography
																component='span'
																variant='subtitle1'
																className=''
																color='textPrimary'
															/>
															{categoryList.title}
														</React.Fragment>
													}
												/>
												<img
													style={{
														maxWidth: '40%',
														height: 'auto',
														marginLeft: '10px',
														marginRight: '10px'
													}}
													src='https://miro.medium.com/max/1024/0*5hzTkPxWTEQgMhub.jpg'
												/>
											</ListItem>
										</List>
									</Container>
								</Container>
							</Grid>
						</Grid>
					))}
				</Container>
			</div>
		);
	}
}

export default CategoryPage;
