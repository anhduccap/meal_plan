import React, { Component } from 'react';
import { 
    View, 
    Text,
    ImageBackground,
    ScrollView,
    Image,
    TouchableOpacity
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
    state = {};
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

    handellogin=()=>{
        const {
            email,
            password,
            emailError,
            passwordError,
            login
        }= this.props
        if (emailError=== "" && passwordError=== ""){
            login(email,password);
        }
    }
    async componentWillReceiveProps(nextProps) {
		if (nextProps.logoutState === false && nextProps.user) {
			alert("Login Successfully")
			this.props.navigation.navigate(Router.Main);
		}
		if (nextProps.error) {
			alert(nextProps.error)
		}
	}
    render() {
        const {
            email,
            password,
            emailError,
            passwordError,
            changeFormField,
            isFetching,
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
                        <Text style={styles.title}>Welcome Chef!!!</Text>
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
                        <View style={styles.insWrapper}>
                            <Text style={styles.instruction}>You don't have an account </Text>
                            <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate(Router.UserRegister)}
							>
								<Text style={styles.highlight}>Register</Text>
							</TouchableOpacity>
                        </View>
                    </View>
                    <Button
						title={"Login"}
						titleStyle={styles.createTitle}
						buttonStyle={styles.createButton}
                        containerStyle={{ alignSelf: "center" }}
                        // onPress={()=>this.handellogin()}
                        onPress={()=>this.handellogin()}
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
    isFetching:state.auth.isFetching,
    error: state.auth.error,
    logoutState: state.auth.logoutState,
    user: state.auth.user,
})
const mapDispatchToProps=(dispatch)=>{
    return{
        changeFormField:bindActionCreators(AuthAction.changeFormField,dispatch),
        checkEmail:bindActionCreators(AuthAction.checkEmail,dispatch),
        checkPassword:bindActionCreators(AuthAction.checkPassword,dispatch),
        login:bindActionCreators(AuthAction.login,dispatch),
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Login);  
