"use client";

import React, { useState, useEffect } from "react";

// Sample static data
const initialUsers = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "123-456-7890",
    username: "alicej",
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "234-567-8901",
    username: "bsmith",
  },
  {
    name: "Charlie Ray",
    email: "charlie@example.com",
    phone: "345-678-9012",
    username: "charlier",
  },
  {
    name: "Diana Lee",
    email: "diana@example.com",
    phone: "456-789-0123",
    username: "dlee",
  },
  {
    name: "Evan Adams",
    email: "evan@example.com",
    phone: "567-890-1234",
    username: "evana",
  },
];

export default function UserTable() {
  const [users, setUsers] = useState(initialUsers);
  const [filteredUsers, setFilteredUsers] = useState(initialUsers);

  const [searchText, setSearchText] = useState("");
  const [filterField, setFilterField] = useState("name");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
  });

  const [editingIndex, setEditingIndex] = useState(null);
  const [editUser, setEditUser] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
  });

  // Fetch users from localhost
  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load users.");
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    const filtered = users.filter((user) =>
      user[filterField].toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleAddUser = () => {
    if (
      !newUser.name ||
      !newUser.email ||
      !newUser.phone ||
      !newUser.username
    ) {
      alert("Please fill all fields");
      return;
    }

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);

    setNewUser({ name: "", email: "", phone: "", username: "" });
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  if (loading) return <p className="p-6 text-gray-600">Loading users...</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  return (
    <div className="p-6 w-full max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">User Management</h1>

      {/* Search Controls */}
      <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
        <select
          value={filterField}
          onChange={(e) => setFilterField(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="name">Name</option>
          <option value="email">Email</option>
        </select>

        <input
          type="text"
          value={searchText}
          placeholder={`Search by ${filterField}`}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 flex-grow"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {/* Add New User */}
      <div className="mb-6 bg-gray-50 p-4 rounded-md shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Add New User</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Phone"
            value={newUser.phone}
            onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
            className="border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Username"
            value={newUser.username}
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button
          onClick={handleAddUser}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Add User
        </button>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Phone</th>
              <th className="px-4 py-2 border-b">Username</th>
              <th className="px-4 py-2 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  {editingIndex === index ? (
                    <>
                      <td className="px-4 py-2 border-b">
                        <input
                          type="text"
                          value={editUser.name}
                          onChange={(e) =>
                            setEditUser({ ...editUser, name: e.target.value })
                          }
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="px-4 py-2 border-b">
                        <input
                          type="email"
                          value={editUser.email}
                          onChange={(e) =>
                            setEditUser({ ...editUser, email: e.target.value })
                          }
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="px-4 py-2 border-b">
                        <input
                          type="text"
                          value={editUser.phone}
                          onChange={(e) =>
                            setEditUser({ ...editUser, phone: e.target.value })
                          }
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="px-4 py-2 border-b">
                        <input
                          type="text"
                          value={editUser.username}
                          onChange={(e) =>
                            setEditUser({
                              ...editUser,
                              username: e.target.value,
                            })
                          }
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="px-4 py-2 border-b text-center space-x-2">
                        <button
                          onClick={() => {
                            const updated = [...users];
                            updated[index] = editUser;
                            setUsers(updated);
                            setFilteredUsers(updated);
                            setEditingIndex(null);
                          }}
                          className="text-green-600 hover:text-green-800 font-semibold"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => setEditingIndex(null)}
                          className="text-gray-600 hover:text-gray-800 font-semibold"
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-4 py-2 border-b">{user.name}</td>
                      <td className="px-4 py-2 border-b">{user.email}</td>
                      <td className="px-4 py-2 border-b">{user.phone}</td>
                      <td className="px-4 py-2 border-b">{user.username}</td>
                      <td className="px-4 py-2 border-b text-center space-x-3">
                        <button
                          onClick={() => {
                            setEditingIndex(index);
                            setEditUser(user);
                          }}
                          className="text-blue-600 hover:text-blue-800 font-semibold"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteUser(index)}
                          className="text-red-600 hover:text-red-800 font-semibold"
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
