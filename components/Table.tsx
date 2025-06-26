import { Person, Role, Attendance } from "../pages/api";

interface TableProps {
  data: Person[];
  type: "teacher" | "staff" | "student";
  roles: Role[];
  attendance: Attendance[];
}

const Table: React.FC<TableProps> = ({ data, type, roles, attendance }) => {
  return (
    <div className="mt-4">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Role</th>
            <th className="py-2 px-4 border">Attendance (2025-06-25)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            const role =
              roles.find((r) => r.id === item.id && r.type === type)?.role ||
              "N/A";
            const attendanceStatus =
              attendance.find(
                (a) =>
                  a.id === item.id && a.type === type && a.date === "2025-06-25"
              )?.status || "N/A";
            return (
              <tr key={item.id}>
                <td className="py-2 px-4 border">{item.id}</td>
                <td className="py-2 px-4 border">{item.name}</td>
                <td className="py-2 px-4 border">{role}</td>
                <td className="py-2 px-4 border">{attendanceStatus}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
