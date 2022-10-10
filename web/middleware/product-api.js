import { Shopify } from "@shopify/shopify-api";
import {Product} from '@shopify/shopify-api/dist/rest-resources/2022-10/index.js';

export default function productEndpoints(app) {
    app.get("/api/products", async (req, res) => {
        const session = await Shopify.Utils.loadCurrentSession(
            req,
            res,
            app.get("use-online-tokens")
        );
        const products = await Product.all({ session });
        res.status(200).send(products);
    })

    app.get("/api/products/:id", async (req, res) => {
        const session = await Shopify.Utils.loadCurrentSession(
            req,
            res,
            app.get("use-online-tokens")
        );
        const products = await Product.find({
            session,
            id: req.params.id,
        });

        console.log(products);
    })
}
