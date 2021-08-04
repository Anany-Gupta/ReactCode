let Input=(props)=>{
    return(
        <input
          className="input-box"
          type="text"
          onChange={(e) => {
            props.handleCurrentInput(e.currentTarget.value);
          }}

          onKeyDown={(e) => {
            if (e.key === "Enter" && props.cVal) {
                props.handleTasks();
            }
          }}

          value={props.cVal}
        />
    )
}