import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Primitive } from "@radix-ui/react-primitive";
import { Slot } from "@radix-ui/react-slot";
import "./component-library.css";

export type LinkProps = ComponentPropsWithoutRef<typeof Primitive.a>;

/**
 * Represents a <Link> primitive exported by our component library (would come
 * from a package in the real world).
 *
 * Essentially a wrapper component around Radix's primitive <a> which adds
 * styling to match our base design system.
 *
 * Our library's component implements the same ref forwarding and `asChild`
 * polymorphism as the wrapped Radix primitive so that usage is indentical.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ asChild, className: classNameProp, ...props }, ref) => {
    const className = `Library-link ${classNameProp ?? ""}`;
    const Comp = asChild ? Slot : Primitive.a;

    return <Comp {...props} className={className} ref={ref} />;
  }
);
