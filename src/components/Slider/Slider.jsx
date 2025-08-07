import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import Api_Service from "../../Service/api_service";

const Slider = ({ title, info, margin, id, url, init, loop }) => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
      poster:
        "https://corp.formula1.com/wp-content/uploads/2025/03/F1_WBDO_FEATURED_IMAGE_MAIN_1920x1080-1.jpg",
      title: "F1: The Movie (2025)",
      trailer: "https://youtu.be/2zQtb0H1QEs?si=QXClaj1HcWLTCymX",
      info: "A fearless rookie driver enters the ruthless world of Formula 1, where speed, politics, and legacy collide. As engines roar and rivalries ignite, he must confront not only seasoned champions, but also his own limits — on and off the track.",
    },
    {
      id: 2,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71Tr4Fx-4ovgyP5w6XkBZbZBNv7hA_Zr0Yg&s",
      poster:
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/02/Us-Movie-Poster-Cropped-Lupita-Nyongo.jpg",
      title: "Us (2019)",
      trailer: "https://youtu.be/hNCmb-4oXJA?si=5T0Oilq2KFN7PWkp",
      info: "A family’s beach vacation turns into a nightmare when they’re confronted by terrifying doppelgängers. As chaos spreads, they uncover a chilling truth buried beneath the surface — one that forces them to face their darkest reflections and secrets.",
    },
    {
      id: 3,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7V495vkCdtGGGCSJdjzoQTO1IMUB906-BbiEBG7-2KJfq9vjPtFtBFYf5osfoe2tn1Q&usqp=CAU",
      poster: "https://i.ytimg.com/vi/OAKuH2q1zmY/maxresdefault.jpg",
      title: "Ant-Man (2015)",
      trailer: "https://youtu.be/cx3joJnXydc?si=lx-4e4_YQJd99ULj",
      info: "A skilled thief is given a shot at redemption when he inherits a suit that allows him to shrink in size. Now, as Ant-Man, he must embrace his inner hero to stop a powerful enemy and protect his family.",
    },
    {
      id: 4,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xGEWm4SUrnuuhpD31_5Aivgts5zHKn7Kog&s",
      poster:
        "https://79468c92.delivery.rocketcdn.me/wp-content/uploads/2016/09/Assasin2.jpg",
      title: "The Assassin (2015)",
      trailer: "https://youtu.be/CKFtNsQ78oI?si=kAPz12OM4MkalmZJ",
      info: "In ninth-century China, a skilled female assassin is sent to kill a powerful warlord — the man she once loved. Torn between duty and emotion, she must choose her path in a world ruled by loyalty, silence, and honor.",
    },
    {
      id: 5,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnoaLGhxbZkNa4can0ZUXGtQZd9pDsAHqhw&s",
      poster:
        "https://i.cbc.ca/ais/29d7c85a-e22f-4656-8ce3-e689379b0aaa,1752600364289/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C1075%2C604%29%3B",
      title: "Boat Kid Aura Farming",
      trailer: "https://youtu.be/8FUdooFqL20?si=JtokDaBrV2C3z6Pq",
      info: "A curious child aboard a mystical boat discovers a hidden world where auras grow like crops. As he learns to farm energy and balance nature, he must protect the magic from those who seek to exploit it.",
    },
    {
      id: 6,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
      poster:
        "https://corp.formula1.com/wp-content/uploads/2025/03/F1_WBDO_FEATURED_IMAGE_MAIN_1920x1080-1.jpg",
      title: "F1: The Movie (2025)",
      trailer: "https://youtu.be/2zQtb0H1QEs?si=QXClaj1HcWLTCymX",
      info: "A fearless rookie driver enters the ruthless world of Formula 1, where speed, politics, and legacy collide. As engines roar and rivalries ignite, he must confront not only seasoned champions, but also his own limits — on and off the track.",
    },
    {
      id: 7,
      url: "https://intheposter.com/cdn/shop/files/the-manager-in-the-poster-1.jpg?v=1733910535",
      poster:
        "https://corp.formula1.com/wp-content/uploads/2025/03/F1_WBDO_FEATURED_IMAGE_MAIN_1920x1080-1.jpg",
      title: "F1: The Movie (2025)",
      trailer: "https://youtu.be/2zQtb0H1QEs?si=QXClaj1HcWLTCymX",
      info: "A fearless rookie driver enters the ruthless world of Formula 1, where speed, politics, and legacy collide. As engines roar and rivalries ignite, he must confront not only seasoned champions, but also his own limits — on and off the track.",
    },
    {
      id: 8,
      url: "https://lumiere-a.akamaihd.net/v1/images/image_80a77b1d.jpeg",
      poster:
        "https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2024/12/untitled-design-5.png",
      title: "Lilo & Stitch",
      trailer: "https://youtu.be/VWqJifMMgZE?si=qUnseYXAAEZNHf1M",
      info: "A fearless rookie driver enters the ruthless world of Formula 1, where speed, politics, and legacy collide. As engines roar and rivalries ignite, he must confront not only seasoned champions, but also his own limits — on and off the track.",
    },
    {
      id: 9,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
      poster:
        "https://corp.formula1.com/wp-content/uploads/2025/03/F1_WBDO_FEATURED_IMAGE_MAIN_1920x1080-1.jpg",
      title: "F1: The Movie (2025)",
      trailer: "https://youtu.be/2zQtb0H1QEs?si=QXClaj1HcWLTCymX",
      info: "A fearless rookie driver enters the ruthless world of Formula 1, where speed, politics, and legacy collide. As engines roar and rivalries ignite, he must confront not only seasoned champions, but also his own limits — on and off the track.",
    },
    {
      id: 10,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71Tr4Fx-4ovgyP5w6XkBZbZBNv7hA_Zr0Yg&s",
      poster:
        "https://corp.formula1.com/wp-content/uploads/2025/03/F1_WBDO_FEATURED_IMAGE_MAIN_1920x1080-1.jpg",
      title: "F1: The Movie (2025)",
      trailer: "https://youtu.be/2zQtb0H1QEs?si=QXClaj1HcWLTCymX",
      info: "A fearless rookie driver enters the ruthless world of Formula 1, where speed, politics, and legacy collide. As engines roar and rivalries ignite, he must confront not only seasoned champions, but also his own limits — on and off the track.",
    },
    {
      id: 11,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7V495vkCdtGGGCSJdjzoQTO1IMUB906-BbiEBG7-2KJfq9vjPtFtBFYf5osfoe2tn1Q&usqp=CAU",
      poster:
        "https://corp.formula1.com/wp-content/uploads/2025/03/F1_WBDO_FEATURED_IMAGE_MAIN_1920x1080-1.jpg",
      title: "F1: The Movie (2025)",
      trailer: "https://youtu.be/2zQtb0H1QEs?si=QXClaj1HcWLTCymX",
      info: "A fearless rookie driver enters the ruthless world of Formula 1, where speed, politics, and legacy collide. As engines roar and rivalries ignite, he must confront not only seasoned champions, but also his own limits — on and off the track.",
    },
    {
      id: 12,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xGEWm4SUrnuuhpD31_5Aivgts5zHKn7Kog&s",
      poster:
        "https://corp.formula1.com/wp-content/uploads/2025/03/F1_WBDO_FEATURED_IMAGE_MAIN_1920x1080-1.jpg",
      title: "F1: The Movie (2025)",
      trailer: "https://youtu.be/2zQtb0H1QEs?si=QXClaj1HcWLTCymX",
      info: "A fearless rookie driver enters the ruthless world of Formula 1, where speed, politics, and legacy collide. As engines roar and rivalries ignite, he must confront not only seasoned champions, but also his own limits — on and off the track.",
    },
    {
      id: 13,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnoaLGhxbZkNa4can0ZUXGtQZd9pDsAHqhw&s",
      poster:
        "https://corp.formula1.com/wp-content/uploads/2025/03/F1_WBDO_FEATURED_IMAGE_MAIN_1920x1080-1.jpg",
      title: "F1: The Movie (2025)",
      trailer: "https://youtu.be/2zQtb0H1QEs?si=QXClaj1HcWLTCymX",
      info: "A fearless rookie driver enters the ruthless world of Formula 1, where speed, politics, and legacy collide. As engines roar and rivalries ignite, he must confront not only seasoned champions, but also his own limits — on and off the track.",
    },
    {
      id: 643,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
      poster:
        "https://corp.formula1.com/wp-content/uploads/2025/03/F1_WBDO_FEATURED_IMAGE_MAIN_1920x1080-1.jpg",
      title: "F1: The Movie (2025)",
      trailer: "https://youtu.be/2zQtb0H1QEs?si=QXClaj1HcWLTCymX",
      info: "A fearless rookie driver enters the ruthless world of Formula 1, where speed, politics, and legacy collide. As engines roar and rivalries ignite, he must confront not only seasoned champions, but also his own limits — on and off the track.",
    },
    {
      id: 14,
      url: "https://intheposter.com/cdn/shop/files/the-manager-in-the-poster-1.jpg?v=1733910535",
      poster:
        "https://corp.formula1.com/wp-content/uploads/2025/03/F1_WBDO_FEATURED_IMAGE_MAIN_1920x1080-1.jpg",
      title: "F1: The Movie (2025)",
      trailer: "https://youtu.be/2zQtb0H1QEs?si=QXClaj1HcWLTCymX",
      info: "A fearless rookie driver enters the ruthless world of Formula 1, where speed, politics, and legacy collide. As engines roar and rivalries ignite, he must confront not only seasoned champions, but also his own limits — on and off the track.",
    },
    {
      id: 15,
      url: "https://lumiere-a.akamaihd.net/v1/images/image_80a77b1d.jpeg",
      poster:
        "https://corp.formula1.com/wp-content/uploads/2025/03/F1_WBDO_FEATURED_IMAGE_MAIN_1920x1080-1.jpg",
      title: "F1: The Movie (2025)",
      trailer: "https://youtu.be/2zQtb0H1QEs?si=QXClaj1HcWLTCymX",
      info: "A fearless rookie driver enters the ruthless world of Formula 1, where speed, politics, and legacy collide. As engines roar and rivalries ignite, he must confront not only seasoned champions, but also his own limits — on and off the track.",
    },
    {
      id: 16,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7V495vkCdtGGGCSJdjzoQTO1IMUB906-BbiEBG7-2KJfq9vjPtFtBFYf5osfoe2tn1Q&usqp=CAU",
      poster:
        "https://corp.formula1.com/wp-content/uploads/2025/03/F1_WBDO_FEATURED_IMAGE_MAIN_1920x1080-1.jpg",
      title: "F1: The Movie (2025)",
      trailer: "https://youtu.be/2zQtb0H1QEs?si=QXClaj1HcWLTCymX",
      info: "A fearless rookie driver enters the ruthless world of Formula 1, where speed, politics, and legacy collide. As engines roar and rivalries ignite, he must confront not only seasoned champions, but also his own limits — on and off the track.",
    },
    {
      id: 17,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xGEWm4SUrnuuhpD31_5Aivgts5zHKn7Kog&s",
      poster:
        "https://corp.formula1.com/wp-content/uploads/2025/03/F1_WBDO_FEATURED_IMAGE_MAIN_1920x1080-1.jpg",
      title: "F1: The Movie (2025)",
      trailer: "https://youtu.be/2zQtb0H1QEs?si=QXClaj1HcWLTCymX",
      info: "A fearless rookie driver enters the ruthless world of Formula 1, where speed, politics, and legacy collide. As engines roar and rivalries ignite, he must confront not only seasoned champions, but also his own limits — on and off the track.",
    },
    {
      id: 18,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA287OSbpzWl3Jseoz8oZB06rENjpzhn0Yhd2fuEyP60oq3njW4QMjVn3pZFLKWoF3w&usqp=CAU",
      poster:
        "https://corp.formula1.com/wp-content/uploads/2025/03/F1_WBDO_FEATURED_IMAGE_MAIN_1920x1080-1.jpg",
      title: "F1: The Movie (2025)",
      trailer: "https://youtu.be/2zQtb0H1QEs?si=QXClaj1HcWLTCymX",
      info: "A fearless rookie driver enters the ruthless world of Formula 1, where speed, politics, and legacy collide. As engines roar and rivalries ignite, he must confront not only seasoned champions, but also his own limits — on and off the track.",
    },
    {
      id: 289,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71Tr4Fx-4ovgyP5w6XkBZbZBNv7hA_Zr0Yg&s",
      poster:
        "https://corp.formula1.com/wp-content/uploads/2025/03/F1_WBDO_FEATURED_IMAGE_MAIN_1920x1080-1.jpg",
      title: "F1: The Movie (2025)",
      trailer: "https://youtu.be/2zQtb0H1QEs?si=QXClaj1HcWLTCymX",
      info: "A fearless rookie driver enters the ruthless world of Formula 1, where speed, politics, and legacy collide. As engines roar and rivalries ignite, he must confront not only seasoned champions, but also his own limits — on and off the track.",
    },
  ]);
  const getApi = async () => {
    let request = await Api_Service.getData(url);
    if ("cast" in request) {
      setImages(request.cast.slice(0, 20));
    } else {
      setImages(request.results);
    }
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <>
      <div className="mt-[100px]">
        <div className="container accardion-top flex justify-between items-end mb-[-50px]">
          <div>
            <h2 className={`accardion-title mt-[${margin}px]`}>{title}</h2>
            <p className="accardion-info">{info}</p>
          </div>
          <div className="nav-wrp flex items-center gap-[16px]">
            <button className={`nav-btn prev-btn prev-btn-${id}`}>
              <img src="/images/svg/Icon (3).svg" alt="" />
            </button>
            <div className={`my-pagination my-pagination-${id} flex`}></div>
            <button className={`nav-btn next-btn next-btn-${id}`}>
              <img src="/images/svg/Icon (3).svg" alt="" />
            </button>
          </div>
        </div>
        <div className="py-16 relative z-[0] h-[283px] ">
          <div className="container overflow-hidden mt-[80px]">
            <Swiper
              initialSlide={init}
              loop={loop}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={5}
              slidesPerView={5}
              slidesPerGroup={5}
              navigation={{
                nextEl: `.next-btn-${id}`,
                prevEl: `.prev-btn-${id}`,
              }}
              pagination={{ el: `.my-pagination-${id}`, clickable: true }}
              breakpoints={{
                1280: {
                  slidesPerView: 5,
                  slidesPerGroup: 5,
                },
                1024: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                },
                768: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
                640: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
              }}
            >
              {images.map((item) => {
                return (
                  <SwiperSlide key={item.id} className="rounded-[12px]">
                    <Link
                      to={`/film/${item.id}`}
                      className="slider-img-wrapper"
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                        alt=""
                        className="slider-img object-cover rounded-[12px] mb-[15px]"
                      />
                    </Link>
                    <h4 className="slide-name">{item.title}</h4>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
