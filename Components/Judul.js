import React from 'react';
import {Text} from 'react-native';

export default class Judul extends React.Component{
	render(){
		return(
		<Text style={liat.judul}>{this.props.title}</Text>
		)
	}
}

const liat= {
	judul: {
		color: '#f00',
		fontSize: 36,
		backgroundColor : 'blue'
	}
}