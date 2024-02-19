import { Route, Routes } from "react-router-dom";

// Vite supports importing multiple modules
// from the file system via the special import.meta.glob function
const PagePathsWithComponents = import.meta.glob("./pages/*.tsx", {
  eager: true,
}) as Record<string, Record<any, any>>;

const routes = Object.keys(PagePathsWithComponents).map((path: string) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)![1];

  return {
    name,
    path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
    component: PagePathsWithComponents[path].default,
  };
});

export default function App() {
  return (
    <Routes>
      {routes.map(({ path, component: Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      })}
    </Routes>
  );
}
