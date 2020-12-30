import React from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { Font, Color } from "../../../../common";

export default ({ data, onPress }) => {
	const { name, note,Id } = data;
	return (
		<TouchableHighlight
			style={styles.container}
			onPress={onPress}
			underlayColor={"#eee"}
		>
			<View>
				<View style={styles.row}>
					<View style={styles.content}>
						<Text style={styles.name}>{name}</Text>
						<Text style={styles.note}>{note}</Text>
					</View>
				</View>
			</View>
		</TouchableHighlight>
	);
};

const styles = ScaledSheet.create({
	container: {
		padding: "8@vs",
		paddingHorizontal: "16@ms",
		backgroundColor: "#fafafa",
		borderRadius: "8@ms",
		marginBottom: "8@vs",
		overflow: "hidden",
		marginHorizontal:"16@ms"
	},
	row: {
		flexDirection: "row",
		alignItems: "center"
	},
	content: {
		flex: 1,
		paddingRight: "8@ms"
	},
	timeStamp: {
		fontSize: 14,
		color: "#ccc",
		fontFamily: Font.Family.OpenSansLightItalic
	},
	name: {
		fontSize: 18,
		color: "#000",
		fontFamily: Font.Family.OpenSansRegular
	},
	note: {
		fontSize: 16,
		color: "#999",
		fontFamily: Font.Family.OpenSansLightItalic
	},
	num: {
		color: Color.orange
	}
});
