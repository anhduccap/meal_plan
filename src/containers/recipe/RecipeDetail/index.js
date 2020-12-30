import React, { Component } from 'react'
import {
    View,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native'
import {styles} from './style'
import {Router} from '../../../navigation/route' 
class index extends Component{
    renderIngredient({item}){
        return(
            <View style={styles.rowtext}>
                <Text style={styles.quantity}>
                    {item.quanity}
                </Text>
                <Text style={styles.unit}>{item.unit || "---"}</Text>
                <Text style={styles.ingredient}>{item.name}</Text>
            </View>
        )
    }
    addToList = (ingredients)=>{
        this.props.navigation.replace(Router.ShopAdd,{ingredients})
    }
    render(){
        const {
            navigation:{getParam}
        } = this.props
        const recipe=getParam("recipe")
        return(
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={styles.Container}
            >
                <Image 
                    source={{uri:recipe.Image}}
                    style={styles.Image}
                />
                <Text
                    style={styles.title}
                >
                    {recipe.name}
                </Text>
                <View style={styles.containerText}>
                    <View
                        style={styles.row}
                    >
                        {
                            recipe.Category.map((category)=>(
                                <Text
                                    style={styles.tags}
                                    key={`tab-${category}`}
                                >
                                    {category}
                                </Text>
                            ))
                        }
                    </View>
                    <View
                        style={styles.rowtext}
                    >
                        <View>
                            <Text style={styles.titleStyle}>Serving</Text>
                            <Text style={styles.sub}>{recipe.Servings||1}</Text>
                        </View>
                        <View>
                            <Text style={styles.titleStyle}>Cooking time</Text>
                            <Text style={styles.sub}>{recipe.CookingTime}</Text>
                        </View>
                    </View>
                        <Text style={styles.titleStyle}>Description</Text>
                        <Text style={styles.description}>{recipe.Description}</Text>        
                    <View style={styles.rowtext}>
                        <Text style={styles.titleStyle}>Ingredients</Text>
                        <TouchableOpacity
                            onPress={()=>this.addToList(recipe.Ingredients)}
                        >
                            <Text style={styles.add}>Add to shopping list</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={recipe.Ingredients}
                        keyExtractor={(item,index)=>index.toString()}
                        renderItem={this.renderIngredient}
                    />
                </View>
            </ScrollView>
        )
    }
}
export default index