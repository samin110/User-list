async function fetchApi() {
	await fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then((list) => {
			let html = '';
			list.forEach(element => {
				if (element.id >= 7) {
				} else {
					html +=
						`
				<div class="table-card">
						<table >
							<thead>
								<tr class="ta-head">
									<th>Id</th>
								</tr>
								<tr class="ta-head">
									<th>Name</th>
								</tr>
								<tr class="ta-head">
									<th>Username</th>
								</tr>
								<tr class="ta-head">
									<th>Email</th>
								</tr>
								<tr class="ta-head">
									<th>Address</th>
								</tr>
								<tr class="ta-head">
									<th>Phone</th>
								</tr>
								<tr class="ta-head">
									<th>company</th>
								</tr>
								<tr class="ta-head">
									<th>Web</th>
								</tr>
							</thead>
							<tbody>
								<tr class="ta-head">
									<td style="background-color:#2ab82f; color:white; padding:6px; border-radius:30%;">${element.id}</td>
								</tr>
								<tr class="ta-head">
									<td>${element.name}</td>
								</tr>
								<tr class="ta-head">
									<td>${element.username}</td>
								</tr>
								<tr class="ta-head">
									<td>${element.email}</td>
								</tr>
								<tr class="ta-head">
									<td>${element.address.street}-${element.address.city}</td>
								</tr>
								<tr class="ta-head">
									<td>${element.phone}</td>
								</tr>
								<tr class="ta-head">
									<td>${element.company.name}</td>
								</tr>
								<tr class="ta-head">
									<td><a href="https://www.${element.website}" style="color:#2ab82f; text-align:center;" ><i class="fas fa-link"></i></a></td>
								</tr>
							</tbody>
						</table>
					</div>`;
				}

			});
			document.querySelector('.table-list').innerHTML = html;
		})
}
fetchApi();



/** Event for click button Add User  */

document.querySelector('.button i').addEventListener('click', addUser);

async function addUser() {
	await fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then((list) => {
			let html = '';
			list.forEach(element => {
				if (element.id >= 7) {
					html +=
						`
			<div class="table-card">
					<table>
						<thead>
							<tr class="ta-head">
								<th>Id</th>
							</tr>
							<tr class="ta-head">
								<th>Name</th>
							</tr>
							<tr class="ta-head">
								<th>Username</th>
							</tr>
							<tr class="ta-head">
								<th>Email</th>
							</tr>
							<tr class="ta-head">
								<th>Address</th>
							</tr>
							<tr class="ta-head">
								<th>Phone</th>
							</tr>
							<tr class="ta-head">
								<th>company</th>
							</tr>
							<tr class="ta-head">
								<th>Web</th>
							</tr>
						</thead>
						<tbody>
							<tr class="ta-head">
								<td style="background-color:#2ab82f; color:white; padding:6px; border-radius:30%;">${element.id}</td>
							</tr>
							<tr class="ta-head">
								<td>${element.name}</td>
							</tr>
							<tr class="ta-head">
								<td>${element.username}</td>
							</tr>
							<tr class="ta-head">
								<td>${element.email}</td>
							</tr>
							<tr class="ta-head">
								<td>${element.address.street}-${element.address.city}</td>
							</tr>
							<tr class="ta-head">
								<td>${element.phone}</td>
							</tr>
							<tr class="ta-head">
								<td>${element.company.name}</td>
							</tr>
							<tr class="ta-head">
								<td><a href="https://www.${element.website}" style="color:#2ab82f; text-align:center;" ><i class="fas fa-link"></i></a></td>
							</tr>
						</tbody>
					</table>
				</div>`;
				}



			});
			document.querySelector('.table-list').innerHTML = html;
		})
}




