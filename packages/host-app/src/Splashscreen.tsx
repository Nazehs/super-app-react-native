import React from 'react';
import { StyleSheet, SafeAreaView, Text, ActivityIndicator } from 'react-native';

const SplashScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Host application is loading. Please wait...
            </Text>
            <ActivityIndicator
                style={styles.activityIndicator}
                size="large"
                color="#6200EE"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        fontSize: 18,
        color: '#6200EE',
        textAlign: 'center',
    },
    activityIndicator: {
        marginVertical: 16,
    },
});

export default SplashScreen;
