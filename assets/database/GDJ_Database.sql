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

-- Dumping structure for table gdj_database. skills_pekerja
CREATE TABLE IF NOT EXISTS ` skills_pekerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pekerja` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database. skills_pekerja: ~0 rows (approximately)
/*!40000 ALTER TABLE ` skills_pekerja` DISABLE KEYS */;
/*!40000 ALTER TABLE ` skills_pekerja` ENABLE KEYS */;

-- Dumping structure for table gdj_database.experiance_pekerja
CREATE TABLE IF NOT EXISTS `experiance_pekerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pekerja` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.experiance_pekerja: ~0 rows (approximately)
/*!40000 ALTER TABLE `experiance_pekerja` DISABLE KEYS */;
/*!40000 ALTER TABLE `experiance_pekerja` ENABLE KEYS */;

-- Dumping structure for table gdj_database.hired_jobs
CREATE TABLE IF NOT EXISTS `hired_jobs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_recruiter` int(11) NOT NULL,
  `id_pekerja` int(11) NOT NULL,
  `files` varchar(150) NOT NULL,
  `jobs_needed` varchar(50) NOT NULL,
  `desc_jobs` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.hired_jobs: ~0 rows (approximately)
/*!40000 ALTER TABLE `hired_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `hired_jobs` ENABLE KEYS */;

-- Dumping structure for table gdj_database.portofolio
CREATE TABLE IF NOT EXISTS `portofolio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pekerja` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.portofolio: ~0 rows (approximately)
/*!40000 ALTER TABLE `portofolio` DISABLE KEYS */;
/*!40000 ALTER TABLE `portofolio` ENABLE KEYS */;

-- Dumping structure for table gdj_database.profile_pekerja
CREATE TABLE IF NOT EXISTS `profile_pekerja` (
  `id_pekerja` int(11) NOT NULL,
  `fullname_pekerja` varchar(100) NOT NULL,
  `job_desk` varchar(100) NOT NULL,
  `city_pekerja` varchar(50) NOT NULL,
  `status_jobs` varchar(50) NOT NULL,
  `work_place` varchar(50) NOT NULL,
  `desc_pekerja` varchar(150) NOT NULL,
  `image_pekerja` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  PRIMARY KEY (`id_pekerja`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.profile_pekerja: ~0 rows (approximately)
/*!40000 ALTER TABLE `profile_pekerja` DISABLE KEYS */;
/*!40000 ALTER TABLE `profile_pekerja` ENABLE KEYS */;

-- Dumping structure for table gdj_database.profile_recruiter
CREATE TABLE IF NOT EXISTS `profile_recruiter` (
  `id_recruiter` int(11) NOT NULL,
  `city_recruiter` varchar(50) NOT NULL,
  `desc_recruiter` varchar(150) NOT NULL,
  `image_recruiter` varchar(100) NOT NULL,
  `social_media` varchar(100) NOT NULL,
  `linked_in` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  PRIMARY KEY (`id_recruiter`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.profile_recruiter: ~2 rows (approximately)
/*!40000 ALTER TABLE `profile_recruiter` DISABLE KEYS */;
INSERT INTO `profile_recruiter` (`id_recruiter`, `city_recruiter`, `desc_recruiter`, `image_recruiter`, `social_media`, `linked_in`, `created_at`, `update_at`) VALUES
	(1, '', '', '', '', '', '2021-01-14 11:58:56', '0000-00-00 00:00:00'),
	(2, '', '', '', '', '', '2021-01-14 12:00:49', '0000-00-00 00:00:00');
/*!40000 ALTER TABLE `profile_recruiter` ENABLE KEYS */;

-- Dumping structure for table gdj_database.user_account
CREATE TABLE IF NOT EXISTS `user_account` (
  `id_user` int(15) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email_user` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `token_confirmEmail` varchar(100) NOT NULL,
  `token_forgotPassword` varchar(100) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `jabatan` varchar(100) NOT NULL,
  `phone_number` varchar(50) NOT NULL,
  `roles` tinyint(4) NOT NULL DEFAULT 0,
  `status_user` enum('ON','OFF') NOT NULL DEFAULT 'OFF',
  `created_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.user_account: ~0 rows (approximately)
/*!40000 ALTER TABLE `user_account` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_account` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
