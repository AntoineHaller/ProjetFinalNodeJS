<script>
    const myApiUrl = "http://localhost:3000/salaries/";

    export default {
        getSalaries () {
            return fetch(myApiUrl)
                .then ((response) => {
                    return response.json();
                })
        },
        createSalarie(name, firstname, birthDate, adresseRue, adresseVille, adresseCP, tel, mail, position) {
            fetch(myApiUrl, {
                method:'post',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(
                    {
                        "name":name,
                        "firstname":firstname,
                        "birthDate" : birthDate,
                        "adresseRue":adresseRue,
                        "adresseVille": adresseVille,
                        "adresseCP": adresseCP,
                        "tel": tel,
                        "mail": mail,
                        "position": position
                    }
                )
            })
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
        },
        deleteSalarie(id) {
            fetch(myApiUrl + id, {
                method:'delete',
            })
                .then((response) => {
                    return response.json();
                })
        },
        editSalarie(id, name, firstname, birthDate, adresseRue, adresseVille, adresseCP, tel, mail, position) {
            fetch(myApiUrl +id, {
                method:'put',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(
                    {
                        "name":name,
                        "firstname":firstname,
                        "birthDate" : birthDate,
                        "adresseRue":adresseRue,
                        "adresseVille": adresseVille,
                        "adresseCP": adresseCP,
                        "tel": tel,
                        "mail": mail,
                        "position": position
                    }
                )
            })
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
        },
        getSalarie(id) {
            return fetch(myApiUrl + id)
                .then((response) => {
                    return response.json();
                })
        }
    }
</script>