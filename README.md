# Lambda Notification

## Setup

```bash
$ yarn install
...
```

## Run server in local mode

```bash
$ yarn serve:dev
...
```

## Endpoints

### Send Notification

```bash
curl -X POST \
  http://localhost:3000/notification \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{
  "template": "Hi {name}",
  "fields": {
    "name": "John"
  }
}
' | jq .
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   108  100    40  100    68   3401   5781 --:--:-- --:--:-- --:--:--  6181
{
  "status": "success",
  "content": "Hi John"
}
```
