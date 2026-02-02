import IconMoon from "./icons/icon-moon";
import IconSun from "./icons/icon-sun";

type Props = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ darkMode, setDarkMode }: Props) {
  function toggleDarkMode() {
    const root = document.getElementsByTagName("html")[0];

    if (root.classList.contains("dark")) {
      window.localStorage.setItem("theme", "light");
      root.classList.remove("dark");
      setDarkMode(false);
    } else {
      window.localStorage.setItem("theme", "dark");
      root.classList.add("dark");
      setDarkMode(true);
    }
  }

  return (
    <header className="flex items-center justify-between">
      <h1 className="text-foreground text-[26px] leading-[100%] font-bold tracking-[0px]">
        dev<span className="tracking-[-4.5px]">f</span>
        <span>i</span>nder
      </h1>
      <button
        onClick={toggleDarkMode}
        className="text-preset-8 group text-secondary-foreground hover:text-secondary-foreground-hover flex items-center gap-3 outline-offset-4"
      >
        {darkMode ? "LIGHT" : "DARK"}
        {darkMode ? <IconSun /> : <IconMoon />}
      </button>
    </header>
  );
}

export default Header;
