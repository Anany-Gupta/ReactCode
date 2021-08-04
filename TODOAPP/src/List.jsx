let List = (props) => {
    return (
        <ul>
            {props.tasks.map((el, index) => {
                return <li key={index}>{el} <button onClick={() => {

                    props.deleteTask(el);
                }}
                >Delete</button></li>;

            })}
        </ul>
    )
}

export default List;
// props is an object where key value pair is recieved which is send as an attribute from parent
// Since there is no data to be saved in List Component and hence we dont need state component for this hence we dont need class component
// to use props in class component we get props in this by this.props
// State Change = re=render