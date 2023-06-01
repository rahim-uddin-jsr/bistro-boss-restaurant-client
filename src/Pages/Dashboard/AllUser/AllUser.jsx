import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";

const AllUser = () => {
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    },
  });
  const handleUserRole = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };
  const handleDeleteUser = (id) => {
    console.log(id);
  };
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <td>
              <label># </label>
            </td>
            <td>Name</td>
            <td>Email</td>
            <td>Role</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user, idx) => (
            <tr key={user._id}>
              <th>
                <label>{idx + 1}</label>
              </th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user?.role === "admin" ? (
                  "admin"
                ) : (
                  <button
                    onClick={() => handleUserRole(user._id)}
                    className="btn hover:bg-white hover:text-green-600 border-0 text-2xl bg-green-600 text-white"
                  >
                    <FaUserShield />
                  </button>
                )}
              </td>
              <td>
                <button
                  onClick={() => handleDeleteUser(user._id)}
                  className="btn hover:bg-white hover:text-red-400 border-0 text-2xl bg-red-400 text-white"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
