import React from 'react'
import { 
    createAppContainer,
    createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Containers from '../containers'
import {Router} from './route'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Color } from '../common';
import Data from '../Data/index'
const {
    LoginScreen,
    RegisterScreen,
    
    ExploreScreen,
   
    PlanScreen,
    PlanCollection,

    ShopScreen,
    ShopAdd,
    ShopAddList,
    ShopList,

    Profile,
    RecipeDetail,
   
   
    
    
} = Containers

const Auth = createStackNavigator(
    {
        [Router.LoginScreen]:LoginScreen,
        [Router.RegisterScreen]:RegisterScreen

    },
    {
        defaultNavigationOptions:{
            headerShown:false
        }
    }
)
const Nav = createMaterialBottomTabNavigator(
    {
        [Router.ExploreScreen]:{
            screen:ExploreScreen,
            navigationOptions:()=>({
                tabBarIcon:({tintColor})=>(
                    <AntDesign
                        name={"home"}
                        size={24}
                        color={tintColor}
                    />
                )
            })
        },
        [Router.PlanScreen]:{
            screen:PlanScreen,
            navigationOptions:()=>({
                tabBarIcon:({tintColor})=>(
                    <AntDesign
                        name={"bars"}
                        size={24}
                        color={tintColor}
                    />
                )
            })
        },
        [Router.ShopScreen]:{
            screen:ShopScreen,
            navigationOptions:()=>({
                tabBarIcon:({tintColor})=>(
                    <AntDesign
                        name={"shoppingcart"}
                        size={24}
                        color={tintColor}
                    />
                )
            })
        },
        [Router.Profile]:{
            screen:Profile,
            navigationOptions:()=>({
                tabBarIcon:({tintColor})=>(
                    <AntDesign
                        name={"user"}
                        size={24}
                        color={tintColor}
                    />
                )
            })
        },
    },
    {
        navigationOptions:{
            headerShown:false
        },
        activeColor:Color.green,
        inactiveColor:"#ccc",
        barStyle:{
            backgroundColor:Color.lightGrey
        }
    }
)
const Main=createStackNavigator(
    {
        [Router.Nav]:Nav,
        [Router.RecipeDetail]:RecipeDetail,
        [Router.PlanCollection]:PlanCollection,
        [Router.ShopAdd]:ShopAdd,
        [Router.ShopAddList]:ShopAddList,
        [Router.ShopList]:ShopList
    },{
        defaultNavigationOptions:{
            headerShown:false
        }
    }

)
const Switch = createSwitchNavigator(
    { 
        // ["Data"]:Data,
        [Router.Auth]:Auth,     
        [Router.Main]:Main,    
       
    },
)

const AppNav=createAppContainer(Switch)
export default AppNav;