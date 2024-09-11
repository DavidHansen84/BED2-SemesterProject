class ProductService
 {
    constructor(db) {
        this.client = db.sequelize;
        this.Products = db.Products;
    }

    async getAll(prefix) {
        const sql = `SELECT * FROM [SalesLT].[Customer] WHERE LastName LIKE '${prefix}%'`;
        return this.client.query(sql, { type: this.client.QueryTypes.SELECT });
    }

}
module.exports = ProductService
;