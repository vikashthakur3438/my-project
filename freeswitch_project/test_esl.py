import ESL

ESL_HOST = "172.30.0.57"
ESL_PORT = "8021"
ESL_PASSWORD = "cluecon"

con = ESL.ESLconnection(ESL_HOST, ESL_PORT, ESL_PASSWORD)

if con.connected():
    print("SUCCESS: Connected to FreeSWITCH ESL")
else:
    print("FAILED: Connection not established")