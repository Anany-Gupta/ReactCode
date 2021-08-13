let Filter = (props) => {
  
  return (
    <div className="col-3">
      <ul className="list-group m-5">
        <li onClick={()=>{
              props.setFilter("All Genre")
            } }
            className={`list-group-item ${props.currentFilter === "All Genre" ? "active":""}`} aria-current="true">All Genre</li>
        {
          props.genreData.map((el) => {
            return <li onClick={()=>{
              props.setFilter(el.name)
            } } key={el._id} className={`list-group-item ${props.currentFilter === el.name ? "active":""}`}>{el.name}</li>
          })
        }

      </ul>
    </div>
  );
};
export default Filter;