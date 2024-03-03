import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { User } from '../shared/Model/User.model';

export const useUserStore = defineStore('user', () => {

    const auth = getAuth();
    const db = getFirestore();
    const registerUser = async (email: string, password: string) => {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const userData: User = {
            email: res.user.email,
            id: res.user.uid,
            deleted: false
        }
        const r = await saveUserData(userData);
        // setPersistence(auth, browserLocalPersistence);
        return r;
    }
    const saveUserData = async (data: User) => {
        const col_ref = collection(db, 'users');
        const user_id = data.id;
        if (!user_id) return;
        const doc_ref = doc(col_ref, user_id);
        const res = await setDoc(doc_ref, data);
        return res;
    }

    const signIn = async (email: string, password: string) => {
        const res = await signInWithEmailAndPassword(auth, email, password);
        // setPersistence(auth, browserLocalPersistence);
        console.log(res.user);
        return res.user;
    }

    const getPeerId = async () : Promise<string> => {
        const doc_ref = doc(collection(db, 'users'), auth.currentUser?.uid);
        const res = await getDoc(doc_ref);
        const data = res.data();
        return data?.peerId;
    }

    const signOutUser = async () => {
        await signOut(auth);
        console.log('User logged out');
    }


    return { registerUser, signIn, getPeerId, signOutUser };

})