import memoizeOne from "memoize-one";
import { useDispatch, useSelector } from "react-redux";
import { select } from "store/selectors/selectors";
import { ItemPage, NumPageContainer, ShamPageItem, ReactItemWrapper } from "./NumPageMenu.styles";
import { setPage } from "store/requestReducer/requestSlice";

const NumPageMenu = () => {
    const lastPage = useSelector(select.lastPage);
    const currentPage = useSelector(select.page);
    const dispatch = useDispatch()

    const getPageArray = memoizeOne((lastPage, currentPage) => {
        const pageArray = [];

        if (lastPage <= 9) {
            for (let i = 1; i <= lastPage; i++) {
                pageArray.push(i);
            }
        } else if (currentPage <= 4) {
            for (let i = 1; i <= 7; i++) {
                pageArray.push(i);
            }
            pageArray.push("...");
            pageArray.push(lastPage);
        } else if (currentPage >= lastPage - 4) {
            pageArray.push(1);
            pageArray.push("...");
            for (let i = lastPage - 6; i <= lastPage; i++) {
                pageArray.push(i);
            }
        } else {
            pageArray.push(1);
            pageArray.push("...");
            for (let i = currentPage - 2; i <= currentPage + 2; i++) {
                pageArray.push(i);
            }
            pageArray.push("...");
            pageArray.push(lastPage);
        }

        return pageArray;
    });

    const pageArray = getPageArray(lastPage, currentPage);

    return (
        <NumPageContainer>
            {pageArray.map((page, index) => (
                <ReactItemWrapper key={index}>
                    {page === "..." ? (
                        <ShamPageItem>{page}</ShamPageItem>
                    ) : (
                        <ItemPage className={currentPage === page ? 'isActive' : ''} onClick={() => dispatch(setPage(page))}>{page}</ItemPage>
                    )}
                </ReactItemWrapper>
            ))}
        </NumPageContainer>
    );
};

export default NumPageMenu;
