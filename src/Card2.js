import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './Card2.css';

class Card2 extends Component {
	render() {
		return (
			<div style={{ height: 450 }}>
				<h2>
					<img
						className="mobile"
						style={{ height: 300, width: 200 }}
						src="https://i.imgur.com/CFk9xZm.png"
						alt="Mobile"
					/>
					<span>
						<a href="https://secondhome-inner.correiagoncalves.com/">
							<FontAwesomeIcon icon={faPlusCircle} size="1x" className="plusIcon" />
						</a>
					</span>
				</h2>
			</div>
		);
	}
}

export default Card2;
