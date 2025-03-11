import React, { useState, useEffect } from "react";
import styled from "../Components/Home/Home.module.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); 


  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ); 
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };
  
  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    if (search.trim() === "") {
      setFilteredData([]);
    } else {
      const filtered = data.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.email.toLowerCase().includes(search.toLowerCase()) ||
          item.phone.includes(search)
      );
      setFilteredData(filtered);
    }
  }, [search, data]);

  return (
    <div className={styled.homeContainer}>
      <h2 className={styled.title}>Search Users</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name, email, or phone..."
        className={styled.searchInput}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading data...</p>}

      {filteredData.length > 0 && (
        <table className={styled.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user) => (
              <tr
                key={user.id}
                className={styled.clickableRow}
                onClick={() => navigate(`/productdetails/${user.id}`)}
              >
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
