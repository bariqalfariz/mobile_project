import React from 'react';
import {Text} from 'react-native';


class Judul extends React.Component{
	render(){
		return (
			<Text style={salon.Judul}>Biodata</Text>
			)
	}
}

const salon = {
  Judul:{
    colour: "#00000",
    fontSize: 75,
    fontWeight: 'bold'

  }
}

export default Judul;