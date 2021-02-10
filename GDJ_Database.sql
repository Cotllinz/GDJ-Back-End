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

-- Dumping structure for table gdj_database.chat
CREATE TABLE IF NOT EXISTS `chat` (
  `chatId` int(10) NOT NULL AUTO_INCREMENT,
  `roomIdUniq` int(10) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `sender` int(5) DEFAULT NULL,
  `receiver` int(5) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`chatId`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.chat: ~12 rows (approximately)
/*!40000 ALTER TABLE `chat` DISABLE KEYS */;
INSERT INTO `chat` (`chatId`, `roomIdUniq`, `message`, `sender`, `receiver`, `createdAt`) VALUES
	(54, 818935, 'waalaikum salam', 2, 1, '2021-02-09 10:06:40'),
	(55, 128071, 'Job Opportunity\n\n        Hi Dream Job seeker,\n        \n        I would like to recruit you for new opportunity, may i have your contact number for further information?\n        \n        regards,\n        Talent Acquisition\n        ', 2, 3, '2021-02-09 13:45:16'),
	(56, 128071, 'pompom', 2, 3, '2021-02-09 13:45:25'),
	(57, 818935, 'sad', 1, 2, '2021-02-09 17:15:06'),
	(58, 128071, 'das', 2, 3, '2021-02-09 18:54:37'),
	(59, 818935, 'asd', 2, 1, '2021-02-09 18:58:12'),
	(60, 818935, 'zxc', 2, 1, '2021-02-09 18:58:16'),
	(61, 818935, 'xc12', 2, 1, '2021-02-09 18:58:30'),
	(62, 818935, 'wqeqw', 2, 1, '2021-02-09 18:58:32'),
	(63, 128071, 'qwe', 2, 3, '2021-02-09 18:58:37'),
	(64, 818935, 'asad', 2, 1, '2021-02-09 18:59:00'),
	(65, 818935, 'zxczc', 2, 1, '2021-02-09 18:59:03');
/*!40000 ALTER TABLE `chat` ENABLE KEYS */;

-- Dumping structure for table gdj_database.experiance_pekerja
CREATE TABLE IF NOT EXISTS `experiance_pekerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pekerja` int(11) DEFAULT NULL,
  `posisi` varchar(100) DEFAULT NULL,
  `at_company` varchar(50) DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  `description` varchar(150) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.experiance_pekerja: ~2 rows (approximately)
/*!40000 ALTER TABLE `experiance_pekerja` DISABLE KEYS */;
INSERT INTO `experiance_pekerja` (`id`, `id_pekerja`, `posisi`, `at_company`, `date`, `description`, `created_at`, `updated_at`) VALUES
	(1, 1, 'Intern Web Developer', 'PT Komatsu Remanufacturing Asia', '2019-07-10', 'works as a web developer and do some improvements to systems that are error or need additional features', '2021-01-18 13:10:07', '0000-00-00 00:00:00'),
	(2, 1, 'Intern Web Developer', 'PT PLN UP2D', '2019-07-10', 'Works as web developer and debuging all system if the system have a trouble ', '2021-01-18 13:10:07', '0000-00-00 00:00:00');
/*!40000 ALTER TABLE `experiance_pekerja` ENABLE KEYS */;

-- Dumping structure for table gdj_database.hired_jobs
CREATE TABLE IF NOT EXISTS `hired_jobs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_recruiter` int(11) DEFAULT NULL,
  `id_pekerja` int(11) DEFAULT NULL,
  `files` varchar(150) DEFAULT NULL,
  `read_status` enum('ON','OFF') NOT NULL DEFAULT 'OFF',
  `jobs_needed` varchar(50) DEFAULT NULL,
  `desc_jobs` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.hired_jobs: ~2 rows (approximately)
/*!40000 ALTER TABLE `hired_jobs` DISABLE KEYS */;
INSERT INTO `hired_jobs` (`id`, `id_recruiter`, `id_pekerja`, `files`, `read_status`, `jobs_needed`, `desc_jobs`, `created_at`) VALUES
	(3, 2, 3, '', 'ON', 'need', 'Cok', '2021-02-09 13:43:35'),
	(4, 2, 3, '', 'ON', 'need', 'Cok', '2021-02-09 13:45:16');
/*!40000 ALTER TABLE `hired_jobs` ENABLE KEYS */;

-- Dumping structure for table gdj_database.portofolio
CREATE TABLE IF NOT EXISTS `portofolio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pekerja` int(11) DEFAULT NULL,
  `application_name` varchar(50) DEFAULT NULL,
  `repo_link` varchar(50) DEFAULT NULL,
  `type_portofolio` varchar(30) DEFAULT NULL,
  `image_portofolio` varchar(150) DEFAULT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime DEFAULT NULL,
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
  `fullname_pekerja` varchar(100) DEFAULT NULL,
  `job_desk` varchar(100) DEFAULT NULL,
  `city_pekerja` varchar(50) DEFAULT NULL,
  `job_require` varchar(50) DEFAULT NULL,
  `status_jobs` enum('ON','OFF') NOT NULL DEFAULT 'OFF',
  `work_place` varchar(50) DEFAULT NULL,
  `desc_pekerja` varchar(150) DEFAULT NULL,
  `image_pekerja` varchar(150) DEFAULT NULL,
  `instagram` varchar(100) DEFAULT NULL,
  `linked` varchar(100) DEFAULT NULL,
  `github` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id_pekerja`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.profile_pekerja: ~2 rows (approximately)
/*!40000 ALTER TABLE `profile_pekerja` DISABLE KEYS */;
INSERT INTO `profile_pekerja` (`id_pekerja`, `fullname_pekerja`, `job_desk`, `city_pekerja`, `job_require`, `status_jobs`, `work_place`, `desc_pekerja`, `image_pekerja`, `instagram`, `linked`, `github`, `created_at`, `update_at`) VALUES
	(1, 'Rudy Galih Putra Wijaya', 'Full Stack Developer', 'Balikpapan, Kalimantan Timur', 'Full Time', '', 'Jakarta', 'Hi, I\'m a full-stack developer who has experience in developing web applications. I learn programming languages i.e PHP, Vue.js, Express js, Node.js. ', '', 'gaalleh', 'linkedin.com/in/rudygalihputrawijaya/', 'github.com/Cotllinz', '2021-01-18 12:37:04', '2021-02-09 19:51:10'),
	(3, 'Rudy Galih Putra Wijaya', 'Full Stack Developer', 'Balikpapan, Kalimantan Timur', 'Freelance', '', 'Singapore', 'Hi, I\'m a full-stack developer who has experience in developing web applications. I learn programming languages i.e PHP, Vue.js, Express js, Node.js. ', '2021-02-09T14-34-27.375Z-images.jfif', 'gaalleh', 'linkedin.com/in/rudygalihputrawijaya/', 'github.com/Cotllinz', '2021-02-09 13:07:10', '2021-02-09 22:34:27');
/*!40000 ALTER TABLE `profile_pekerja` ENABLE KEYS */;

-- Dumping structure for table gdj_database.profile_recruiter
CREATE TABLE IF NOT EXISTS `profile_recruiter` (
  `id_recruiter` int(11) NOT NULL,
  `city_recruiter` varchar(50) DEFAULT NULL,
  `desc_recruiter` varchar(150) DEFAULT NULL,
  `image_recruiter` varchar(150) DEFAULT NULL,
  `social_media` varchar(100) DEFAULT NULL,
  `linked_in` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id_recruiter`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.profile_recruiter: ~1 rows (approximately)
/*!40000 ALTER TABLE `profile_recruiter` DISABLE KEYS */;
INSERT INTO `profile_recruiter` (`id_recruiter`, `city_recruiter`, `desc_recruiter`, `image_recruiter`, `social_media`, `linked_in`, `created_at`, `update_at`) VALUES
	(2, 'Bogor, Jawa Barat', 'Software Recruiter at Arkademy', '2021-02-09T14-14-11.403Z-index.jpg', 'bagus_th15', 'bagus_th15', '2021-01-18 12:43:45', '2021-02-09 22:14:11');
/*!40000 ALTER TABLE `profile_recruiter` ENABLE KEYS */;

-- Dumping structure for table gdj_database.roomchat
CREATE TABLE IF NOT EXISTS `roomchat` (
  `roomId` int(10) NOT NULL AUTO_INCREMENT,
  `roomIdUniq` int(10) DEFAULT NULL,
  `sender` int(10) DEFAULT NULL,
  `receiver` int(10) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`roomId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.roomchat: ~4 rows (approximately)
/*!40000 ALTER TABLE `roomchat` DISABLE KEYS */;
INSERT INTO `roomchat` (`roomId`, `roomIdUniq`, `sender`, `receiver`, `createdAt`, `updatedAt`) VALUES
	(1, 818935, 2, 1, '2021-01-31 18:51:57', '2021-01-31 18:51:57'),
	(2, 818935, 1, 2, '2021-01-31 18:51:57', '2021-01-31 18:51:57'),
	(5, 128071, 2, 3, '2021-02-09 13:45:16', '2021-02-09 13:45:16'),
	(6, 128071, 3, 2, '2021-02-09 13:45:16', '2021-02-09 13:45:16');
/*!40000 ALTER TABLE `roomchat` ENABLE KEYS */;

-- Dumping structure for table gdj_database.skills_pekerja
CREATE TABLE IF NOT EXISTS `skills_pekerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pekerja` int(11) DEFAULT NULL,
  `skill_name` varchar(100) DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.skills_pekerja: ~9 rows (approximately)
/*!40000 ALTER TABLE `skills_pekerja` DISABLE KEYS */;
INSERT INTO `skills_pekerja` (`id`, `id_pekerja`, `skill_name`, `create_at`) VALUES
	(1, 1, 'Vue.js', '2021-01-18 13:03:29'),
	(2, 1, 'Express.js', '2021-01-18 13:03:29'),
	(3, 1, 'Mysql', '2021-01-18 13:03:29'),
	(4, 1, 'PHP', '2021-01-18 13:03:29'),
	(5, 1, 'Vuex.js', '2021-01-18 13:03:29'),
	(6, 1, 'HTML', '2021-01-18 13:03:29'),
	(7, 1, 'Bootstraps', '2021-01-18 13:03:29'),
	(8, 3, 'Javascript', '2021-02-09 13:11:19'),
	(10, 3, 'PHP', '2021-02-09 13:42:26');
/*!40000 ALTER TABLE `skills_pekerja` ENABLE KEYS */;

-- Dumping structure for table gdj_database.user_account
CREATE TABLE IF NOT EXISTS `user_account` (
  `id_user` int(15) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `email_user` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `token_confirmEmail` varchar(100) DEFAULT NULL,
  `token_forgotPassword` varchar(100) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `company_name` varchar(100) DEFAULT NULL,
  `jabatan` varchar(100) DEFAULT NULL,
  `phone_number` varchar(50) DEFAULT NULL,
  `roles` tinyint(4) NOT NULL DEFAULT 0,
  `status_user` enum('ON','OFF') NOT NULL DEFAULT 'OFF',
  `created_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table gdj_database.user_account: ~3 rows (approximately)
/*!40000 ALTER TABLE `user_account` DISABLE KEYS */;
INSERT INTO `user_account` (`id_user`, `username`, `email_user`, `token_confirmEmail`, `token_forgotPassword`, `user_password`, `company_name`, `jabatan`, `phone_number`, `roles`, `status_user`, `created_at`, `update_at`) VALUES
	(1, 'Cotlinz', 'ite.cchh@gmail.com', '89347e3e18381e7f8b01858a32dbd2', '', '$2b$10$ztjraC0MqTjnxoQFtV5dLuVRWH0Xi6ef4sCWBwx5bUdH05j6NDoxe', '', '', '', 0, 'ON', '0000-00-00 00:00:00', '2021-01-18 12:37:26'),
	(2, 'Bagus TH', 'MentorArkademy@gmail.com', '4a163b08f30f8e256947d2346ee811', '', '$2b$10$d/IveC7gtcKg20a9DYGVpeCqlAhj8GxmKgYiV8rz4qvgOmkusOenK', 'Arkademy', '', '089345245124', 1, 'ON', '2021-01-18 12:43:45', '2021-02-09 22:14:11'),
	(3, 'POMPOM', 'POMPO@gmail.com', 'a976bf0913019d6fc4ad7514df264a', '', '$2b$10$ztjraC0MqTjnxoQFtV5dLuVRWH0Xi6ef4sCWBwx5bUdH05j6NDoxe', '', '', '', 0, 'ON', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
/*!40000 ALTER TABLE `user_account` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
