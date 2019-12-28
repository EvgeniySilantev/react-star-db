class SwapiService {

    _apiBase = 'http://swapi.co/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    getAllPeoples() {
        const res = this.getAllPeoples('/people/');
        return res.results;
    }


    getPerson(id) {
        return this.getAllPeoples(`/people/${id}/`);
    }

    getAllPlanets() {
        const res = this.getAllPeoples('/planets/');
        return res.results;
    }


    getPlanet(id) {
        return this.getAllPeoples(`/planets/${id}/`);
    }

    getAllStarships() {
        const res = this.getAllPeoples('/starships/');
        return res.results;
    }


    getStarship(id) {
        return this.getAllPeoples(`/starships/${id}/`);
    }
}

export default SwapiService
