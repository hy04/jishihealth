import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { Header, Icon } from 'react-native-elements';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ text: '骥世健康', style: { color: '#fff' ,fontSize: 19, fontWeight: 'bold',marginBottom:20} }}
          rightComponent={{ icon: 'more-vert', color: '#fff',marginBottom:20}}
          containerStyle={{
            backgroundColor: '#008B8B',
            height:60, 
          }}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="打开蓝牙"
              color="#696969"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="扫码"
              color="#696969"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="上传"
              color="#696969"
            />
          </View>
        </View>
        <View style={styles.devicetitleview}>
          <Text style={styles.devicetitle}>设备信息</Text>
        </View>
        <View style={styles.itemview}>
          <Text style={styles.listitem}>蓝牙：</Text>
          <Text style={styles.listitem}>未打开</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  buttons:{
    flexDirection: 'row'
  },
  button:{
    marginLeft:5,
    marginRight:10,
    marginTop:5,
    marginBottom:5,
    width:80
  },
  devicetitleview:{
    backgroundColor:'#D4D3D3',
    height:50,
    justifyContent: 'center',
    marginBottom:5
  },
  devicetitle:{
    fontWeight: 'bold',
    color: 'black', 
    fontSize:20, 
    marginLeft:5
  },
  listitem:{
    fontSize:18, 
    marginLeft:5,
  },
  itemview:{
    flexDirection: 'row'
  }
  
});
