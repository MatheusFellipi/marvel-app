import { db } from "@/shared/config/firebase";
import { collection, addDoc, query, where, getDocs } from "@firebase/firestore";

type UserDTO = {
  user_id?: string;
  code: string;
  date: Date;
};

class FireStoreForgot {
  __db_ref: any;

  constructor() {
    this.__db_ref = collection(db, "forgotPassword");
  }

  async AddForgot(user: UserDTO) {
    try {
      await addDoc(this.__db_ref, user);
    } catch (e) {
      Promise.reject(e);
    }
  }

  async GetForgot(user_id: string) {
    const q = query(this.__db_ref, where("user_id", "==", user_id));
    const user = await getDocs(q);
    let data: UserDTO | null = null;
    if (user.size === 0) return null;
    user.forEach((item) => {
      if (item.exists()) data = item.data() as UserDTO;
    });
    return data;
  }
}

export type TypeFireStoreForgot = FireStoreForgot;
export const fireStoreForgot = new FireStoreForgot();
