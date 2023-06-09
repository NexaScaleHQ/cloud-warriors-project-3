const CustomerService = require("../services/product-service");

module.exports = (app) => {

    const service = new CustomerService();

    app.use('/app-events', async (req, res, next) => {

        const { payload } = req.body;
        service.SubscribeEvents(payload);

        console.log('=============== Products Service recovered Event ===============');
        return res.status(200).json(payload);



    });
}
