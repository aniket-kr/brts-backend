import { Request, Response } from 'express';
import EmployeeType from '../models/employeeType/employeeType.model.js';

export const getAll = (req: Request, res: Response) => {
  EmployeeType.find()
    .sort({ title: 1 })
    .then((types) => res.json(types))
    .catch((err) => res.status(500).json({ error: err }));
};

export const getById = (req: Request, res: Response) => {
  const id: string = req.params.id;
  EmployeeType.findById(id).then((eType) => {});
};

export const create = (req: Request, res: Response) => {
  const title = (req.body?.title as string).toUpperCase().trim();
  EmployeeType.findOne({ title })
    .then((type) => {
      if (type) {
        throw new Error(`EmployeeType '${type.title}' already exists!`);
      }
      const newType = new EmployeeType({ title });
      return newType.save();
    })
    .then((newType) => res.json(newType))
    .catch((err) => res.status(409).json({ error: err }));
};

export const updateById = (req: Request, res: Response) => {
  const id: string = req.params.id;
  EmployeeType.findByIdAndUpdate(id);
};
