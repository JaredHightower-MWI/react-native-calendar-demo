import * as React from "react";
import { SafeAreaView, View } from "react-native";
import { type CalendarTheme, toDateId } from "@marceloterreiro/flash-calendar";
import { Text } from "~/components/ui/text";
import DisplayDate from "~/components/DisplayDate";

const today = toDateId(new Date());

export default function Screen() {
	// TODO: Add Selected Date State Here

	const linearAccent = "hsl(176 56% 50%)";

	const linearTheme: CalendarTheme = {
		rowMonth: {
			content: {
				textAlign: "left",
				color: "rgba(255, 255, 255, 0.5)",
				fontWeight: "700",
			},
		},
		rowWeek: {
			container: {
				borderBottomWidth: 1,
				borderBottomColor: "rgba(255, 255, 255, 0.1)",
				borderStyle: "solid",
			},
		},
		itemWeekName: { content: { color: "rgba(255, 255, 255, 0.5)" } },
		itemDayContainer: {
			activeDayFiller: {
				backgroundColor: linearAccent,
			},
		},
		itemDay: {
			idle: ({ isPressed, isWeekend }) => ({
				container: {
					backgroundColor: isPressed ? linearAccent : "transparent",
					borderRadius: 4,
				},
				content: {
					color:
						isWeekend && !isPressed ? "rgba(255, 255, 255, 0.5)" : "#ffffff",
				},
			}),
			today: ({ isPressed }) => ({
				container: {
					borderColor: "rgba(255, 255, 255, 0.5)",
					borderRadius: isPressed ? 10 : 10,
					backgroundColor: isPressed ? linearAccent : "transparent",
				},
				content: {
					color: isPressed ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
				},
			}),
			active: ({ isEndOfRange, isStartOfRange }) => ({
				container: {
					backgroundColor: linearAccent,
					borderTopLeftRadius: isStartOfRange ? 10 : 0,
					borderBottomLeftRadius: isStartOfRange ? 10 : 0,
					borderTopRightRadius: isEndOfRange ? 10 : 0,
					borderBottomRightRadius: isEndOfRange ? 10 : 0,
				},
				content: {
					color: "#ffffff",
				},
			}),
		},
	};

	return (
		<SafeAreaView>
			{/* Add Flash Calendar Here */}
			<DisplayDate selected="" />
		</SafeAreaView>
	);
}
