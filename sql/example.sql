-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- 主機: 127.0.0.1
-- 產生時間： 2019-03-19 08:41:45
-- 伺服器版本: 5.7.14
-- PHP 版本： 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `example`
--
CREATE DATABASE IF NOT EXISTS `example` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `example`;

-- --------------------------------------------------------

--
-- 資料表結構 `salary_history`
--

CREATE TABLE IF NOT EXISTS `salary_history` (
  `memId` varchar(50) NOT NULL,
  `startDateTime` datetime NOT NULL,
  `salary` int(11) NOT NULL,
  `reason` varchar(100) NOT NULL,
  PRIMARY KEY (`memId`,`startDateTime`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `salary_history`
--

INSERT INTO `salary_history` (`memId`, `startDateTime`, `salary`, `reason`) VALUES
('0001', '2014-07-01 00:00:00', 100000, '到職起薪'),
('0001', '2016-02-01 00:00:00', 110000, '年度調薪'),
('0001', '2017-02-01 00:00:00', 120000, '年度調薪'),
('0002', '2014-07-01 00:00:00', 90000, '到職起薪'),
('0002', '2016-02-01 00:00:00', 100000, '年度調薪'),
('0002', '2017-02-01 00:00:00', 110000, '年度調薪'),
('0003', '2017-01-14 00:00:00', 80000, '到職起薪'),
('0003', '2017-11-22 00:00:00', 90000, '績效優異加薪'),
('0004', '2017-06-17 00:00:00', 70000, '到職起薪'),
('0002', '2019-02-20 00:00:00', 140000, '測試1'),
('0005', '2019-02-20 00:00:00', 22000, '起薪隨便給啦'),
('0001', '2019-02-21 00:00:00', 123456, '測試'),
('0002', '2019-02-23 00:00:00', 130000, '測試'),
('0001', '2019-02-23 00:00:00', 150000, 'test 1'),
('0003', '2019-02-23 00:00:00', 90000, 'whatever'),
('0004', '2019-02-23 00:00:00', 80000, 'test'),
('0005', '2019-02-23 00:00:00', 23000, 'test');

-- --------------------------------------------------------

--
-- 資料表結構 `test_member`
--

CREATE TABLE IF NOT EXISTS `test_member` (
  `memId` varchar(50) NOT NULL,
  `memName` varchar(50) NOT NULL,
  `memPwd` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `isResigned` char(1) NOT NULL DEFAULT 'N',
  `lastModified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`memId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `test_member`
--

INSERT INTO `test_member` (`memId`, `memName`, `memPwd`, `title`, `isResigned`, `lastModified`) VALUES
('0001', '陶亦白 Brian', '0001', '總經理兼資訊專業服務處總監', 'N', '2019-02-20 18:03:26'),
('0002', '陳文琪 Claire 1', '0002', '副總經理兼銀行事業服務處總監', 'N', '2019-02-20 21:14:43'),
('0003', '朱容慧 Judy', '0003', '軟體工程師', 'N', '2017-07-22 14:47:45'),
('0004', '王建麟 Louis', '0004', '軟體工程師', 'N', '2017-07-22 14:47:24'),
('0005', '無名氏 NoName', '0005', '行政助理', 'N', '2017-07-22 14:47:45');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
