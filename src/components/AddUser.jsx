import Swal from "sweetalert2";

const AddUser = () => {
	const handleAddUser = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;

		const newUser = { name, email };
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
