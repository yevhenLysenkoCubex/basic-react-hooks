import { useLocalStorage } from "./hooks/use-local-storage.hook";

function App() {
  const [theme, setTheme] = useLocalStorage<string>("theme", "dark", "dark");

  return (
    <div>
      <p>{theme}</p>
      <button
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      >
        Toggle theme
      </button>
    </div>
  );
}

export default App;
