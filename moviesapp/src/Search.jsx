let Search = (props) => {
    return (
        <>
            <p>Showing {props.count} movies in database</p>
            <button type="button" className="btn btn-primary pl-3 pr-3 pt-1 pb-1">New</button>
            <div className="row mt-3">
                <div className="col-7">
                    <div className="input-group flex-nowrap">
                        <input type="text" className="form-control p-2" placeholder="Search" aria-label="Search"
                            aria-describedby="addon-wrapping" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Search;