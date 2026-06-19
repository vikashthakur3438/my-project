from freeswitchESL import ESL
from config import ESL_HOST, ESL_PORT, ESL_PASSWORD

print("Connecting to FreeSWITCH...")

con = ESL.ESLconnection(ESL_HOST, ESL_PORT, ESL_PASSWORD)

if con.connected():
    print("Connected successfully!")

    reply = con.api("status")

    print("\n========== FreeSWITCH Status ==========")
    print(reply.getBody())

else:
    print("Connection failed!")