const router = require('express').Router();
const jobController = require('../controllers/jobsController');
const authorization = require('../middleware/authorization');
const imageMulter = require('../middleware/multer')
const imageKit = require('../middleware/imageKit')

router.get('/company', jobController.getCompanies);
router.get('/', jobController.getJobs);
router.post('/', imageMulter, imageKit, jobController.postJobs);
router.get('/:id', jobController.getIdJobs);
router.put('/:id', authorization, imageMulter, imageKit, jobController.putIdJobs);
router.delete('/:id', authorization, jobController.putIdDeleteJobs);

module.exports = router