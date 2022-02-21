"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
function listDocs(req, res) {
    res.json({
        items: [
            { name: 'One', count: 3 },
            { name: 'Two', count: 1 },
            { name: 'Win', count: 42 },
            { name: 'Will', count: 0 },
            { name: 'This', count: -1 },
            { name: 'overflow?', count: 2 },
        ],
    });
}
function main() {
    const PORT = process.env.PORT || 8080;
    // Serve the React static files after build
    app.use(express_1.default.static('client/build'));
    app.get('/docs', listDocs);
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}
main();
//# sourceMappingURL=index.js.map