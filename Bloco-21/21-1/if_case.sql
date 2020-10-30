SET @age = 14;

SELECT 
IF(@age < 18, 'Não pode entrar no bar', 'Ta liberado entrar no bar')
as permissao;

SELECT title,
 release_year,
 length,
CASE 
	WHEN length <= 60 THEN 'Duracao curta'
    WHEN length > 60 AND length <= 150 THEN 'Duracao Media'
    ELSE 'Muito longo da sono pra ver'
END AS type_duration
FROM film;