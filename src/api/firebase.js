import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from "uuid";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { get, getDatabase, ref, set } from "firebase/database";
import { uploadAsset } from "./cloudinary";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getDatabase(app);

export function login() {
  return (
    signInWithPopup(auth, provider)
      // .catch((error) => console.error(error));
      .catch(console.error)
  );
}

export function logout() {
  return signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
  // checkIsAdmin이 비동기함수이므로
  onAuthStateChanged(auth, async (user) => {
    // 1. 로그인한 경우
    const updatedUser = user ? await checkIsAdmin(user) : null;
    callback(updatedUser);
  });
}

export async function addItem(item, image) {
  const productId = uuidv4();
  set(ref(db, `products/${productId}`), {
    ...item,
    productId,
    price: parseInt(product.price),
    image,
    options: item.options.split(","),
  }).then(() => {
    // uploadAsset(productId, item.image.value);
  });
}

// 네트워크 통신을 필요로 하니까 async
async function checkIsAdmin(user) {
  // 2. 어드민 권한여부 체크
  // 3. {...user, isAdmin: true/false}

  return get(ref(db, "admins")).then((snapshot) => {
    if (snapshot.exists()) {
      const admins = snapshot.val();
      const isAdmin = admins.includes(user.uid);
      return { ...user, isAdmin };
    }
    return user;
  });
}
