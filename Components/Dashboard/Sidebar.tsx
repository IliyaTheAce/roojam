export default function SideBar () {
    return <aside>
    <div id="sidebar"  className="nav-collapse ">
        <ul className="sidebar-menu">
            <li className="active">
                <a className="" href="index.html">
                    <i className="icon-dashboard"></i>
                    <span>صفحه اصلی</span>
                </a>
            </li>
            <li className="sub-menu">
                <a href="javascript:;" className="">
                    <i className="icon-book"></i>
                    <span>عناصر صفحه</span>
                    <span className="arrow"></span>
                </a>
                <ul className="sub">
                    <li><a className="" href="general.html">عمومی</a></li>
                    <li><a className="" href="buttons.html">دکمه ها</a></li>
                    <li><a className="" href="widget.html">ویجت ها</a></li>
                    <li><a className="" href="slider.html">اسلایدر ها</a></li>
                    <li><a className="" href="font_awesome.html">فونت های شکل دار</a></li>
                </ul>
            </li>
            <li className="sub-menu">
                <a href="javascript:;" className="">
                    <i className="icon-cogs"></i>
                    <span>کامنت ها</span>
                    <span className="arrow"></span>
                </a>
                <ul className="sub">
                    <li><a className="" href="grids.html">گرید</a></li>
                    <li><a className="" href="calendar.html">تقویم</a></li>
                    <li><a className="" href="charts.html">چارت</a></li>
                </ul>
            </li>
            <li className="sub-menu">
                <a href="javascript:;" className="">
                    <i className="icon-tasks"></i>
                    <span>ابزارهای فرم</span>
                    <span className="arrow"></span>
                </a>
                <ul className="sub">
                    <li><a className="" href="form_component.html">کامنت فرم</a></li>
                    <li><a className="" href="form_wizard.html">فرم Wizard</a></li>
                    <li><a className="" href="form_validation.html">ارزیابی فرم</a></li>
                </ul>
            </li>
            <li className="sub-menu">
                <a href="javascript:;" className="">
                    <i className="icon-th"></i>
                    <span>اطلاعات جدول</span>
                    <span className="arrow"></span>
                </a>
                <ul className="sub">
                    <li><a className="" href="basic_table.html">جدول ساده</a></li>
                    <li><a className="" href="dynamic_table.html">جدول داینامیک</a></li>
                </ul>
            </li>
            <li>
                <a className="" href="inbox.html">
                    <i className="icon-envelope"></i>
                    <span>ایمیل </span>
                    <span className="label label-danger pull-right mail-info">2</span>
                </a>
            </li>
            <li className="sub-menu">
                <a href="javascript:;" className="">
                    <i className="icon-glass"></i>
                    <span>عناصر اضافی</span>
                    <span className="arrow"></span>
                </a>
                <ul className="sub">
                    <li><a className="" href="blank.html">صفحه خالی</a></li>
                    <li><a className="" href="profile.html">پروفایل</a></li>
                    <li><a className="" href="invoice.html">فاکتور</a></li>
                    <li><a className="" href="404.html">404 Error</a></li>
                    <li><a className="" href="500.html">500 Error</a></li>
                </ul>
            </li>
            <li>
                <a className="" href="login.html">
                    <i className="icon-user"></i>
                    <span>صفحه ورود به سایت</span>
                </a>
            </li>
        </ul>
    </div>
</aside>
}