import React, { useState, useEffect } from "react";
import styled from "../Components/Home/Home.module.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Hook for navigation

  // Fetch data from an API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        ); // Example API
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // Update filtered data when search input changes
  useEffect(() => {
    if (search.trim() === "") {
      setFilteredData([]); // Hide data if search is empty
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

      {/* Show Table Only if Search Input has Value */}
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
