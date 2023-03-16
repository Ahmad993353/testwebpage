			fetch("payload.json").then(
                response => response.json()
            ).then(
                data => {
                    if (!data.length) {
                        return
                    }
                    new window.simpleDatatables.DataTable(".table", {
                        data: {
                            headings: Object.keys(data[0]),
                            data: data.map(item => Object.values(item))
                        }
                    })
                }
            )