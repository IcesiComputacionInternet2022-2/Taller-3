import http from "../http-common";
import Caripiare from "../types/caripiare.type"

class CaripiareDataService {

  createCaripiare(caripiare: Caripiare) {
    return http.post("/caripiares", caripiare);
  }

  getCaripiare(id: string) {
    return http.get(`/caripiares/id/${id}`);
  }

  getCaripiareAndParents(name: string) {
    return http.get(`/caripiares/name/${name}`);
  }

  getCaripiares() {
    return http.get("/caripiares");
  }

  updateCaripiare(caripiare: Caripiare, id: any) {
    return http.put(`/caripiares/id/${id}`, caripiare);
  }
}

export default new CaripiareDataService();