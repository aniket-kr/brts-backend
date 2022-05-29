import EmployeeType from '../models/employeeType/employeeType.model.js';
export const getAll = (req, res) => {
    EmployeeType.find()
        .sort({ title: 1 })
        .then((types) => res.json(types))
        .catch((err) => res.status(500).json({ error: err }));
};
export const getById = (req, res) => {
    const id = req.params.id;
    EmployeeType.findById(id).then((eType) => { });
};
export const create = (req, res) => {
    var _a;
    const title = ((_a = req.body) === null || _a === void 0 ? void 0 : _a.title).toUpperCase().trim();
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
export const updateById = (req, res) => {
    const id = req.params.id;
    EmployeeType.findByIdAndUpdate(id);
};
