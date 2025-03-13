import "./testimonial.scss";

export default function Testimonial() {
  const data = [
    {
      id: 1,
      title: "Managing director Scopion",
      name: "Atim John",
      img: "assets/man.jpeg",
      testimony:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quis!",
        icon: "assets/youtube.png",
    },
    {
      id: 2,
      title: "HR SPD",
      name: "Joel Mutyaba",
      img: "assets/man.jpeg",
      testimony:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quis!",
      featured: true,
      icon: "assets/github.png",
    },
    {
      id: 3,
      title: "IT Manager SPD",
      name: "Mugisha Tom",
      img: "assets/man.jpeg",
      testimony:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quis!",
        icon: "assets/x.png",
    },
  ];
  return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonials</h1>
        <div className="container">
      {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" alt="" className="left" />
              <img src={d.img} alt="" className="user" />
              <img src={d.icon} alt="" className="right" />
            </div>
            <div className="center">
              {d.testimony}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title }</h4>
            </div>
          </div>
      ))}
        </div>
    </div>
  );
}
