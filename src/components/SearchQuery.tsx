import { SearchIcon } from "lucide-react";
import type { User } from "../lib/types";
import { useState } from "react";

function SearchQuery({
  setGithubUser,
}: {
  setGithubUser: React.Dispatch<React.SetStateAction<null | User>>;
}) {
  const [error, setError] = useState(false);
  async function search(formData: FormData) {
    const username = formData.get("username");
    if (username?.toString().trim() === "") return;

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);

      if (!res.ok) {
        setGithubUser(null);
        setError(true);
      } else {
        const data = await res.json();
        setGithubUser(data);
        setError(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      action={search}
      className="bg-card flex items-center rounded-2xl px-3 py-2 shadow-[0_16px_30px_-10px_#4660BB33] focus-within:ring-2 focus-within:ring-blue-500 sm:gap-6 md:pr-3 md:pl-6 dark:shadow-none"
    >
      <div className="flex h-full w-full items-center gap-2 md:gap-5">
        <SearchIcon className="text-accent size-5 md:size-6" />
        <input
          name="username"
          type="text"
          placeholder="Search GitHub username&hellip;"
          className="text-preset-3-mobile text-muted-foreground md:text-preset-3 h-12 w-full outline-none"
        />
        {error && (
          <p className="text-preset-5 text-destructive-foreground hidden w-34 sm:block">
            No results
          </p>
        )}
      </div>

      <button
        type="submit"
        className="text-neutral-0 text-preset-5 bg-primary ml-auto rounded-[10px] px-5 py-3 outline-offset-2 hover:bg-blue-300"
      >
        Search
      </button>
    </form>
  );
}

export default SearchQuery;
