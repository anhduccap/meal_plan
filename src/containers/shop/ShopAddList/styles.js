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
    texttitle:{
        fontSize: 16,
        fontFamily: Font.Family.OpenSansSemiBold,
        color: "black",
        paddingHorizontal:"16@ms",
        paddingBottom:"10@ms"
    },
    textinput:{
        backgroundColor:"#E0E0E0",
        marginHorizontal:"16@ms",
        color:"black",
        borderRadius:"8@ms",
        marginBottom:"16@ms"
    },
    row:{
        flexDirection:"row",
        marginHorizontal:"16@ms",
        alignItems:"center",
    },
    ingredient:{
        backgroundColor:"#e5ffe5",
        borderRadius:"5@ms",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        height:"40@vs",
        width:"300@ms",
        marginBottom:"16@ms",
        marginRight:"24@ms"
    },
    quantity:{
        color:"red",
        fontSize:18,
        paddingLeft:"12@ms"
    },
    unit:{
        color:"grey",
        fontSize:14,
        paddingLeft:"8@ms"
    },
    name:{
        color:"black",
        fontSize:16,
        paddingRight:"12@ms"
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
    textbutton:{
        color:"white",
        fontSize:16
    }
})