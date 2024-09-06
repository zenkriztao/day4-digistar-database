"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(userUseCase) {
        this.getAllUsers = async (req, res, next) => {
            try {
                const users = await this.userUseCase.getAllUsers();
                res.json(users);
            }
            catch (error) {
                next(error);
            }
        };
        this.getUserById = async (req, res, next) => {
            try {
                const user = await this.userUseCase.getUserById(req.params.userId);
                res.json(user);
            }
            catch (error) {
                next(error);
            }
        };
        this.createUser = async (req, res, next) => {
            try {
                const newUser = await this.userUseCase.createUser(req.body);
                res.status(201).json(newUser);
            }
            catch (error) {
                next(error);
            }
        };
        this.updateUser = async (req, res, next) => {
            try {
                const updatedUser = await this.userUseCase.updateUser(req.params.userId, req.body);
                res.json(updatedUser);
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteUser = async (req, res, next) => {
            try {
                await this.userUseCase.deleteUser(req.params.userId);
                res.status(204).send();
            }
            catch (error) {
                next(error);
            }
        };
        this.userUseCase = userUseCase;
    }
}
exports.UserController = UserController;
