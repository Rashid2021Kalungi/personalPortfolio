import "./portfolioList.scss"

export default function PortifolioList({id,title,active,setSelected}) {
  return (
    <li className={active ? "portfolioList active": "portfolioList"} onClick={()=>setSelected(id)}>
        {title}
    </li>
  )
}
