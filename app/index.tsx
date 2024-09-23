import { Text, View } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgb(3, 194, 252)"
      }}
    >
        <View style={{backgroundColor:'green', height: 200}}>

              <View style={{backgroundColor:'red', flex:1, alignItems:'center', justifyContent:'center'}}><Text>röd</Text></View>

              <View 
              style={{
                backgroundColor:'green',
                flex:1,
                flexDirection: 'row'
                }}>
                <View style={{backgroundColor:'green', flex:1}}><Text>röd</Text></View>
                <View style={{backgroundColor:'yellow',flex:1}}></View>
              </View>

        </View>

        <View style={{backgroundColor:'blue', height: 50, flexDirection:'row'}}>

              <View style={{backgroundColor:'red', flex: 3}}><Text></Text></View>
              <View style={{backgroundColor:'black', flex: 1}}><Text></Text></View>

        </View>
        <View style={{flex:1}}></View>

      
        <View style={{
          backgroundColor:'orange',
          height:50,
          justifyContent:'flex-end',
          alignItems:'flex-end'
          }}>
          <Text>Orange</Text>
        </View>

    </View>
  );
}
