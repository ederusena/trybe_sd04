-- Para fixar, responda como seria possível encontrar as seguintes informações:
-- Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
-- Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());
SELECT TIMEDIFF('10:25:45', '11:00:00');