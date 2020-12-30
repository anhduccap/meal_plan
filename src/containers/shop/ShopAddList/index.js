import React, { Component } from "react";
import {
	View,
	Text,
    TextInput,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { styles } from "./styles";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux'
import ShopAction from "../../../actions/shop";
import { getShopField } from "../../../selector/shop";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Font, Color } from "../../../common"
class index extends Component{
    state = {
		type: this.props.navigation.getParam("type"),
	};

    onDeleteItem = (item) => {
		const {
			form: { ingredients },
			changeFormField
		} = this.props;
		changeFormField(
			"ingredients",
			ingredients.filter(e => e !== item)
		);
    }

    renderitem(item){
        return(
            <View 
                style={styles.row}
                key={item.Id.toString()}
            >
                <View style={styles.ingredient}>
                    <View style={{flexDirection:"row",  alignItems:"center",}}>
                        <Text style={styles.quantity}>{item.quantity}</Text>
                        <Text style={styles.unit}>{item.unit}</Text>
                    </View>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
                <TouchableOpacity
                   onPress={()=>this.onDeleteItem(item)}
                >
                    <FontAwesome
                        name={"trash-o"}
                        color={Color.red}
                        size={24}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    onSave(){
        const {
            form:{Id,name,note,ingredients},
            navigation:{goBack},
            pushList,
            updateList,
            resetForm
        }=this.props
        const {type}=this.state
        if (name !=="" && note !==""&&ingredients.length>0){
            type==="create"? pushList({name,note,ingredients}):updateList({ name, note, ingredients, Id })
            resetForm()
            goBack()
        }
        else {
            alert("please fill in all the fields")
        }
    }
    render(){
        const {
            form,
            changeFormField
        }=this.props
        return(
            <View style={styles.Container}>
                <Text style={styles.Title}>New Shopping List</Text>
                <Text style={styles.texttitle}>List name</Text>
                <TextInput
                    value={form.name}
                    onChangeText={name=>changeFormField("name",name)}
                    style={styles.textinput}
                />
                <Text style={styles.texttitle}>List note</Text>
				<TextInput
					multiline
					value={form.note}
					onChangeText={note => changeFormField("note", note)}
                    style={styles.textinput}
                />
                <Text style={styles.texttitle}>Item</Text>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    {form.ingredients.map(item=>this.renderitem(item))}
                </ScrollView>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>this.onSave()}
                >
                    <Text style={styles.textbutton}>SAVE</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const mapStateProps = state =>({
    form: getShopField(state, "form"),
})

const mapDispatchToProps=(dispatch)=>{
    return{
        changeFormField: bindActionCreators(ShopAction.changeFormField,dispatch),
        pushList: bindActionCreators(ShopAction.pushList,dispatch),
        updateList: bindActionCreators(ShopAction.updateList,dispatch),
        resetForm: bindActionCreators(ShopAction.resetForm,dispatch),
    }
}
export default connect(mapStateProps,mapDispatchToProps)(index);
