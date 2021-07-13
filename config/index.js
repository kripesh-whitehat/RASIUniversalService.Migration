
require('dotenv').config({ path: process.env.NODE_ENV === 'production' ? `.//.env.${(process.env.NODE_ENV)}` : `.\\.env.${(process.env.NODE_ENV)}` });

module.exports = {
    "username": process.env.DB_USERNAME || 'postgres',
    "password": process.env.DB_PASSWORD || 'password',
    "database": process.env.DATABASE || 'rasi_universal_services',
    "host": process.env.HOST || '127.0.0.1',
    "port": process.env.DB_PORT || 5432,
    "migration_format_file_location": process.env.MIGRATION_FORMAT_FILE_LOC || '',
    "migration_export_file_location": process.env.MIGRATION_EXPORT_FILE_LOC || '',
    "secretOrKey": process.env.JWT_SECRET_OR_KEY || "R@s!UniS3r"
}
