import { StyleSheet, Text, View } from "react-native";
import type React from "react";
import Animated, {
	FadeInUp,
	FadeOutDown,
	LayoutAnimationConfig,
} from "react-native-reanimated";
import { handleFormateDate } from "~/lib/utils";

type TDisplayDateProps = {
	selected: string;
};

const DisplayDate = ({ selected }: TDisplayDateProps) => {
	return (
		<View className="flex-row my-3 justify-evenly">
			<LayoutAnimationConfig skipEntering>
				<Animated.View
					key={selected}
					entering={FadeInUp}
					exiting={FadeOutDown}
					className="items-center justify-center p-2 mx-auto bg-white rounded-lg"
				>
					<Text className="text-lg font-bold text-secondary">
						{handleFormateDate(selected)}
					</Text>
				</Animated.View>
			</LayoutAnimationConfig>
		</View>
	);
};

export default DisplayDate;

const styles = StyleSheet.create({});
