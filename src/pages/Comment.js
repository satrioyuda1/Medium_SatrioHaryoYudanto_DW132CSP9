import React, { Component } from 'react';
import { Grid, Typography, Card, CardContent, Avatar, TextField, CardActionArea } from '@material-ui/core';
import { Favorite, ExpandMore, BookOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Links from '@material-ui/core/Link';
import Header from '../component/Navbar';

class Comment extends Component {
	render() {
		return (
			<div>
				<Header />

				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#fff',
						marginTop: '100px',
						height: '100px'
					}}>
					<Grid item xs={11} md={6}>
						<Typography>Showing Response for :</Typography>

						<Grid item xs={11} md={12}>
							<CardActionArea href='/article_details'>
								<Card style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
									<CardContent style={{ flex: '1 0 auto', marginLeft: '20px' }}>
										<Typography component='h5' variant='h5'>
											horeeeeee
										</Typography>
										<Typography variant='subtitle2' color='textSecondary'>
											Mac Miller
										</Typography>
									</CardContent>
									<Link aria-label='add to favorites'>
										<div
											style={{
												display: 'flex',
												justifyContent: 'flex-end',
												alignItems: 'center',
												padding: '30px'
											}}>
											<Favorite />

											<Typography
												variant='subtitle2'
												color='textSecondary'
												style={{ padding: 5 }}>
												120k
											</Typography>
										</div>
									</Link>
								</Card>
							</CardActionArea>
						</Grid>
					</Grid>
				</div>

				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'row',
						marginTop: '70px',
						height: '100px'
					}}>
					<Grid item xs={11} md={6}>
						<Grid style={{ padding: '10px' }}>
							<Typography>Response :</Typography>
						</Grid>
						<Grid item xs={11} md={12}>
							<Card>
								<CardContent
									style={{
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'flex-start',
										alignItems: 'center',
										padding: '20px'
									}}>
									<div>
										<Avatar style={{ marginRight: 10 }}>J</Avatar>
									</div>
									<Grid item xs={12} md={11}>
										<form>
											<TextField
												name='comment'
												id='outlined-textarea'
												label='Write a response'
												placeholder='Write a response'
												multiline
												variant='outlined'
												value=''
												fullWidth={true}
												height='auto'
												// onChange={this.onChange}
												// onKeyUp={this.addData}
											/>
										</form>
									</Grid>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</div>
				<div
					style={{
						marginTop: '100px',
						marginBottom: 20,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}>
					<Grid item xs={11} md={6}>
						<div
							style={{
								border: '1px solid #ccc',
								padding: '20px',
								borderRadius: '5px',
								backgroundColor: '#fff',
								marginBottom: 40
							}}>
							<Typography
								variant='body2'
								component='p'
								color='textSecondary'
								style={{
									fontFamily: 'Poppins',
									marginBottom: 20
								}}>
								Applause from Chris Morgan (author)
							</Typography>
							<div
								style={{
									display: 'flex',
									justifyContent: 'flex-start',
									marginBottom: 20
								}}>
								<Avatar style={{ marginRight: 10 }}>J</Avatar>
								<div>
									<Link
										to='/profile'
										style={{
											fontFamily: 'Roboto Condensed',
											color: '#000',
											textDecoration: 'none',
											fontSize: 16,
											color: '#03a87c'
										}}>
										John doe
									</Link>
									<Typography variant='caption' component='p' style={{ fontFamily: 'Poppins' }}>
										Dec 7, 2019
									</Typography>
								</div>
							</div>
							<Link to='/comment' style={{ textDecoration: 'none' }}>
								<Typography
									variant='body1'
									component='p'
									style={{ fontFamily: 'Frank Ruhl Libre', color: '#000' }}>
									{/* {item} */}
								</Typography>
							</Link>
							<Links href='/comment' color='inherit'>
								<Typography
									variant='subtitle2'
									color='textSecondary'
									component='p'
									style={{ fontFamily: 'Gupter', marginTop: 10 }}>
									Read More..
								</Typography>
							</Links>
							<Grid container style={{ marginTop: 20 }}>
								<Grid item xs={2}>
									<Typography color='textSecondary' variant='body2' component='p'>
										<Links href='#' color='inherit'>
											<Favorite /> 2K
										</Links>
									</Typography>
								</Grid>
								<Grid item xs={10} style={{ display: 'flex', justifyContent: 'flex-end' }}>
									<Link
										to='/comment'
										style={{
											display: 'flex',
											alignItems: 'center',
											textDecoration: 'none'
										}}>
										<Typography variant='caption' component='p' color='textSecondary'>
											2 Response
										</Typography>
										<Typography
											variant='caption'
											component='p'
											color='textSecondary'
											style={{ margin: '0 5px' }}>
											<BookOutlined />
										</Typography>
										<Typography variant='caption' component='p' color='textSecondary'>
											<ExpandMore color='inherit' />
										</Typography>
									</Link>
								</Grid>
							</Grid>
						</div>
					</Grid>
				</div>
			</div>
		);
	}
}

export default Comment;
