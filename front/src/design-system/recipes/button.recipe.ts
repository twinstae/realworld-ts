import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
	className: "button",
	description: "Button component styles",
	base: {
		position: "relative",
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		whiteSpace: "nowrap",
		fontWeight: "semibold",
		cursor: "pointer",
		outline: "none",
		transition: "all",
		transitionDuration: "100ms",
		_focus: {
			outline: "2px solid",
			outlineOffset: "2px",
		},
		_disabled: {
			opacity: "0.5",
			cursor: "not-allowed",
		},
		_loading: {
			pointerEvents: "none",
			// Hide all children except loading icon when not showing text
			"&:not([data-show-text-while-loading]) > *:not([data-icon=loading])": {
				visibility: "hidden",
			},
			// Hide non-text children when showing text while loading
			"&[data-show-text-while-loading] > *:not([data-icon=loading]):not([data-text])": {
				display: "none",
			},
		},
		// Icon-only padding styles
		"[data-icon-only]": {
			"&[data-size=sm]": {
				p: "2",
			},
			"&[data-size=md]": {
				p: "2.5",
			},
			"&[data-size=lg]": {
				p: "3",
			},
			"&[data-size=xl]": {
				p: "3.5",
			},
		},
	},
	variants: {
		variant: {
			primary: {
				bg: "blue.600",
				color: "white",
				shadow: "xs",
				border: "1px solid",
				borderColor: "transparent",
				_hover: {
					bg: "blue.700",
				},
				_focus: {
					outlineColor: "blue.500",
				},
				_disabled: {
					bg: "gray.300",
					color: "gray.500",
				},
			},
			secondary: {
				bg: "red.200",
				color: "gray.700",
				shadow: "xs",
				border: "1px solid",
				borderColor: "gray.300",
				_hover: {
					bg: "gray.50",
					color: "gray.800",
				},
				_focus: {
					outlineColor: "gray.500",
				},
				_dark: {
					bg: "gray.800",
					color: "gray.100",
					borderColor: "gray.700",
					_hover: {
						bg: "gray.700",
					},
				},
			},
			tertiary: {
				bg: "transparent",
				color: "gray.700",
				_hover: {
					bg: "gray.50",
					color: "gray.800",
				},
				_focus: {
					outlineColor: "gray.500",
				},
			},
			"link-gray": {
				bg: "transparent",
				color: "gray.700",
				p: "0",
				textDecoration: "underline",
				textDecorationColor: "transparent",
				textUnderlineOffset: "2px",
				_hover: {
					color: "gray.900",
					textDecorationColor: "currentColor",
				},
			},
			"link-color": {
				bg: "transparent",
				color: "blue.600",
				p: "0",
				textDecoration: "underline",
				textDecorationColor: "transparent",
				textUnderlineOffset: "2px",
				_hover: {
					color: "blue.700",
					textDecorationColor: "currentColor",
				},
				_focus: {
					outlineColor: "blue.500",
				},
			},
			danger: {
				bg: "red.600",
				color: "white",
				shadow: "xs",
				border: "1px solid",
				borderColor: "transparent",
				_hover: {
					bg: "red.700",
				},
				_focus: {
					outlineColor: "red.500",
				},
				_disabled: {
					bg: "gray.300",
					color: "gray.500",
				},
			},
			"secondary-danger": {
				bg: "white",
				color: "red.600",
				shadow: "xs",
				border: "1px solid",
				borderColor: "red.300",
				_hover: {
					bg: "red.50",
					color: "red.700",
				},
				_focus: {
					outlineColor: "red.500",
				},
			},
			"tertiary-danger": {
				bg: "transparent",
				color: "red.600",
				_hover: {
					bg: "red.50",
					color: "red.700",
				},
				_focus: {
					outlineColor: "red.500",
				},
			},
			"link-danger": {
				bg: "transparent",
				color: "red.600",
				p: "0",
				textDecoration: "underline",
				textDecorationColor: "transparent",
				textUnderlineOffset: "2px",
				_hover: {
					color: "red.700",
					textDecorationColor: "currentColor",
				},
				_focus: {
					outlineColor: "red.500",
				},
			},
		},
		size: {
			sm: {
				px: "3",
				py: "2",
				fontSize: "sm",
				borderRadius: "lg",
				gap: "1",
			},
			md: {
				px: "3.5",
				py: "2.5",
				fontSize: "sm",
				borderRadius: "lg",
				gap: "1",
			},
			lg: {
				px: "4",
				py: "2.5",
				fontSize: "md",
				borderRadius: "lg",
				gap: "1.5",
			},
			xl: {
				px: "4.5",
				py: "3",
				fontSize: "md",
				borderRadius: "lg",
				gap: "1.5",
			},
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "sm",
	},
});
