import { Link, Outlet } from "@remix-run/react";

export default function () {
  return (
    <>
      <section>
        <h1>Syntax Podcast</h1>
      </section>
      <aside>
        <nav>
          <ul>
            <li>
              <Link to="/syntax/episode-1">Episode 1</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <Outlet />
    </>
  );
}
