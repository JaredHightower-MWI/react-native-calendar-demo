import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const handleFormateDate = (date: string) => {
	/* The date + "T00:00:00" ensures that the date string 
	  is treated as a local date without any timezone offset. */
	const parsedDate = new Date(`${date}T00:00:00`);

	const formattedDate = parsedDate.toLocaleDateString("en-US", {
		month: "short",
		day: "2-digit",
		year: "numeric",
	});

	return formattedDate;
};
