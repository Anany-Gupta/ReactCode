import Pagination from './Pagination.jsx';
import "./Table.css";
import React from "react";

class Table extends React.Component {
    state = {
        currPage: 1,
    };

    selectPage = (value) => {
        this.setState({ currPage: value });
    };
    render() {
        
        let allMovies = this.props.moviesData;
        let currFilter = this.props.currentFilter;
        
        let filteredMoviesArr = allMovies.filter((el) => {
            
            if (currFilter === "All Genre") {
                return el;
            } else if (el.genre.name === currFilter) {
                return el;
                
            }
        });
        // console.log(filteredMoviesArr[0]);
        filteredMoviesArr = filteredMoviesArr.filter((el)=>{
            let movieTitle=el.title.toLowerCase()
            let searchTitle=this.props.search.toLowerCase()
            return movieTitle.includes(searchTitle.trim());
            
        })
        let startIndex = (this.state.currPage-1)*4;
        let endIndex = Math.min(filteredMoviesArr.length,this.state.currPage*4)
        let MoviesToBeDisplayed = filteredMoviesArr.slice(startIndex,endIndex);
        let numberOfPages = Math.ceil(filteredMoviesArr.length / 4);
        return (
            <>
                <div className="col-10">

                    <table className="table table-hover mt-5 pr-5">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Rate</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {MoviesToBeDisplayed.map((el) => {
                                return (
                                    <tr key={el._id}>
                                        <td>{el.title}</td>
                                        <td>{el.genre.name}</td>
                                        <td>{el.numberInStock}</td>
                                        <td>{el.dailyRentalRate}</td>
                                        <td
                                            onClick={() => {
                                                this.props.toggleLike(el._id);
                                            }}
                                            >
                                            {el.liked ? (
                                                <span className="material-icons">favorite</span>
                                                ) : (
                                                    <span className="material-icons">
                                                    favorite_border
                                                </span>
                                            )}
                                        </td>
                                        <td>
                                            <button className="btn btn-dark btn-sm" onClick={() => { this.props.deleteMovie(el.title) }}><i className="material-icons">
                                                delete
                                            </i></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </div>
                <Pagination selectPage={this.selectPage}
                    currPage={this.state.currPage}
                    numberOfPages={numberOfPages} />
            </>
        )
    }
}
export default Table;