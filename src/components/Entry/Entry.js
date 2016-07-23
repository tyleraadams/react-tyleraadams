import React, { Component } from 'react';
import { PropTypes } from 'react';
import classnames from 'classnames';
import './Entry.css';

export class Entry extends Component {
	static propTypes = {
    	entry: PropTypes.object.isRequired
  	}
	render() {
		const isOpened = this.props.isOpen;
		const entry = this.props.entry;
		let className = classnames({
			'entry__more-info--hidden': true,
			'entry__more-info--shown': isOpened
		});

		return (
			<div className="entry" onClick={this.props.onClick}>

				<h2>
					<a href={entry.href}>
						{entry.hed}
					</a>
					<small>{entry.dek}</small>
				</h2>
				<aside className={className}>
				<p>{entry.body}</p>
				<p>{entry.sidebar}</p>
				</aside>
			</div>
		);
	}
}

export default Entry;