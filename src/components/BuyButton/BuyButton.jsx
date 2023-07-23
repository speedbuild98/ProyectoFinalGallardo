import { useCart } from "../CartProvider/CartProvider";

const BuyButton = ({ product }) => {
  const { cart, setCart } = useCart();

  const handleAddToCart = () => {
    const existingCartItem = cart.find((item) => item.id === product.id);

    if (existingCartItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1, plan: "Standard" }]);
    }
  };

  return (
    <button className="btn btn-primary w-fit" onClick={handleAddToCart}>
      Comprar
    </button>
  );
};

export default BuyButton;
