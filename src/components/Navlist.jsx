const Navlist = ({ item, isOpen = false, onNavigate }) => {
  return (
    <div className={isOpen ? "nav-list open" : "nav-list"}>
            <ul>
                {
                    item.map((ele)=>(
                      <li key={ele.link}>
                        <a href={ele.link} onClick={onNavigate}>{ele.name}</a>
                      </li>
                    ))
                }
            </ul>
    </div>
  )
}

export default Navlist