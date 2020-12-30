import React, { Component } from 'react';
import { 
    View, 
} from 'react-native';
import {styles} from './styles'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Button} from 'react-native-elements'
import CategoryAction from '../actions/category'
import {data} from './mock'
class Data extends Component {
    handellogin=()=>{
        const {
           Up
        }= this.props
        console.log(data)
        data.map(e=>{
            Up(e)
        })
    }
    
    render() {
        const {
        
        } =this.props
        return (
                <View>
                     <Button
						title={"Up"}
						titleStyle={styles.createTitle}
						buttonStyle={styles.createButton}
                        containerStyle={{ alignSelf: "center" }}
                        onPress={()=>this.handellogin()}
					/>
                </View>         
        );
    }
}
const mapStateToProps=state=>({
   
})
const mapDispatchToProps=(dispatch)=>{
    return{
        Up:bindActionCreators(CategoryAction.Up,dispatch)
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Data);  
