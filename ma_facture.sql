-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : ven. 18 juin 2021 à 14:15
-- Version du serveur :  5.7.24
-- Version de PHP : 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ma_facture`
--

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id_client` int(11) NOT NULL,
  `cin_client` int(11) NOT NULL,
  `nom_client` varchar(255) NOT NULL,
  `prenom_client` varchar(255) NOT NULL,
  `adresse_client` varchar(45) DEFAULT NULL,
  `email_client` varchar(45) DEFAULT NULL,
  `matricule_fiscale` int(11) DEFAULT NULL,
  `tel_client` int(11) DEFAULT NULL,
  `fax_client` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id_client`, `cin_client`, `nom_client`, `prenom_client`, `adresse_client`, `email_client`, `matricule_fiscale`, `tel_client`, `fax_client`) VALUES
(21, 55557085, 'Besrour', 'Safouan', NULL, 'besrour@yandex.ru', NULL, 2222222, NULL),
(25, 135566555, 'bes', 'saf', NULL, 'benyounessanissa@gmail.com', NULL, NULL, NULL),
(28, 8640100, 'ben', 'ali', 'sed', 'ali@yahoo.fr', NULL, NULL, NULL),
(29, 8640111, 'benYounes', 'ahmed ', 'djerba', 'benyounes.ahmed@gmail.com', NULL, NULL, NULL),
(30, 5200500, 'ben', 'nass', 'bbbb', 'aziz@gmail.com', 369852147, 33333333, 33333333),
(31, 12345678, 'bousetta', 'ayoub', 'djerba', 'boussetta.ayoub@gmail.com', NULL, 22222222, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `facture`
--

CREATE TABLE `facture` (
  `id_facture` int(11) NOT NULL,
  `totalfacture` float DEFAULT NULL,
  `datefacture` date DEFAULT NULL,
  `client_id_client` int(11) NOT NULL,
  `etatfacture` varchar(55) DEFAULT NULL,
  `THTfacture` float DEFAULT NULL,
  `TVAfacture` int(11) DEFAULT NULL,
  `messagefacture` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `facture`
--

INSERT INTO `facture` (`id_facture`, `totalfacture`, `datefacture`, `client_id_client`, `etatfacture`, `THTfacture`, `TVAfacture`, `messagefacture`) VALUES
(68, 2323, '2021-06-17', 25, 'Non Payée', NULL, NULL, NULL),
(69, 200, '2021-06-17', 30, 'Payée', NULL, NULL, NULL),
(70, 2121, '2021-06-11', 28, 'Payée', NULL, NULL, NULL),
(71, 1000, '2021-06-17', 21, 'Payée', NULL, NULL, NULL),
(72, 2000, '2021-06-10', 21, 'Payée', NULL, NULL, NULL),
(73, 5555, '2021-06-10', 21, 'Payée', NULL, NULL, NULL),
(74, 1000, '2021-06-11', 21, 'Payée', NULL, NULL, NULL),
(76, 2000, '2021-06-11', 21, 'Payée', NULL, NULL, NULL),
(77, 0, '2021-06-18', 25, 'Non Payée', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `lignefacture`
--

CREATE TABLE `lignefacture` (
  `idlignefacture` int(11) NOT NULL,
  `facture_id_facture` int(11) NOT NULL,
  `prestataire_idprestataire` int(11) DEFAULT NULL,
  `service_idservice` int(11) NOT NULL,
  `prix_total` float NOT NULL DEFAULT '0',
  `quantite_service` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `lignefacture`
--

INSERT INTO `lignefacture` (`idlignefacture`, `facture_id_facture`, `prestataire_idprestataire`, `service_idservice`, `prix_total`, `quantite_service`) VALUES
(6, 68, NULL, 8, 14, 7),
(8, 69, NULL, 7, 0, 1),
(9, 70, NULL, 9, 0, 1),
(10, 68, NULL, 8, 24, 3),
(11, 68, NULL, 7, 3, 3),
(12, 71, NULL, 8, 30, 6),
(13, 71, NULL, 7, 5, 1),
(14, 70, NULL, 8, 0, 5),
(15, 73, NULL, 11, 0, 100),
(16, 70, NULL, 8, 0, 5),
(17, 76, NULL, 9, 0, 4),
(18, 68, NULL, 7, 0, 1),
(19, 72, NULL, 11, 100, 2),
(20, 70, NULL, 9, 500, 5),
(21, 72, NULL, 7, 400, 2),
(22, 77, NULL, 7, 400, 2),
(23, 77, NULL, 8, 250, 5),
(24, 77, NULL, 10, 400, 8);

-- --------------------------------------------------------

--
-- Structure de la table `notification`
--

CREATE TABLE `notification` (
  `idnotification` int(11) NOT NULL,
  `objetnotification` varchar(45) DEFAULT NULL,
  `messagenotification` varchar(45) DEFAULT NULL,
  `datenotification` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `notification_has_prestataire`
--

CREATE TABLE `notification_has_prestataire` (
  `notification_idnotification` int(11) NOT NULL,
  `prestataire_idprestataire` int(11) NOT NULL,
  `dateenvoie` timestamp(6) NULL DEFAULT NULL,
  `nombrenotification` int(11) DEFAULT NULL,
  `notification_has_prestatairecol` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `prestataire`
--

CREATE TABLE `prestataire` (
  `id_prestataire` int(11) NOT NULL,
  `nomprestataire` varchar(45) DEFAULT NULL,
  `prenomprestataire` varchar(45) DEFAULT NULL,
  `adresseprestaire` varchar(45) DEFAULT NULL,
  `emailprestatire` varchar(45) DEFAULT NULL,
  `specialitprestataire` varchar(45) DEFAULT NULL,
  `MP_prestataire` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `prestataire`
--

INSERT INTO `prestataire` (`id_prestataire`, `nomprestataire`, `prenomprestataire`, `adresseprestaire`, `emailprestatire`, `specialitprestataire`, `MP_prestataire`) VALUES
(0, 'anissa', 'ben younes', 'djerba', 'benyounes@gmail.com', 'nettoyage ', '');

-- --------------------------------------------------------

--
-- Structure de la table `service`
--

CREATE TABLE `service` (
  `idservice` int(11) NOT NULL,
  `libelleservice` varchar(45) DEFAULT NULL,
  `categorieservice` varchar(45) DEFAULT NULL,
  `prixservice` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `service`
--

INSERT INTO `service` (`idservice`, `libelleservice`, `categorieservice`, `prixservice`) VALUES
(7, 'Déménagement', NULL, 200),
(8, 'Grand Ménage', NULL, 50),
(9, 'plomberie', NULL, 100),
(10, 'elect', NULL, 50),
(11, 'nettoyage', NULL, 50);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `tfacture1`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `tfacture1` (
`totale` double
,`facture_id_facture` int(11)
);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `idUSER` int(11) NOT NULL,
  `email` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `role` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`idUSER`, `email`, `created`, `password`, `firstname`, `lastname`, `phone`, `address`, `role`) VALUES
(2, 'test@test.test', '2021-05-26 09:57:13', '123456789', 'test', 'test', '123456789', 'djerba', 'admin');

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `vfactures`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `vfactures` (
`id_facture` int(11)
,`totalfacture` float
,`datefacture` date
,`client_id_client` int(11)
,`etatfacture` varchar(55)
,`THTfacture` float
,`TVAfacture` int(11)
,`messagefacture` varchar(45)
,`id_client` int(11)
,`cin_client` int(11)
,`nom_client` varchar(255)
,`prenom_client` varchar(255)
,`adresse_client` varchar(45)
,`email_client` varchar(45)
,`matricule_fiscale` int(11)
,`tel_client` int(11)
,`fax_client` int(11)
,`totale` double
,`facture_id_facture` int(11)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `vservices`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `vservices` (
`idlignefacture` int(11)
,`facture_id_facture` int(11)
,`prestataire_idprestataire` int(11)
,`service_idservice` int(11)
,`prix_total` float
,`quantite_service` int(11)
,`idservice` int(11)
,`libelleservice` varchar(45)
,`categorieservice` varchar(45)
,`prixservice` float
);

-- --------------------------------------------------------

--
-- Structure de la vue `tfacture1`
--
DROP TABLE IF EXISTS `tfacture1`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `tfacture1`  AS SELECT sum(`lignefacture`.`prix_total`) AS `totale`, `lignefacture`.`facture_id_facture` AS `facture_id_facture` FROM `lignefacture` GROUP BY `lignefacture`.`facture_id_facture` ;

-- --------------------------------------------------------

--
-- Structure de la vue `vfactures`
--
DROP TABLE IF EXISTS `vfactures`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vfactures`  AS SELECT `a`.`id_facture` AS `id_facture`, `a`.`totalfacture` AS `totalfacture`, `a`.`datefacture` AS `datefacture`, `a`.`client_id_client` AS `client_id_client`, `a`.`etatfacture` AS `etatfacture`, `a`.`THTfacture` AS `THTfacture`, `a`.`TVAfacture` AS `TVAfacture`, `a`.`messagefacture` AS `messagefacture`, `b`.`id_client` AS `id_client`, `b`.`cin_client` AS `cin_client`, `b`.`nom_client` AS `nom_client`, `b`.`prenom_client` AS `prenom_client`, `b`.`adresse_client` AS `adresse_client`, `b`.`email_client` AS `email_client`, `b`.`matricule_fiscale` AS `matricule_fiscale`, `b`.`tel_client` AS `tel_client`, `b`.`fax_client` AS `fax_client`, `c`.`totale` AS `totale`, `c`.`facture_id_facture` AS `facture_id_facture` FROM ((`facture` `a` left join `client` `b` on((`b`.`id_client` = `a`.`client_id_client`))) left join `tfacture1` `c` on((`c`.`facture_id_facture` = `a`.`id_facture`))) ;

-- --------------------------------------------------------

--
-- Structure de la vue `vservices`
--
DROP TABLE IF EXISTS `vservices`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vservices`  AS SELECT `a`.`idlignefacture` AS `idlignefacture`, `a`.`facture_id_facture` AS `facture_id_facture`, `a`.`prestataire_idprestataire` AS `prestataire_idprestataire`, `a`.`service_idservice` AS `service_idservice`, `a`.`prix_total` AS `prix_total`, `a`.`quantite_service` AS `quantite_service`, `b`.`idservice` AS `idservice`, `b`.`libelleservice` AS `libelleservice`, `b`.`categorieservice` AS `categorieservice`, `b`.`prixservice` AS `prixservice` FROM (`lignefacture` `a` left join `service` `b` on((`a`.`service_idservice` = `b`.`idservice`))) ;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id_client`) USING BTREE,
  ADD UNIQUE KEY `Unique` (`cin_client`) USING BTREE;

--
-- Index pour la table `facture`
--
ALTER TABLE `facture`
  ADD PRIMARY KEY (`id_facture`),
  ADD KEY `fk_facture_clients` (`client_id_client`) USING BTREE;

--
-- Index pour la table `lignefacture`
--
ALTER TABLE `lignefacture`
  ADD PRIMARY KEY (`idlignefacture`),
  ADD KEY `FK_lignefacture_facture` (`facture_id_facture`),
  ADD KEY `FK_lignefacture_service` (`service_idservice`),
  ADD KEY `FK_lignefacture_prestataire` (`prestataire_idprestataire`);

--
-- Index pour la table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`idnotification`);

--
-- Index pour la table `notification_has_prestataire`
--
ALTER TABLE `notification_has_prestataire`
  ADD PRIMARY KEY (`notification_idnotification`,`prestataire_idprestataire`),
  ADD KEY `fk_notification_has_prestataire_prestataire1` (`prestataire_idprestataire`);

--
-- Index pour la table `prestataire`
--
ALTER TABLE `prestataire`
  ADD PRIMARY KEY (`id_prestataire`);

--
-- Index pour la table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`idservice`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUSER`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id_client` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT pour la table `facture`
--
ALTER TABLE `facture`
  MODIFY `id_facture` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT pour la table `lignefacture`
--
ALTER TABLE `lignefacture`
  MODIFY `idlignefacture` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT pour la table `service`
--
ALTER TABLE `service`
  MODIFY `idservice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `idUSER` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `facture`
--
ALTER TABLE `facture`
  ADD CONSTRAINT `FK_facture_client` FOREIGN KEY (`client_id_client`) REFERENCES `client` (`id_client`);

--
-- Contraintes pour la table `lignefacture`
--
ALTER TABLE `lignefacture`
  ADD CONSTRAINT `FK_lignefacture_facture` FOREIGN KEY (`facture_id_facture`) REFERENCES `facture` (`id_facture`),
  ADD CONSTRAINT `FK_lignefacture_prestataire` FOREIGN KEY (`prestataire_idprestataire`) REFERENCES `prestataire` (`id_prestataire`),
  ADD CONSTRAINT `FK_lignefacture_service` FOREIGN KEY (`service_idservice`) REFERENCES `service` (`idservice`);

--
-- Contraintes pour la table `notification_has_prestataire`
--
ALTER TABLE `notification_has_prestataire`
  ADD CONSTRAINT `fk_notification_has_prestataire_notification1` FOREIGN KEY (`notification_idnotification`) REFERENCES `notification` (`idnotification`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_notification_has_prestataire_prestataire1` FOREIGN KEY (`prestataire_idprestataire`) REFERENCES `prestataire` (`id_prestataire`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
