import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native'
import Antdesign from 'react-native-vector-icons/AntDesign'
import {styles} from './style'
import {Router} from '../../../navigation/route'
import CategoryAction from '../../../actions/category'
import RecipeAction from '../../../actions/recipe'
import {getCategoryField} from '../../../selector/category'
import {getRecipeField} from '../../../selector/recipe'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Color } from "../../../common"

class Explore extends Component{
    componentDidMount(){
        const {
            getCategories,
            getRecipes
        }=this.props
        getRecipes();
        getCategories();
    }
    toggleLike=(item)=>{
        const{
            setUserLike
        }=this.props
        setUserLike(item)
    }
    getRecipeByCategory(category){
        const {
            recipeData
        }=this.props
        const recipeCategory=recipeData
                                    .filter(recipe=>recipe.Category.includes(category))
        return recipeCategory
    }
    renderCategory(category){
        return(
            <View
                style={styles.containerCategory}
                key={category.Id}
            >
                <Text
                    style={styles.textCategory}
                >{category.name}</Text>
                <FlatList
                    horizontal
                    scrollEnabled
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    data={this.getRecipeByCategory(category.name)}
                    keyExtractor={item=>item.Id}
                    renderItem={({item})=>this.renderRecipe(item)}
                />
            </View>
        )
    }
    renderRecipe(recipe){
        const {user}=this.props
        return(
            <View
                style={styles.recipe}
            >
                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate(Router.RecipeDetail,{recipe})}
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
                <TouchableOpacity
                    onPress={()=>this.toggleLike(recipe)}

                >
                    <Antdesign
                        name="heart"
                        size={24}
                        color={user.Cookbook.includes(recipe.Id) ? Color.red : "#4b4b4b"}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    renderList(){
        const {
            categoryData,
        }=this.props
        return(
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    {categoryData.map(category=>this.renderCategory(category))}
                </ScrollView>           
        )
    }
    render(){
        const {
            categoryData
        }=this.props
        return(
            <View
               style={styles.Container}
            >
                {categoryData.length>0 && this.renderList()}
            </View>
        )
    }
}

const mapStateProps = state =>({
    categoryData: getCategoryField(state, "data"),
    recipeData: getRecipeField(state, "data"),
    user:state.auth.user,
})

const mapDispatchToProps=(dispatch)=>{
    return{
        getCategories: bindActionCreators(CategoryAction.getCategories,dispatch),
        getRecipes:bindActionCreators(RecipeAction.getRecipe,dispatch),
        setUserLike:bindActionCreators(RecipeAction.setUserLike,dispatch)
    }
}
export default connect(mapStateProps,mapDispatchToProps)(Explore);