import React, { useEffect } from "react";

function Dashboard() {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/users");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>Dashboard</div>;
}

export default Dashboard;
