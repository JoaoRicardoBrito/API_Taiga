import type { Request, Response } from "express";
import { TaigaService } from "../services/taiga.service";

const taigaService = new TaigaService();

export class TaigaController {
  static async list(req: Request, res: Response) {
    try {
      const projects = await taigaService.listProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: "Erro ao listar projetos" });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const { name, description } = req.body;
      const project = await taigaService.createProject(name, description);
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar projeto" });
    }
  }
}