-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 08 Feb 2021 pada 15.20
-- Versi server: 10.4.14-MariaDB
-- Versi PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gdj_database`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `chat`
--

CREATE TABLE `chat` (
  `chatId` int(10) NOT NULL,
  `roomIdUniq` int(10) NOT NULL,
  `message` varchar(300) NOT NULL,
  `sender` int(5) NOT NULL,
  `receiver` int(5) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `chat`
--

INSERT INTO `chat` (`chatId`, `roomIdUniq`, `message`, `sender`, `receiver`, `createdAt`) VALUES
(51, 882128, 'hello admin', 2, 3, '2021-02-02 10:19:20'),
(52, 882128, 'iya kenapa', 3, 2, '2021-02-02 10:19:37'),
(53, 882128, 'aa', 2, 3, '2021-02-02 10:38:05');

-- --------------------------------------------------------

--
-- Struktur dari tabel `experiance_pekerja`
--

CREATE TABLE `experiance_pekerja` (
  `id` int(11) NOT NULL,
  `id_pekerja` int(11) NOT NULL,
  `posisi` varchar(100) NOT NULL,
  `at_company` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `description` varchar(150) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `experiance_pekerja`
--

INSERT INTO `experiance_pekerja` (`id`, `id_pekerja`, `posisi`, `at_company`, `date`, `description`, `created_at`, `updated_at`) VALUES
(1, 1, 'Intern Web Developer', 'PT Komatsu Remanufacturing Asia', '2019-07-10', 'works as a web developer and do some improvements to systems that are error or need additional features', '2021-01-18 13:10:07', '0000-00-00 00:00:00'),
(2, 1, 'Intern Web Developer', 'PT PLN UP2D', '2019-07-10', 'Works as web developer and debuging all system if the system have a trouble ', '2021-01-18 13:10:07', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `hired_jobs`
--

CREATE TABLE `hired_jobs` (
  `id` int(11) NOT NULL,
  `id_recruiter` int(11) NOT NULL,
  `id_pekerja` int(11) NOT NULL,
  `files` varchar(150) NOT NULL,
  `jobs_needed` varchar(50) NOT NULL,
  `desc_jobs` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `hired_jobs`
--

INSERT INTO `hired_jobs` (`id`, `id_recruiter`, `id_pekerja`, `files`, `jobs_needed`, `desc_jobs`, `created_at`) VALUES
(1, 2, 1, '2021-01-18T13-29-45.036Z1570629091_1-org.jpeg', 'Freelance', 'Web Developer Junior Senior', '2021-01-18 13:29:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `portofolio`
--

CREATE TABLE `portofolio` (
  `id` int(11) NOT NULL,
  `id_pekerja` int(11) NOT NULL,
  `application_name` varchar(50) NOT NULL,
  `repo_link` varchar(50) NOT NULL,
  `type_portofolio` varchar(30) NOT NULL,
  `image_portofolio` varchar(150) NOT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `portofolio`
--

INSERT INTO `portofolio` (`id`, `id_pekerja`, `application_name`, `repo_link`, `type_portofolio`, `image_portofolio`, `create_at`, `update_at`) VALUES
(1, 1, 'WithMe', 'https://fortofolio-aing.web.app/', 'Web', '2021-01-18T13-19-54.482Zairbnb-clone.jpeg', '2021-01-18 13:19:54', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `profile_pekerja`
--

CREATE TABLE `profile_pekerja` (
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
  `update_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `profile_pekerja`
--

INSERT INTO `profile_pekerja` (`id_pekerja`, `fullname_pekerja`, `job_desk`, `city_pekerja`, `job_require`, `status_jobs`, `work_place`, `desc_pekerja`, `image_pekerja`, `instagram`, `linked`, `github`, `created_at`, `update_at`) VALUES
(1, 'Rudy Galih Putra Wijaya', 'Full Stack Developer', 'Balikpapan, Kalimantan Timur', 'Full Time', 'OFF', '', 'Hi, I\'m a full-stack developer who has experience in developing web applications. I learn programming languages i.e PHP, Vue.js, Express js, Node.js. ', '2021-01-18T12-59-01.351ZBiodataImage.jpeg', 'gaalleh', 'linkedin.com/in/rudygalihputrawijaya/', 'github.com/Cotllinz', '2021-01-18 12:37:04', '2021-01-18 12:59:01');

-- --------------------------------------------------------

--
-- Struktur dari tabel `profile_recruiter`
--

CREATE TABLE `profile_recruiter` (
  `id_recruiter` int(11) NOT NULL,
  `city_recruiter` varchar(50) NOT NULL,
  `desc_recruiter` varchar(150) NOT NULL,
  `image_recruiter` varchar(150) NOT NULL,
  `social_media` varchar(100) NOT NULL,
  `linked_in` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `profile_recruiter`
--

INSERT INTO `profile_recruiter` (`id_recruiter`, `city_recruiter`, `desc_recruiter`, `image_recruiter`, `social_media`, `linked_in`, `created_at`, `update_at`) VALUES
(2, 'Bogor, Jawa Barat', 'Software Recruiter at Arkademy', '2021-01-18T13-27-06.479Z-D.png', 'bagus_th15', 'bagus_th15', '2021-01-18 12:43:45', '2021-01-18 13:27:06');

-- --------------------------------------------------------

--
-- Struktur dari tabel `roomchat`
--

CREATE TABLE `roomchat` (
  `roomId` int(10) NOT NULL,
  `roomIdUniq` int(10) NOT NULL,
  `sender` int(10) NOT NULL,
  `receiver` int(10) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `roomchat`
--

INSERT INTO `roomchat` (`roomId`, `roomIdUniq`, `sender`, `receiver`, `createdAt`, `updatedAt`) VALUES
(1, 818935, 2, 1, '2021-01-31 18:51:57', '2021-01-31 18:51:57'),
(2, 818935, 1, 2, '2021-01-31 18:51:57', '2021-01-31 18:51:57'),
(3, 882128, 2, 3, '2021-01-31 22:29:42', '2021-01-31 22:29:42'),
(4, 882128, 3, 2, '2021-01-31 22:29:42', '2021-01-31 22:29:42');

-- --------------------------------------------------------

--
-- Struktur dari tabel `skills_pekerja`
--

CREATE TABLE `skills_pekerja` (
  `id` int(11) NOT NULL,
  `id_pekerja` int(11) NOT NULL,
  `skill_name` varchar(100) NOT NULL,
  `create_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `skills_pekerja`
--

INSERT INTO `skills_pekerja` (`id`, `id_pekerja`, `skill_name`, `create_at`) VALUES
(1, 1, 'Vue.js', '2021-01-18 13:03:29'),
(2, 1, 'Express.js', '2021-01-18 13:03:29'),
(3, 1, 'Mysql', '2021-01-18 13:03:29'),
(4, 1, 'PHP', '2021-01-18 13:03:29'),
(5, 1, 'Vuex.js', '2021-01-18 13:03:29'),
(6, 1, 'HTML', '2021-01-18 13:03:29'),
(7, 1, 'Bootstraps', '2021-01-18 13:03:29');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_account`
--

CREATE TABLE `user_account` (
  `id_user` int(15) NOT NULL,
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
  `update_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user_account`
--

INSERT INTO `user_account` (`id_user`, `username`, `email_user`, `token_confirmEmail`, `token_forgotPassword`, `user_password`, `company_name`, `jabatan`, `phone_number`, `roles`, `status_user`, `created_at`, `update_at`) VALUES
(1, 'Cotlinz', 'ite.cchh@gmail.com', '89347e3e18381e7f8b01858a32dbd2', '', '$2b$10$RxFInqzkYyXY.EopT8qPBOYtzCaE5N1xaasVpdF6g3LvhjjfM/7Wm', '', '', '', 0, 'ON', '0000-00-00 00:00:00', '2021-01-18 12:37:26'),
(2, 'Bagus TH', 'MentorArkademy@gmail.com', '4a163b08f30f8e256947d2346ee811', '', '$2b$10$d/IveC7gtcKg20a9DYGVpeCqlAhj8GxmKgYiV8rz4qvgOmkusOenK', 'Arkademy', '', '089345245124', 1, 'ON', '2021-01-18 12:43:45', '2021-01-18 13:27:06');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`chatId`);

--
-- Indeks untuk tabel `experiance_pekerja`
--
ALTER TABLE `experiance_pekerja`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `hired_jobs`
--
ALTER TABLE `hired_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `portofolio`
--
ALTER TABLE `portofolio`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `profile_pekerja`
--
ALTER TABLE `profile_pekerja`
  ADD PRIMARY KEY (`id_pekerja`);

--
-- Indeks untuk tabel `profile_recruiter`
--
ALTER TABLE `profile_recruiter`
  ADD PRIMARY KEY (`id_recruiter`);

--
-- Indeks untuk tabel `roomchat`
--
ALTER TABLE `roomchat`
  ADD PRIMARY KEY (`roomId`);

--
-- Indeks untuk tabel `skills_pekerja`
--
ALTER TABLE `skills_pekerja`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user_account`
--
ALTER TABLE `user_account`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `chat`
--
ALTER TABLE `chat`
  MODIFY `chatId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT untuk tabel `experiance_pekerja`
--
ALTER TABLE `experiance_pekerja`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `hired_jobs`
--
ALTER TABLE `hired_jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `portofolio`
--
ALTER TABLE `portofolio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `roomchat`
--
ALTER TABLE `roomchat`
  MODIFY `roomId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `skills_pekerja`
--
ALTER TABLE `skills_pekerja`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `user_account`
--
ALTER TABLE `user_account`
  MODIFY `id_user` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
