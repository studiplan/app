import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import color from '../core/colors';

const style = StyleSheet.create({
	container: {
		height: 50,
		backgroundColor: color.topBackground,
		justifyContent: 'center',
		alignItems: 'center',
	}
});

export default function TopBar({ title }) {
	return (
		<View style={style.container}>
			<Text>{title}</Text>
		</View>
	);
}
