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

-- Dumping structure for table gdj_database.experiance_pekerja
CREATE TABLE IF NOT EXISTS `experiance_pekerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pekerja` int(11) NOT NULL,
  `posisi` varchar(100) NOT NULL,
  `at_company` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `description` varchar(150) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.experiance_pekerja: ~0 rows (approximately)
/*!40000 ALTER TABLE `experiance_pekerja` DISABLE KEYS */;
INSERT INTO `experiance_pekerja` (`id`, `id_pekerja`, `posisi`, `at_company`, `date`, `description`, `created_at`, `updated_at`) VALUES
	(1, 1, 'Intern Web Developer', 'PT Komatsu Remanufacturing Asia', '2019-07-10', 'works as a web developer and do some improvements to systems that are error or need additional features', '2021-01-18 13:10:07', '0000-00-00 00:00:00'),
	(2, 1, 'Intern Web Developer', 'PT PLN UP2D', '2019-07-10', 'Works as web developer and debuging all system if the system have a trouble ', '2021-01-18 13:10:07', '0000-00-00 00:00:00');
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.hired_jobs: ~2 rows (approximately)
/*!40000 ALTER TABLE `hired_jobs` DISABLE KEYS */;
INSERT INTO `hired_jobs` (`id`, `id_recruiter`, `id_pekerja`, `files`, `jobs_needed`, `desc_jobs`, `created_at`) VALUES
	(1, 2, 1, '2021-01-18T13-29-45.036Z1570629091_1-org.jpeg', 'Freelance', 'Web Developer Junior Senior', '2021-01-18 13:29:45');
/*!40000 ALTER TABLE `hired_jobs` ENABLE KEYS */;

-- Dumping structure for table gdj_database.portofolio
CREATE TABLE IF NOT EXISTS `portofolio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pekerja` int(11) NOT NULL,
  `application_name` varchar(50) NOT NULL,
  `repo_link` varchar(50) NOT NULL,
  `type_portofolio` varchar(30) NOT NULL,
  `image_portofolio` varchar(150) NOT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.portofolio: ~1 rows (approximately)
/*!40000 ALTER TABLE `portofolio` DISABLE KEYS */;
INSERT INTO `portofolio` (`id`, `id_pekerja`, `application_name`, `repo_link`, `type_portofolio`, `image_portofolio`, `create_at`, `update_at`) VALUES
	(1, 1, 'WithMe', 'https://fortofolio-aing.web.app/', 'Web', '2021-01-18T13-19-54.482Zairbnb-clone.jpeg', '2021-01-18 13:19:54', '0000-00-00 00:00:00');
/*!40000 ALTER TABLE `portofolio` ENABLE KEYS */;

-- Dumping structure for table gdj_database.profile_pekerja
CREATE TABLE IF NOT EXISTS `profile_pekerja` (
  `id_pekerja` int(11) NOT NULL,
  `fullname_pekerja` varchar(100) NOT NULL,
  `job_desk` varchar(100) NOT NULL,
  `city_pekerja` varchar(50) NOT NULL,
  `job_require` varchar(50) NOT NULL,
  `status_jobs` enum('ON','OFF') NOT NULL DEFAULT 'OFF',
  `work_place` varchar(50) NOT NULL,
  `desc_pekerja` varchar(150) NOT NULL,
  `image_pekerja` varchar(150) NOT NULL,
  `instagram` varchar(100) NOT NULL,
  `linked` varchar(100) NOT NULL,
  `github` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  PRIMARY KEY (`id_pekerja`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.profile_pekerja: ~5 rows (approximately)
/*!40000 ALTER TABLE `profile_pekerja` DISABLE KEYS */;
INSERT INTO `profile_pekerja` (`id_pekerja`, `fullname_pekerja`, `job_desk`, `city_pekerja`, `job_require`, `status_jobs`, `work_place`, `desc_pekerja`, `image_pekerja`, `instagram`, `linked`, `github`, `created_at`, `update_at`) VALUES
	(1, 'Rudy Galih Putra Wijaya', 'Full Stack Developer', 'Balikpapan, Kalimantan Timur', 'Full Time', 'OFF', '', 'Hi, I\'m a full-stack developer who has experience in developing web applications. I learn programming languages i.e PHP, Vue.js, Express js, Node.js. ', '2021-01-18T12-59-01.351ZBiodataImage.jpeg', 'gaalleh', 'linkedin.com/in/rudygalihputrawijaya/', 'github.com/Cotllinz', '2021-01-18 12:37:04', '2021-01-18 12:59:01');
/*!40000 ALTER TABLE `profile_pekerja` ENABLE KEYS */;

-- Dumping structure for table gdj_database.profile_recruiter
CREATE TABLE IF NOT EXISTS `profile_recruiter` (
  `id_recruiter` int(11) NOT NULL,
  `city_recruiter` varchar(50) NOT NULL,
  `desc_recruiter` varchar(150) NOT NULL,
  `image_recruiter` varchar(150) NOT NULL,
  `social_media` varchar(100) NOT NULL,
  `linked_in` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  PRIMARY KEY (`id_recruiter`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.profile_recruiter: ~1 rows (approximately)
/*!40000 ALTER TABLE `profile_recruiter` DISABLE KEYS */;
INSERT INTO `profile_recruiter` (`id_recruiter`, `city_recruiter`, `desc_recruiter`, `image_recruiter`, `social_media`, `linked_in`, `created_at`, `update_at`) VALUES
	(2, 'Bogor, Jawa Barat', 'Software Recruiter at Arkademy', '2021-01-18T13-27-06.479Z-D.png', 'bagus_th15', 'bagus_th15', '2021-01-18 12:43:45', '2021-01-18 13:27:06');
/*!40000 ALTER TABLE `profile_recruiter` ENABLE KEYS */;

-- Dumping structure for table gdj_database.skills_pekerja
CREATE TABLE IF NOT EXISTS `skills_pekerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pekerja` int(11) NOT NULL,
  `skill_name` varchar(100) NOT NULL,
  `create_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.skills_pekerja: ~21 rows (approximately)
/*!40000 ALTER TABLE `skills_pekerja` DISABLE KEYS */;
INSERT INTO `skills_pekerja` (`id`, `id_pekerja`, `skill_name`, `create_at`) VALUES
	(1, 1, 'Vue.js', '2021-01-18 13:03:29'),
	(2, 1, 'Express.js', '2021-01-18 13:03:29'),
	(3, 1, 'Mysql', '2021-01-18 13:03:29'),
	(4, 1, 'PHP', '2021-01-18 13:03:29'),
	(5, 1, 'Vuex.js', '2021-01-18 13:03:29'),
	(6, 1, 'HTML', '2021-01-18 13:03:29'),
	(7, 1, 'Bootstraps', '2021-01-18 13:03:29');
/*!40000 ALTER TABLE `skills_pekerja` ENABLE KEYS */;

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.user_account: ~7 rows (approximately)
/*!40000 ALTER TABLE `user_account` DISABLE KEYS */;
INSERT INTO `user_account` (`id_user`, `username`, `email_user`, `token_confirmEmail`, `token_forgotPassword`, `user_password`, `company_name`, `jabatan`, `phone_number`, `roles`, `status_user`, `created_at`, `update_at`) VALUES
	(1, 'Cotlinz', 'ite.cchh@gmail.com', '89347e3e18381e7f8b01858a32dbd2', '', '$2b$10$RxFInqzkYyXY.EopT8qPBOYtzCaE5N1xaasVpdF6g3LvhjjfM/7Wm', '', '', '', 0, 'ON', '0000-00-00 00:00:00', '2021-01-18 12:37:26'),
	(2, 'Bagus TH', 'MentorArkademy@gmail.com', '4a163b08f30f8e256947d2346ee811', '', '$2b$10$d/IveC7gtcKg20a9DYGVpeCqlAhj8GxmKgYiV8rz4qvgOmkusOenK', 'Arkademy', '', '089345245124', 1, 'ON', '2021-01-18 12:43:45', '2021-01-18 13:27:06');
/*!40000 ALTER TABLE `user_account` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
