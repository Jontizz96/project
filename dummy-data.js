exports.humans = [{
	id: 1,
	name: "Alice",
	age: 10
}, {
	id: 2,
	name: "Bob",
	age: 15
}, {
	id: 3,
	name: "Claire",
	age: 20
}]

exports.guestbook = [{

	email: "email",
	name: "name",
	datetime: "datetime",
	text: "What to send",
	primarykey: "email"
}]
	
exports.blogpostUsers = [{
	users: "users",
	id: "id",
	username: "username",
	email: "email",
	role: "role",
	password: "password",
	created_at: "created",
	updated_at: "updated",
	primarykey: "id"
}]

exports.blogpostPosts = [{
	id: "id",
	user_id: "user-id",
	title: "title",
	slug: "slug",
	views: "views",
	image: "image",
	body: "body",
	published: "published",
	created_at: "created",
	updated_at: "updated",
	foreignkey: "user-id"
}]
	
exports.portfolio = [{
	id: 1,
	name: "Create entrie",
	info: "Create a entrie in the portfolio"
}, {
	id: 2,
	name: "Delete entrie",
	info: "Delete a unwanted entrie"
}, {
	id: 3,
	name: "Update entrie",
	info: "Make changes to an existing entrie"
}, {
	id: 4,
	name: "Retrieve an entrie",
	info: "Take a look at one of my entries"
}]