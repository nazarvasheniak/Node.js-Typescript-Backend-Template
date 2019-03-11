const config = {
    sequelize: {
        connectionString: 'mysql://root:password@localhost:3306/dbname',
        options: {
            define: {
                charset: 'utf8',
                dialectOptions: {
                    collate: 'utf8mb4_unicode_ci'
                }
            }
        }
    },
    port: {
        http: 80,
        https: 443
    }
};

export default config;