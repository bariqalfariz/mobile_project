import React from 'react';
import {Text, View} from 'react-native';



class Judul extends React.Component{
	render(){
		return(
				<View>
					<Text style={styles.judul}> {this.props.title}
						
					</Text>
				</View>
		)
	}
}

const styles= {
	judul: {
		color: "red"
	}
		
}
export default Judul;


