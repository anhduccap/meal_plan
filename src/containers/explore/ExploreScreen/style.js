import {ScaledSheet} from 'react-native-size-matters'
import { Font, Color } from "../../../common"
export const styles=ScaledSheet.create({
    Container:{
        flex:1,
        backgroundColor:"white",
	},  
    containerCategory:{
        marginTop:'10@ms',
        paddingHorizontal:'8@vs'
     },
     textCategory:{
         letterSpacing:0.5,
         fontSize:18,
         fontFamily:Font.Family.OpenSansSemiBold,
         color:Color.lightGreen
     },
     recipe:{
         width:'120@ms',
         height:"200@ms",
         backgroundColor:"#e6ffff",
         marginRight:"15@ms",
         borderRadius:"8@ms",
         alignItems:"center",
         justifyContent:"space-between",
         paddingBottom:"5@ms"
     },
     recipename:{
         textAlign:"center",
         color:"black",
         paddingTop:"8@ms",
         paddingBottom:"5@ms"
     },
     Image:{
         height:"100@ms",
         width:"100@ms",
         borderRadius:"5@ms",
         marginTop:"10@ms"
     },
   
})