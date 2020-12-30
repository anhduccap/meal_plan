import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    Image
} from 'react-native'
import {styles} from './style'
import  CalendarStrip from 'react-native-slideable-calendar-strip'
import { connect } from "react-redux"
import {bindActionCreators} from 'redux'
import PlanAction from '../../../actions/plan'
import {convertTimeToString} from '../../../common/util'
import {Button} from 'react-native-elements'
import {Font, Color } from "../../../common"
import Antdesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Router} from '../../../navigation/route'
import{
    getPlanField,
    // getPlanByDate
} from '../../../selector/plan'
import { State } from 'react-native-gesture-handler'

const format = "yyyy-MM-dd";
const meals=["breakfast", "lunch", "dinner"]
class Plan extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedDate : new Date(),
            editMode:false
        };
    }
    componentDidMount(){
        this.handelGetPlan();
    }
    handelGetPlan=()=>{
        const {
            getPlan,
        }=this.props
        console.log("Get Plan")
        getPlan()
    }
    async componentWillReceiveProps(nextProps){
        if (nextProps.isLoading === true && this.props.isLoading===false) {
            this.handleChange()
            this.props.completeGetPlan()
        }
        else {
            this.props.completeGetPlan()
        }
    }
  
    handleChange=()=>{
        const {
            data,
            setForm,
            resetForm,
            setSelectDate,
            plandate
        }=this.props
        const {selectedDate}=this.state;
        const dateString=convertTimeToString(selectedDate,format)
        // setSelectDate(dateString)
        // const dateplan=plandate
        const dateplan=data.filter(plan=>plan.dateString===dateString)
        if (dateplan.length>0){
            console.log("set form")
            setForm(dateplan[0])
        }
        else {
            console.log("reset Form")
            resetForm(dateString);
        }
    }
    OnPressDate=(selectedDate)=>{
        this.setState({ selectedDate, editMode: false }, () => {
            this.handleChange();
          });
    }
    getMarked = (data) => data.map(e => e.dateString);

    addRecipe=(meal)=>{
        if (this.state.editMode) {
            this.toggleEdit();
        }
        this.props.navigation.navigate(Router.PlanCollection,{
            type:"select",
            meal
        })
    }
    toggleEdit = () => {
        this.setState({ editMode: !this.state.editMode });
      };
    toDetails = (recipe) => {
    this.props.navigation.navigate(Router.RecipeDetail, { recipe });
    };
    removeRecipe = (item, meal) => {
        if (!this.state.editMode) {
          this.toggleEdit();
        }
        this.props.removeItem(item, meal);
      };
    renderMeal=(meal)=>{
        const {form}=this.props;
        const data=form[meal]
        let data_recipe=data.filter(e=>e !== "")
        return (
            <View style={styles.section} key={meal} >
                <View style={[styles.row, styles.sectionHeader]}>
                    <Text style={styles.Title}>{meal}</Text>
                    <TouchableOpacity
                        onPress={()=>this.addRecipe(meal)}
                    >
                        <Antdesign
                            name={"plus"}
                            size={24}
                            color={"#999"}
                            containerStyle={styles.add}
                        />
                    </TouchableOpacity>
                </View>
                {data_recipe.length > 0 && data_recipe.map(item => (
                    <TouchableHighlight
                        key={meal + item.Id}
                        onPress={()=>this.toDetails(item)}
                    >
                        <View style={styles.row}>
                            <TouchableOpacity
                                onPress={()=>this.removeRecipe(item,meal)}
                            >
                                <FontAwesome
                                    name={"trash-o"}
                                    color={Color.red}
                                    size={24}
                                />
                            </TouchableOpacity>
                            <Image
                                resizeMode={"contain"}
                                resizeMethod={"resize"}
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 12,
                                    marginLeft:20
                                }}
                                source={{ uri: item.Image }}
                            />
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                    </TouchableHighlight>
                ))}
            </View>
        )
    }
    cancel = () => {
        this.handelGetPlan();
    };
    onSave=()=>{
        const {
            form,
            data,
            setPlan,
            addPlan
        }=this.props
        let exitform=data.findIndex(e=>e.dateString===form.dateString)
        if (exitform===-1) addPlan(form) 
        else setPlan(form)
        alert("Save successful")
    }
    addToList = () => {
        const {
          form: { breakfast, lunch, dinner }
        } = this.props;
        let ingredients = [];
        breakfast.map(e => {
            console.log(" breakfast")
          ingredients = this.union(ingredients, e.Ingredients);
        });
        lunch.map(e => {
            console.log(" lunch")
          ingredients = this.union(ingredients, e.Ingredients);
        });
        dinner.map(e => {
            console.log(" dinner")
          ingredients = this.union(ingredients, e.Ingredients);
        });
    
        this.props.navigation.navigate(Router.ShopAdd, { ingredients });
      };
    
      union = (arr1, arr2) => {
    
        if (arr1.length === 0 && arr2.length !== 0) {
            console.log("1")
          return arr2;
        }
        if (arr1.length !== 0 && arr2.length === 0) {
            console.log("2")
          return arr1;
        }
        if (arr1.length === 0 && arr2.length === 0) {
            console.log("3")
          return [];
        }
        let temp = [...arr1];
        arr2.map(e => {
          let filter = arr1.filter(item => item.name === e.name);
          if (filter.length === 0) {
            temp.push(e);
          } else {
            let newItem = Object.assign({}, e);
            filter.map(obj => {
              newItem.quanity = (
                (newItem.quanity) + (obj.quanity)
              );
            });
            let index = temp.findIndex(item => item.name === e.name);
            temp.splice(index, 1, newItem);
          }
        });
        return temp;
      };
    render(){
        const { data } = this.props;
        return(
            <View style={styles.Container}>      
                <CalendarStrip
                    selectedDate={this.state.selectedDate}
                    onPressDate={date => this.OnPressDate(date)}
                    markedDate={this.getMarked(data)}
                />  
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <TouchableOpacity
                        onPress={this.addToList}
                    >
                        <Text style={styles.addIng}>Add to shopping list</Text>
                    </TouchableOpacity>
                   {meals.map(meal=>this.renderMeal(meal))}
                </ScrollView> 
                
                <View style={[styles.row, styles.footer]}>
                    <Button
                        onPress={this.cancel}
                        type={"outline"}
                        title={"Cancel"}
                        titleStyle={{
                            color: Color.lightGreen,
                            fontFamily: Font.Family.OpenSansLight
                        }}
                        buttonStyle={{ borderColor: Color.lightGreen }}
                        containerStyle={{ flex: 1, margin: 8 }}
                    />
                    <Button
                        onPress={this.onSave}
                        title={"Save"}
                        titleStyle={{
                            fontFamily: Font.Family.OpenSansLight
                        }}
                        buttonStyle={{ backgroundColor: Color.lightGreen }}
                        containerStyle={{ flex: 1, margin: 8 }}
                    />
                </View>
        
            </View>
        )
    }
}
const mapStateProps = state =>({
    user:state.auth.user,
    data: getPlanField(state,"data"),
    form: getPlanField(state,"form"),
    isLoading:getPlanField(state,"isLoading"),
    // plandate:getPlanByDate(state)
})

const mapDispatchToProps=(dispatch)=>{
    return{
        getPlan:bindActionCreators(PlanAction.getPlan,dispatch),
        setPlan:bindActionCreators(PlanAction.setPlan,dispatch),
        addPlan:bindActionCreators(PlanAction.addPlan,dispatch),
        setForm:bindActionCreators(PlanAction.setForm,dispatch),
        resetForm:bindActionCreators(PlanAction.resetForm,dispatch),
        changeFormField:bindActionCreators(PlanAction.changeFormField,dispatch),
        completeGetPlan:bindActionCreators(PlanAction.completeGetPlan,dispatch),
        removeItem:bindActionCreators(PlanAction.removeItem,dispatch),
        // setSelectDate:bindActionCreators(PlanAction.setSelectDate,dispatch)
    }
}
export default connect(mapStateProps,mapDispatchToProps)(Plan);