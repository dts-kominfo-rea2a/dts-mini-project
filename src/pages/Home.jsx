import Popular from "./Popular";
import Series from "./Series";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth} from "../data/firebase";
import MyList from "./MyList";
import BigImage from "../components/BigImage";

function Home() {
  const [user] = useAuthState(auth);
  return (
    <div className="flex flex-col">
      <span>
        <BigImage />
      </span>
      <span>
        <Popular />
      </span>
      <span>
        <Series />
      </span>
      {user ? <MyList/> : <></>}
    </div>
  );
}

export default Home;
