import {ScaledSheet} from 'react-native-size-matters'
import { Font, Color } from "../../../common"
export const styles=ScaledSheet.create({
    Container:{
        flex:1,
        backgroundColor:"white",
    }, 
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    section: {
        paddingHorizontal: "8@ms",
        marginBottom: "8@vs",
        paddingTop:"15@ms"
    },
    sectionHeader: {
        borderTopWidth: 1,
        borderColor: "#999",
    },
    Title: {
        flex: 1,
        fontFamily: Font.Family.OpenSansSemiBoldItalic
    },
    add: {
        padding: "8@ms"
    },
    remove: {
        paddingHorizontal: "8@ms",
    },
    name: {
        paddingHorizontal: "8@ms",
        flex: 1
    },
    footer: {
        backgroundColor: "#fff",
        elevation: 4
    },
    addIng: {
    fontFamily: Font.Family.OpenSansLightItalic,
    color: Color.green,
    paddingVertical: "8@vs",
    paddingHorizontal: "8@ms"
    }
})