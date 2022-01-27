# نصب

راه های مختلفی برای نصب نیکاس وجود داره :

- [Python Package](#python-package)
- [Docker](#docker)
- [Source](#source)

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

## Docker <!-- omit in toc -->

می توانید نیکاس را به راحتی با استفاده از Docker نصب و استفاده نمایید. برای این کار دو راه دارید. یا خودتان Image را بسازید یا از Image های از پیش ساخته شده ی ما استفاده کنید :

```bash
docker build -t nikas .
# or
docker pull nikasproject/server
```

سپس آن را اجرا می نمایید :

```bash
docker run -d --rm --name nikas -p 127.0.0.1:8080:8080 -v /opt/nikas:/config -v /opt/nikas:/db nikasproject/server
```

جهت مشاهده نصب و استفاده پیشرفته با Docker به این صفحه مراجعه کنید.

## Source <!-- omit in toc -->

اگر قصد دارید تا نیکاس را خودتان کامپایل و استفاده نمایید یا در پروژه مشارکت نمایید ، نیاز به انجام مراحل بیشتر و پیچیده تری دارید. ابتدا پروژه را دریافت کنید :

```bash
git clone https://github.com/Nikas-Project/Server.git nikas
cd nikas
```

سپس باید یک virtual environment داشته باشید :

```bash
virtualenv .
source ./bin/activate
```

حال کتابخانه های جاوااسکریپت را با استفاده از NPM نصب می کنیم :

```bash
make init
```

حال بخش frontend پروژه را میسازیم :

```bash
make js
```

برای ساخت بخش backend نیز دستور زیر را اجرا می کنیم :

```bash
python setup.py develop
# or
pip install -e .
```
