<?php

//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL cookie settings
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'pontof69_wp59513' );

/** Database username */
define( 'DB_USER', 'pontof69_wp59513' );

/** Database password */
define( 'DB_PASSWORD', '4Uip68(Sp)' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'htf4oirv6gg5bqgmv0xxknu0vl5orhrrbkwhoytoyyatx3vnbg6mbrhlk6zxakqf' );
define( 'SECURE_AUTH_KEY',  'alpsjjb62kvt1jmzw3frhaj47q4nf9mw92hho9jryzm9e2kxpo5w71qfbxkayjyk' );
define( 'LOGGED_IN_KEY',    'wsl9dszjfito4dth9qclnc96h4yimah0cpqn0wzwiol8cyevhseipyxlbojledw1' );
define( 'NONCE_KEY',        'hzw1dphzjxwpatd068zffzymqeujrsiuujsxi8ygmvmshidvfnhmd9j0eevuagd0' );
define( 'AUTH_SALT',        '4sftkklpoxow0xoux8xhejabwci8pgvrnu4ksd12ogfyx8iwykfgyxjy94pw3pef' );
define( 'SECURE_AUTH_SALT', 'lfji1e1wilsrpwxxcnsdkzvnx2bgsl8aaf5biup2ty0mdks3io5akflsnm2zoxol' );
define( 'LOGGED_IN_SALT',   'pwftpl2ai20l5jrj0zhkal7j9isgu5ydbbuavkqqlvek8ghh7toanwcnhpdmptdi' );
define( 'NONCE_SALT',       'diyntwvfw4kwag3dogl2nlg6xzjl77jnog6uftaxqeghh2vdelhi3ikxywfpct4y' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpip_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

define( 'WP_AUTO_UPDATE_CORE', 'minor' );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
