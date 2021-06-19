#!/usr/bin/python3

import cgi , subprocess , time

print("content-type: text/html")
print()

#time.sleep(10)

data = cgi.FieldStorage()
cmd = data.getvalue("x")

output = subprocess.getoutput("sudo " + cmd)
print(output)
