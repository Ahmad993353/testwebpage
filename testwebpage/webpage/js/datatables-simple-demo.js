window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki


		fetch('payload.json')
        .then(response => response.json())
        .then(data => {
          // Check if data is empty
          if (!data['driving-history'].length) {
            return;
          }

          // Get a reference to the table
          const table = document.querySelector('.table');

          // Set up the table using Simple-DataTables
		new window.simpleDatatables.DataTable(".table", {
            data: {
              headings: Object.keys(data['driving-history'][0]),
              data: data['driving-history'].map(event => Object.values(event))
            }
          });
        })
});
