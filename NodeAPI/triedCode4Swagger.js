//https://blog.logrocket.com/documenting-your-express-api-with-swagger/

//https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do

/**
*  @swagger
*   components:
*     schemas:
*       Product:
*         type: object
*         required:
*           - name
*         properties:
*           name:
*             type: string
*             description: The title of your book.
*           price:
*             type: number
*             description: Who wrote the book?
*           desc:
*             type: string
*             description: Have you finished reading it?
*           rating:
*             type: string             
*             description: The date of the record creation.
*         example:
*            name: The Pragmatic Programmer
*            price: Andy Hunt / Dave Thomas
*            desc: test
*/



/**
 * @swagger
 * /api/savenproduct:
 *  post:
 *      summary : add a new product
 *      requestBody:
 *          required: true
 *      content:
 *          application/x-www-form-urlencoded:
 *      schema:
 *          type: object
 *          properties:
 *              name:       # <!--- form field name
 *                  type: string
 *              price:      # <!--- form field name
 *                  type: integer
 *          required:
 *              - name
 *      responses:
 *          '200':
 *           description: save a product to db
 */