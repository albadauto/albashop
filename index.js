/**
 * @author José Adauto
 * Date: 04/09/2021
 * project: albashop
 */


const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

/**
 * Main config
 */

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')


/**
 * Routes
 */



/**
 * Others
 */
app.listen(process.env.SERVER_PORT, () => {
    console.log('Servidor conectado')
})