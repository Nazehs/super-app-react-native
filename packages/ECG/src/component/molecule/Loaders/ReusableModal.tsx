import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from 'react-native';

type ReusableModalProps = {
    isVisible: boolean;
    onRequestClose: () => void;
    title: string;
    message: string;
    iconSource: ImageSourcePropType;
    manageLinkText?: string;
    onManageLinkPress?: () => void;
    closeIconSource?: ImageSourcePropType;
};

const ReusableModal: React.FC<ReusableModalProps> = ({
    isVisible,
    onRequestClose,
    title,
    message,
    iconSource,
    manageLinkText,
    onManageLinkPress,
    closeIconSource
}) => {
    if (!isVisible) return null;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onRequestClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.alertBox}>
                    <Image source={iconSource} style={styles.iconStyle} />
                    <View>
                        <Text style={styles.alertTitle}>{title}</Text>
                        <Text style={styles.alertMessage}>
                            {message}
                        </Text>
                        {manageLinkText && (
                            <TouchableOpacity onPress={onManageLinkPress}>
                                <Text style={styles.manageLinkText}>{manageLinkText}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                    {closeIconSource && (
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={onRequestClose}
                        >
                            <Image source={closeIconSource} style={styles.closeButtonIcon} />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        position: 'absolute',
        top: '15%',
        alignSelf: 'center',
    },
    alertBox: {
        width: '100%',
        backgroundColor: '#F15D5D',
        paddingLeft: 6,
        paddingVertical: 15,
        paddingRight: 25,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        flexWrap: 'nowrap',
        gap: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    alertTitle: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 16,
    },
    alertMessage: {
        color: '#FFF',
        fontSize: 14,
        paddingRight: 10,
        marginTop: 10,
    },
    manageLinkText: {
        textDecorationLine: 'underline',
        color: '#fff',
        fontSize: 14,
        fontWeight: '500'
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    closeButtonIcon: {
        // color: '#FFF',
        height: 20,
        width: 20,
    },
    iconStyle: {
        height: 34,
        width: 34,
        alignSelf: 'flex-start'
    },
});

export default ReusableModal;
