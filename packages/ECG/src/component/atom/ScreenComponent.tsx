import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '80%',
        marginBottom: 20,
        padding: 10,
    },
    buttonContainer: {
        width: '80%',
    },
});

const ScreenComponent = ({ navigation }) => {
    const [inputValue, setInputValue] = React.useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="Enter your text"
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Next Screen"
                    onPress={() => navigation.navigate('NextScreen')}
                />
            </View>
        </View>
    );
};

export default ScreenComponent;
