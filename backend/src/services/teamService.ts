import Team from '../database/models/Team';

export default class TeamService {
  public teamModel = Team;

  public async createTeam(team_name: string) {
    const newTeam = await this.teamModel.create({ team_name });
    return newTeam;
  }

  public async getAllTeams() {
    const teams = await this.teamModel.findAll();
    return teams;
  }
}
