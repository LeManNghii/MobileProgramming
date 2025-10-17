// app/list.tsx (API_Screen_02: Danh sách Task)
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, SafeAreaView, Platform, Image } from 'react-native';
import { Stack, useRouter, RelativePathString } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { useTasks } from './context/context';
import { Task } from '../app/types';

// Component TaskItem
interface TaskItemProps {
    task: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => (
    <View style={taskStyles.itemContainer}>
        <TouchableOpacity onPress={() => onToggle(task.id)} style={taskStyles.checkbox}>
            <MaterialIcons 
                name={task.completed ? 'check-box' : 'check-box-outline-blank'} 
                size={24} 
                color="#32CD32" 
            />
        </TouchableOpacity>
        <Text style={[taskStyles.text, task.completed && taskStyles.completedText]} numberOfLines={1}>
            {task.name}
        </Text>
        <View style={taskStyles.actions}>
            <TouchableOpacity onPress={() => onDelete(task.id)} style={taskStyles.editButton}>
                <MaterialIcons name="edit" size={20} color="#FF6347" />
            </TouchableOpacity>
        </View>
    </View>
);

export default function ListScreen() {
    const router = useRouter();
    const { tasks, userName, toggleTask, deleteTask } = useTasks();

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            
            <View style={styles.header}>
                <MaterialIcons name="arrow-back" size={24} color="black" />
                <View style={styles.userInfo}>
                    <View style={styles.avatarPlaceholder}> 
                        <Image source={require('../assets/images/avatar.png')} style={{ width: 40, height: 40, borderRadius: 20 }} /> 
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.greeting}>Hi {userName}</Text>
                        <Text style={styles.subtitle}>Have agrate day a head</Text>
                    </View>
                </View>
                <MaterialIcons name="arrow-back" size={24} color="transparent" /> 
            </View>
            
            <View style={styles.searchBar}>
                <MaterialIcons name="search" size={24} color="gray" />
                <TextInput placeholder="Search" style={styles.searchInput} />
            </View>

            {/* Danh sách Task */}
            <FlatList
                data={tasks}
                keyExtractor={(item: Task) => item.id}
                renderItem={({ item }) => (
                    <TaskItem 
                        task={item} 
                        onToggle={toggleTask} 
                        onDelete={deleteTask}
                    />
                )}
                style={styles.taskList}
                contentContainerStyle={{ paddingBottom: 100 }}
            />

            <TouchableOpacity 
                style={styles.addButton} 
                onPress={() => router.push({ pathname: "add_job" as RelativePathString })}
            >
                <MaterialIcons name="add" size={30} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor: 'white',
    },
    header: {
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
        // Thêm hình ảnh avatar nếu cần
    },
    greeting: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 12,
        color: 'gray',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        borderRadius: 25,
        marginHorizontal: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
    },
    taskList: {
        flex: 1,
        paddingHorizontal: 20,
    },
    addButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: '#00CED1',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});

const taskStyles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        padding: 15,
        marginVertical: 5,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1.41,
    },
    checkbox: {
        marginRight: 10,
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    actions: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    editButton: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 5,
        marginLeft: 5,
        borderWidth: 1,
        borderColor: '#FF6347',
    },
});