import Home from "./pages/home";
import UpcomingShow from './components/upcomingShow/upcomingShow';
import UserReview from "./components/reviews/userReview";

function App() {
  return (
    <div className="App">
      <Home/>
      <UpcomingShow/>
      <UserReview/>
    </div>
  );
}

export default App;
