import { createFileRoute } from "@tanstack/react-router";
import {
	Route as RouteIcon,
	Server,
	Shield,
	Sparkles,
	Waves,
	Zap,
} from "lucide-react";
import { css } from "styled-system/css";

export const Route = createFileRoute("/")({ component: App });

function App() {
	const features = [
		{
			icon: (
				<Zap
					className={css({
						width: 12,
						height: 12,
						color: "cyan.400",
					})}
				/>
			),
			title: "Powerful Server Functions",
			description:
				"Write server-side code that seamlessly integrates with your client components. Type-safe, secure, and simple.",
		},
		{
			icon: (
				<Server
					className={css({
						width: 12,
						height: 12,
						color: "cyan.400",
					})}
				/>
			),
			title: "Flexible Server Side Rendering",
			description:
				"Full-document SSR, streaming, and progressive enhancement out of the box. Control exactly what renders where.",
		},
		{
			icon: (
				<RouteIcon
					className={css({
						width: 12,
						height: 12,
						color: "cyan.400",
					})}
				/>
			),
			title: "API Routes",
			description:
				"Build type-safe API endpoints alongside your application. No separate backend needed.",
		},
		{
			icon: (
				<Shield
					className={css({
						width: 12,
						height: 12,
						color: "cyan.400",
					})}
				/>
			),
			title: "Strongly Typed Everything",
			description:
				"End-to-end type safety from server to client. Catch errors before they reach production.",
		},
		{
			icon: (
				<Waves
					className={css({
						width: 12,
						height: 12,
						color: "cyan.400",
					})}
				/>
			),
			title: "Full Streaming Support",
			description:
				"Stream data from server to client progressively. Perfect for AI applications and real-time updates.",
		},
		{
			icon: (
				<Sparkles
					className={css({
						width: 12,
						height: 12,
						color: "cyan.400",
					})}
				/>
			),
			title: "Next Generation Ready",
			description:
				"Built from the ground up for modern web applications. Deploy anywhere JavaScript runs.",
		},
	];

	return (
		<div
			className={css({
				minHeight: "100vh",
				bgGradient: "to-b",
				color: "slate.900",
			})}
		>
			<section
				className={css({
					position: "relative",
					py: { base: 20 },
					px: 6,
					textAlign: "center",
					overflow: "hidden",
				})}
			>
				<div
					className={css({
						position: "absolute",
						inset: 0,
						bgGradient: "to-r",
						color: "purple.500",
					})}
				></div>
				<div
					className={css({
						position: "relative",
						maxW: "5xl",
						mx: "auto",
					})}
				>
					<div
						className={css({
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: 6,
							mb: 6,
						})}
					>
						<img
							src="/tanstack-circle-logo.png"
							alt="TanStack Logo"
							className={css({
								width: { base: "6rem", md: "8rem" },
								height: { base: "6rem", md: "8rem" },
							})}
						/>
						<h1
							className={css({
								fontSize: { base: "6xl", md: "7xl" },
								fontWeight: "black",
								color: "white",
								letterSpacing: "-0.08em",
							})}
						>
							<span className={css({ color: "gray.300" })}>TANSTACK</span>{" "}
							<span
								className={css({
									bgGradient: "to-r",
									color: "blue.400",
									bgClip: "text",
								})}
							>
								START
							</span>
						</h1>
					</div>
					<p
						className={css({
							fontSize: { base: "2xl", md: "3xl" },
							color: "gray.300",
							mb: 4,
							fontWeight: "light",
						})}
					>
						The framework for next generation AI applications
					</p>
					<p
						className={css({
							fontSize: "lg",
							color: "gray.400",
							maxW: "3xl",
							mx: "auto",
							mb: 8,
						})}
					>
						Full-stack framework powered by TanStack Router for React and Solid.
						Build modern applications with server functions, streaming, and type
						safety.
					</p>
					<div
						className={css({
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: 4,
						})}
					>
						<a
							href="https://tanstack.com/start"
							target="_blank"
							rel="noopener noreferrer"
							className={css({
								px: 8,
								py: 3,
								bg: "cyan.500",
								color: "white",
								fontWeight: "semibold",
								rounded: "lg",
								transition: "colors",
								shadow: "lg",
								shadowColor: "cyan.500",
								_hover: { bg: "cyan.600" },
							})}
						>
							Documentation
						</a>
						<p
							className={css({
								color: "gray.400",
								fontSize: "sm",
								mt: 2,
							})}
						>
							Begin your TanStack Start journey by editing{" "}
							<code
								className={css({
									px: 2,
									py: 1,
									bg: "slate.700",
									rounded: "md",
									color: "cyan.400",
								})}
							>
								/src/routes/index.tsx
							</code>
						</p>
					</div>
				</div>
			</section>

			<section
				className={css({
					py: 16,
					px: 6,
					maxW: "7xl",
					mx: "auto",
				})}
			>
				<div
					className={css({
						display: "grid",
						gridTemplateColumns: {
							base: "repeat(1, 1fr)",
							md: "repeat(2, 1fr)",
							lg: "repeat(3, 1fr)",
						},
						gap: 6,
					})}
				>
					{features.map((feature, index) => (
						<div
							key={index}
							className={css({
								bg: "slate.800",
								backdropBlur: "sm",
								border: "1px solid",
								borderColor: "slate.700",
								rounded: "xl",
								p: 6,
								transition: "all .3s",
								_hover: {
									borderColor: "cyan.500",
									boxShadow: "lg",
									shadowColor: "cyan.500",
								},
							})}
						>
							<div className={css({ mb: 4 })}>{feature.icon}</div>
							<h3
								className={css({
									fontSize: "xl",
									fontWeight: "semibold",
									color: "white",
									mb: 3,
								})}
							>
								{feature.title}
							</h3>
							<p
								className={css({
									color: "gray.400",
									lineHeight: "relaxed",
								})}
							>
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
