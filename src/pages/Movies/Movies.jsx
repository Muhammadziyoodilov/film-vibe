import React, { useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../firebase";
import { loginUser, logoutUser } from "../../features/auth/authSlice";
const Movies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(
          loginUser({
            email: currentUser.email,
            uid: currentUser.uid,
          })
        );
      } else {
        dispatch(logoutUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);
  return (
    <>
      <Slider
        title={"Popular Top 10 In Genres"}
        info={""}
        margin={25}
        id={0}
        url={"movie/popular"}
        init={Math.floor(Math.random() * 6)}
        loop={true}
      />
      <Slider
        title={"Trending Now"}
        info={""}
        margin={25}
        id={1}
        url={"trending/movie/week"}
        init={Math.floor(Math.random() * 6)}
        loop={true}
      />
      <Slider
        title={"New Releases"}
        info={""}
        margin={25}
        id={2}
        url={"movie/upcoming"}
        init={Math.floor(Math.random() * 6)}
        loop={true}
      />
      <Slider
        title={"Must - Watch Movies"}
        info={""}
        margin={25}
        id={3}
        url={"movie/top_rated"}
        init={Math.floor(Math.random() * 6)}
        loop={true}
      />
    </>
  );
};

export default Movies;
