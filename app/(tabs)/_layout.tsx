import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { ThemeToggle } from "~/components/ThemeToggle";
import { useColorScheme } from "~/lib/useColorScheme";

export default function TabLayout() {
	const { isDarkColorScheme } = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: isDarkColorScheme ? "#f7faff" : "#4f4f4f",
				headerRight: () => <ThemeToggle />,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					href: null,
					title: "Home",
					tabBarIcon: ({ color }) => (
						<FontAwesome size={28} name="home" color={color} />
					),
				}}
			/>

			<Tabs.Screen
				name="calendartwo"
				options={{
					href: null,
					title: "RN Calendar ",
					tabBarIcon: ({ color }) => (
						<FontAwesome size={28} name="home" color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
