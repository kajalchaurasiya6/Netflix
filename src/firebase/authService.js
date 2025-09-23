import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
export const signUp = async (name, email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    return user;
  } catch (error) {
    throw new Error(error?.message || 'Something went wrong');
  }
};

export const login = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new Error('Invalid email or password');
  }
};

export const logout =async (navigate) => {
  try {
    await signOut(auth);
    navigate('/login')
  } catch (error) {
    throw new Error('Something went wrong during sign out');
  }
}