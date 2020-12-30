import { ScaledSheet } from "react-native-size-matters";
import { Color, Font } from "../../../common";

export const styles = ScaledSheet.create({
	container: {
		paddingTop: "16@ms",
		backgroundColor: "#fff",
		paddingHorizontal: "16@ms",
		flex:1
	},
	Title: {
        fontFamily: Font.Family.OpenSansSemiBold,
        fontSize:20,
	},
	headerTitleRight:{
		fontSize: 16,
		color: Color.green
	},
	itemContainer: {
		backgroundColor:"#e5ffe5",
		paddingHorizontal: "16@ms",
		paddingVertical: "12@vs",
		borderRadius:"5@ms",
		marginBottom:"16@ms",
		height:"40@vs",
	},
	itemContainerHighlight: {
		backgroundColor: Color.lightGreen,
		paddingHorizontal: "16@ms",
		paddingVertical: "12@vs",
		borderRadius:"5@ms",
		marginBottom:"16@ms",
		height:"40@vs",
	},
	row: {
		flexDirection: "row",
		textAlign: "center",
		justifyContent:"space-between"
	},
	itemQuantity: {
		color:"red",
        fontSize:18,
        paddingLeft:"12@ms"
	},
	itemQuantityHighlight: {
		fontSize:18,
		color: "#fff",
		paddingLeft:"12@ms"
	},
	itemunit:{
        color:"grey",
        fontSize:14,
        paddingLeft:"8@ms"
	},
	itemunitHighlight:{
		color: "#fff",
        fontSize:14,
        paddingLeft:"8@ms"
    },
	itemname: {
		color:"black",
        fontSize:16,
        paddingRight:"12@ms"
	},
	itemnameHighlight: {
        fontSize:16,
        paddingRight:"12@ms",
		color: "#fff"
	},
	text: {
		fontSize: 18,
		textAlign: "center",
		fontFamily: Font.Family.OpenSansLightItalic,
		backgroundColor: "#fafafa",
		borderRadius:"6@ms",
		padding:"4@ms"
	},
	listHeader: {
		marginVertical:"16@ms" 
	},
	info: {
		fontSize: 12,
		fontFamily: Font.Family.OpenSansLightItalic,
		textAlign: "center"
	},
	titleStyle : {
		fontSize: 16,
		fontFamily: Font.Family.OpenSansSemiBold,
		color: "grey",
		marginVertical:"12@ms"	
	},
	button:{
        backgroundColor: Color.lightGreen,
        marginHorizontal:"16@ms",
        borderRadius:"8@ms",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:"16@ms",
        padding:"8@ms"
    },
});
