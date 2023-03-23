import { useSelector, useDispatch } from "react-redux";
import { setCurrPage } from "../../store/project/project";

export const Pagination = () => {
    const dispatch = useDispatch();

    let pages = [];
    const numPage = useSelector((state) => state.project.pages);
    const currPage = useSelector((state) => state.project.currPage);

    for (let i = 1; i <= numPage; i++) {
        pages.push(i);
    }

    const changePage = (page) => {
        dispatch(setCurrPage(page))
    }

    return (
        <div aria-label="Page navigation example" style={{ paddingLeft: "87px" }}>
            <ul className="pagination">
                {currPage > 1 &&
                    <li className="page-item"><button className="page-link" onClick={() => changePage(currPage - 1)}>Previous</button></li>
                }
                {pages.map(page =>
                    currPage ==+ page ?
                        <li key={page} className="page-item active"><button className="page-link" onClick={() => changePage(page)}>{page}</button></li>
                        :
                        <li key={page} className="page-item"><button className="page-link" onClick={() => changePage(page)}>{page}</button></li>
                )}
                {currPage < numPage &&
                    <li className="page-item"><button className="page-link" onClick={() => changePage(currPage + 1)}>Next</button></li>
                }
            </ul>
        </div>
    )
}