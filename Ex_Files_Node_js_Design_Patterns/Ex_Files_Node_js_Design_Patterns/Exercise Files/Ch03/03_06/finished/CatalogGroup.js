// This class is like a branch, branch can have other branches
class CatalogGroup {

    // composites can be items or groups, so tree structure is maintained
    constructor(name, composites=[]) {
        this.name = name;
        this.composites = composites;
    }

    get total() {
        return this.composites.reduce((total, nextItem) => total + nextItem.total,0);
    }

    print() {
        console.log(`\n${this.name.toUpperCase()}`);
        this.composites.forEach(item => item.print());
    }
    
}

module.exports = CatalogGroup;
