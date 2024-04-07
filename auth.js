const router = express.Router()

router.get('/login', (req, res) => {
    res.send('A GET route!')
})

// other auth routes:

module.exports = router