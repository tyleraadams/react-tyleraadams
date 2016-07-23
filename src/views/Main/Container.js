import React, { Component } from 'react';
import Entry from '../../components/Entry/Entry';

// import styles from './styles.module.css';

export class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeKey: false,
			entries: [
			{
				hed: 'GreatestInnovation.org',
				dek: 'voting app',
				href: 'http://greatestinnovation.org',
				git: 'https://github.com/tyleraadams/american_innovation',
				body: 'I built the voting terminal for The Takeaway\'s series on America\'s Greatest Innovation. Every week, two innovations are eliminated based on the lowest number of votes they have received. Users may also submit their own nominations.',
				sidebar: 'Technologies: Node, Express, Babel, ES2015, Gulp, Browserify, MongoDB, CommonJS, D3, SVG, CSS animations, Flexbox, NGINX Client: New York Public Radio'
			},
			{
				hed: 'Community College Challenge',
				dek: 'data viz app ',
				href: 'http://www.greatestinnovation.org',
				git: 'https://github.com/tyleraadams/american_innovation',
				body: 'The user can see data on a thousand community colleges across the country, how states compare to each other and how an individual college compares to the state average. Built with a vector map library.',
				sidebar: 'Technologies: Node, Express, Babel, ES2015, Gulp, Browserify, MongoDB, CommonJS, D3, SVG, CSS animations, Flexbox, NGINX Client: New York Public Radio'
			}
			]
		};
	}
	handleClick(key) {
		let checkedKey = key;
		if (checkedKey === this.state.activeKey) {
			checkedKey = false;
		}
		return () => {
			this.setState({ activeKey: checkedKey });
		};

	}
	render() {

		return (
				<div className='portfolio' >
					{this.state.entries.map((entry, index) => {
						let key = index + 1;
						let isOpen = false;
						if (key === this.state.activeKey) {
							isOpen = true;
						}
						console.log('is this defined ' ,isOpen);
						return <Entry entry={entry}
						key={ key }
						onClick={ this.handleClick(key).bind(this) }
						isOpen={ isOpen }
						/>
					})}
				</div>
		);
	}
};

export default Container;