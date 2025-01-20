
import { Stack } from "expo-router";



export default function Layout () {

    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Shopping List" }} />
            <Stack.Screen name="counter" options={{ title: "Counter screen", presentation: "modal"}} />
            <Stack.Screen name="idea" options={{ title: "Idea screen" }} />
        </Stack>

        
    )
}

