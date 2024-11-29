import { useState } from "react";
import Swal from "sweetalert2";

const AddUser = () => {
	const [status, setStatus] = useState("active");
	const [gender, setGender] = useState("male");

	const handleAddUser = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;

		if (document.getElementById("male").checked) {
			setGender("male");
		} else {
			setGender("female");
		}

		if (document.getElementById("active").checked) {
			setStatus("active");
		} else {
			setStatus("inactive");
		}

		const newUser = { name, email, gender, status };
		console.log(newUser);

		// send data to the server
		fetch("http://localhost:5000/user", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newUser),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					Swal.fire({
						title: "Success!",
						text: "User added successfully",
						icon: "success",
						confirmButtonText: "Cool",
					});
				}
			});
	};
	return (
		<div>
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content flex-col">
					<div className="text-center lg:text-center">
						<h1 className="text-5xl font-bold">New User</h1>
						<p>Use the below form to create a new account</p>
					</div>
					<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
						<form onSubmit={handleAddUser} className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									type="name"
									name="name"
									placeholder="name"
									className="input input-bordered"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									name="email"
									placeholder="email"
									className="input input-bordered"
									required
								/>
							</div>
							<div className="flex items-center justify-between">
								<h2>Gender</h2>
								<div className="form-control">
									<label className="label cursor-pointer gap-2">
										<span className="label-text">Male</span>
										<input
											type="radio"
											name="radio-10"
											className="radio checked:bg-blue-500"
											id="male"
											defaultChecked
										/>
									</label>
								</div>
								<div className="form-control">
									<label className="label cursor-pointer gap-2">
										<span className="label-text">
											Female
										</span>
										<input
											type="radio"
											name="radio-10"
											id="female"
											className="radio checked:bg-blue-500"
											defaultChecked
										/>
									</label>
								</div>
							</div>
							<div className="flex items-center justify-between">
								<h2>Status</h2>
								<div className="form-control">
									<label className="label cursor-pointer gap-2">
										<span className="label-text">
											Active
										</span>
										<input
											type="radio"
											name="radio11"
											id="active"
											value="active"
											className="radio checked:bg-blue-500"
											defaultChecked
										/>
									</label>
								</div>
								<div className="form-control">
									<label className="label cursor-pointer gap-2">
										<span className="label-text">
											Inactive
										</span>
										<input
											type="radio"
											name="radio11"
											id="Inactive"
											value="inactive"
											className="radio checked:bg-blue-500"
											defaultChecked
										/>
									</label>
								</div>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">
									Add User
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddUser;
