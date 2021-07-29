const path = require('path')
const env = require('dotenv').config({path: path.join(__dirname, `./../.env.${process.env.NODE_ENV}`)})
const config = env.parsed || {};

module.exports = {
    "username": config.USERNAME || 'postgres',
    "password": config.DB_PASSWORD || 'password',
    "database": config.DATABASE || 'rasi_universal_services',
    "host": config.HOST || '127.0.0.1',
    "port": config.DB_PORT || 5432,
    "dialect": config.DIALECT || 'postgres',
    "migration_format_file_location": config.MIGRATION_FORMAT_FILE_LOC || '',
    "migration_export_file_location": config.MIGRATION_EXPORT_FILE_LOC || '',
    "secretOrKey": config.JWT_SECRET_OR_KEY || "R@s!UniS3r",
    "apiAuthenticationSecret": config.API_AUTHENTICATION_SECRET || "r@s!Api@utHSecr3T",
    "serverUrl": config.CLIENT_SERVER_URL || "http://localhost:3000",
    "rasiRetrievalAPIUrl" : config.RASI_RETRIEVAL_API_URL || "",
}
