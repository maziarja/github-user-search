import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchQuery from "./components/SearchQuery";
import UserCard from "./components/UserCard";
import type { User } from "./lib/types";
import HeaderSkeleton from "./components/HeaderSkeleton";
import SearchQuerySkeleton from "./components/SearchQuerySkeleton";
import UserCardSkeleton from "./components/UserCardSkeleton";
import ErrorState from "./components/Error";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  const [githubUser, setGithubUser] = useState<null | User>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [baseColor, setBaseColor] = useState("#ebebeb");
  const [highlighColor, setHighlightColor] = useState("#f5f5f5");

  useEffect(() => {
    async function getInitialUser() {
      try {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/octocat`);
        const data = await res.json();
        if (!res.ok) {
          setLoading(false);
          console.error(res);
          setError(data.message);
        }
        setGithubUser(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    getInitialUser();
  }, [setGithubUser]);

  // Dark mode
  useEffect(() => {
    const localStorageValue = window.localStorage.getItem("theme");
    const root = document.getElementsByTagName("html")[0];

    const isSystemDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (isSystemDarkMode && !localStorageValue) {
      root.classList.add("dark");
      setDarkMode(true);
      setBaseColor("#202020");
      setHighlightColor("#444");
    }

    if (localStorageValue && localStorageValue === "dark") {
      root.classList.add("dark");
      setDarkMode(true);
      setBaseColor("#202020");
      setHighlightColor("#444");
    }
    if (localStorageValue && localStorageValue === "light") {
      root.classList.remove("dark");
      setDarkMode(false);
      setBaseColor("#ebebeb");
      setHighlightColor("#f5f5f5");
    }
  }, []);

  if (loading)
    return (
      <div className="mx-auto space-y-8 px-4 py-8 md:space-y-10 md:px-8 md:py-10 lg:max-w-182.5 lg:px-0 lg:py-32.5">
        <SkeletonTheme baseColor={baseColor} highlightColor={highlighColor}>
          <HeaderSkeleton />
          <SearchQuerySkeleton />
          <UserCardSkeleton />
        </SkeletonTheme>
      </div>
    );

  if (error) {
    return <ErrorState message={error} />;
  }

  return (
    <div className="mx-auto space-y-8 px-4 py-8 md:space-y-10 md:px-8 md:py-10 lg:max-w-182.5 lg:px-0 lg:py-32.5">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <SearchQuery setGithubUser={setGithubUser} />
      <UserCard githubUser={githubUser} />
    </div>
  );
}

export default App;
