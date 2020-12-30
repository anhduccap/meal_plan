import {ScaledSheet} from 'react-native-size-matters'
import { Font, Color } from "../../../common"
import color from '../../../common/color'
export const styles=ScaledSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    logo:{
        width:"160@ms",
        height:"160@ms",
        marginTop:"20@vs",
        alignSelf:"center"
    },
    form:{
        width:"300@ms",
        backgroundColor:"rgba(0, 255, 0, 0.1)",
        padding:"16@vs",
        borderRadius:"8@vs"
    },
    title:{
        fontFamily:Font.Family.OpenSansSemiBold,
        color:Color.white,
        fontSize:30,
        letterSpacing:2,
        textAlign:"center"
    },

	highlight: {
		fontFamily: Font.Family.OpenSansItalic,
		textDecorationLine: "underline",
		color: Color.white
    },
    createTitle: {
		textTransform: "uppercase",
		fontFamily: Font.Family.OpenSansSemiBold,
		color: "#666"
	},
	createButton: {
		backgroundColor: color.white,
		padding: "16@vs",
		borderRadius: "40@vs",
		marginVertical: "16@vs",
		width: "280@ms0.5"
	}
})