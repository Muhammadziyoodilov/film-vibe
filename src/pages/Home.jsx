import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Accardion from "../components/Accardion/Accardion";
import Plan from "../components/Plan/Plan";
import Slider from "../components/Slider/Slider";
import Api_Service from "../Service/api_service";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posters, setPosters] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const getApi = async () => {
    let request = await Api_Service.getData("/trending/movie/day");
    setPosters(request.results);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
    getApi();

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
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <>
      <div className="hero">
        <div className="slider flex flex-col gap-[10px] w-full">
          <div className="bg-black overflow-hidden flex items-center morque-wrp">
            <Marquee
              speed={30}
              gradient={false}
              pauseOnHover={false}
              direction="left"
            >
              {posters &&
                posters.map((item) => (
                  <img
                    key={item.id + Math.random() * 1500}
                    src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                    alt={`poster-${item.overview}`}
                    className="morque-img w-[151px] h-[200px] object-cover rounded-xl mx-[5px] poster-img"
                  />
                ))}
            </Marquee>
          </div>
          <div className="bg-black overflow-hidden flex items-center">
            <Marquee
              speed={30}
              gradient={false}
              pauseOnHover={false}
              direction="right"
            >
              {posters &&
                posters.map((item) => (
                  <img
                    key={item.id + Math.random() * 1500}
                    src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                    alt={`poster-${item.overview}`}
                    className="morque-img w-[151px] h-[200px] object-cover rounded-xl mx-[5px] poster-img"
                  />
                ))}
            </Marquee>
          </div>
          <div className="bg-black overflow-hidden flex items-center">
            <Marquee
              speed={50}
              gradient={false}
              pauseOnHover={false}
              direction="left"
            >
              {posters &&
                posters.map((item) => (
                  <img
                    key={item.id + Math.random() * 1500}
                    src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                    alt={`poster-${item.overview}`}
                    className="morque-img w-[151px] h-[200px] object-cover rounded-xl mx-[5px] poster-img"
                  />
                ))}
            </Marquee>
          </div>
        </div>
        <img
          src="/images/png/Abstract Design.png"
          alt=""
          className="logo-hero mx-[auto] mt-[120px]"
        />
        <div className="container text-center mt-[50px]">
          <h1 className="title mb-[10px]">
            Hello {user && user.email.slice(0, user.email.indexOf("@"))}!
          </h1>
          <p className="hero-info">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
        </div>
      </div>
      <Slider
        title={"Explore our wide variety of categories"}
        info={
          "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
        }
        margin={150}
        url={"trending/movie/day"}
        init={1}
        loop={true}
      />
      <Accardion />
      <Plan />
    </>
  );
};

export default Home;
