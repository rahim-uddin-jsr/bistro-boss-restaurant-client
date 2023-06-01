import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../../hooks/UseMenu/useCart";
const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((acc, val) => acc + val.price, 0);
  console.log(cart);
  const handleDeleteFromCart = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-full">
      <div className="flex justify-evenly">
        <h2 className="text-3xl">Total Item: {cart?.length}</h2>
        <h2 className="text-3xl">Total Price: {totalPrice}</h2>
        <button className="btn btn-warning btn-sm">pay</button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <td>
                <label># </label>
              </td>
              <td>Food</td>
              <td>Item Name</td>
              <td>Price</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, idx) => (
              <tr key={item._id}>
                <th>
                  <label>{idx + 1}</label>
                </th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <th>
                  <button
                    onClick={() => handleDeleteFromCart(item._id)}
                    className="btn hover:bg-white hover:text-red-400 border-0 text-2xl bg-red-400 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
