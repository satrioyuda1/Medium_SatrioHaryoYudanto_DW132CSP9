import React, { Component } from 'react';
import Header from '../component/Navbar';
import { Grid, Typography, Container, Button, Link, Card, CardMedia, CardActionArea, Avatar } from '@material-ui/core';
import { Twitter, Facebook } from '@material-ui/icons';
const Author = [
	{
		image: 'https://source.unsplash.com/random',
		name: 'Park Die Man',
		jobs: 'Engineer'
	},
	{
		image: 'https://picsum.photos/1000/1000',
		name: 'Panuto',
		jobs: ''
	}
];

class ArticleDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonStatus: 'Follow'
		};
	}

	// handleChange = (e) => {
	// 	this.setState({ bgColor: !this.state.bgColor });
	// };

	handleClick = () => {
		this.setState({
			buttonStatus: 'Followed'
		});
	};

	render() {
		var yourBtn = this.state.buttonStatus;

		// so default is this style:
		var btnStyle = {
			backgroundColor: 'primary'
		};

		if (yourBtn === 'clicked') {
			btnStyle = {
				backgroundColor: 'red'
			};
		} else {
			btnStyle = {
				backgroundColor: 'gray'
			};
		}
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
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris nisl, elementum
								facilisis orci a, ultrices porta purus. Nulla non orci ut lacus malesuada suscipit sed
								vel turpis. Vestibulum suscipit rutrum posuere. Fusce sed hendrerit justo. Orci varius
								natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla
								facilisi. Vivamus non consequat risus. Nam congue tellus id magna mollis, non vulputate
								urna facilisis. Duis mollis dolor nec metus pretium dignissim. Morbi luctus enim ac est
								tempor viverra. Aenean et odio tincidunt nisi vulputate maximus. Sed a felis vel lacus
								pulvinar condimentum et a arcu.
							</div>
						</div>
						{Author.map((author) => (
							<Grid container spacing={2} style={{ margin: '20px 0' }}>
								<Grid item xs={10}>
									<Grid container spacing={2}>
										<Grid
											item
											xs={2}
											style={{
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center'
											}}>
											<Avatar
												alt='Remy Sharp'
												src={author.image}
												style={{ width: '90px', height: '90px' }}
											/>
										</Grid>
										<Grid item xs={10}>
											<Typography
												color='textSecondary'
												variant='body1'
												component='p'
												style={{
													fontFamily: 'Poppins',
													textTransform: 'uppercase'
												}}>
												{author.jobs}
											</Typography>
											<Typography
												color='textPrimary'
												variant='h5'
												component='p'
												style={{ fontFamily: 'Bitter', fontWeight: 'bold' }}>
												{author.name}
											</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid
									item
									xs={2}
									style={{
										display: 'flex',
										justifyContent: 'flex-end',
										alignItems: 'center'
									}}>
									<Button
										variant='outlined'
										size='small'
										onClick={this.handleClick}
										style={{ backgroundColor: btnStyle }}>
										{yourBtn}
									</Button>
								</Grid>
							</Grid>
						))}
					</Container>
				</Container>
			</div>
		);
	}
}

export default ArticleDetails;
