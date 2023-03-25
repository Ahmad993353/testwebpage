window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    function loadData() {
        fetch('/data')
            .then(response => response.json())
            .then(data => {
                // Check if data is empty
                if (!data['driving-history'].length) {
                    return;
                }

                // Get a reference to the table
                const table = document.querySelector('.table');

                // Map the data in the desired order
                const myData = data['driving-history'];
                const mappedData = myData.map(event => [event.time, event.device_id, event.behavior, event.latitude, event.longitude, event.score]);

                // Set up the table using Simple-DataTables
                const dataTable = new window.simpleDatatables.DataTable(".table", {
                    data: {
                        data: mappedData
                    }
                });
            });
    }

    loadData();

    const refreshButton = document.getElementById('refresh-button');
    refreshButton.addEventListener('click', event => {
        loadData();
    });
});
