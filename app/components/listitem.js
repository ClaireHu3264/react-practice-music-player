import React from 'react';
import style from './listitem.less';
import { Link } from 'react-router-dom';
import pubsub from 'pubsub-js';

class ListItem extends React.Component {
	playMusic (item) {
		pubsub.publish('PLAY_MUSIC', item);
	}
	deleteHandler (item, e) {
		e.stopPropagation();
		pubsub.publish('DELETE_MUSIC', item);
	}
	render () {
		let item = this.props.item;
		return (
			<li className={`row components-listitem ${this.props.isFocus?'focus':''}`} onClick={this.playMusic.bind(this, item)}>
                <p><span className="bold">{item.title}</span>  -  {item.artist} - <Link to={`/detail/${item.id}`}>详情</Link></p>
                <p className="-col-auto delete" onClick={this.deleteHandler.bind(this, item)}></p>
            </li>
			)
	}
}

export default ListItem;