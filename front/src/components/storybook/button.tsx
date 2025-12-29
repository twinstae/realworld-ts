import React, { type FC, isValidElement, type ReactNode } from "react";
import { cx } from "../../../styled-system/css";
import { button } from "../../../styled-system/recipes";

/**
 * Common props shared between button and anchor variants
 */
interface CommonProps {
  /** The size variant of the button */
  size?: "sm" | "md" | "lg" | "xl";
  /** The color variant of the button */
  variant?:
  | "primary"
  | "secondary"
  | "tertiary"
  | "link-gray"
  | "link-color"
  | "danger"
  | "secondary-danger"
  | "tertiary-danger"
  | "link-danger";
  /** Disables the button and shows a disabled state */
  disabled?: boolean;
  /** Shows a loading spinner and disables the button */
  isLoading?: boolean;
  /** Icon component or element to show before the text */
  iconLeading?: FC<{ className?: string }> | ReactNode;
  /** Icon component or element to show after the text */
  iconTrailing?: FC<{ className?: string }> | ReactNode;
  /** When true, keeps the text visible during loading state */
  showTextWhileLoading?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Button content */
  children?: ReactNode;
}

/**
 * Props for the button variant (non-link)
 */
export interface ButtonProps
  extends CommonProps,
  Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "disabled" | "className"
  > {
  /** When provided, renders as a link */
  href?: never;
}

/**
 * Props for the link variant (anchor tag)
 */
export interface LinkProps
  extends CommonProps,
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> {
  /** The URL to link to */
  href: string;
}

export type Props = ButtonProps | LinkProps;

const isReactComponent = (
  component: unknown,
): component is FC<{ className?: string }> => {
  return typeof component === "function";
};

export const Button = ({
  size = "sm",
  variant = "primary",
  children,
  className,
  iconLeading: IconLeading,
  iconTrailing: IconTrailing,
  disabled,
  isLoading: loading,
  showTextWhileLoading,
  ...otherProps
}: Props) => {
  const href = "href" in otherProps ? otherProps.href : undefined;

  const isIconOnly = (IconLeading || IconTrailing) && !children;
  const isLinkType = variant?.startsWith("link-");

  const commonProps = {
    className: cx(button({ variant, size }), className),
    "data-loading": loading ? true : undefined,
    "data-icon-only": isIconOnly ? true : undefined,
    "data-size": size,
    "data-show-text-while-loading": loading && showTextWhileLoading ? true : undefined,
  };

  const iconClassName = "pointer-events-none size-5 shrink-0 transition-all";

  const content = (
    <>
      {/* Leading icon */}
      {isValidElement(IconLeading) && IconLeading}
      {isReactComponent(IconLeading) && (
        <IconLeading data-icon="leading" className={iconClassName} />
      )}

      {/* Loading spinner */}
      {loading && (
        <svg
          fill="none"
          data-icon="loading"
          viewBox="0 0 20 20"
          className={cx(
            iconClassName,
            !showTextWhileLoading &&
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          )}
        >
          {/* Background circle */}
          <circle
            className="stroke-current opacity-30"
            cx="10"
            cy="10"
            r="8"
            fill="none"
            strokeWidth="2"
          />
          {/* Spinning circle */}
          <circle
            className="origin-center animate-spin stroke-current"
            cx="10"
            cy="10"
            r="8"
            fill="none"
            strokeWidth="2"
            strokeDasharray="12.5 50"
            strokeLinecap="round"
          />
        </svg>
      )}

      {/* Text content */}
      {children && (
        <span
          data-text
          className={cx("transition-all", !isLinkType && "px-0.5")}
        >
          {children}
        </span>
      )}

      {/* Trailing icon */}
      {isValidElement(IconTrailing) && IconTrailing}
      {isReactComponent(IconTrailing) && (
        <IconTrailing data-icon="trailing" className={iconClassName} />
      )}
    </>
  );

  if (href) {
    return (
      <a
        {...(otherProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        href={disabled ? undefined : href}
        {...commonProps}
      >
        {content}
      </a>
    );
  }

  const buttonProps =
    otherProps as React.ButtonHTMLAttributes<HTMLButtonElement>;
  const buttonType = buttonProps.type || "button";

  return (
    <button
      {...buttonProps}
      type={buttonType}
      disabled={disabled || loading}
      {...commonProps}
    >
      {content}
    </button>
  );
};
