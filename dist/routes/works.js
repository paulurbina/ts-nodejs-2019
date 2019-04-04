"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
// Model
const Works_1 = __importDefault(require("../models/Works"));
router.route('/create')
    .get((req, res) => {
    res.render('works/create');
})
    .post((req, res) => __awaiter(this, void 0, void 0, function* () {
    const { title, description } = req.body;
    const newWorks = new Works_1.default({ title, description });
    yield newWorks.save();
    res.redirect('/works/list');
}));
router.route('/list')
    .get((req, res) => __awaiter(this, void 0, void 0, function* () {
    const works = yield Works_1.default.find();
    res.render('works/list', { works });
}));
router.route('/delete/:id')
    .get((req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.params;
    yield Works_1.default.findByIdAndDelete(id);
    res.redirect('/works/list');
}));
router.route('/edit/:id')
    .get((req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.params;
    const works = yield Works_1.default.findById(id);
    res.render('works/edit', { works });
}))
    .post((req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, description } = req.body;
    yield Works_1.default.findByIdAndUpdate(id, { title, description });
    res.redirect('/works/list');
}));
exports.default = router;
