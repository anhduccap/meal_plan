import {ScaledSheet} from 'react-native-size-matters'
import { Font, Color } from "../../../common"
export const styles=ScaledSheet.create({
    Container:{
        flex:1,
        backgroundColor:"white",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal:"20@ms"
    },
    header:{
        alignSelf:"center",
        fontSize:25,
        paddingVertical:"20@ms"
    },
    name: {
		paddingHorizontal: "8@ms",
        flex: 1,
        fontSize:16,
        fontFamily:Font.Family.OpenSansSemiBold,
        marginRight:"10@ms",
	},
})