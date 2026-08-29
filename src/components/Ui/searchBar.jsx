import { Search } from '@mui/icons-material';

function SearchBar() {
  return (
    <div className="w-full max-w-xl">
      <label className="flex items-center gap-3 rounded-full border border-stone-200 bg-stone-50 px-4 py-2.5 shadow-sm transition duration-150 ease-in-out focus-within:border-stone-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-stone-200">
        <Search className="h-4 w-4 text-stone-500" />
        <input
          type="text"
          name="searchedValue"
          placeholder="Search..."
          aria-label="Search videos"
          className="w-full border-0 bg-transparent text-sm text-stone-800 outline-none placeholder:text-stone-400"
        />
      </label>
    </div>
  );
}

export default SearchBar;
