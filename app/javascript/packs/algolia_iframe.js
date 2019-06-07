// function algolia () {

//   var placesAutocomplete = places({
//     appId: "<%= ENV['ALGOLIA_ID'] %>",
//     apiKey:"<%= ENV['ALGOLIA_AP_KEY'] %>",
//  container: document.querySelector('#form-address'),
//  // style: false,
//     templates: {
//       value: function(suggestion) {
//         return suggestion.name;
//       }
//     }
//   }).configure({
//     type: 'address'
//   });
//   placesAutocomplete.on('change', function resultSelected(e) {
//     document.querySelector('#form-address2').value = e.suggestion.administrative || '';
//     document.querySelector('#form-city').value = e.suggestion.city || '';
//     document.querySelector('#form-zip').value = e.suggestion.postcode || '';
//   });
// }

// export {algolia}
