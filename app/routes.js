const UserController = require('./controllers/admin/UserController');
const LoginController = require('./controllers/admin/LoginController');
const authenticate = require('./auth/passport-local/authenticate');
const ClusterController = require('./controllers/ClusterController');
const GroupController = require('./controllers/GroupController');
const UnitController = require('./controllers/UnitController');
const RasiUserUnitController = require('./controllers/RasiUserUnitController');
const ApiController = require('./controllers/rasi/ApiController');
const MigrationController = require('./controllers/MigrationController');
const { generateToken } = require('./auth/passport-jwt/generateToken')

const { get, length } = require('lodash')
const axios = require('axios')

const axiosCookieJarSupport = require('axios-cookiejar-support').default;
const tough = require('tough-cookie');

const FormData = require('form-data');
module.exports = (app, passport) => {

    app.get('/returnURL', async (req, res) => {
        console.log('return')
    })

    app.get('/uauth', async (req, res) => {
        try {
            const username = 'sahil@rsiaccounting.com'
            const password = '10xPeople!'
            const rasi_login_page_url = 'http://localhost:52699/Account/Login?ReturnUrl=%2F'
            // const rasi_login_page_url = 'http://localhost:52699//Account/Login?ReturnUrl=%2F'
            const response = await axios.get(rasi_login_page_url)

            if (get(response, 'headers.set-cookie') == null) res.json('INVALID LOGIN :  NO COOKIES')

            let cookie = get(response, 'headers.set-cookie')
            cookie = cookie.join(';')


            if (get(response, 'data') == null) res.json('INVALID LOGIN :  NO PAGE DATA')
            const data = get(response, 'data')

            const tokenValue = (data.match(/<input name="__RequestVerificationToken".+?\/?>/g)[0]).match(/value=".+?"/g)

            let _token = ((tokenValue[0].split('value="'))[1]).slice(0, -1)
            console.log('COOKE', cookie);
            console.log('TOKEN', _token);

            const formData = new FormData()
            formData.append('Email', username)
            formData.append('Password', password)
            formData.append('__RequestVerificationToken', _token)
            formData.append('RememberMe', false)

            //  _token = 'CfDJ8GLdO4i4cadArI0Wn7FLJ8XE2TL1F4Fd_Sw4wung9fxy4T-xRWFtQ0u9QbRkK5cyrgQdjnIVzp5NT_DfDsbSA7mGr4YNs9vpaXvK-Xgltq91Uw3D6oDG4V2gbXuX2RGsG-qgimsCjE2wlHXgfc5VR1E'
            // cookie = 'MiagCYznfaI=CfDJ8GLdO4i4cadArI0Wn7FLJ8U_IV3FnL_GT5fVjv43wkJ19i6MmqAqN1O_TgzhPG3hZSRti0N21uxe7kAURsrMy3C_yBdeXU9Px08yfp0XTstqdAmINRRo2rQd2Oc4JJppGVBqkvoGQgeiDfBmUQZF_bo; path=/; httponly;UnitFilter=0; path=/'
            //http://localhost:70/http/post.php

            // let headers = formData.getHeaders()
            // headers.Cookie = cookie
            // headers.Referer = 'http://accounting.awsqa3.restacct.local/Account/Login?returnurl=%2F'



            config = {
                url: rasi_login_page_url,
                method: 'post',
                withCredentials: true,
                data: formData
            };
            const check_login = await axios.request(config);

            // const check_login = await axios.post(rasi_login_page_url, formData, { withCredentials: true })
            console.log('LOGIN RESPONSE', check_login)


        } catch (error) {
            console.log('ERROR', error)
            res.json(error)
        }

    })

    app.get('/bypass', async (req, res) => {
        try {
            console.log('bypass')
            axiosCookieJarSupport(axios)
            const cookieJar = new tough.CookieJar();

            const instance = await axios.create({
                jar: cookieJar,
                withCredentials: true,
                httpsAgent: new https.Agent({ rejectUnauthorized: false, requestCert: true, keepAlive: true })
            });
            const response = await instance.get('http://accounting.awsqa3.restacct.local/Account/Login?ReturnUrl=%2F');
            console.log(response);

            // instance.defaults.headers['x-csrf-token'] = res.data.csrf_token;

            // res = await instance.post('https://172.16.220.133/login', { username: name, password: pass });

            // console.log(res.statusCode);
            // console.log(res);
        } catch (error) {
            res.json(error)
        }
    })

    //login
    app.post('/login', (req, res) => LoginController.login(req, res, passport));
    app.get('/logout', (req, res) => LoginController.logout(req, res));

    // After passport authenticates , res.user returns the valid authenticated user
    app.get('/get_login', authenticate, (req, res) => res.json(req.user));

    //user
    app.get('/user/:id', authenticate, UserController.getByID);
    app.get('/users', authenticate, UserController.getAllUsers)
    app.post('/users', authenticate, UserController.createUser);
    app.put('/user/:id', authenticate, UserController.updateUser);
    app.delete('/user/:id', authenticate, UserController.deleteUser);

    //clusters
    app.get('/cluster/:id', authenticate, ClusterController.getByID);
    app.get('/clusters', authenticate, ClusterController.getAllClusters)
    app.post('/clusters', authenticate, ClusterController.createCluster);
    app.put('/cluster/:id', authenticate, ClusterController.updateCluster);
    app.delete('/cluster/:id', authenticate, ClusterController.deleteCluster);

    //groups
    app.get('/groups', authenticate, GroupController.getAllGroups)

    //units
    app.get('/units', authenticate, UnitController.getAllUnits)

    //rasi users
    app.get('/rasi-users', authenticate, RasiUserUnitController.getAllRasiUser)

    //populate from RASI APIS
    app.get('/rasi/populate-group/:cid', ApiController.populateGroup)
    app.get('/rasi/populate-unit/:cid', ApiController.populateUnit)
    app.get('/rasi/populate-user/:cid', ApiController.populateRasiUser)

    //migration
    app.get('/migrations', MigrationController.getMigrations)
    app.get('/migration/:id', MigrationController.getMigration);
    app.post('/migration', MigrationController.createMigration);
    app.put('/migration/:id', MigrationController.updateMigration);
    app.put('/migration/:id/cancel', MigrationController.cancelMigration);
    app.put('/migration/:id/reset', MigrationController.resetMigration);
    app.put('/migration/:id/start', MigrationController.startMigration);

    //get jwt token **pass valid email / password body **
    //   app.post('/get_token', generateToken)

    //JWT Auth middleware, place endpoints that requires jwt authentication
    //   app.use(passport.authenticate('jwt', { session: false }))
    //Endpoints get cluster info by unit / group / user
    app.get('/get-unit-cluster/:unitID', UnitController.getClusterByUnit)
    app.get('/get-group-cluster/:group', GroupController.getClusterByGroup)
    app.get('/get-user-cluster/:user', RasiUserUnitController.getClusterByRasiUser)

    app.get('/get-unit-pcluster/:unitID', UnitController.getProdClusterByUnit)
    app.get('/get-group-pcluster/:group', GroupController.getProdClusterByGroup)
    app.get('/get-user-pcluster/:user', RasiUserUnitController.getProdClusterByRasiUser)
}