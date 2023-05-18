import { IFoods } from "@/interfaces/food/food";
import { useCollectionData as UseCollectionData } from "react-firebase-hooks/firestore";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
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
    if(data === undefined) return;
    const q = query(
      collection(db, nameCollecion),
      where(parameter, operacion, data)
    );
    const [result] = UseCollectionData(q);
    return result;
  };

  const getCurrentUserUid =  (): string | undefined => {
    const auth = getAuth();
    const user = auth.currentUser;
    return user ? user.uid : undefined;
  };

  const getDoc = async (
    nameCollection: string,
    parameter: string,
    operacion: WhereFilterOp,
    data: any
  ) => {
    const creationQuery = query(
      collection(db, nameCollection),
      where(parameter, operacion, data)
    );
    return await getDocs(creationQuery);
  };

  const update = async (nameCollecion: string, idDoc: string, data: any) => {
    const docRef = doc(db, nameCollecion, idDoc);
    return await setDoc(docRef, data, { merge: true });
  };

  return {
    create,
    getAll,
    getById,
    getCurrentUserUid,
    getDoc,
    update
  };
};
