import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const PopUp = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className='z-50 fixed w-screen top-0 bg-secondary text-black px-6 py-10 text-center md:py-6'>
            <p>
              Accedé a la <strong>CoderBeca del 70%</strong> + 6 cuotas sin interés en Cursos y Carreras ⌛{' '}
              <strong>15% OFF adicional en carreras por Tiempo Limitado</strong>
            </p>
            <button onClick={handleClose} className='btn btn-ghost btn-sm btn-circle absolute top-2 right-4'>
              <AiOutlineClose />
            </button>
        </div>
      )}
    </>
  );
};

export default PopUp;
