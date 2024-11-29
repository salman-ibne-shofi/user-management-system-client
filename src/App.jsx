import { useLoaderData } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {
	const LoadedUsers = useLoaderData();
	const [users, setUsers] = useState(LoadedUsers);

	const handleDelete = (id) => {
		fetch(`http://localhost:5000/user/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					Swal.fire({
						title: "Success",
						text: "User removed successfully",
						icon: "success",
						confirmButtonText: "Cool",
					});
					// remove user from UI
					const remainingUsers = users.filter(
						(user) => user._id !== id
					);
					setUsers(remainingUsers);
				}
			});
	};
	return (
		<>
			<div className="overflow-x-auto">
				<table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>@Email</th>
							<th>Gender</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user._id}>
								<th>1</th>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.gender}</td>
								<td>{user.status}</td>
								<td>
									<button
										onClick={() => handleDelete(user._id)}
										className="btn btn-error"
									>
										X
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default App;
