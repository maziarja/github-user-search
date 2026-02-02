import type { User } from "../lib/types";

type Props = {
  repos: User["public_repos"];
  followers: User["followers"];
  following: User["following"];
};

function UserCardStats({ repos, followers, following }: Props) {
  return (
    <div className="bg-background flex flex-col gap-4 rounded-[10px] px-5 py-4 md:flex-row md:justify-between md:px-8">
      <div className="grow space-y-1">
        <p className="text-preset-7 text-muted-foreground">Repos</p>
        <p className="text-preset-2 text-card-foreground">
          {repos?.toLocaleString()}
        </p>
      </div>
      <div className="grow space-y-1">
        <p className="text-preset-7 text-muted-foreground">Followers</p>
        <p className="text-preset-2 text-card-foreground">
          {followers?.toLocaleString()}
        </p>
      </div>
      <div className="grow space-y-1">
        <p className="text-preset-7 text-muted-foreground">Following</p>
        <p className="text-preset-2 text-card-foreground">
          {following?.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default UserCardStats;
