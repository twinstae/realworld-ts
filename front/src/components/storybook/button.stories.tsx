import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "./button";

const meta = {
	title: "Design System/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { onClick: fn() },
	argTypes: {
		variant: {
			control: "select",
			options: [
				"primary",
				"secondary",
				"tertiary",
				"link-gray",
				"link-color",
				"danger",
				"secondary-danger",
				"tertiary-danger",
				"link-danger",
			],
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg", "xl"],
		},
		disabled: {
			control: "boolean",
		},
		isLoading: {
			control: "boolean",
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary variants
export const Primary: Story = {
	args: {
		variant: "primary",
		children: "Primary Button",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "Secondary Button",
	},
};

export const Tertiary: Story = {
	args: {
		variant: "tertiary",
		children: "Tertiary Button",
	},
};

// Link variants
export const LinkGray: Story = {
	args: {
		variant: "link-gray",
		children: "Link Button",
	},
};

export const LinkColor: Story = {
	args: {
		variant: "link-color",
		children: "Link Button",
	},
};

// Destructive variants
export const Danger: Story = {
	args: {
		variant: "danger",
		children: "Delete Account",
	},
};

export const SecondaryDanger: Story = {
	args: {
		variant: "secondary-danger",
		children: "Delete Account",
	},
};

export const TertiaryDanger: Story = {
	args: {
		variant: "tertiary-danger",
		children: "Delete Account",
	},
};

export const LinkDanger: Story = {
	args: {
		variant: "link-danger",
		children: "Delete Account",
	},
};

// Sizes
export const Small: Story = {
	args: {
		size: "sm",
		children: "Small Button",
	},
};

export const Medium: Story = {
	args: {
		size: "md",
		children: "Medium Button",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		children: "Large Button",
	},
};

export const ExtraLarge: Story = {
	args: {
		size: "xl",
		children: "Extra Large Button",
	},
};

// States
export const Disabled: Story = {
	args: {
		variant: "primary",
		children: "Disabled Button",
		disabled: true,
	},
};

export const Loading: Story = {
	args: {
		variant: "primary",
		children: "Loading Button",
		isLoading: true,
	},
};

export const LoadingWithText: Story = {
	args: {
		variant: "primary",
		children: "Loading...",
		isLoading: true,
		showTextWhileLoading: true,
	},
};

// With icons (examples using simple SVG icons)
export const WithLeadingIcon: Story = {
	args: {
		variant: "primary",
		children: "Button with Icon",
		iconLeading: (props: { className?: string }) => (
			<svg
				className={props.className}
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 4v16m8-8H4"
				/>
			</svg>
		),
	},
};

export const WithTrailingIcon: Story = {
	args: {
		variant: "primary",
		children: "Button with Icon",
		iconTrailing: (props: { className?: string }) => (
			<svg
				className={props.className}
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9 5l7 7-7 7"
				/>
			</svg>
		),
	},
};

export const IconOnly: Story = {
	args: {
		variant: "primary",
		iconLeading: (props: { className?: string }) => (
			<svg
				className={props.className}
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 4v16m8-8H4"
				/>
			</svg>
		),
	},
};

// As link
export const AsLink: Story = {
	args: {
		variant: "primary",
		children: "Link Button",
		href: "https://example.com",
	},
};
