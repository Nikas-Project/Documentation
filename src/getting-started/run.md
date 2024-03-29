# اجرا

پس از اینکه نیکاس را [نصب](install.md) کردید می توانید با دستور زیر آن را اجرا کنید :

```bash
nikas -c nikas.conf run
```

در صورتی که از Docker برای نصب و اجرا استفاده می کنید :

```bash
docker run -d --rm --name nikas -p 127.0.0.1:8080:8080 -v /opt/nikas:/config -v /opt/nikas:/db nikasproject/server
```

جهت مشاهده توضیحات بیشتر در مورد اجرا با Docker به این صفحه بروید : [اجرای پیشرفته با Docker](../config/docker.md)

---

همانطور که مطلع شدید جهت اجرای نیکاس باید تنظیمات آن را در قالب یک فایل تعریف کنید. این فایل که با نام `nikas.conf` در مستندات آورده شده شامل تمامی گزینه های مورد نظر شما برای عملکرد نیکاس می باشد. در زیر یک نمونه اولیه از این فایل را مشاهده می کنید :

```ini
[general]
dbpath = example.db
host = https://arash-hatami.ir

[server]
listen = http://localhost:1234

[admin]
enabled = true
password = secret_token
```

در اینجا چنین مواردی را تعریف کرده ایم :

-   نام دیتابیس `example.db`
-   آدرس وب سایتی که نظرات در آن مدیریت می شوند ( وبلاگ شما ) : `https://arash-hatami.ir`
-   Host و Port مربوطه برای اجرای نیکاس : `localhost` - `1234`
-   پنل مدیریت فعال بوده و رمز ورود آن `secret_token` ( این مورد رمز عبور خام و اصلی نیست ، بعدا در موردش صحبت می کنیم )

جهت مشاهده اطلاعات بیشتر در مورد تنظیم سرور نیکاس به این صفحه بروید : [تنظیمات سرور](../config/server.md)
