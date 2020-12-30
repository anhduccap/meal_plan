import { ScaledSheet } from "react-native-size-matters";
import { Color, Font } from "../../../common";

export const styles = ScaledSheet.create({
	container: { 
        paddingHorizontal: "8@ms", 
        backgroundColor: "white",
        flex:1
    },
	row: {
		flexDirection: "row",
		alignItems: "center"
	},
	panel: {
		flex: 1,
		padding: "8@ms",
		backgroundColor: "#fff",
		borderRadius: "8@ms",
		alignItems: "center",
		elevation: 2
	},
	totalList: {
		fontSize: 28,
		color: Color.orange,
		fontFamily: Font.Family.OpenSansLight
	},
	panelText: {
		fontSize: 16,
		fontFamily: Font.Family.OpenSansLight
	},
	btnTitle: {
		fontSize: 18,
		fontFamily: Font.Family.lightGrey,
		color: Color.lightGreen
	},
	btnStyle: {
		borderColor: Color.lightGreen
	},
	btnContainer: {
		marginLeft: "8@ms",
		flex: 1
	}
});
