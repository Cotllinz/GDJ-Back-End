-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.11-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for gdj_database
CREATE DATABASE IF NOT EXISTS `gdj_database` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `gdj_database`;

-- Dumping structure for table gdj_database.user_account
CREATE TABLE IF NOT EXISTS `user_account` (
  `id_user` int(15) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email_user` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `jabatan` varchar(100) NOT NULL,
  `phone_number` varchar(50) NOT NULL,
  `roles` tinyint(4) NOT NULL DEFAULT 0,
  `status_user` enum('ON','OFF') NOT NULL DEFAULT 'OFF',
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.user_account: ~0 rows (approximately)
/*!40000 ALTER TABLE `user_account` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_account` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
