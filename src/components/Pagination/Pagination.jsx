import ReactPaginate from "react-paginate";

export const Pagination = ({handleClickPage, totalPages})=>(
<>
  <ReactPaginate
        nextLabel="&rarr;"
        onPageChange={handleClickPage}
        pageRangeDisplayed={window.innerWidth<480 ?4:5 }
        marginPagesDisplayed={0}
        pageCount={totalPages}
        previousLabel="&larr;"
        pageClassName="w-[35px] h-[35px] rounded-full border flex items-center justify-center"
        pageLinkClassName="w-[35px] h-[35px] rounded-full flex items-center justify-center"
        previousClassName="mr-5 w-[35px] h-[35px] rounded-full border"
        previousLinkClassName="w-[35px] h-[35px]  text-xl text-blue  flex items-center justify-center"
        nextClassName="mr-5 w-[35px] h-[35px] rounded-full border flex items-center justify-center"
        nextLinkClassName="w-[35px] h-[35px] text-xl text-blue flex items-center justify-center"
        containerClassName="flex gap-[5px] mx-auto mt-10 w-max"
        activeClassName="bg-blue text-white"
        renderOnZeroPageCount={null}
      />
</>)
