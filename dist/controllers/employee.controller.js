import Employee from '../models/employee/employee.model.js';
export const getAll = (req, res) => {
    Employee.find()
        .then((employees) => res.json(employees))
        .catch((err) => res.status(500).json({ name: err === null || err === void 0 ? void 0 : err.name, msg: err === null || err === void 0 ? void 0 : err.message }));
};
export const getById = (req, res) => {
    const id = req.params.id;
    Employee.findById(id)
        .then((employee) => res.json(employee))
        .catch((err) => res.status(404).json({ error: err }));
};
export const create = (req, res) => {
    const emp = new Employee(req.body);
    console.log('body', req.body);
    console.log('emp', emp);
    emp
        .validate()
        .then(() => emp.save())
        .then(() => res.json(emp))
        .catch((err) => res.status(409).json({ error: err }));
};
export const deleteById = (req, res) => {
    const id = req.params.id;
    Employee.findByIdAndDelete(id)
        .then((employee) => res.json(employee))
        .catch((err) => res.status(404).json({ error: err }));
};
export const updateById = (req, res) => {
    const id = req.params.id;
    Employee.findByIdAndUpdate(id, req.body)
        .then((employee) => Employee.findById(employee === null || employee === void 0 ? void 0 : employee.id))
        .then((updatedEmp) => res.json(updatedEmp))
        .catch((err) => res.status(404).json({ error: err }));
};
