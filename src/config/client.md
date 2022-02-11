# تنظیمات کلاینت

می‎توانید تنظیمات بخش کلاینت نیکاس را از طریق داده های سفارشی در تگ script انجام دهید. تنظیمات کلی به این صورت است :

```html
<script data-nikas="/prefix/"
        data-nikas-id="thread-id"
        data-nikas-css="true"
        data-nikas-css-url="null"
        data-nikas-max-comments-top="10"
        data-nikas-max-comments-nested="5"
        data-nikas-reveal-on-click="5"
        data-nikas-avatar="true"
        data-nikas-avatar-bg="#f0f0f0"
        data-nikas-avatar-fg="#9abf88 #5698c4 #e279a3 #9163b6 ..."
        data-nikas-vote="true"
        data-nikas-vote-levels=""
        data-nikas-feed="false"
        src="/prefix/js/embed.js"></script>
```

علاوه بر این می‎توانید قابلیت تشخیص خودکار عناوین را با شخصی سازی غیرفعال کنید. برای مثال یک عنوان دیگر به جز چیزی که در HTML ثبت شده به صفحه خود اختصاص دهید. یا اینکه Thread ID را تغییر دهید :

```html
<section id="nikas-thread" data-title="Hello!" data-nikas-id="/path/to/resource"></section>
```

## شرح تنظیمات

در ادامه به بررسی هرکدام از تنظیمات می‎پردازیم.

### data-nikas

نیکاس به صورت خودکار REST API را تشخیص می‎دهد ولی قابلیت این را دارید که اگر نیکاس را در محل متفاوتی هاست کرده باشید آن را آدرس دهی کنید :

```html
<script data-nikas="/nikas" src="/path/to/embed.min.js"></script>
```

### data-nikas-css-url

با استفاده از این گزینه می‎توانید مشخص کنید فایل استایل نیکاس از چه آدرسی دریافت شود. برای مثال از یک CDN. به صورت پیشفرض از خود API گرفته خواهد شد.

```html
<script src="..." data-nikas-css-url="/path/to/nikas.css"></script>
```

### data-nikas-css

با این گزینه می‎توانید از اضافه شدن خودکار فایل CSS نیکاس به بدنه HTML خود جلوگیری کنید.

```html
<script src="..." data-nikas-css="false"></script>
```

این مورد وقتی کاربرد دارد که مثلا بخواهید با استفاده از گزینه قبل فایل CSS را از یک CDN یا جای دیگر بارگذاری کنید.

### data-nikas-max-comments-top

با استفاده از این گزینه می‎توانید مشخص کنید چه تعداد نظر نمایش داده شوند و باقی آن ها مخفی شده تا با دکمه مربوطه نمایش داده شوند.

اگر قصد دارید تمام نظرات نمایش داده شوند مقدار `inf` را استفاده کنید. همچنین برای مخفی کردن پیشفرض نظرات این مقدار را برابر `0` قرار دهید.

### data-nikas-max-comments-nested

این گزینه نیز همانند مورد قبل عمل خواهد کرد با این تفاوت که پاسخ ها را مدیریت خواهد کرد.

### data-nikas-reveal-on-click

با تنظیم کردن این مقدار مشخص خواهید کرد که پس از کلیک روی دکمه مربوطه ، هر بار چه تعداد نظر نمایش داده شود.

### data-nikas-avatar

با این گزینه می‎توانید مشخص کنید که نیکاس برای کاربران Avatar بسازد یا نه. البته در صورتی که از Gravatar استفاده کنید این بخش به طور خودکار نادیده گرفته خواهد شد.

### data-nikas-avatar-bg

تنظیم رنگ زمینه Avatar. هر مقدار معتبر CSS پذیرفته می‎شود.

```html
<script src="..." data-nikas-avatar-bg="#f56d84"></script>
<script src="..." data-nikas-avatar-bg="white"></script>
<script src="..." data-nikas-avatar-bg="rgb(145, 210, 0)"></script>
```

### data-nikas-avatar-fg

تنظیم رنگ اصلی Avatar. حداکثر 8 رنگ قابل پذیرش است که باید با کارکتر فاصله از هم جدا شوند. رنگ های پیشفرض نیکاس از [این پالت](http://colrd.com/palette/19308/) گرفته می‎شوند.

> توجه کنید که اگر کمتر از 8 رنگ تعریف کرده باشید و تعداد زوج نباشد توزیع رنگ نامناسبی خواهید داشت.

```html
<script src="..." data-nikas-avatar-fg="#9abf88 #5698c4 #e279a3 #9163b6"></script>
```

### data-nikas-vote

با این گزینه می‎توانید ویژگی رای دادن به نظرات را فعال نمایید.

### data-nikas-vote-levels

در این گزینه باید لیست مراحل امتیاز دادن به نظرات را مشخص کنید. این مقادیر باید با `,` جدا شوند یا به صورت آرایه Json ثبت شوند.

```txt
"0,5,10,25,100"

or

"[-5,5,15]"
```

برای مثال اگر مقدار این گزینه را برابر `"3,3-"` قرار دهید باعث می‎شود حالات زیر اتفاق بیوفتد :

- ایجاد کلاس `nikas-vote-level-0` برای نظرات با امتیاز کمتر از `منفی 3`
- ایجاد کلاس `nikas-vote-level-1` برای نظرات با امتیاز بین `منفی 3` و `دو`
- ایجاد کلاس `nikas-vote-level-2` برای نظرات با امتیاز `دو` و بیشتر

می‎توانید از این کلاس ها برای ظاهرسازی مناسب نظرات استفاده کنید. برای مثال به ازای امتیاز برای آن ها از آیکون ستاره استفاده کنید.

### data-nikas-feed

با این گزینه لینک RSS هر Thread را فعال می‎کنید.

> این لینک فقط وقتی کار می‎کند که تنظیمات مربوط به RSS را در سمت سرور فعال کرده باشید.

## اضافه کردن Lazy-loading

می‎توانید به راحتی قابلیت Lazy-loading را به نیکاس اضافه کنید تا به هنگام اسکرول کردن روی نظرات ، به تدریج نمایش داده شوند.

```js
<script type="text/javascript">
    // Lazy-load nikas only when page end is in view

    function loadNikas() {
        var script = document.createElement("script");

        script.setAttribute("type", "text/javascript");
        script.setAttribute("src", "/prefix/js/embed.min.js");

        // add relevant data-nikas attributes here

        script.setAttribute("data-nikas", "/prefix/");
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    let offset = 50; // Start loading 50px before reaching bottom

    function scrollBottomListener(ev) {
        if ((window.scrollY + window.innerHeight)
                >= (document.documentElement.scrollHeight - offset)) {
            loadNikas();
            window.removeEventListener('scroll', scrollBottomListener);
        }
    }

    window.onload = function() {
      // If viewport >= page height, load immediately
      if ((window.scrollY + window.innerHeight)
                >= (document.documentElement.scrollHeight - offset)) {
          loadNikas();
      } else {
          window.addEventListener('scroll', scrollBottomListener);
      }
    }
</script>
```

> توجه داشته باشید که بارگذاری محتوای اضافه بعد از تعامل کاربر می‎توانید برای سئو مضر باشد. علاوه بر این کاربران شما ممکن است با یک حالت Jank روبرو شوند.

> فقط در صورتی که قصد صرفه جویی شدید در پهنای باند را دارید از این حالت استفاده کنید. در ضمن با اضافه کردن `async` در تگ `script` می‎توانید بارگذاری فایل Nikas را از حالت بلادرنگ خارج کنید.
