import { useState } from "react";
import "./filter.css";
function Filter(props) {
  const [filterObj, setFilterObj] = useState({
    name: "",
    isActive: false,
    status: 1,
  });
  const options = [
    { id: 1, label: "All" },
    { id: 2, label: "Todo" },
    { id: 3, label: "In Progress" },
    { id: 4, label: "Done" },
  ];
  const onChangeActiveOnly = (event) => {
    filterObj.isActive = event.target.checked;
    props.handleSearch(filterObj);
  };
  const onchangeSearchByName = (event) => {
    filterObj.name = event.target.value;
    searchByName();
  };
  const searchByName = () => {
    props.handleSearch(filterObj);
  };
  const onChangeStatus = (event) => {
    filterObj.status = event.target.value;
    props.handleSearch(filterObj);
  };
  return (
    <div className="filter-wrapper">
      <div className="text-title">Filter</div>
      <div>
        <div>Search By Name</div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            placeholder="Input keyword"
            onChange={onchangeSearchByName}
          />
          {/* <button className="btn btn-color" onClick={searchByName}>
            Search
          </button> */}
        </div>
      </div>
      <div className="mb-3 form-check">
        <input className="form-check-input"
          type="checkbox"
          value={filterObj.isActive}
          onChange={onChangeActiveOnly}
        />
        <label className="form-check-label">Active Task only</label>
      </div>
      <div>
        <div>Filter by Status</div>
        <div className="col-5">
          <select
            className="form-control btn-color"
            name="filter"
            id="filter"
            onChange={onChangeStatus}
          >
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
