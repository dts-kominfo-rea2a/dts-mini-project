import Popular from "./Popular";
import Series from "./Series";
import MyList from "./MyList";

function Home() {
  return (
    <div className="flex flex-col">
      <h1>3 Big Image</h1>
      <span>Popular</span>
      <span>Series</span>
      <span>Continue Watch</span>
      <span>Your List</span>
      <Popular/>
      <Series/>
      <MyList/>
    </div>
  );
}

export default Home;
