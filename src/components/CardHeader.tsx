import type { User } from "../lib/types";

type Props = {
  avatarUrl: User["avatar_url"];
  name: User["name"];
  login: User["login"];
  createdAt: User["created_at"];
};

function CardHeader({ avatarUrl, name, login, createdAt }: Props) {
  return (
    <div className="flex items-center gap-5">
      <img
        src={avatarUrl}
        alt="avatar"
        className="size-17.5 rounded-full md:hidden"
      />

      <div className="flex w-full flex-col space-y-1 md:flex-row md:justify-between">
        <div>
          <p className="text-preset-1 text-card-foreground">{name || login}</p>
          <p className="text-preset-4 text-accent">@{login}</p>
        </div>
        <p className="text-preset-6 text-muted-foreground">
          Joined{" "}
          {new Date(createdAt).toLocaleString("en-uk", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}

export default CardHeader;
