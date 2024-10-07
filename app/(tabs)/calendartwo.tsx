import { View } from "react-native";
import React, { useState } from "react";
import { Calendar, type DateData } from "react-native-calendars";
import type { Theme } from "react-native-calendars/src/types";
import DisplayDate from "~/components/DisplayDate";

const today = new Date().toISOString().split("T")[0];

const CalendarTwo = () => {
	//TODO: Add Selected Date State Here

	const linearAccent = "hsl(176 56% 50%)";

	const theme: Theme = {
		calendarBackground: "rgba(255, 255, 255, 0.1)",
		textSectionTitleColor: linearAccent,
		selectedDayBackgroundColor: linearAccent,
		selectedDayTextColor: "#ffffff",
		todayTextColor: "#ffffff", // itemDay.today.content.color when not pressed
		textDisabledColor: "rgba(255, 255, 255, 0.5)", // itemWeekName.content.color
		monthTextColor: linearAccent,
		arrowColor: linearAccent,
		dayTextColor: "#ffffff",
	};

	return (
		<View>
			{/* Add React Native Calendar Here */}
			<DisplayDate selected="" />
		</View>
	);
};

export default CalendarTwo;
