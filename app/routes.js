const UserController = require('./controllers/admin/UserController');
const LoginController = require('./controllers/admin/LoginController');
const authenticate = require('./auth/passport-local/authenticate');
const ClusterController = require('./controllers/ClusterController');
const GroupController = require('./controllers/GroupController');
const UnitController = require('./controllers/UnitController');
const RasiUserUnitController = require('./controllers/RasiUserUnitController');
const ApiController = require('./controllers/rasi/ApiController');
const MigrationController = require('./controllers/MigrationController');
const ClusterCheckerController = require('./controllers/ClusterCheckerController');

const { authenticateApi } = require('./auth/auth-api/authenticate-api');
const UniversalLoginController = require('./controllers/rasi/UniversalLoginController');

module.exports = (app, passport) => {
    //universal login
    app.post('/universal-login', UniversalLoginController.login)

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

    //get jwt token **pass valid userSecret **
    //app.post('/get_token', generateToken)

    //JWT Auth middleware, place endpoints that requires jwt authentication
    app.use(authenticateApi)
    //Endpoints get cluster info by unit / group / user
    app.get('/get-unit-cluster/:unitID', UnitController.getClusterByUnit)
    app.get('/get-group-cluster/:group', GroupController.getClusterByGroup)
    app.get('/get-user-cluster/:user', RasiUserUnitController.getClusterByRasiUser)

    app.get('/get-unit-pcluster/:unitID', UnitController.getProdClusterByUnit)
    app.get('/get-group-pcluster/:group', GroupController.getProdClusterByGroup)
    app.get('/get-user-pcluster/:user', RasiUserUnitController.getProdClusterByRasiUser)
    app.get('/cluster_check_by_unit/:clusterName/:unitId', ClusterCheckerController.findClusterByUnit)
    app.get('/cluster_check_by_group/:clusterName/:groupName', ClusterCheckerController.findClusterByGroup)

    //get-all-universal-infos
    app.get('/get-clusters',ClusterController.getAllClustersSpecificInfo)
}