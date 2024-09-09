-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 09-Set-2024 às 19:48
-- Versão do servidor: 5.7.40
-- versão do PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `datagridview`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `n_id_produto` int(11) NOT NULL AUTO_INCREMENT,
  `s_nome_produto` varchar(255) NOT NULL,
  `s_marca_produto` varchar(255) NOT NULL,
  `s_modelo_produto` varchar(255) NOT NULL,
  PRIMARY KEY (`n_id_produto`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`n_id_produto`, `s_nome_produto`, `s_marca_produto`, `s_modelo_produto`) VALUES
(1, 'Processador', 'AMD', 'Ryzen3 3200g'),
(4, 'Memória Ram', 'Random', '8gb DDR4'),
(2, 'Teclado', 'Aliexpress', 'Teclado de Luizinha'),
(6, 'Placa-Mãe', 'Gigabyte', 'a320m s2h');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
