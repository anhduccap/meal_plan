import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native'
import { Router } from "../../../navigation/route";
import { connect } from "react-redux";
import ShopAction from "../../../actions/shop";
import { getShopField } from "../../../selector/shop";
import {bindActionCreators} from 'redux'
import { styles } from './style';
import { Button } from "react-native-elements";
import ShopItem from './Component/shopItem'
class Shop extends Component{
    componentDidMount(){
        this.props.getList()
    }
    renderItem = ({ item }) => (
		<ShopItem
			data={item}
			onPress={() =>
				this.props.navigation.navigate(Router.ShopList, { item })
			}
		/>
	);
    render(){
        const {data}=this.props
        return(
            <View style={styles.container}>
               <View style={[styles.row, { marginVertical: 8 }]}>
                    <View style={styles.panel}>
                        <Text style={styles.totalList}>{data.length}</Text>
                        <Text style={styles.panelText}>Shopping List</Text>
                    </View>
                    <Button
                        onPress={() => this.props.navigation.navigate(Router.ShopAddList)}
                        type={"outline"}
                        title={"New List"}
                        titleStyle={styles.btnTitle}
                        buttonStyle={styles.btnStyle}
                        containerStyle={styles.btnContainer}
                    />
			    </View>
                <FlatList
                    data={data}
                    keyExtractor={item=>item.Id}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}
const mapStateProps = state =>({
    data: getShopField(state, "data"),
})

const mapDispatchToProps=(dispatch)=>{
    return{
        getList: bindActionCreators(ShopAction.getList,dispatch),
    }
}
export default connect(mapStateProps,mapDispatchToProps)(Shop);
