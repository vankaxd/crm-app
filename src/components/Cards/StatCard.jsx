import { FaUsers } from "react-icons/fa";

export default function StatCard({ title, value }) {
  return (
    <div className="min-w-[200px] h-20 bg-purple-700 rounded-xl shadow-md p-4 flex-1 flex items-center justify-between transition-all hover:scale-105 hover:shadow-xl hover:bg-purple-800">
      <FaUsers className="text-3xl text-white" />
      <div className="text-right">
        <h3 className="font-medium text-white text-sm">{title}</h3>
        <p className="text-xl font-bold text-white">{value}</p>
      </div>
    </div>
  );
}
