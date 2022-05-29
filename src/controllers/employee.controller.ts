import { Request, Response } from 'express';
import { CallbackError } from 'mongoose';
import Employee from '../models/employee/employee.model.js';

export const getAll = (req: Request, res: Response) => {
  Employee.find()
    .then((employees) => res.json(employees))
    .catch((err: CallbackError) =>
      res.status(500).json({ name: err?.name, msg: err?.message })
    );
};

export const getById = (req: Request, res: Response) => {
  const id: string | undefined = req.params.id;
  Employee.findById(id)
    .then((employee) => res.json(employee))
    .catch((err) => res.status(404).json({ error: err }));
};

export const create = (req: Request, res: Response) => {
  const emp = new Employee(req.body);
  console.log('body', req.body);
  console.log('emp', emp);
  emp
    .validate()
    .then(() => emp.save())
    .then(() => res.json(emp))
    .catch((err) => res.status(409).json({ error: err }));
};

export const deleteById = (req: Request, res: Response) => {
  const id: string | undefined = req.params.id;
  Employee.findByIdAndDelete(id)
    .then((employee) => res.json(employee))
    .catch((err) => res.status(404).json({ error: err }));
};

export const updateById = (req: Request, res: Response) => {
  const id: string | undefined = req.params.id;
  Employee.findByIdAndUpdate(id, req.body)
    .then((employee) => Employee.findById(employee?.id))
    .then((updatedEmp) => res.json(updatedEmp))
    .catch((err) => res.status(404).json({ error: err }));
};
