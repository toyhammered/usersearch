$(document).on('page:change',function() {
	var users;


	var allMatches = function(strs) {
		return function findMatches(q, cb) {
			var matches;
			matches = [];
			console.log("Variable strs: ");

			$.each(strs, function(i, str){
				
				console.log("Everything: ", val.id, val.email);
				matches.push({value: str});
			});
			console.log("All Matches: ", matches);
			cb(matches);
		};		
	};

	$('#the-basics .typeahead').on('click', function() {
		console.log("Typeahead Change: ");
		var query = $('.typeahead').val(); // this is technically incorrect code but will work forn ow
		$.ajax({
			method: "POST",
			url: "users/search",
			dataType: "json",
			data: {query: query}
		}).done(function(data){
			users = data;
			

		});
		console.log("Users are: ", users);
		// console.log("Emails are: ", emails);

		$('#the-basics .typeahead').typeahead({
			hint: true,
			highlight: true,
			minLength: 1,
		},

		{
			name: 'usernames',
			displayKey:'value',
			source: allMatches(users),
			templates:{
				empty: [
				'<div class="empty-message">',
				'No username matches found.',
				'</div>'
				].join('\n'),
				suggestion: function(username){
					// return '<div id="user-selection">' +
					// '<p><strong>' + username.value + '</strong></p>' +
					// '<img src="' + gravatars[usernames.indexOf(username.value)] + '"/>' +
					// '</div>' ;
				}
			}
		});
	}); // end of on typeahead selected

}); // end of document page change



