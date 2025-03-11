import { useEffect, useState } from "react";
import PortifolioList from "../portifolioList/PortifolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  networkPortfolio,
  supportPortfolio,
  deskPortfolio
} from "../../data";

export default function Portfolio() {
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "desk",
      title: "Desktop App",
    },
    {
      id: "it",
      title: "IT Support",
    },
    {
      id: "camera",
      title: "Camera and Network installation and management ",
    },
  ];
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  useEffect(()=>{

    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "desk":
        setData(deskPortfolio);
        break;
      case "it":
        setData(supportPortfolio);
        break;
      case "camera":
        setData(networkPortfolio);
        break;
        default:
          setData(featuredPortfolio);
    }

  },[selected])
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortifolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(d=>(
          <div className="item">
          <img src={d.img} alt="" />
          <h3>{d.tittle}</h3>
        </div>
        ))}
      </div>
    </div>
  );
}
