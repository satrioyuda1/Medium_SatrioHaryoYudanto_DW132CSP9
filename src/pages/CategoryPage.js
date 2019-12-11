import React, { Component } from 'react';
import Header from '../component/Navbar';

class CategoryPage extends Component {
	constructor(props) {
		super(props);
		this.state = { variable: 0 };
	}

	render() {
		return (
        <div>
            <Header/>
            <Grit Container spacing={3} direction='row' marginTop='50px'>
                <Grit item lg={4}>
                </Grit>
            </Grit>
        </div>
        );
	}
}

export default CategoryPage;
