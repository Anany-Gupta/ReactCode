import React from "react";
class Search extends React.Component {
  state = {
    NTitle: "",
    NGenre: "",
    NStock: 0,
    NRate: 0,
  };
  changeTitle = (Title) => {
    this.setState({ NTitle: Title });
  };
  changeGenre = (Genre) => {
    this.setState({ NGere: Genre });
  };
  changeStock = (Stock) => {
    this.setState({ NStock: Stock });
  };
  changeRate = (Rate) => {
    this.setState({ NRate: Rate });
  };
  addMovie = () => {
    console.log(this.state.NTitle);
    console.log(this.state.NGenre);
    console.log(this.state.NStock);
    console.log(this.state.NRate);
    // this.setState({ NTitle: "", NGenre: "", NStock: 0, NRate: 0 });
  };

  render() {
    return (
      <>
        <p>Showing {this.props.count} movies in database</p>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          New
        </button>
        <div
          className="modal fade pl-3 pr-3 pt-1 pb-1"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Add Movie To Store
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form onSubmit={this.addMovie()} method="post">
                <div className="modal-body p3">
                  <p>Title </p>
                  <input
                    type="text"
                    required
                    value={this.state.NTitle}
                    // onChange={(e) => {
                    //   this.changeTitle(e.target.value);
                    // }}
                  />
                  <br />
                  <p>Genre </p>
                  <input
                    type="text"
                    required
                    value={this.state.NGenre}
                    // onChange={(e) => {
                    //   this.changeGenre(e.target.value);
                    // }}
                  />
                  <br />
                  <p>Stock </p>
                  <input
                    type="text"
                    required
                    value={this.state.NStock}
                    // onChange={(e) => {
                    //   this.changeStock(e.target.value);
                    // }}
                  />
                  <br />
                  <p>Rate </p>
                  <input
                    type="text"
                    required
                    value={this.state.NRate}
                    // onChange={(e) => {
                    //   this.changeTitle(e.target.value);
                    // }}
                  />
                  <br />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div classNameName="row mt-3">
          <div classNameName="col-7">
            <div classNameName="input-group flex-nowrap">
              <input
                type="text"
                className="form-control mt-4"
                placeholder="Search..."
                value={this.props.search}
                onChange={(e) => {
                  this.props.updateSearch(e.currentTarget.value);
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Search;
