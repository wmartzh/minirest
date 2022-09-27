import { Request, Response } from "express";
import exampleService from "../services/example.service";
class ExampleController {
  helloWorld(_req: Request, res: Response) {
    res.send(exampleService.getMessage());
  }
}

export default new ExampleController();
