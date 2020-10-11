import React, {Fragment, Component} from 'react';
import ImagePicker from 'react-native-image-picker';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filepath: {
        data: '',
        uri: '',
      },
      fileData: '',
      fileUri: '',
    };
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
        
          <View style={styles.body}>
          <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../picture/forest.jpg')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <Text
              style={{textAlign: 'center', fontSize: 20, paddingBottom: 10}}>
              การท่องเที่ยวป่าชายเลนของนครศรีธรรมราช
            </Text> 
            <View style={styles.card}> 
            <Text
              style={styles.card}>
              เป็นแหล่งอาหารเป็นที่อยู่อาศัยของพืชและสัตว์ตามธรรมชาติเพื่อเป็นตัวช่วยป้องกันการกัดเซาะตามแนวชายฝั่งทะเลจาก ป่าโกงกางที่มีส่วนเพิ่มขึ้นทุกปีโดยพื้นที่ดังกล่าวเป็นแหล่งขยายพันธุ์สัตว์น้ำให้กับชาวบ้านในพื้นที่สามารถที่จะมีพันธุ์ปลาเพื่อเป็นแหล่งอาหารตลอดจนสามารถสร้างรายได้ให้กับครอบครัว ได้เป็นอย่างดีทั้งนี้ด้วยประโยชน์ของป่าชายเลนที่มีต่อชุมชนต่อชาวบ้าน
            </Text>
            </View>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },

  body: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: Dimensions.get('screen').height - 100,
    width: Dimensions.get('screen').width,
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  images: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3,
  },
  btnParentSection: {
    alignItems: 'center',
    marginTop: 10,
  },
  btnSection: {
    width: 225,
    height: 50,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
