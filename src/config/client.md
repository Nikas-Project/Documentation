# تنظیمات کلاینت

می‎توانید تنظیمات بخش کلاینت نیکاس را از طریق داده های سفارشی در تگ script انجام دهید. تنظیمات کلی به این صورت است :

```html
<script data-nikas="/prefix/"
        data-nikas-id="thread-id"
        data-nikas-css="true"
        data-nikas-css-url="null"
        data-nikas-lang="ru"
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
