import { useRef } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as LibraryLink } from "./component-library";
import { Link } from "./Link";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const asChildLinkRef = useRef<HTMLAnchorElement>(null);
  const projectLinkRef = useRef<HTMLAnchorElement>(null);

  const alertRef = (ref: typeof linkRef) =>
    alert(`Ref content: ${ref.current?.textContent}`);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => alertRef(linkRef)}>Test Ref Forwarding</button>
        <button onClick={() => alertRef(asChildLinkRef)}>
          Test Ref Forwarding (asChild)
        </button>
        <button onClick={() => alertRef(projectLinkRef)}>
          Test Ref Forwarding (project Link component)
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        {/* Using Link from component library as-is */}
        <LibraryLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Standard Link
        </LibraryLink>

        {/* Using Link from component library as-is with a ref set */}
        <LibraryLink
          ref={linkRef}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link with forwarded ref
        </LibraryLink>

        {/* Using Link from component library with asChild prop set */}
        <LibraryLink
          asChild
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a>asChild with {"<a>"}</a>
        </LibraryLink>

        {/* Using Link from component library with asChild prop & ref set (notice
        the ref is forwarded correctly to the <a> element) */}
        <LibraryLink
          asChild
          ref={asChildLinkRef}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a>asChild with {"<a>"} & forwarded ref</a>
        </LibraryLink>

        {/* Using Link from component library with asChild prop to render as a React
        Router Link */}
        <LibraryLink
          className="App-link"
          // NOTE: href gets spread to <Link> even though it's an invalid prop
          href="https://reactjs.org"
          asChild
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactRouterLink to="https://reactjs.org">
            asChild with React Router (basic inline usage)
          </ReactRouterLink>
        </LibraryLink>

        {/* Using a project-level component to encapsulate site-specific styles
        (.App-link class not manually set like above examples) as well as
        rendering as a React Router Link */}
        <Link
          ref={projectLinkRef}
          className="salmon"
          to="https://reactjs.org"
          replace // to demonstrate React Router link props are passed through
        >
          Abstracted project Link component (asChild with React Router &
          overridden className)
        </Link>
      </header>
    </div>
  );
}

export default App;
