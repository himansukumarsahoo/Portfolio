const Navlist = ({item}) => {
  return (
    <div className="nav-list">
            <ul>
                {
                    item.map((ele)=><li><a href={ele.link}>{ele.name}</a></li>)
                }
            </ul>
    </div>
  )
}

export default Navlist