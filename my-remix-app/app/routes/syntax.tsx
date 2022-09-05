import { Link, Outlet, useLoaderData } from "@remix-run/react";

export let loader = () => {
  return {
    podcastName: "Syntax podcast",
    episodes: [
      {
        title: "Episode 1",
        link: "episode-1",
      },
      {
        title: "Episode 2",
        link: "episode-2",
      },
      {
        title: "Episode 3",
        link: "episode-3",
      },
    ],
  };
};

export default function () {
  let { podcastName, episodes } = useLoaderData();

  return (
    <>
      <section>
        <h1>{podcastName}</h1>
      </section>
      <aside>
        <nav>
          <ul>
            {episodes.map((episode: any) => (
              <li key={episode.link}>
                <Link to={`/syntax/${episode.link}`}>{episode.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <Outlet />
    </>
  );
}
