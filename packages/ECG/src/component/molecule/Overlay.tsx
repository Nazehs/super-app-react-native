import { ReactNode } from 'react';
import { Dimensions, Platform } from 'react-native';
import Modal, { ModalProps } from 'react-native-modal';

type overlayType = {
    open: boolean;
    setModalVisible?: any;
    // children: (renderProps: any) => ReactNode;
    children: ReactNode;
    swipe?: boolean;
    transparent?: boolean;
    animationIn?: string;
    animationOut?: string;
    closeOnBackdropPress?: boolean;
    animationInTiming?: number;
    animationOutTiming?: number;
};

const Overlay = ({
    open,
    setModalVisible,
    children,
    swipe = false,
    transparent,
    animationIn = 'slideInUp',
    animationOut = 'slideOutDown',
    closeOnBackdropPress = false,
    animationInTiming = 300,
    animationOutTiming = 300,
    ...props
}: overlayType) => {
    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight =
        Platform.OS === 'ios' ? Dimensions.get('window').height : 99999999999999;
    return (
        <Modal
            onSwipeComplete={() => swipe && setModalVisible()}
            backdropOpacity={transparent ? 0 : undefined}
            style={{ margin: 0, flex: 1 }}
            swipeDirection={swipe ? 'down' : undefined}
            hideModalContentWhileAnimating={true}
            onBackdropPress={() => (closeOnBackdropPress ? setModalVisible() : {})}
            onBackButtonPress={() => swipe && setModalVisible()}
            isVisible={open}
            statusBarTranslucent
            deviceWidth={deviceWidth}
            deviceHeight={deviceHeight}
            backdropTransitionOutTiming={0}
            animationOutTiming={animationOutTiming}
            animationInTiming={animationInTiming}
            // @ts-ignore
            animationIn={animationIn}
            // @ts-ignore
            animationOut={animationOut}
            // animationInTiming={500}
            // animationOutTiming={500}
            // animationIn={'slideInUp'}
            {...props}>
            {children}
        </Modal>
    );
};

export default Overlay;
