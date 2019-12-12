import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { width } from '@material-ui/system';
import { Typography, Link, List, ListItem, ListItemText, Container } from '@material-ui/core';
import Navbar from '../component/Navbar';
import Category from '../component/Category';

class Home extends Component {
	render() {
		const Popular = [
			{
				no: '01',
				title: 'The Away Luggage Saga Shows Venture Capital Needs a Reality Check',
				author: 'John Doe',
				dateCreated: 'Dec 7 | 16 minutes read'
			},
			{
				no: '02',
				title: 'The Away Luggage Saga Shows Venture',
				author: 'Yulia',
				dateCreated: 'Dec 11 | 03 minutes read'
			},
			{
				no: '03',
				title: 'Venture Capital Needs a Reality Check',
				author: 'Frank',
				dateCreated: 'Nov 3 | 33 minutes read'
			}
		];
		return (
			<div>
				<Navbar />
				<Category />
        <Container >
				<Grid container spacing={3} direction='row' marginTop='50px'>
					<Grid item lg={4}>
						<div>
							<img
								style={{ maxWidth: '100%', height: 'auto' }}
								src='https://miro.medium.com/max/700/1*2T7qo9te-cfMhFJpwIUNig.jpeg'
							/>
							<Typography variant='h5' align='Left'>
								7 Reasons Why Smart, Hardworking People Don’t Become Successful
							</Typography>
							<Typography variant='subtitle2' align='justify'>
								lorem ipsum dolor amet...
							</Typography>
						</div>
					</Grid>
					<Grid item lg={4}>
						<List>
							<ListItem alignItems='flex-start'>
								<img
									style={{ maxWidth: '50%', height: 'auto', marginLeft: '10px', marginRight: '10px' }}
									src='https://miro.medium.com/max/1600/1*SaFOFV_pvECKdyOXVUTqXA.jpeg'
								/>
								<ListItemText
									primary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.?'
									secondary={
										<React.Fragment>
											<Typography
												component='span'
												variant='body2'
												className=''
												color='textPrimary'>
												ParK Die Man
											</Typography>
											{" — I'll be in your neighborhood doing errands this…"}
										</React.Fragment>
									}
								/>
							</ListItem>
						</List>
						<List>
							<ListItem alignItems='flex-start'>
								<img
									style={{ maxWidth: '50%', height: 'auto', marginLeft: '10px', marginRight: '10px' }}
									src='https://miro.medium.com/max/1024/0*5hzTkPxWTEQgMhub.jpg'
								/>
								<ListItemText
									primary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.?'
									secondary={
										<React.Fragment>
											<Typography
												component='span'
												variant='body2'
												className=''
												color='textPrimary'>
												Panutos
											</Typography>
											{" — I'll be in your neighborhood doing errands this…"}
										</React.Fragment>
									}
								/>
							</ListItem>
						</List>
						<List>
							<ListItem alignItems='flex-start'>
								<img
									style={{ maxWidth: '50%', height: 'auto', marginLeft: '10px', marginRight: '10px' }}
									src='https://miro.medium.com/max/1600/1*Cplec4Kp4kips8lvyQZLKw.png'
								/>
								<ListItemText
									primary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.?'
									secondary={
										<React.Fragment>
											<Typography
												component='span'
												variant='body2'
												className=''
												color='textPrimary'>
												Su Kirk Man
											</Typography>
											{" — I'll be in your neighborhood doing errands this…"}
										</React.Fragment>
									}
								/>
							</ListItem>
						</List>

						{/* <div >
                            <div>
                                <img style={{maxWidth:"100%",height:'auto' }} src="https://miro.medium.com/max/1600/1*SaFOFV_pvECKdyOXVUTqXA.jpeg"/>
                            <Typography variant="h5" align= "Left">
                            Monyet lepas dari kandang
                            </Typography>
                            <Typography variant="subtitle2" align="justify">
                            lorem ipsum dolor amet...
                            </Typography> 
                        </div>
                        <div style={{width:"100%", height:"50px", backgroundColor:"yellow"}}>
                        </div>
                        <div>
                        </div>
                    </div> */}
					</Grid>
					<Grid item lg={4}>
						<div>
							<img
								style={{ maxWidth: '100%', height: 'auto' }}
								src='https://miro.medium.com/max/3888/0*su9uMau9M7wwmluM'
							/>
							<Typography variant='h5' align='Left'>
								7 Reasons Why Smart, Hardworking People Don’t Become Successful
							</Typography>
							<Typography variant='subtitle2' align='justify'>
								lorem ipsum dolor amet...
							</Typography>
						</div>
					</Grid>
				</Grid>
				<Grid xs={12} style={{ textAlign: 'right', marginRight: '10%' }}>
					<Link color='primary'>
						<strong>SEE ALL FEATURED ></strong>
					</Link>
					<hr />
				</Grid>
				<Grid container spacing={3} direction='row'>
					<Grid item lg={7}>
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
											{
												'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
											}
										</React.Fragment>
									}
								/>
								<img
									style={{ maxWidth: '50%', height: 'auto', marginLeft: '10px', marginRight: '10px' }}
									src='https://miro.medium.com/max/1024/0*5hzTkPxWTEQgMhub.jpg'
								/>
							</ListItem>
						</List>
						<List>
							<ListItem alignItems='flex-start'>
								<ListItemText
									primary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.?'
									secondary={
										<React.Fragment>
											<Typography
												component='span'
												variant='body2'
												className=''
												color='textPrimary'>
												ParK Die Man
											</Typography>
											{" — I'll be in your neighborhood doing errands this…"}
										</React.Fragment>
									}
								/>
								<img
									style={{ maxWidth: '50%', height: 'auto', marginLeft: '10px', marginRight: '10px' }}
									src='https://miro.medium.com/max/1600/1*SaFOFV_pvECKdyOXVUTqXA.jpeg'
								/>
							</ListItem>
						</List>
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
											{
												'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
											}
										</React.Fragment>
									}
								/>
								<img
									style={{ maxWidth: 'auto', height: '30%', marginLeft: '10px', marginRight: '10px' }}
									src=' https://i.pinimg.com/236x/10/31/a8/1031a881880373587a0453d73b54ce67.jpg'
								/>
							</ListItem>
						</List>
					</Grid>
					<Grid item lg={5} justify='center' alignContent='center' alignItems='center' alignText>
						<Typography
							variant='h5'
							component='p'
							className='p-3'
							style={{ fontFamily: 'Frank Ruhl Libre' }}>
							Popular on medium
						</Typography>

						{Popular.map((populars) => (
							<Grid item>
								<Typography
									variant='h4'
									component='p'
									color='textSecondary'
									style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>
									{populars.no}
								</Typography>
							</Grid>
						))}
					</Grid>
				</Grid>
        </Container>
			</div>
		);
	}
}

export default Home;
