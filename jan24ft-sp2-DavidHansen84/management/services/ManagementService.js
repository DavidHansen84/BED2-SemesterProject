class ManagementService {
    constructor(db) {
        this.client = db.sequelize;
    }

    async getQueryA() {
        const sql = `SELECT DISTINCT * FROM [SalesLT].[ProductCategory]
        WHERE ParentProductCategoryID IS NULL
        ORDER BY Name ASC;`;
        return this.client.query(sql, { type: this.client.QueryTypes.SELECT });
    }

    async getQueryB() {
        const sql = `SELECT  c.Name, AVG(p.ListPrice) as Price
        FROM [SalesLT].[ProductCategory] c JOIN [SalesLT].[Product] p ON c.ProductCategoryID = p.ProductCategoryID
        GROUP BY c.Name
        ORDER BY Price DESC;`;
        return this.client.query(sql, { type: this.client.QueryTypes.SELECT });
    }

    async getQueryC() {
        const sql = `SELECT pc.Name as Name, AVG(p.ListPrice) as Price
        FROM [SalesLT].[ProductCategory] pc
        JOIN [SalesLT].[ProductCategory] c ON pc.ProductCategoryID = c.ParentProductCategoryID
        JOIN [SalesLT].[Product] p ON c.ProductCategoryID = p.ProductCategoryID
        GROUP BY pc.Name
        ORDER BY Price ASC;`;
        return this.client.query(sql, { type: this.client.QueryTypes.SELECT });
    }

    async getQueryD() {
        const sql = `SELECT COUNT(*) AS Total 
        FROM [SalesLT].[SalesOrderHeader] AS s 
        WHERE s.OrderDate BETWEEN '2008-06-01T00:00:00.000' AND '2008-06-15T00:00:00.000';`;
        return this.client.query(sql, { type: this.client.QueryTypes.SELECT });
    }
    
    async getQueryE() {
        const sql = `SELECT CustomerID, FirstName, LastName  
        FROM [SalesLT].[Customer]
        WHERE FirstName LIKE 'a%'
        INTERSECT
        SELECT CustomerID, FirstName, LastName  
        FROM [SalesLT].[Customer]
        WHERE LastName LIKE '%e'`;
        return this.client.query(sql, { type: this.client.QueryTypes.SELECT });
    }

    async getQueryF() {
        const sql = `SELECT c.Title, c.FirstName, c.MiddleName, c.LastName, c.CompanyName, a.City, a.CountryRegion, a.StateProvince
        FROM [SalesLT].[Customer] c 
        INNER JOIN [SalesLT].[CustomerAddress] ca ON ca.CustomerID = c.CustomerID
        INNER JOIN [SalesLT].[Address] a ON a.AddressID = ca.AddressID`;
        return this.client.query(sql, { type: this.client.QueryTypes.SELECT });
    }

    async getQueryG() {
        const sql = `SELECT p.ProductNumber, m.Name, p.Color 
        FROM [SalesLT].[Product] p 
        INNER JOIN [SalesLT].[ProductModel] m ON m.ProductModelID = p.ProductModelID
        WHERE p.Color IS NOT NULL`;
        return this.client.query(sql, { type: this.client.QueryTypes.SELECT });
    }

    async getQueryH() {
        const sql = `SELECT p.Name, od.UnitPrice, od.OrderQty, od.LineTotal  
        FROM [SalesLT].[Product] p 
        INNER JOIN [SalesLT].[SalesOrderDetail] od ON od.ProductID = p.ProductID`;
        return this.client.query(sql, { type: this.client.QueryTypes.SELECT });
    }
    
}
module.exports = ManagementService
    ;