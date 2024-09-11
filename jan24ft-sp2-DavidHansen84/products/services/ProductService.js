class ProductService
 {
    constructor(db) {
        this.client = db.sequelize;
    }

    async getOne(id) {
        const sql = `SELECT * FROM [SalesLT].[Product] WHERE ProductID = ${id}`;
        return this.client.query(sql, { type: this.client.QueryTypes.SELECT });
    }

    async getCategory(id) {
        const sql = `SELECT Name FROM [SalesLT].[ProductCategory] WHERE ProductCategoryID = ${id}`;
        return this.client.query(sql, { type: this.client.QueryTypes.SELECT });
    }

    async getModel(id) {
        const sql = `SELECT Name FROM [SalesLT].[ProductModel] WHERE ProductmodelID = ${id}`;
        return this.client.query(sql, { type: this.client.QueryTypes.SELECT });
    }

}
module.exports = ProductService
;