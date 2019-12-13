import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../App.css';

class Header extends Component {
	render() {
		return (
			<div
				style={{
					root: {
						flexGrow: 1,
						border: 'none'
					}
				}}>
				<AppBar position='static' color='inherit'>
					<Toolbar>
						<Typography
							variant='h6'
							style={{
								title: {
									flexGrow: 1
								}
							}}>
							Medium
						</Typography>
						<Button color='inherit'>Login</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
export default Header;
