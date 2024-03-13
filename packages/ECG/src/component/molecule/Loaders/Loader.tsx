import { ActivityIndicator, Dimensions, Platform, View } from 'react-native';
import Modal from 'react-native-modal';
import { globalSunshineYellow } from '../../../style-dictionary-dist/momoStyle';

type loaderType = {
    open: boolean;
    setModalVisible?: any;
    swipe?: boolean;
    transparent?: boolean;
    animationIn?: string;
    animationOut?: string;
    closeOnBackdropPress?: boolean;
    animationInTiming?: number;
    animationOutTiming?: number;
};

const Loader = ({
    open,
    setModalVisible,
    swipe = false,
    transparent,
    animationIn = 'slideInUp',
    animationOut = 'slideOutDown',
    closeOnBackdropPress = false,
    ...props
}: loaderType) => {
    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight =
        Platform.OS === 'ios' ? Dimensions.get('window').height : 99999999999999;
    return (
        <Modal
            style={{ margin: 0, flex: 1 }}
            isVisible={open}
            statusBarTranslucent
            deviceWidth={deviceWidth}
            deviceHeight={deviceHeight}
            animationOutTiming={0}
            animationInTiming={0}
            backdropTransitionOutTiming={0}
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            {...props}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color={globalSunshineYellow} size={'large'} />
            </View>
        </Modal>
    );
};

export default Loader;
