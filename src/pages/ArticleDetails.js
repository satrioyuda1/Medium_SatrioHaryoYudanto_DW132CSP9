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
	Divider
} from '@material-ui/core';
import { Twitter, Facebook } from '@material-ui/icons';
import RelatedArticles from '../component/RelatedArticles';
import Footer from '../component/Footer';
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
			buttonStatus: 'Follow',
			articleDetailData: [
				{
					imageBanner: 'https://unsplash.it/640/425',
					title: '5 Ways to animate a React app.',
					description: 'A 1,000-person WhatsApp community keeps delivery workers safe',
					author: 'Dimitry Nozhoneko',
					authorDesc: 'Data Science Analyst',
					authorImage: 'https://miro.medium.com/fit/c/48/48/2*Ehb1DhSlrQ0stBPyREjQhQ.jpeg',
					postDate: 'Jan 28, 2019',
					minRead: 10,
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar purus sed lorem convallis, vitae dignissim sem molestie. In in congue leo. Nulla ante massa, luctus non faucibus vel, congue vel eros. Donec sit amet urna ut libero ultrices ultrices in quis metus. Etiam et venenatis risus. Pellentesque odio lacus, auctor eu est ac, scelerisque porta lorem. Curabitur dapibus dui et purus suscipit, sed malesuada lectus tempor. Proin sit amet rutrum nibh, non sodales lectus. Nullam tincidunt, massa eget luctus vulputate, nisl augue lacinia sapien, eu dapibus risus nunc ac nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean sodales massa augue, at rhoncus velit ultrices ultrices. Aliquam erat volutpat. Donec auctor convallis lacus, eget porta nisl tincidunt vel. Etiam sit amet ultricies tellus. Donec scelerisque molestie sollicitudin. Aliquam mollis arcu eu nisl laoreet venenatis. Ut odio dolor, rutrum a enim vel, elementum lacinia ex. Phasellus euismod non enim id mollis. Nulla semper pharetra blandit. Phasellus erat nisi, ullamcorper non urna a, vehicula tempor lorem. Sed aliquam nisl et magna dictum, quis venenatis felis mattis. Aliquam ac est pellentesque dui ultricies sodales sit amet sed neque Praesent eget ipsum nibh. Duis ex metus, gravida eu ante sit amet, vulputate mattis ex. Vestibulum id dolor sed libero mollis tincidunt auctor non erat. Sed lacinia congue neque, at ultricies quam hendrerit sed. Maecenas at mi sagittis, rutrum lacus ac, facilisis massa. Nulla varius vel elit eget accumsan. Duis blandit neque eget leo convallis, a varius tellus elementum. Vivamus lobortis iaculis viverra. Sed vel magna bibendum, aliquet velit quis, ornare odio. Pellentesque non mauris quis ex commodo porttitor. Quisque tincidunt urna non varius sollicitudin. Cras nec sapien sem. Aliquam eget tortor id enim ornare suscipit ut id arcu. Nulla suscipit dui at massa tincidunt rutrum. Nullam interdum lorem sapien, id facilisis nunc pellentesque fringilla. Maecenas vel turpis vitae lorem ullamcorper elementum sed at tellus Etiam vehicula mauris turpis. Ut hendrerit hendrerit mollis. Donec urna justo, convallis at pulvinar nec, suscipit et ipsum. Nulla blandit, nulla vitae laoreet viverra, libero ex rutrum ligula, vitae facilisis elit lorem at enim. Cras lacinia urna quis libero lobortis ultricies. Praesent vitae velit varius, pharetra eros vitae, pretium elit. Donec non nulla ut nisi imperdiet feugiat ullamcorper quis sapien. Vivamus quis sem ac odio aliquam viverra. Proin fringilla neque vel facilisis pellentesque. Mauris iaculis turpis neque, vel consectetur mi maximus vel. Proin auctor sagittis metus, et ultrices diam placerat non Fusce placerat felis ligula, at elementum lacus consequat sed. Proin nec ultricies magna, vitae sagittis felis. Etiam pharetra ultricies elit eget aliquet. Sed lectus nulla, pretium eu euismod vitae, congue sed neque. Sed tincidunt arcu ut eros vestibulum, vel ultricies nulla vestibulum. In hac habitasse platea dictumst. Maecenas nec gravida purus. Nullam mollis vitae ligula a pellentesque.',
					articleTags: [ 'Science', 'Computer Science', 'Database' ],
					clapsCount: 165,
					totalResponse: 300
				}
			],
			relatedArticleList: [
				{
					title: "The Greatest sales Deck I've ever",
					urlLink: '/detail',
					data: {
						author: 'Corin Faife',
						authorImage: 'https://miro.medium.com/fit/c/80/80/0*iEQwbVyv5_kVkgrt.jpeg',
						articleLocation: 'Science',
						postDate: '21 Sept, 2019',
						minRead: 7,
						backgroundArticleImage: 'https://miro.medium.com/max/2400/1*t3Wa9vvDYU5SyoGEmagy4g.jpeg',
						totalClaps: 40,
						color: '#3E3E3E'
					}
				},
				{
					title: 'The Forgotten Pixel Art Masterpieces of the PlayStation 1 Era',
					urlLink: '/detail',
					data: {
						author: 'Richmond Lee',
						authorImage: 'https://miro.medium.com/fit/c/80/80/2*dWrUdg-uHDB2js5QSp00Uw.jpeg',
						articleLocation: 'Art',
						postDate: '21 Sept, 2019',
						minRead: 7,
						backgroundArticleImage: 'https://miro.medium.com/max/1024/1*uNgmHEUZHeBejN0JKd_m8A.gif',
						totalClaps: 40
					}
				},
				{
					title: 'Why Tesla’s Cybertruck Might Flop',
					urlLink: '/detail',
					data: {
						author: 'tesla bro',
						authorImage: 'https://miro.medium.com/fit/c/80/80/2*r2KdhFRi_SZ4WAkMDjIVxA.jpeg',
						articleLocation: 'Otomitif',
						postDate: '21 Sept, 2019',
						minRead: 7,
						backgroundArticleImage: 'https://miro.medium.com/max/1240/1*zqunB7dJ_9nfILbdiACziQ.png',
						totalClaps: 40
					}
				}
			]
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
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								backgroundColor: '#FFF',
								color: '#5E5E5E',
								padding: '40px 60px'
							}}>
							<h3>More from medisuuuuuuuuuuuu</h3>
							<Divider light style={{ marginTop: '0px', marginBottom: '40px' }} />
							<Grid container spacing={5}>
								{this.state.relatedArticleList.map((relatedArticleData) => (
									<Grid item sm={4}>
										<RelatedArticles
											title={relatedArticleData.title}
											url={relatedArticleData.urlLink}
											author={relatedArticleData.data.author}
											authorImage={relatedArticleData.data.authorImage}
											articleLocation={relatedArticleData.data.articleLocation}
											postDate={relatedArticleData.data.postDate}
											minRead={relatedArticleData.data.minRead}
											backgroundArticleImage={relatedArticleData.data.backgroundArticleImage}
											totalClaps={relatedArticleData.data.totalClaps}
											color={relatedArticleData.data.color}
										/>
									</Grid>
								))}
							</Grid>
						</div>
					</Container>
				</Container>
				<Footer />
			</div>
		);
	}
}

export default ArticleDetails;
