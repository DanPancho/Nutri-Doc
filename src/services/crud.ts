import { IFoods } from "@/interfaces/food/food";
import { useCollectionData as UseCollectionData } from "react-firebase-hooks/firestore";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  WhereFilterOp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { getAuth } from "firebase/auth";

export const CrudService = () => {
  const create = async (data: any, collectionName: string) => {
    return await addDoc(collection(db, collectionName), data);
  };

  const getAll = async (collectionName: string): Promise<IFoods[]> => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = querySnapshot.docs.map(
      (doc) =>
        ({
          ...doc.data(),
        } as IFoods)
    );
    return data;
  };

  const getById = (
    nameCollecion: string,
    parameter: string,
    operacion: WhereFilterOp,
    data: any
  ) => {
    const q = query(
      collection(db, nameCollecion),
      where(parameter, operacion, data)
    );
    const [result] = UseCollectionData(q);
    return result;
  };

  const getCurrentUserUid = async (): Promise<string | undefined> => {
    const auth = getAuth();
    const user = auth.currentUser;
    return user ? user.uid : undefined;
  };

  return {
    create,
    getAll,
    getById,
    getCurrentUserUid,
  };
};
