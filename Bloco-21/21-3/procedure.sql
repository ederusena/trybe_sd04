-- Deletando procedures
DROP PROCEDURE GerarDataFormatoBrasileiro;
DROP PROCEDURE ChegamosNoCarnaval;

-- Procedure sem parâmetros

DELIMITER $$
CREATE PROCEDURE GerarDataFormatoBrasileiro()
BEGIN
  SELECT CONCAT(DAY(NOW()), '/', MONTH(NOW()), '/', YEAR(NOW()));
END $$ DELIMITER ;


-- Procedure com parâmetros de entrada (IN)

DELIMITER $$
CREATE PROCEDURE GerarDataFormatoBrasileiro(IN ano INT)
BEGIN
  SELECT CONCAT(DAY(NOW()), '/', MONTH(NOW()), '/', ano);
END $$ DELIMITER ;
CALL GerarDataFormatoBrasileiro(2020);

-- Procedure com parâmetros de saída (OUT)

DELIMITER $$
CREATE PROCEDURE ChegamosNoCarnaval(IN ano INT, OUT estamosNoCarnaval VARCHAR(100))
BEGIN
  DECLARE mensagem VARCHAR(100);
  IF MONTH(NOW()) = 3 THEN
    SET mensagem = 'Estamos no mês do carnaval!';
  ELSE
    SET mensagem = 'Não estamos no mês do carnaval!';
  END IF;
  SELECT mensagem INTO estamosNoCarnaval;
END $$ DELIMITER ;
CALL ChegamosNoCarnaval(2020, @estamosNoCarnaval);
SELECT @estamosNoCarnaval;

-- Procedure com parâmetros de entrada-saída (INOUT)

DROP PROCEDURE ChegamosNoCarnaval;
DELIMITER $$
CREATE PROCEDURE ChegamosNoCarnaval(IN ano INT, INOUT mes INT, OUT estamosNoCarnaval VARCHAR(100))
BEGIN
  DECLARE mensagem VARCHAR(100);
    IF mes IS NULL THEN
      SET mes = MONTH(NOW());
    END IF;
    IF mes = 3 THEN
      SET mensagem = 'Estamos no mês do carnaval!';
    ELSE
      SET mensagem = 'Não estamos no mês do carnaval!';
    END IF;
    SELECT mensagem INTO estamosNoCarnaval;
END $$ DELIMITER ;
SELECT 3 INTO @mes;
CALL ChegamosNoCarnaval(2020, @mes, @estamosNoCarnaval);
SELECT @mes, @estamosNoCarnaval;