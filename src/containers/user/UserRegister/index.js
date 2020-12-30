import React, { Component } from 'react';
import { 
    View, 
    Text,
    ImageBackground,
    ScrollView,
    Image,
} from 'react-native';
import {styles} from './styles'
import background from '../../../assets/Images/back_ground.jpg'
import logo from '../../../assets/Images/Logo_meal_plan.png'
import CustomInput from '../../../components/CustomInput'
import {connect} from 'react-redux'
import AuthAction from '../../../actions/auth'
import {getAuthField} from '../../../selector/auth'
import {bindActionCreators} from 'redux'
import {
    validateEmail,
    validatePassword
} from '../../../common/util'
import {Button} from 'react-native-elements'
import {Router} from '../../../navigation/route'

class Login extends Component {
    handelregister=()=>{
        const {
            username,
            email,
            password,
            emailError,
            passwordError,
            confirmError,
            register
        }= this.props
        if (
            emailError==="" && passwordError==="" &&
            confirmError==="" && username !=="" 
        ) {
            register(email, password, username)
        }
    }
    handelcheckEmail=(email)=>{
        const {
            checkEmail
        }=this.props
        if (validateEmail(email)){
            checkEmail("")
        }
        else {
            checkEmail("Invalid Email")
        }
    };
    handelcheckPassword=(password)=>{
        const {
            checkPassword
        }=this.props
        if (validatePassword(password)){
            checkPassword("")
        }
        else {
            checkPassword("Password has at lest 6 characters")
        }
    };
    handelcheckConfirm=(confirm)=>{
        const {
            checkConfirm,
            password
        }=this.props
        if (password===confirm){
            checkConfirm("")
        }
        else {
            checkConfirm("Not similar to password")
        }
    };
    render() {
        const {
            isFetching,
			username,
			password,
			passwordError,
			email,
			emailError,
			confirm,
			confirmError,
			isChecked,
			changeFormField,
        } =this.props
        return (
            <ImageBackground
                source={background}
                blurRadius={0.3}
                style={styles.container}  
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image
                        source={logo}
                        resizeMode="contain"
                        resizeMethod="resize"
                        style={styles.logo}
                    />
                    <View style={styles.form}>
                        <Text style={styles.title}>Register</Text>
                        <CustomInput
                            label={"Username"}
                            Iconname={"people"}
                            value={username}
                            onChangeText={ username=>{
                                changeFormField("username",username)
                            }}
                            errorText={""}
                            keyboardType={"email-address"}
                        />
                        <CustomInput
                            label={"Email"}
                            Iconname={"email"}
                            value={email}
                            onChangeText={ email=>{
                                this.handelcheckEmail(email)
                                changeFormField("email",email)
                            }}
                            errorText={emailError}
                            keyboardType={"email-address"}
                        />
                        <CustomInput
                            label={"Password"}
                            Iconname={"lock-outline"}
                            value={password}
                            onChangeText={ password=>{
                                this.handelcheckPassword(password)
                                changeFormField("password",password)
                            }}
                            errorText={passwordError}
                            secureTextEntry={true}
                        />
                        <CustomInput
							label={"Confirm password"}
                            value={confirm}
                            Iconname={"lock-outline"}
							onChangeText={confirm => {
								this.handelcheckConfirm(confirm);
								changeFormField("confirm", confirm);
							}}
							errorText={confirmError}
							secureTextEntry={true}
						/>

                    </View>
                    <Button
						title={"Register"}
						titleStyle={styles.createTitle}
						buttonStyle={styles.createButton}
                        containerStyle={{ alignSelf: "center" }}
                        onPress={()=>this.handelregister()}
                        loading={isFetching}
					/>
                </ScrollView>
            </ImageBackground>
        );
    }
}
const mapStateToProps=state=>({
    email:getAuthField(state,"email"),
    emailError:getAuthField(state,"emailError"),
    password:getAuthField(state,"password"),
    passwordError:getAuthField(state,"passwordError"),
    username: getAuthField(state, "username"),
	confirm: getAuthField(state, "confirm"),
	confirmError: getAuthField(state, "confirmError"),
	isChecked: getAuthField(state, "isChecked"),
    isFetching:state.auth.isFetching,
    error: state.auth.error,
    logoutState: state.auth.logoutState,
    user:state.auth.user,

})
const mapDispatchToProps=(dispatch)=>{
    return{
        changeFormField:bindActionCreators(AuthAction.changeFormField,dispatch),
        checkEmail:bindActionCreators(AuthAction.checkEmail,dispatch),
        checkPassword:bindActionCreators(AuthAction.checkPassword,dispatch),
        register:bindActionCreators(AuthAction.register,dispatch),
        checkConfirm:bindActionCreators(AuthAction.checkConfirm,dispatch)
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Login);  
