import Navigation from "./Navigation";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-8">{children}</main>
    </div>
  );
}

export default Layout;
