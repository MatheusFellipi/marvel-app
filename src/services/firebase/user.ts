import { db } from "@/shared/config/firebase";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
} from "@firebase/firestore";
import { updateDoc } from "firebase/firestore";

type UserDTO = {
  id?: string;
  fullName: string;
  username: string;
  password: string;
};

class FireStore {
  __db_ref: any;

  constructor() {
    this.__db_ref = collection(db, "users");
  }

  async AddUser(user: UserDTO) {
    try {
      await addDoc(this.__db_ref, user);
    } catch (e) {
      Promise.reject(e);
    }
  }

  async UpdateUserPassword(newPassword: string, userId: string) {
    const userDocRef = doc(this.__db_ref, userId);
    try {
      await updateDoc(userDocRef, {
        password: newPassword,
      });
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async GetUser(username: string) {
    const q = query(this.__db_ref, where("username", "==", username));
    const user = await getDocs(q);
    let data: UserDTO;
    if (user.size === 0) return null;
    user.forEach((item) => {
      if (item.exists()) {
        data = {
          ...(item.data() as Record<string, any> as UserDTO),
          id: item.id,
        };
      }
    });
    return data;
  }
}

export type TypeFireStore = FireStore;
export const fireStore = new FireStore();
