import Sidebar from "./components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">Dashboard Content</main>
    </div>
  );
}
