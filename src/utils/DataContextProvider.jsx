import { createContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "Cursos"), orderBy("title"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cursosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCursos(cursosData);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <DataContext.Provider value={{ cursos }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;