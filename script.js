fields = {
	"userid": /^\w{5,12}$/,
	"password": /^\S{7,12}$/,
	"name": /^[\w\s^\d]{5,30}$/,
	"address": /.*/,
	"country": /.+/,
	"zipcode": /^\d{5,12}/,
	"email": /^[\w-]+\@[\w-]+\.[\w]+$/,
	"gender": /^[a-z]*$/,
	"language": /^\w$/,
	"About": /.*/
};
