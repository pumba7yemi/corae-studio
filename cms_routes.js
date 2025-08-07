
// Define routes to pull or sync CMS data
import express from 'express';
import { fetchCMSContent } from './cms_connector.js';

const router = express.Router();

router.get('/cms/:endpoint', async (req, res) => {
    const data = await fetchCMSContent(req.params.endpoint);
    res.json(data);
});

export default router;
