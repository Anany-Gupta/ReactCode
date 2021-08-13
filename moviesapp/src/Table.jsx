import Pagination from './Pagination.jsx';
import "./Table.css";
import React from "react";

class Table extends React.Component {
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
        let MoviesToBeDisplayed = filteredMoviesArr.slice(0, 4);
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
                <Pagination />
            </>
        )
    }
}
export default Table;