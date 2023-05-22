import { IFoods } from "@/interfaces/food/food";
import { useCollectionData as UseCollectionData } from "react-firebase-hooks/firestore";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  QuerySnapshot,
  setDoc,
  where,
  WhereFilterOp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { getAuth } from "firebase/auth";
import { IRetos } from "@/interfaces/retos/retos";

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

  const getAllRetos = async (collectionName: string): Promise<IRetos[]> => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = querySnapshot.docs.map(
      (doc) =>
        ({
          ...doc.data(),
        } as IRetos)
    );
    return data;
  };

  const getById = (
    nameCollecion: string,
    parameter: string,
    operacion: WhereFilterOp,
    data: any
  ) => {
    if (data === undefined) return;
    const q = query(
      collection(db, nameCollecion),
      where(parameter, operacion, data)
    );
    const [result] = UseCollectionData(q);
    return result;
  };

  const getByIdNoHook = async (
    collectionName: string,
    parameter: string,
    operation: WhereFilterOp,
    data: any
  ): Promise<any> => {
    if (data === undefined) return;

    const querySnapshot: QuerySnapshot = await getDocs(
      query(collection(db, collectionName), where(parameter, operation, data))
    );
    const result: any[] = querySnapshot.docs.map((doc) => doc.data());

    return result[0];
  };

  const getCurrentUserUid = (): string | undefined => {
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
    update,
    getAllRetos,
    getByIdNoHook
  };
};
