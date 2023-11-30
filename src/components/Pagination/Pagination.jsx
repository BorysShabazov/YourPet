import ReactPaginate from "react-paginate";

export const Pagination = ({handleClickPage, totalPages, currentPage })=>(
<>
  <ReactPaginate
        nextLabel="&rarr;"
        onPageChange={handleClickPage}
        pageRangeDisplayed={window.innerWidth<480 ?4:5 }
        marginPagesDisplayed={0}
        pageCount={totalPages}
        previousLabel="&larr;"
        pageClassName="w-[35px] h-[35px] rounded-full border border-blue flex items-center justify-center"
        pageLinkClassName="w-[35px] h-[35px] rounded-full flex items-center justify-center"
        previousClassName="mr-5 border-none"
        previousLinkClassName="w-[35px] h-[35px] rounded-full text-xl text-blue  flex items-base justify-center  border border-blue"
        nextClassName="ml-5 border-none"
        nextLinkClassName="w-[35px] h-[35px] rounded-full text-xl text-blue  flex items-base justify-center  border border-blue"
        containerClassName="flex gap-[5px] mx-auto mt-10 w-max"
        activeClassName="bg-blue text-white"
      renderOnZeroPageCount={null}
      disabledClassName="text-gray border border-gray"
      disabledLinkClassName="w-[35px] h-[35px] text-lightBlue border border-lightBlue cursor-default rounded-full"
      forcePage={currentPage}
      
      />
</>)
