import React, { useEffect, useState } from "react";

function SMGrid({
  aboutTable,
  list,
  tilte,
  setList,
  searchfilter,
  setSearchfilter,
}) {
  const [search, setSearch] = useState("");
  const [selectorlist, setSelectorlist] = useState("name");
  
  

  useEffect(() => {
    let work = list.filter((x) =>
      x[selectorlist].includes(search.toLocaleLowerCase())
    );
    setSearchfilter(work);
  }, [search]);

  const selecterValue = (e) => {
    setSelectorlist(e.target.value);
  };

  let inputSearchValue = (e) => {
    setSearch(e.target.value);
  };

  console.log(selectorlist);

  return (
    <div>
      <h1>{tilte}</h1>

      <div
        className="my-3"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div>
          <input type="text" onChange={(e) => inputSearchValue(e)} />
        </div>

        <div>
          <select onChange={(e) => selecterValue(e)}>
            <option value="name"> Select </option>
            {aboutTable.map((x) => (
              <option>{x.key}</option>
            ))}
          </select>
        </div>
      </div>

      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            {aboutTable &&
            Array.isArray(aboutTable) &&
            aboutTable.length > 1 &&
            aboutTable
              ? aboutTable.map((x) => <th>{x.key} </th>)
              : null}
          </tr>
        </thead>

        <tbody>
          {searchfilter &&
          Array.isArray(searchfilter) &&
          searchfilter.length > 1 &&
          searchfilter
            ? searchfilter.map((x) => (
                <tr>
                  {aboutTable &&
                    Array.isArray(aboutTable) &&
                    aboutTable.length > 1 &&
                    aboutTable.map((e, i) => (
                      <td> {e.displayField ? e.displayField(x) : x[e.key]} </td>
                    ))}{" "}
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default SMGrid;