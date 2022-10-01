# کار با داکر

![PyPI](https://img.shields.io/pypi/v/nikas?label=Version) ![Docker Image Size (latest semver)](https://img.shields.io/docker/image-size/nikasproject/server)

نیکاس به صورت کامل داکرایز شده و شما به راحتی با بهره بردن از Docker قابلیت اجرا و استفاده از اون رو دارید. ایمیج های سرور نیکاس در دو رجیستری [Github](https://github.com/Nikas-Project/Server/pkgs/container/Server%2Fserver) و [Dockerhub](https://hub.docker.com/r/nikasproject/server) برای شما عزیزان قرار داده شده است :

## دریافت ایمیج

با دستور pull می‎توانید آخرین نسخه از سرور نیکاس را دریافت نمایید :

```sh
docker pull nikasproject/server:2.1.1

# Or

docker pull ghcr.io/nikas-project/server/server:2.1.1
```

## اجرا

اجرای نیکاس به یک دستور ساده انجام خواهد شد. فقط کافی است یک دایرکتوری برای آن بسازید ( برای مثال `opt/nikas/` ) و تنظیمات خود را در آن قرار دهید. سپس دستور زیر را اجرا نمایید :

```sh
docker run -d --rm --name nikas -p 0.0.0.0:8080:8080 -v /opt/nikas:/config -v /opt/nikas:/db nikasproject/server:2.1.1
```

اما اجرای آن با استفاده از Docker Compose راحت تر است.

> جهت نصب Docker Compose به [این لینک](https://docs.docker.com/compose/cli-command/) مراجعه کنید.

ساختار فایل پیشنهادی Compose به این شکل است :

```yml
version: "3.7"

services:
    server:
        image: nikasproject/server:2.1.1
        restart: unless-stopped
        container_name: nikas
        environment:
            - GID=1000
            - UID=1000
        volumes:
            - ./docker/config:/config
            - ./docker/db:/db
        ports:
            - 8080:8080
```

ساختار دایرکتوری شما به این صورت است :

```lang-none
Nikas/
|
├─ docker/
|  |
│  ├─ nikas.conf
|  |
│  └─ db/
|
└─ docker-compose.yml
```

و فایل نمونه تنظیمات `nikas.conf` :

```ini
[general]
dbpath = /db/comments.db
host = https://example.ir

[server]
listen = http://0.0.0.0:8080/

[hash]
salt = Eech7co8Ohloopo9Ol6baimi
algorithm = pbkdf2

[admin]
enabled = true
password = $argon2i$v=19$m=16,t=2,p=1$R2R1VDlATHJyVk4pZ29Mcw$xf9N/uOrnAWN35tg2+iS2Q
```

توجه داشته باشید در اینجا سرور نیکاس باید روی آدرس آی پی `0.0.0.0` اجرا شود تا از خارج کانتینر داکر نیز به آن دسترسی وجود داشته باشد.

با استفاده از دستور زیر نیکاس را اجرا نمایید :

```sh
docker compose up -d
```
