import React, { Component } from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TouchableHighlight,
    FlatList
} from "react-native";
import { styles } from "./style";
import { connect } from "react-redux";
import ShopAction from "../../../actions/shop";
import { getShopField } from "../../../selector/shop";
import { Router } from "../../../navigation/route";
import {bindActionCreators} from 'redux'
import { get } from "immutable";
class index extends Component {
	state = {
		name: "",
		note: "",
		ingredients: [],
		Id: ""
	};
	componentDidMount() {
		const { name, note, ingredients, Id } = this.props.navigation.getParam(
			"item"
		);
		this.setState({ name, note, ingredients, Id });
	}
    edit = () => {
		const {
			changeFormField,
			navigation: { replace }
		} = this.props;
		const { name, note, ingredients, Id } = this.state;
		changeFormField("Id", Id);
		changeFormField("name", name);
		changeFormField("note", note);
		changeFormField("ingredients", ingredients);
		changeFormField("currentId", ingredients.length - 1);

		replace(Router.ShopAddList, { type: "update" });
    };
    checkBought = index => {
        console.log("checkBought")
		const { ingredients } = this.state;
		let newArray = [...ingredients];
		newArray[index].checked = !ingredients[index].checked;
		this.setState({ ingredients: newArray });
    };
    onSave(){
        const {
            navigation:{goBack},  
            updateList,
            getList
        }=this.props
        const { name, note, ingredients, Id } = this.state;
            updateList({ name, note, ingredients, Id })
            getList()
            goBack()
    }
    renderItem = ({ item, index }) => {
		const checked = item.checked;
		return (
			<TouchableHighlight
				underlayColor={"#eee"}
				onPress={() => this.checkBought(index)}
			>
				<View
					style={checked ? styles.itemContainerHighlight : styles.itemContainer}
				>
					<View style={styles.row}>
                          <View style={{flexDirection:"row",  alignItems:"center",}}>
                            <Text
                                style={
                                    checked ? styles.itemQuantityHighlight : styles.itemQuantity
                                }
                            >
                                {item.quantity}
                            </Text>
                            <Text
                                style={
                                    checked ? styles.itemunitHighlight : styles.itemunit
                                }
                            >
                                {item.unit}
                            </Text>
                        </View>
						<Text
							style={
								checked ? styles.itemnameHighlight : styles.itemname
							}
						>
							{item.name}
						</Text>
					</View>
				</View>
			</TouchableHighlight>
		);
	};
	render() {
		const { ingredients, name, note } = this.state;
		return (
			<View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.Title}>List Details</Text>
                    <TouchableOpacity
                         onPress={this.edit}
                    >
                        <Text style={styles.headerTitleRight}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listHeader}>
                    <Text style={styles.titleStyle}>List name</Text>
                    <Text style={styles.text}>{name}</Text>
                    <Text style={styles.titleStyle}>List note</Text>
                    <Text style={styles.text}>{note}</Text>
                    <Text style={styles.titleStyle}>Ingredients</Text>
                    <Text style={styles.info}>
                        Touch on ingredient to check it was bought
                    </Text>
                </View>
                <FlatList
                    data={ingredients}
                    keyExtractor={item=>item.Id.toString()}
                    renderItem={this.renderItem}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>this.onSave()}
                >
                    <Text style={styles.textbutton}>SAVE</Text>
                </TouchableOpacity>
            </View>
		);
	}
}

const mapStateToProps = state => ({
	form: getShopField(state, "form"),
});

const mapDispatchToProps=(dispatch)=>{
    return{
        getList: bindActionCreators(ShopAction.getList,dispatch),
        changeFormField: bindActionCreators(ShopAction.changeFormField,dispatch),
        updateList: bindActionCreators(ShopAction.updateList,dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
