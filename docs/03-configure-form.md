---
id: 03-configure-form
title: تنظیم فرم ها
sidebar_label: تنظیم فرم ها
keywords:
    - formgir
    - فرمگیر
    - فرم گیر
    - فرم
    - form
    - forms
    - formget
---

فرض کنیم که شما چنین فرمی در وب سایت خودتون دارید. یه فرم ساده که از نام ، آدرس ایمیل و پیغام تشکیل شده :

```html
<form method="POST" action="contact.php">
    <div class="field">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" />
    </div>

    <div class="field">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
    </div>

    <div class="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" type="text" name="message"></textarea>
    </div>

    <input class="btn" type="submit" name="submit" value="Submit" />
</form>
```

تو این مثال جهت ثبت فرم ، درخواست به یک فایل php ارسال میشه ( مانند همه مثال هایی که توی اینترنت پیدا می کنید ). برای اینکه فرم های شما به **فرمگیر** منتقل بشه کافیه آدرس action رو به آدرس ما تغییر بدید :

```html
<form method="post" action="https://formg.ir/submit/<TOKEN>">
    ...
</form>
```

اینجا باید از توکن مربوط به حساب کاربری خودتون استفاده کنید. به داشبورد فرمگیر رفته و در قسمت **مشخصات** میتونید توکن رو مشاهده کنید.

![token](/docs/03-01.png)

همین ! دیگر هیچ تنظیمات اضافه ای نیاز نیست و هربار که درخواستی ثبت شود ، اطلاعات فرم برای ما ارسال شده و می توانید نتایج را در داشبورد **فرمگیر** مشاهده کنید

![token](/docs/03-02.png)

برای مشاهده جزئیات می توانید با مراجعه به لیست وب سایت ها و انتخاب یک مورد ، به لیست درخواست های ثبت شده دسترسی داشته باشید

![token](/docs/03-03.png)
