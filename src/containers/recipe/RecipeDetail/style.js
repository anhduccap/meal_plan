import {ScaledSheet,  verticalScale} from 'react-native-size-matters'
import{
    Dimensions
} from 'react-native'
import { Font, Color } from "../../../common"
const {width}=Dimensions.get("window")
export const styles=ScaledSheet.create({
    Container:{
        flex:1,
        backgroundColor:"white",
	},  
	Image:{
        width:width,
        height:"320@ms",
    },
    title: {
		fontSize: 30,
		fontFamily: Font.Family.OpenSansExtraBold,
        color: "black",
        paddingHorizontal:"10@ms",
        textAlign:"center"
    },
    containerText:{
        paddingHorizontal:"10@ms"
    },
    row: {
		flexDirection: "row",
        alignItems: "center",
        flexWrap:"wrap",
        marginTop:"5@vs",
    },
    rowtext: {
		flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        marginTop:"5@vs",
    },
    tags: {
		backgroundColor: Color.lightGreen,
		color: "#fafafa",
		fontFamily: Font.Family.OpenSansLightItalic,
		paddingHorizontal: "8@ms",
		borderRadius: 4,
		marginRight: 4
    },
    titleStyle:{
        fontSize: 14,
        fontFamily: Font.Family.OpenSansSemiBold,
        color: "grey",
        marginVertical: verticalScale(5),
    },
    sub: { 
        fontSize: 12, 
        fontFamily: Font.Family.OpenSansLight ,
        paddingHorizontal:"15@ms",
    },
    description: {
		fontSize: 14,
        fontFamily: Font.Family.OpenSansLightItalic,
        paddingHorizontal:"10@ms",
    },
    add: {
		fontFamily: Font.Family.OpenSansLightItalic,
		color: Color.green
    },
    quantity: {
		fontSize: 16,
        flex: 1,
        paddingLeft:"20@ms"
	},
	unit: {
		paddingHorizontal: 16,
		fontFamily: Font.Family.OpenSansLightItalic,
		fontSize: 14,
		flex: 2
	},
	name: {
		flex: 6,
		marginBottom: 8
	},
})