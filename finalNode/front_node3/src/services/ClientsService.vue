<script>
    const myApiUrl = "http://localhost:3000/clients/";

    export default {
        getClients () {
            return fetch(myApiUrl)
                .then ((response) => {
                    return response.json();
                })
        },
        createClient(businessName, adresseRue, adresseVille, adresseCP, refName, refFirstname, refTel, refMail, secteur) {
            fetch(myApiUrl, {
                method:'post',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(
                    {
                        "businessName":businessName,
                        "adresseRue":adresseRue,
                        "adresseVille": adresseVille,
                        "adresseCP": adresseCP,
                        "refName":refName,
                        "refFirstname" : refFirstname,
                        "refTel" : refTel,
                        "refMail": refMail,
                        "secteur": secteur,
                    }
                )
            })
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
        },
        deleteClient(id) {
            fetch(myApiUrl + id, {
                method:'delete',
            })
                .then((response) => {
                    return response.json();
                })
        },
        editClient(id, businessName, adresseRue, adresseVille, adresseCP, refName, refFirstname, refTel, refMail, secteur) {
            fetch(myApiUrl +id, {
                method:'put',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(
                    {
                        "businessName":businessName,
                        "adresseRue":adresseRue,
                        "adresseVille": adresseVille,
                        "adresseCP": adresseCP,
                        "refName":refName,
                        "refFirstname" : refFirstname,
                        "refTel" : refTel,
                        "refMail": refMail,
                        "secteur": secteur,
                    }
                )
            })
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
        },
        getClient(id) {
            return fetch(myApiUrl + id)
                .then((response) => {
                    return response.json();
                })
        }
    }
</script>