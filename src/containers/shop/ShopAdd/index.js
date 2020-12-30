import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import {styles} from './styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ShopAction from '../../../actions/shop'
import { getShopField } from "../../../selector/shop";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Router } from "../../../navigation/route";
import ShopItem from "./Components/shopItem"
let form_empty={ ingredients: [], name: "", note: "", Id: "" }
class index extends Component{
    Listdata=[]
    componentDidMount(){
        const {
            getList
        }=this.props
        getList()
    }

    onAddList=(type,{ingredients,name,note,Id})=>{
        const {
            changeFormField,
            navigation:{getParam},
        }=this.props
        changeFormField("Id",Id)
        changeFormField("name", name)
        changeFormField("note", note)
        const length = ingredients.length
        this.Listdata=getParam("ingredients").map((ingredient,i)=>({
            Id:i+length,
            quantity:ingredient.quanity,
            name:ingredient.name,
            unit:ingredient.unit,
            checked:false
        }));
        changeFormField("ingredients", [...ingredients, ...this.Listdata]);
        changeFormField("currentId", length + this.Listdata.length - 1);

        this.props.navigation.replace(Router.ShopAddList,{type})
    }
    render(){
        const {data} = this.props

        return(
            <View style={styles.Container}>
                <Text style={styles.Title}>Choose Shopping List</Text>
                <TouchableOpacity
                    style={styles.row}
                    onPress={()=>this.onAddList("create",form_empty)}
                >
                    <FontAwesome
                        name={"plus-square-o"}
                        size={24}
                        color={"#eee"}
                    />
                    <Text style={styles.newText}>New Shopping List</Text>
                </TouchableOpacity>
                <View style={styles.line} />
                {data.map(item=>
                    <View
                        key={item.Id}
                    >
                        <ShopItem
                            data={item}
                            onPress={()=>this.onAddList("update",item)}
                        />
                    </View>
                )}
            </View>
        )
    }
}
const mapStateProps = state =>({
    data: getShopField(state, "data"),
})

const mapDispatchToProps=(dispatch)=>{
    return{
        getList: bindActionCreators(ShopAction.getList,dispatch),
        changeFormField: bindActionCreators(ShopAction.changeFormField,dispatch),
    }
}
export default connect(mapStateProps,mapDispatchToProps)(index);
