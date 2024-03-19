import React from 'react';
import { Modal, StyleSheet, View, Text, TouchableOpacity, ModalProps } from 'react-native';
import Button from '../../atom/Button/Button'; // Adjust the import path as needed
import { gpsh, gpsw } from '../../../utils/parseTokenStyle'; // Adjust the import path as needed
import Margins from '../../atom/Margins';
import { colors } from '../../../utils/colors';

interface UpgradeProfileModalProps extends ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const UpgradeProfileModal: React.FC<UpgradeProfileModalProps> = ({ isVisible, onClose, ...props }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
      {...props}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Upgrade Profile Limit</Text>
          <Text style={styles.modalContent}>
            Here is what you need to perform an upgrade of a subscriber profile:
          </Text>
          <Text style={styles.modalItem}>For a Minimum to Medium upgrade:</Text>
          <Text style={styles.modalText}>Provide a valid government-approved photo ID. (The upgrade will be done through the Mpos application.)</Text>
          <Margins />
          <Text style={styles.modalItem}>For a Medium to Enhanced upgrade:</Text>
          <Text style={styles.modalText}>Show proof of address. (This upgrade can only be done at the service centre.)</Text>
          <View style={styles.nextButton}>
            <Button
              label={"DONE"}
              variant="primary"
              bg={'momoBlue'}
              size="fullWidth"
              height={50}
              disabled={false}
              onPress={onClose}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    fontFamily: 'MTN Brighter Sans',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  nextButton: {
    width: "85%",
    marginTop: 20,
    alignContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
  },
  modalView: {
    width: '100%',
    height: '90%',
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'absolute',
    backgroundColor: 'white',
    padding: gpsh('23'),
    // alignItems: 'start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  closeButtonText: {
    color: '#333',
    fontSize: gpsh('20'),
  },
  modalTitle: {
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'left',
    fontSize: gpsh('16'),
    marginTop: gpsh('5'),
    marginBottom: gpsh('10'),
  },
  modalContent: {
    fontSize: gpsh('16'),
    textAlign: 'left',
    width: '100%',
    marginBottom: gpsh('10'),
  },
  modalItem: {
    alignSelf: 'flex-start',
    fontSize: gpsh('16'),
    fontStyle: 'normal',
    fontWeight: '500',
    color: colors.greyLabel,
    lineHeight: gpsh('24'),
    marginBottom: gpsh('1'),
  },
  modalText: {
    alignSelf: 'flex-start',
    fontSize: gpsh('16'),
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: gpsh('24'),
    marginBottom: gpsh('1'),
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default UpgradeProfileModal;
