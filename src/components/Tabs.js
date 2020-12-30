import React, { Component } from 'react'
import {
    Text,
    FlatList,
    TouchableOpacity, 
    View,
    Image,
    ScrollView
} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
import { Font, Color } from "../common/"
import Antdesign from 'react-native-vector-icons/AntDesign'
export default class Tabs extends Component{
    constructor(props){
        super(props)
        this.state={
            tabs:this.validate(this.props.tabs),
            recipes:this.props.recipes
        }
    }

    validate(data) {
		data.map((item, index) => {
			item.key = index.toString();
		});
		return data;
    }
    selectRecipe(category){
        const recipeCategory=this.state.recipes
                                    .filter(recipe=>recipe.Category.includes(category))
        return recipeCategory
    }
    renderTab(category){
        return(
            <View
                style={styles.container}
                key={category.key}
            >
                <Text
                    style={styles.textCategory}
                >{category.name}</Text>
                <FlatList
                    horizontal
                    scrollEnabled
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    data={this.selectRecipe(category.name)}
                    keyExtractor={item=>item.Id}
                    renderItem={({item})=>this.renderRecipe(item)}
                />
            </View>
        )
    }
    renderRecipe(recipe){
        const {
            onPress
        }=this.props
        return(
            <View
                style={styles.recipe}
            >
                <TouchableOpacity
                   onPress={onPress}
                >
                    <Image
                        source={{uri:recipe.Image}}
                        style={styles.Image}   
                    />
                </TouchableOpacity>   
                <Text
                    style={styles.recipename}
                >{recipe.name}
                </Text>
                <TouchableOpacity>
                    <Antdesign
                        name="heart"
                        size={24}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    render(){
        return(
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                {this.state.tabs.map(category=>this.renderTab(category))}
            </ScrollView>
            
        )
    }
}

const styles=ScaledSheet.create({
    container:{
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
        height:"180@ms",
        backgroundColor:"#e6ffff",
        marginRight:"15@ms",
        borderRadius:"8@ms",
        alignItems:"center"
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
    }
})