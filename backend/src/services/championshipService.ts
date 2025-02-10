import Championship from '../database/models/Championship';

export default class ChampionshipService {
  public championshipModel = Championship;

  public async createChampionship(championship_name: string) {
    const championship = await this.championshipModel.create({ championship_name });
    return championship;
  }

  public async getAllChampionships() {
    const championships = await this.championshipModel.findAll();
    return championships;
  }
}
