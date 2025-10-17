// app/index.tsx (API_Screen_01: Login Screen)
import { RelativePathString, Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTasks } from './context/context';

export default function LoginScreen() {
    const router = useRouter();
    const { setUserName } = useTasks();
    const [nameInput, setNameInput] = useState<string>('');

    const handleGetStarted = () => {
        const name = nameInput.trim() || 'Twinkle'; 
        setUserName(name);
        // Chuyển hướng đến màn hình Danh sách (list)
        router.replace({ pathname: "list" as RelativePathString });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            
            <View style={styles.content}>
                <Text style={styles.title}>MANAGE YOUR</Text>
                <Text style={[styles.title, styles.purpleText]}>TASK</Text>
            </View>
            
            <View style={styles.bottomContent}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    value={nameInput}
                    onChangeText={setNameInput}
                />
                
                <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
                    <Text style={styles.buttonText}>GET STARTED</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor: '#F7F7F7',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    purpleText: {
        color: '#6A5ACD', // Màu tím
        marginTop: 5,
    },
    bottomContent: {
        paddingHorizontal: 30,
        paddingBottom: 50,
    },
    input: {
        height: 50,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#00CED1', // Màu xanh lam
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});