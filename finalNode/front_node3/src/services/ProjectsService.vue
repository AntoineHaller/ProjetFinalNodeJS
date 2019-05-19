<script>
    const myApiUrl = "http://localhost:3000/projects/";

    export default {
        getProjects () {
            return fetch(myApiUrl)
                .then ((response) => {
                    return response.json();
                })
        },
        createProject(name, desc, startDate, endDate, price, status) {
            fetch(myApiUrl, {
                method:'post',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(
                    {
                        "name":name,
                        "desc":desc,
                        "startDate" : startDate,
                        "endDate":endDate,
                        "price": price,
                        "status": status
                    }
                )
            })
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
        },
        deleteProject(id) {
            fetch(myApiUrl + id, {
                method:'delete',
            })
            .then((response) => {
                return response.json();
            })
        },
        editProject(id, name, desc, startDate, endDate, price, status) {
            fetch(myApiUrl +id, {
                method:'put',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(
                    {
                        "name":name,
                        "desc":desc,
                        "startDate" : startDate,
                        "endDate":endDate,
                        "price": price,
                        "status": status
                    }
                )
            })
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
        },
        getProject(id) {
            return fetch(myApiUrl + id)
                .then((response) => {
                    return response.json();
                })
        }
    }
</script>