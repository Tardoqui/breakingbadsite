import "./style.modules.css";

function SearchBar(props) {
	return (
		<div >
			<input
                className="searchbar-container"
				type="text"
				placeholder="Search here..."
				onKeyUp={(event) => {
					props.filterState(event.target.value);
				}}
			/>
		</div>
	);
}

export default SearchBar;
