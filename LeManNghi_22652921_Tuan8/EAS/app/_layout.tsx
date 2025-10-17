// app/_layout.tsx

import { Stack } from 'expo-router';
import { TaskProvider } from './context/context'; 

export default function RootLayout() {
  return (
    <TaskProvider>
      <Stack>
        {/* API_Screen_01 (Login/Bắt đầu) là trang mặc định (index) */}
        <Stack.Screen name="index" options={{ headerShown: false }} /> 
        {/* API_Screen_02 (Danh sách Task) là trang list */}
        <Stack.Screen name="list" options={{ headerShown: false }} /> 
        {/* API_Screen_03 (Thêm việc) */}
        <Stack.Screen name="add_job" options={{ headerShown: false }} /> 
      </Stack>
    </TaskProvider>
  );
}