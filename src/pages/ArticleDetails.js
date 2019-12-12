import React, { Component } from 'react';
import Header from '../component/Navbar';
import {
	Grid,
	Typography,
	Container,
	Button,
	Link,
	Card,
	CardMedia,
	CardActionArea,
	Avatar,
	Icon
} from '@material-ui/core';
import { Twitter, Facebook } from '@material-ui/icons';

class ArticleDetails extends Component {
	render() {
		return (
			<div>
				<Header />
				<Container>
					<Grid container style={{ marginBottom: 20, marginTop: 30 }}>
						<Grid items xs={12}>
							<Card>
								<CardActionArea>
									<CardMedia
										component='img'
										alt='Title Image'
										className='card-img'
										image='https://miro.medium.com/max/1024/0*5hzTkPxWTEQgMhub.jpg'
										title='Title Image'
									/>
								</CardActionArea>
							</Card>
						</Grid>
					</Grid>
					<Container>
						<div className='container-app'>
							{/* Uploader */}
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									marginTop: 10,
									marginBottom: 10
								}}>
								<div style={{ display: 'flex', justifyContent: 'space-between' }}>
									<Avatar style={{ marginRight: 10 }}>J</Avatar>
									<div>
										<Link
											to='/profile'
											style={{
												fontFamily: 'Roboto Condensed',
												color: '#000',
												textDecoration: 'none',
												fontSize: 16
											}}>
											John Doe
										</Link>
										<Typography variant='caption' component='p' style={{ fontFamily: 'Poppins' }}>
											12 November 2019
										</Typography>
									</div>
								</div>
								<div>
									{/* <Button size='small' variant='outlined' color='primary' style={{ margin: 10 }}>
										Follow
									</Button> */}
									<Twitter style={{ marginRight: 5 }} />
									Twitter
									<Facebook style={{ marginRight: 5 }} />
									Facebook
								</div>
							</div>
							{/* Related Tag */}
							<div
								style={{
									display: 'flex',
									width: 170,
									justifyContent: 'space-between'
								}}>
								<Typography
									gutterBottom
									variant='caption'
									component='p'
									style={{
										fontFamily: 'Poppins',
										color: '#757575',
										fontWeight: 400,
										textTransform: 'uppercase'
									}}>
									Animal
								</Typography>
								<Typography
									gutterBottom
									variant='caption'
									component='p'
									style={{
										fontFamily: 'Poppins',
										color: '#757575',
										fontWeight: 400,
										textTransform: 'uppercase'
									}}>
									Education
								</Typography>
								<Typography
									gutterBottom
									variant='caption'
									component='p'
									style={{
										fontFamily: 'Poppins',
										color: '#757575',
										fontWeight: 400,
										textTransform: 'uppercase'
									}}>
									Reptile
								</Typography>
							</div>
							{/* Title Article */}
							<Typography variant='h4' component='p' style={{ fontFamily: 'Bitter' }}>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry
							</Typography>
							{/* Article */}
							<div style={{ textAlign: 'justify' }}>
								<Typography
									variant='subtitle1'
									component='p'
									style={{ fontFamily: 'Poppins', marginTop: 20 }}
								/>
							</div>
						</div>
					</Container>
				</Container>
			</div>
		);
	}
}

export default ArticleDetails;
