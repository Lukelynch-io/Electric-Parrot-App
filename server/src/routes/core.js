import express from 'express';
const router = express.Router();
import bitcoinCore from 'bitcoin-request-handler';

const coreHandler = new bitcoinCore('lnd', 'lightning', 'localhost', 18443);

router.get("/getbestblockhash", async (req, res) => {
    const response = await coreHandler.sendBtcCliCommand('getbestblockhash');
    delete(response.error);
    delete(response.id);
    // if (error)
    res.send(response);
})

router.post("/transactionDetected", (req, res) => {
    console.log(req.body);
    res.send({});
})

export default router;