import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useCart from "../../../hooks/UseMenu/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const handleAddToCart = (item) => {
    const cartItem = {
      name,
      image,
      price,
      recipe,
      menuItemId: _id,
      email: user?.email,
    };
    console.log(item);
    if (!user) {
      Swal.fire({
        title: "Please Login first!",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
    fetch("http://localhost:5000/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          refetch();
        }
      });
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute top-5 right-5 px-4 py-1 rounded-md font-medium bg-slate-900 text-2xl text-white bg-opacity-60 ">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-ghost bg-slate-200 border-0 border-b-4 border-black"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
