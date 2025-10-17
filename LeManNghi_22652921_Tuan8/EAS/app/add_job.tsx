import { MaterialIcons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTasks } from './context/context';

export default function AddJobScreen() {
    const router = useRouter();
    const { addTask, userName } = useTasks();
    const [jobName, setJobName] = useState('');

    const handleFinish = () => {
        if (jobName.trim()) {
            addTask(jobName.trim());
            router.back(); 
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen 
                options={{
                    headerShown: false,
                }}
            />
             {/* Header custom */}
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <View style={styles.avatarPlaceholder}>
                        <Image source={require('../assets/images/avatar.png')} style={{ width: 40, height: 40, borderRadius: 20 }} /> 
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.greeting}>Hi {userName}</Text>
                        <Text style={styles.subtitle}>Have agrate day a head</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>ADD YOUR JOB</Text>
            
            {/* Input Field */}
            <View style={styles.inputContainer}>
                <MaterialIcons name="assignment" size={24} color="green" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Input your job"
                    value={jobName}
                    onChangeText={setJobName}
                />
            </View>
            
            <TouchableOpacity style={styles.button} onPress={handleFinish}>
                <Text style={styles.buttonText}>FINISH</Text>
            </TouchableOpacity>

            {/* Placeholder cho Hình ảnh Sổ và Bút chì */}
            <View style={styles.imagePlaceholderContainer}>
                {/* Bạn có thể thay thế View này bằng <Image source={require('đường_dẫn_ảnh')} /> */}
                <View style={styles.notepadImage} /> 
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarPlaceholder: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#D3D3D3',
    },
    greeting: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 12,
        color: 'gray',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#555',
        marginTop: 50,
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
        height: 50,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        marginBottom: 30,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#00CED1', 
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '85%',
        marginBottom: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    imagePlaceholderContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '80%',
    },
    notepadImage: {
        width: 150,
        height: 180,
        backgroundColor: '#FFFACD', // Màu vàng nhạt để mô phỏng notepad
        borderWidth: 1,
        borderColor: '#D3D3D3',
        borderRadius: 5,
    }
});