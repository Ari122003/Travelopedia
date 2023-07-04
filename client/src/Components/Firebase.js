import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyABLtu-iGpEW-SdfNhp42DUhY3TUHgDS1A",
	authDomain: "travelopedia-33817.firebaseapp.com",
	projectId: "travelopedia-33817",
	storageBucket: "travelopedia-33817.appspot.com",
	messagingSenderId: "287306715561",
	appId: "1:287306715561:web:5f56a3806d1e3c38e3f4b8",
	measurementId: "G-FNPRZ4SKNV",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth