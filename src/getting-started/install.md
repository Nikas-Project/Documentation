# نصب

راه های مختلفی برای نصب نیکاس وجود داره :

-   [Python Package](#python-package)
-   [Source](#source)
-   [Docker](#docker)
-   [Kubernetes](#kubernetes)

قبل از شروع به نصب ، ابتدا صفحه [پیش نیازها](requirements.md) را مطالعه کنید.

## Python Package <!-- omit in toc -->

نیکاس را می توانید با [pip](http://www.pip-installer.org/en/latest/) نصب نمایید :

```bash
pip install nikas
```

یا اگر pip ندارید :

```bash
easy_install nikas
```

جهت ساده تر شدن ، یک symlink نیز به آدرسی در PATH تنظیم کنید. برای مثال :

```bash
ln -s /opt/nikas/bin/nikas /usr/local/bin/nikas
```

## Source <!-- omit in toc -->

اگر قصد دارید تا نیکاس را خودتان کامپایل و استفاده نمایید یا در پروژه مشارکت نمایید ، نیاز به انجام مراحل بیشتر و پیچیده تری دارید. ابتدا پروژه را دریافت کنید :

```bash
git clone https://github.com/Nikas-Project/Server.git nikas
cd nikas
```

سپس باید یک Virtual Environment داشته باشید :

```bash
virtualenv .
source ./bin/activate
```

حال کتابخانه های جاوا اسکریپت را با استفاده از NPM نصب می‎کنیم :

```bash
make init
```

حال بخش Frontend پروژه را می‎سازیم :

```bash
make js
```

توجه داشته باشید که فایل های Style پروژه یا همان CSS ها به صورت Sass نوشته شده و باید پردازش شوند. جهت این کار ، پس از تغییر دادن آن ها دستور زیر را اجرا نمایید :

```bash
make sass
```

برای ساخت بخش Backend نیز دستور زیر را اجرا می‎کنیم :

```bash
python setup.py develop
```

## Docker <!-- omit in toc -->

می توانید نیکاس را به راحتی با استفاده از Docker نصب و استفاده نمایید. برای این کار دو راه دارید. یا خودتان Image را بسازید یا از Image های اصلی پروژه استفاده کنید :

```bash
docker build -t nikas .

# or

docker pull nikasproject/server
```

سپس آن را اجرا می‎نمایید :

```bash
docker run -d --rm --name nikas -p 127.0.0.1:8080:8080 -v /opt/nikas:/config -v /opt/nikas:/db nikasproject/server
```

جهت مشاهده نصب و استفاده پیشرفته با Docker به [این صفحه](../config/docker.md) مراجعه کنید.

## Kubernetes <!-- omit in toc -->

از آنجایی که برای سرور نیکاس ایمیج داکری در اختیار دارید ٬ استقرار آن روی کلاستر Kubernetes نیز به راحتی صورت می‎گیرد. قبل از شروع به دو نکته توجه داشته باشید:

-   جهت اعمال کانفیگ های مختلف باید از ConfigMap استفاده کنید.
-   جهت ذخیره سازی دیتابیس باید از PersistentVolumeClaim استفاده کنید.

فایل Deployment نمونه در [مخزن نیکاس موجود است](https://github.com/Nikas-Project/Server/blob/master/kubernetes/deployment.yml). تنظیمات مورد نظر خودتان را اعمال کرده و نیکاس را مستقر کنید:

```bash
kubectl apply -f nikas-deployment.yaml
```

تنظیماتی که باید اعمال کنید شامل این موارد است:

-   `image` : نام و تگ ایمیج داکری نیکاس
-   `resources` : مشخصات منابع مورد نیاز برای اجرای نیکاس
-   `PersistentVolumeClaim` : حجم مورد نیاز برای ذخیره سازی دیتابیس
-   `ConfigMap` : کانفیگ های مورد نیاز برای اجرای نیکاس
-   `Route` : اگر از OpenShift استفاده می‎کنید ٬ این بخش را جهت معرفی دامنه خود تنظیم نمایید. در غیر اینصورت این بخش را حذف کرده و از Ingress Controller مناسب استفاده نمایید.

### استقرار در کانتینر ابری ابرآروان

جهت استقرار نیکاس در کانتینر ابری ابرآروان ابتدا مراحل زیر را انجام دهید:

-   ایجاد یک پروژه جدید ( یا استفاده از پروژه فعلی )
-   ایجاد یک کلید دسترسی با مراجعه به تنظیمات / کلیدهای API ( [راهنما](https://www.arvancloud.com/help/fa/article/360034038654--%da%86%da%af%d9%88%d9%86%d9%87-API-Key-%db%8c%d8%a7-%da%a9%d9%84%db%8c%d8%af-%d8%af%d8%b3%d8%aa%d8%b1%d8%b3%db%8c-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d9%87%e2%80%8c%d9%86%d9%88%db%8c%d8%b3%db%8c-%d8%a8%d8%b3%d8%a7%d8%b2%db%8c%d8%af%d8%9f) )
-   تعریف یک زیردامنه برای نیکاس ( مثلا `nikas.example.com` ) و ثبت رکورد CNAME با مقدار زیر:
    -   ‍`nikas.example.com` → `default-gateway.ir-thr-at1.arvan.run.`
-   دریافت [CLI](https://docs.arvancloud.com/fa/developer-tools/cli/) ابرآروان

پس از انجام مراحل بالا می‎توانید نیکاس را مستقر کنید:

```bash
arvan login
arvan paas project <project-name>
arvan paas create -f nikas-deployment.yaml
```

پس از چند ثانیه سرور نیکاس آماده استفاده خواهد بود.
