import {Dimensions} from 'react-native';
import Constants from 'expo-constants'
const {width,height} = Dimensions.get('window');
export const SIZES = {
    width,
    height,
    statusBarHeight: Constants.statusBarHeight,
}