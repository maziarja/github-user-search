import type { User } from "../lib/types";
import CardHeader from "./CardHeader";
import EmptyState from "./EmptyState";
import IconCompany from "./icons/icon-company";
import IconLocation from "./icons/icon-location";
import IconTwitter from "./icons/icon-twitter";
import IconWebsite from "./icons/icon-website";
import UserCardStats from "./UserCardStats";

type Props = {
  githubUser: null | User;
};

function UserCard({ githubUser }: Props) {
  if (githubUser === null) return <EmptyState />;

  const {
    avatar_url: avatarUrl,
    bio,
    company,
    blog,
    created_at: createdAt,
    followers,
    following,
    location,
    login,
    name,
    public_repos: repos,
    twitter_username: xUsername,
  } = githubUser;

  return (
    <div className="bg-card flex flex-col gap-6 rounded-[15px] px-6 py-8 shadow-[0_16px_30px_-10px_#4660BB33] md:grid md:grid-cols-[117px_1fr] md:gap-8 md:px-8 md:py-12 dark:shadow-none">
      <img
        src={githubUser.avatar_url}
        alt="avatar"
        className="hidden size-29.25 rounded-full md:block"
      />
      <div className="space-y-6">
        <CardHeader
          avatarUrl={avatarUrl}
          name={name}
          login={login}
          createdAt={createdAt}
        />
        {bio ? (
          <p className="text-preset-6 text-muted-foreground">{bio}</p>
        ) : (
          <p className="text-preset-6 text-muted-foreground opacity-70">
            This profile has no bio
          </p>
        )}

        <UserCardStats
          repos={repos}
          followers={followers}
          following={following}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-4">
            <IconLocation />
            {location ? (
              <p className="text-preset-6 text-muted-foreground">{location}</p>
            ) : (
              <span className="text-muted-foreground opacity-70">
                Not Available
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <IconTwitter />
            {xUsername ? (
              <a
                href={`https://x.com/${xUsername}`}
                className="text-preset-6 text-muted-foreground hover:underline"
              >
                {xUsername}
              </a>
            ) : (
              <p className="text-preset-6 text-muted-foreground opacity-70">
                Not Available
              </p>
            )}
          </div>
          <div className="flex items-center gap-4">
            <IconWebsite />

            {blog ? (
              <a
                href={blog}
                className="text-preset-6 text-muted-foreground hover:underline"
              >
                {blog}
              </a>
            ) : (
              <p className="text-preset-6 text-muted-foreground opacity-70">
                Not Available
              </p>
            )}
          </div>
          <div className="flex items-center gap-4">
            <IconCompany />
            {company ? (
              <a
                href={`https://github.com/${company.slice(1)}`}
                className="text-preset-6 text-muted-foreground hover:underline"
              >
                {company}
              </a>
            ) : (
              <p className="text-preset-6 text-muted-foreground opacity-70">
                Not Available
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
