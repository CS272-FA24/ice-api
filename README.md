build
```bash
docker build . -t ctnelson1997/cs272-f24-ice-api
docker push ctnelson1997/cs272-f24-ice-api
```

run
```bash
docker pull ctnelson1997/cs272-f24-ice-api
docker run --name=cs272_f24_ice_api -d --restart=always -p 53706:53706 -e CS272_CODES=AAAA... ctnelson1997/cs272-f24-ice-api
```