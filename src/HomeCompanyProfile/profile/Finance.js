import React, { Component } from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';
import {test} from '../../Converter'

export default class Finance extends Component {
    constructor(props){
        super(props)
        this.state={
            income:'0'
        }
    }
    render() {
        return (
           
                <View style={styles.main_view}>
                    <View style={styles.v2}>
                        <View style={styles.v3}>
                            <Image source={require('../../images/Profile/income.png')} style={styles.img} resizeMode="stretch" />
                        </View>
                        <View style={styles.v4}>
                            <Text style={styles.text}>Income</Text>
                            <Text style={styles.text2}>£{test(this.state.income)}</Text>
                        </View>

                    </View>
                    <View style={styles.v2}>
                        <View style={styles.v3}>
                            <Image source={require('../../images/Profile/expenditure.png')} style={styles.img} resizeMode="stretch" />
                        </View>
                        <View style={styles.v4}>
                            <Text style={styles.text}>Expenditure</Text>
                            <Text style={styles.text2}>£{test(this.props.expenditures)}</Text>
                        </View>

                    </View>
                    <View style={styles.v2}>
                        <View style={styles.v3}>
                            <Image source={require('../../images/Profile/profit.png')} style={styles.img} resizeMode="stretch" />
                        </View>
                        <View style={styles.v4}>
                            <Text style={styles.text}>Profit</Text>
                            <Text style={styles.text2}>£{test(this.props.profit)}</Text>
                        </View>

                    </View>
                    <View style={styles.v2}>
                        <View style={styles.v3}>
                            <Image source={require('../../images/Profile/loss.png')} style={styles.img} resizeMode="stretch" />
                        </View>
                        <View style={styles.v4}>
                            <Text style={styles.text}>Loss</Text>
                            <Text style={styles.text2}>£{test(this.props.loss)}</Text>
                        </View>
                    </View>
                </View >
            
        );
    }
}


const styles = StyleSheet.create({
    main_view: { flex: 1, alignItems: 'center', backgroundColor: '#110717' },
    v2: { height: 90, width: '95%', backgroundColor: '#1F1724', borderRadius: 5, marginBottom: 10, flexDirection: 'row' },
 //   v5: { height: 90, width: '100%', backgroundColor: '#1F1724', marginTop: 10, flexDirection: 'row' },
    v3: { height: 90, width: '30%', alignItems: 'center', justifyContent: 'center' },
    v4: { height: 90, padding: 10, width: '70%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' },
    img: { width: 50, height: 50 },
    text: { color: 'white', fontSize: 16 },
    text2: { color: 'white', fontSize: 21 },
  //  text3: { color: 'white', fontSize: 14 },
    btnimage:{height:50,width:'100%',justifyContent:'center',alignItems:'center'}
});
