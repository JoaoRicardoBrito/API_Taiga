import axios from "axios";
import { env } from "../config/env";

export class TaigaService {
  private baseURL = "https://api.taiga.io/api/v1";
  private token: string | null = null;

  private async authenticate() {
    const response = await axios.post(`${this.baseURL}/auth`, {
      type: "normal",
      username: env.taigaUsername,
      password: env.taigaPassword,
    });

    this.token = response.data.auth_token;
  }

  private async getClient() {
    if (!this.token) {
      await this.authenticate();
    }

    return axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: `Bearer ${this.token}`,
        "Content-Type": "application/json",
      },
    });
  }

  async listProjects() {
    const client = await this.getClient();
    const response = await client.get("/projects");
    return response.data;
  }

  async createProject(name: string, description: string) {
    const client = await this.getClient();
    const response = await client.post("/projects", {
      name,
      description,
      is_private: false,
    });

    return response.data;
  }
}