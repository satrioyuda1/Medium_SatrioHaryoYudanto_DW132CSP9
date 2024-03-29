import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import '../App.css';

// list of items
const list = [
	{ name: 'Home' },
	{ name: 'Onezero' },
	{ name: 'Elemental' },
	{ name: 'Gen' },
	{ name: 'Zora' },
	{ name: 'Forge' },
	{ name: 'Human Parts' },
	{ name: 'Marker' },
	{ name: 'Level' }
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
	return <div className={`menu-item ${selected ? 'active' : ''}`}>{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
	list.map((el) => {
		const { name } = el;

		return <MenuItem text={name} key={name} selected={selected} />;
	});

const Arrow = ({ text, className }) => {
	return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = 'item1';

class Category extends Component {
	constructor(props) {
		super(props);
		// call it again if items count changes
		this.menuItems = Menu(list, selected);
	}

	state = {
		selected
	};

	onSelect = (key) => {
		this.setState({ selected: key });
	};

	render() {
		const { selected } = this.state;
		// Create menu from items
		const menu = this.menuItems;

		return (
			<div className='App'>
				<ScrollMenu
					data={menu}
					arrowLeft={ArrowLeft}
					arrowRight={ArrowRight}
					selected={selected}
					onSelect={this.onSelect}
				/>
			</div>
		);
	}
}

export default Category;
