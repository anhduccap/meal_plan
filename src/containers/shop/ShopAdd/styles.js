import {ScaledSheet} from 'react-native-size-matters'
import { Font, Color } from "../../../common"
export const styles=ScaledSheet.create({
    Container:{
        flex:1,
        backgroundColor:"white",
    }, 
    Title: {
        fontFamily: Font.Family.OpenSansSemiBold,
        fontSize:20,
        alignSelf:"center",
        paddingTop:"15@ms",
        paddingBottom:"15@ms"
    },
    newText: {
		fontSize: 14,
		letterSpacing: 1,
		margin: "8@ms"
    },
    row: { 
        flexDirection: "row", 
        alignItems: "center",
        justifyContent:"center" 
    },
    line: {
		height:1,
		backgroundColor: "#ccc",
        marginHorizontal: "16@ms",
        marginVertical:"16@ms"
	}
})