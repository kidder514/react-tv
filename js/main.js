(function(){
	"use strict";

	// var capObject = document.getElementById("capabilities");
	// var capVerifier = new app.CapVerifier(capObject);
	// capVerifier.toString(capVerifier.profileArr);

	// var HelloMessage = React.createClass({
	// 	render: function(){
	// 		return <div>hello {this.props.name}</div> ;
	// 	}
	// });

	// ReactDOM.render(
	// 	<HelloMessage name="John" />
	// 	document.getElementById("comment-app")
	// );


	// var Hello = React.createClass({
	//   displayName: 'Hello',
	//   render: function() {
	//     return React.createElement("div", null, "Hello ", this.props.name);
	//   }
	// });

	// ReactDOM.render(React.createElement(Hello, {name: "World"}),document.getElementById('content'));

  var ui =
    React.createElement("div", {}, 
      	React.createElement("ul", {}, 
      		React.createElement("li",{}, 
      			React.createElement("img", {src : "https://www.movieposter.com/posters/archive/main/226/MPW-113357"})
      			),
      		React.createElement("li",{} ,
      			React.createElement("img", {src : "http://www.freedesign4.me/wp-content/gallery/posters/free-movie-film-poster-the_dark_knight_movie_poster.jpg"})
      			),
      		React.createElement("li",{} ,
      			React.createElement("img", {src : "http://cdn.mos.cms.futurecdn.net/15399e7a7b11a8c2ef28511107c90c6f.jpg"})
      			),
      		React.createElement("li",{} ,
      			React.createElement("img", {src : "http://cdn.collider.com/wp-content/uploads/shutter-island-movie-poster.jpg"})
      			),
      		React.createElement("li",{} ,
      			React.createElement("img", {src : "http://www.hollywoodreporter.com/sites/default/files/custom/Blog_Images/avengers-movie-poster-1.jpg"})
      			)
      		)
      	);


    ReactDOM.render(ui, document.getElementById('container'));

})();

