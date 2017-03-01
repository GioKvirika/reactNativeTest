import   React ,{ Component } from 'react';
import {Text , View} from 'react-native';


const Header = (props) =>  {

        const { textStyle , viewStyle} = styles;
        return (

            <View style={viewStyle}>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>

        );
};

const styles = {

    textStyle : {
        fontSize : 20
    },
    viewStyle : {
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#e3f8f6',
        height:60,
        shadowColor:'#000',
        shadowOffset : {width:0,height:2},
        shadowOpacity: 0.2,
        elevation:2,
        position:'relative'

    },
};

export default Header;


