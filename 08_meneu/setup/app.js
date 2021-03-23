const menu = [
 {
  id:1,
  category: 'laptop',
  name: 'لپ تاپ 15 اینچی لنوو مدل Ideapad 330 - E' ,
  price: '۸,۹۹۰,۰۰۰',
  img: "./image/laptop1.jpg",
  desc: `لنوو از جمله شرکت‌هایی است که محصولات مختلفی را در قیمت‌های متفاوت راهی بازار می‌کند. در واقع اگر به دنبال یک لپ‌تاپ لنوو باشید، با هر بودجه‌ای می‌توانید یکی از لپ‌تاپ‌های این شرکت را بخرید`,
  },

  {
  id:2,
  category: 'laptop',
  name: 'لپ تاپ 15.6 اینچی ایسوس مدل VivoBook S533JQ - A' ,
  price: '۲۸,۸۰۰,۰۰۰',
  img: "./image/laptop2.jpg",
  desc: `لپتاپ VivoBook S533JQ تولید شرکت ASUS را به جرأت می‌توان از جدیدترین و فوق‌العاده‌ترین محصولات رونمایی شده در سال 2020 میلادی دانست که در آن زیبایی و سبکی با مشخصات سخت افزاری قوی و به روز ترکیب شده و این محصول را بوجود آورده است. `,
  },

  {
  id:3,
  category: 'laptop',
  name: 'لپ تاپ 15.6 اینچی اچ پی مدل Pavilion 15-dk0056wm' ,
  price: '۲۵,۴۰۰,۰۰۰',
  img: "./image/laptop3.jpg",
  desc: `لنوو از جمله شرکت‌هایی است که محصولات مختلفی را در قیمت‌های متفاوت راهی بازار می‌کند. در واقع اگر به دنبال یک لپ‌تاپ لنوو باشید، با هر بودجه‌ای می‌توانید یکی از لپ‌تاپ‌های این شرکت را بخرید`,
  },

  {
  id:4,
  category: 'phone',
  name: 'گوشی موبایل هوآوی مدل Y7a PPA-LX2' ,
  price: '۴,۳۰۰,۰۰۰',
  img: "./image/phone.jpg",
  desc: `جدیدترین گوشی سری Y با مدل Y7a PPA-LX2 از برند «هوآوی» (Huawei) با نمایشگری 6.67 اینچی از نوع LCD در گروه فبلت‌ها دسته‌بندی می‌شود. نمایشگر 6.67 اینچی و حافظه‌ی داخلی 128 گیگابایتی از ویژگی‌های این سری از گوشی‌ها است.`,
  },

  {
  id:5,
  category: 'phone',
  name: 'گوشی موبایل شیائومی مدل POCO M3 M2010J19CG' ,
  price: '۴,۵۰۰,۰۰۰',
  img: "./image/phone2.jpg",
  desc: `گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم‌ کارت ظرفیت 128 گیگابایت از جمله اولین سری محصولات برند شیائومی است. این محصول دارای ساختاری متوازن و خوش‌ساخت بدون پشتیبانی از تکنولوژی 5G در تاریخ نوامبر 2020 روانه بازار شده است.`,
  },

  {
  id:6,
  category: 'phone',
  name: 'گوشی موبایل سامسونگ مدل Galaxy A31 SM-A315F/DS' ,
  price: '۵,۴۰۰,۰۰۰',
  img: "./image/phone3.jpg",
  desc: `سامسونگ گوشی جدید سری A خود را با نام «A31» در تاریخ 27 آوریل 2020 معرفی کرد. این سری از تولیدات سامسونگ به داشتن صفحه‌نمایش بسیار با کیفیت AMOLED و دوربین‌هایی با امکانات بالا شهرت دارند.`,
  },

  {
  id:7,
  category: 'camera',
  name: 'دوربین دیجیتال کانن مدل EOS 4000D' ,
  price: '۵,۲۰۰,۰۰۰',
  img: "./image/camera1.jpg",
  desc: `دوربین جدید EOS 4000D از شرکت کانن، جدیدترین دوربین از سری دوربین‌های DSLR رده پایین کانن است که به تازگی و تقریباً هم‌زمان با دوربین دیگری از این گروه یعنی EOS 2000D معرفی شد.`,
  },

  {
  id:8,
  category: 'camera',
  name: 'دوربین دیجیتال سامسونگ مدل ST69' ,
  price: '۱,۵۰۰,۰۰۰',
  img: "./image/camera2.jpg",
  desc: `لنوو از جمله شرکت‌هایی است که محصولات مختلفی را در قیمت‌های متفاوت راهی بازار می‌کند. در واقع اگر به دنبال یک لپ‌تاپ لنوو باشید، با هر بودجه‌ای می‌توانید یکی از لپ‌تاپ‌های این شرکت را بخرید`,
  },

  {
  id:9,
  category: 'camera',
  name: 'دوربین دیجیتال سامسونگ مدل WB30F' ,
  price: '۲,۳۰۰,۰۰۰',
  img: "./image/camera3.jpg",
  desc: `دوربین «WB30F» محصول شرکت «سامسونگ» است. سامسونگ، شرکت خوشه‌ای کره‌ای و چندملیتی است، که از تعداد زیادی شرکت تابعه، زیرمجموعه و فرعی تشکیل‌شده است. این شرکت‌ها در صنایع مختلف فعالیت می‌کنند.`,
  }, 
]

const centerSection = document.querySelector('.center-section');
const btns = document.querySelectorAll('.btn');

window.addEventListener('DOMContentLoaded', function() {
  displayMenuItems(menu)
})

btns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    const category = e.currentTarget.dataset.category;
    const categoryMenu = menu.filter(function(item) {
      if (item.category === category) {
        return item
      }
    });
    if (category === 'all') {
      displayMenuItems(menu);
    } else {
      displayMenuItems(categoryMenu);
    }
  })
})

function displayMenuItems(menuItems) {
  let displayItem = menuItems.map(function(item) {
    return `<article class="menu-item">
      <img src=${item.img} alt=${item.name}>
      <div class="info">
        <h4 class="p-title">${item.name}</h4>
        <h5 class="price">${item.price} <span>تومان</span></h5>
        <p class="desc">${item.desc}</p>
      </div>
    </article>`
  });
  displayItem = displayItem.join('');
  centerSection.innerHTML = displayItem;
}