import { useState } from "react";
import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi";

const DropDown = ({
  toggle,
  orderBy,
  onOrderByChange,
  sortBy,
  onSortByChange,
}) => {
  return (
    toggle && (
      <div
        className="origin-top-right absolute right-0 mt-2 w-56
      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div
            onClick={() => onSortByChange("studentName")}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
            role="menuitem"
          >
            student Name {sortBy === "studentName" ? <BiCheck /> : null}
          </div>
          <div
            onClick={() => onSortByChange("mentorName")}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
            role="menuitem"
          >
            mentor Name {sortBy === "mentorName" ? <BiCheck /> : null}
          </div>
          <div
            onClick={() => onSortByChange("aptDate")}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
            role="menuitem"
          >
            Date {sortBy === "aptDate" ? <BiCheck /> : null}
          </div>
          <div
            onClick={() => onOrderByChange("asc")}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
            role="menuitem"
          >
            Asc {orderBy === "asc" ? <BiCheck /> : null}
          </div>
          <div
            onClick={() => onOrderByChange("desc")}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
            role="menuitem"
          >
            Desc {orderBy === "desc" ? <BiCheck /> : null}
          </div>
        </div>
      </div>
    )
  );
};

const Search = ({
  onQueryChange,
  query,
  orderBy,
  onOrderByChange,
  sortBy,
  onSortBYChange,
}) => {
  let [toggleSort, setToggleSort] = useState(false);
  return (
    <div className="py-5">
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiSearch />
          <label htmlFor="query" className="sr-only" />
        </div>
        <input
          onChange={(event) => {
            onQueryChange(event);
          }}
          type="text"
          name="query"
          id="query"
          value={query}
          className="pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div>
            <button
              onClick={() => setToggleSort(!toggleSort)}
              type="button"
              className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Sort By <BiCaretDown className="ml-2" />
            </button>
            <DropDown
              orderBy={orderBy}
              sortBy={sortBy}
              onOrderByChange={onOrderByChange}
              onSortByChange={onSortBYChange}
              toggle={toggleSort}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
