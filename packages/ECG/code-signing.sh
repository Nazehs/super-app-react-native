ssh-keygen -t rsa -b 4096 -m PEM -f code-signing.key
# Don't add passphrase
openssl rsa -in jwtRS256.key -pubout -outform PEM -out code-signing.key.pub
cat code-signing.key
cat code-signing.key.pub