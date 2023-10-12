import { ElementRef, forwardRef } from "react";
import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
} from "react-router-dom";
import { Link as LibraryLink } from "./component-library";

/**
 * Represents a <Link> component implemented at the project level that would
 * likely live within the project's /components directory
 * Wrapper components for primitives like this would mostly not be needed in
 * consuming projects, with the exception of situations like this where all
 * links in a project need to use a component specific to the framework used in
 * the project
 */
export const Link = forwardRef<
  ElementRef<typeof ReactRouterLink>,
  ReactRouterLinkProps
>(({ className: classNameProp, ...props }, ref) => {
  const className = `App-link ${classNameProp ?? ""}`;

  return (
    <LibraryLink asChild ref={ref} className={className}>
      <ReactRouterLink {...props} />
    </LibraryLink>
  );
});
