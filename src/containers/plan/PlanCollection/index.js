import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableHighlight,
    Image
} from 'react-native'
import {styles} from './style'
import { connect } from "react-redux";
import {getRecipeField} from '../../../selector/recipe'
import PlanAction from '../../../actions/plan'
import {bindActionCreators} from 'redux'
class collection extends Component{
    state={
        type:this.props.navigation.getParam("type","default"),
        meal:this.props.navigation.getParam("meal")
    }
    renderItemRecipe({item}){
        const {recipeData}=this.props
        const recipe=recipeData.filter(e=>e.Id===item)[0]
        return(
        <TouchableHighlight
            onPress={()=>this.onPressRecipe(recipe)}
         >
            <View style={styles.row}>
                <Image
                   resizeMode={"contain"}
                   resizeMethod={"resize"}
                   style={{
                       width: 100,
                       height: 100,
                       borderRadius: 12
                   }}
                   source={{ uri: recipe.Image }}
                />
                <Text style={styles.name}>{recipe.name}</Text>
            </View>
         </TouchableHighlight>
        )
    }
    onPressRecipe=(recipe)=>{
        const {
            navigation:{goBack},
            pushItem
        }=this.props
        pushItem(recipe,this.state.meal)
        goBack();
    }
    render(){
        const {
            user: {Cookbook}
        }=this.props
        return(
            <View style={styles.Container}> 
                <Text style={styles.header}>My Cookbook</Text>  
                <FlatList
                    data={Cookbook}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={({item})=>this.renderItemRecipe({item})}
                />
            </View>
        )
    }
}
const mapStateToProps = state => ({
    user: state.auth.user,
    recipeData: getRecipeField(state, "data"),
});

const mapDispatchToProps=(dispatch)=>{
    return{
        pushItem:bindActionCreators(PlanAction.pushItem,dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(collection);