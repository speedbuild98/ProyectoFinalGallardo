import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useCart } from "../../components/CartProvider/CartProvider";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, setCart } = useCart();

  const [cupon, setCupon] = useState("");
  const [cuponApplied, setCuponApplied] = useState(false);

  const calculateCoderBeca = () => {
    let coderBeca = 0;
    cart.forEach((item) => {
      coderBeca += item.quantity * item.coderBeca;
    });
    if (cuponApplied === true && cupon === "GALLARDODEV") {
      coderBeca = coderBeca / 2;
    }
    return coderBeca;
  };

  const calculateStandardPlan = () => {
    let standardPlan = 0;
    cart.forEach((item) => {
      standardPlan += item.quantity * item.standardPlan;
    });
    return standardPlan;
  };

  const coderBeca = calculateCoderBeca();
  const standardPlan = calculateStandardPlan();

  const handleChangeCupon = (event) => {
    const couponValue = event.target.value.toUpperCase();
    setCupon(couponValue);
  };

  const handleApplyCoupon = () => {
    setCuponApplied(!cuponApplied);
  };

  if (cart?.length === 0) {
    return (
      <Layout>
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-3xl font-bold uppercase text-center">
            ¡Aún no agregaste items al carrito!
          </h1>
          <button>
            <Link to="/products" className="btn btn-primary">
              Ver cursos
            </Link>
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col gap-5 w-full">
        <h1 className="text-3xl font-semibold">Resumen de compra</h1>

        {cart.map((item) => (
          <span
            key={item.id}
            className="font-semibold flex flex-row justify-between items-center w-full"
          >
            <p className="text-primary">{item.title}</p>
            <p>${item.standardPlan}</p>
          </span>
        ))}

        <span className="flex font-semibold w-full justify-between">
          <p className="text-sm">Carrera (CoderBeca)</p>
          <span className="flex flex-row justify-end gap-2 text-sm">
            <p className="font-light line-through">${standardPlan}</p>
            <p>${coderBeca}</p>
          </span>
        </span>
        {cuponApplied === true && cupon === "GALLARDODEV" && (
          <span className="flex font-semibold w-full justify-between text-sm">
            <p>Cupón GALLARDODEV</p>
            <p className="text-primary">-$ {coderBeca / 2}</p>
          </span>
        )}
        <span className="flex font-semibold w-full justify-between">
          <p className="font-semibold uppercase text-2xl">Total</p>
          <span className="flex flex-row justify-end gap-2">
            <p className=""> {cuponApplied === true && cupon === "GALLARDODEV" ? (`$ ${coderBeca/2} ARS`) : (`$ ${coderBeca} ARS`) }</p>
          </span>
        </span>

        <div className="flex flex-col mt-5">
          {cupon !== "GALLARDODEV" || cuponApplied === false ? (
            <p>Agregar cupón de descuento</p>
          ) : (
            <p className="text-success">¡Cupón agregado con éxito!</p>
          )}
          <span className="flex flex-row  w-full max-w-xs gap-3">
            {cupon !== "GALLARDODEV" || cuponApplied === false ? (
              <>
                <input
                  onChange={handleChangeCupon}
                  value={cupon}
                  type="text"
                  placeholder="GALLARDODEV"
                  maxLength={11}
                  className="input input-bordered mt-3 w-full max-w-xs uppercase"
                />
                <button
                  onClick={handleApplyCoupon}
                  className="btn btn-primary mt-3"
                  disabled={cupon !== "GALLARDODEV"}
                >
                  Aplicar
                </button>
              </>
            ) : null}
          </span>
        </div>
        <button>
        <Link to="/products" className="btn btn-primary btn-outline btn-sm mt-20">
          Ver más cursos
        </Link>
      </button>
      </div>
    </Layout>
  );
};

export default Checkout;
