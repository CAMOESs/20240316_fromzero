INSERT INTO permissions(name, slug) VALUES 
  ("Valider une demande d'autorisation au niveau départemental", "valider-une-demande-dautorisation-au-niveau-departemental"),
("Valider une demande d'autorisation au niveau national", "valider-une-demande-dautorisation-au-niveau-national"),
("Voir la liste des demandes d'autorisation", "voir-la-liste-des-demandes-dautorisation");
INSERT INTO permission_role(permission_slug,role_slug)
  VALUES 
  ("valider-une-demande-dautorisation-au-niveau-departemental", "administrateur"),
("valider-une-demande-dautorisation-au-niveau-national", "administrateur"),
("voir-la-liste-des-demandes-dautorisation", "administrateur");
  
