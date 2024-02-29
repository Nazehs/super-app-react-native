import React from 'react';
import { useDispatch } from 'react-redux';
import { signIn, signOut } from '../redux/store';
import { StyleSheet, View } from 'react-native';
import { Button, MD3Colors, Text } from 'react-native-paper';

const LoginComponent = () => {
    const dispatch = useDispatch();

    const handleSignIn = () => {
        dispatch(signIn('123-456-7890'));
    };

    const handleSignOut = () => {
        dispatch(signOut());
    };


    return (
        <View style={styles.container}>
            <Text variant="headlineMedium" style={styles.welcomeHeadline}>
                Welcome!
            </Text>
            <Text style={styles.welcomeText} variant="bodyLarge">
                This is a dummy login screen. Just press the button and have a look
                around this super app 🚀
            </Text>
            <Button mode="contained" onPress={signIn}>
                Login
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeHeadline: {
        color: MD3Colors.primary20,
    },
    welcomeText: {
        padding: 16,
        paddingBottom: 32,
    },
});

export default LoginComponent;