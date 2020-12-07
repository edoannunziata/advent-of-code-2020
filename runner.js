function solve(n) {
    const solutionModule = require(`./js/${String(n).padStart(2, '0')}`);
    solutionModule.solve();    
}

module.exports = {
    solve
}