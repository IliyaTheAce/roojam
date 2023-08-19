export default function Header() {
  return (
    <header className="header white-bg">
      <div className="sidebar-toggle-box">
        <div
          data-original-title="Toggle Navigation"
          data-placement="right"
          className="icon-reorder tooltips"
        ></div>
      </div>
      {/* <!--logo start--> */}
      <a href="#" className="logo">
        فلت<span>لب</span>
      </a>
      {/* <!--logo end--> */}
      <div className="nav notify-row" id="top_menu">
        {/* <!--  notification start --> */}
        <ul className="nav top-menu">
          {/* <!-- settings start --> */}
          <li className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
              <i className="icon-tasks"></i>
              <span className="badge bg-success">6</span>
            </a>
            <ul className="dropdown-menu extended tasks-bar">
              <div className="notify-arrow notify-arrow-green"></div>
              <li>
                <p className="green">شما 6 برنامه در دست کار دارید</p>
              </li>
              <li>
                <a href="#">
                  <div className="task-info">
                    <div className="desc">پنل مدیریت</div>
                    <div className="percent">40%</div>
                  </div>
                  <div className="progress progress-striped">
                    <div
                      className="progress-bar progress-bar-success"
                      role="progressbar"
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "40%" }}
                    >
                      <span className="sr-only">40% Complete (success)</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="task-info">
                    <div className="desc">بروزرسانی دیتابیس</div>
                    <div className="percent">60%</div>
                  </div>
                  <div className="progress progress-striped">
                    <div
                      className="progress-bar progress-bar-warning"
                      role={"presentation"}
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    >
                      <span className="sr-only">60% Complete (warning)</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="task-info">
                    <div className="desc">برنامه نویسی IPhone</div>
                    <div className="percent">87%</div>
                  </div>
                  <div className="progress progress-striped">
                    <div
                      className="progress-bar progress-bar-info"
                      role="progressbar"
                      aria-valuenow={20}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "87%" }}
                    >
                      <span className="sr-only">87% Complete</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="task-info">
                    <div className="desc">برنامه موبایل</div>
                    <div className="percent">33%</div>
                  </div>
                  <div className="progress progress-striped">
                    <div
                      className="progress-bar progress-bar-danger"
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "33%" }}
                    >
                      <span className="sr-only">33% Complete (danger)</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="task-info">
                    <div className="desc">پروفایل v1.3</div>
                    <div className="percent">45%</div>
                  </div>
                  <div className="progress progress-striped active">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={45}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "45%" }}
                    >
                      <span className="sr-only">45% Complete</span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="external">
                <a href="#">برنامه های بیشتر</a>
              </li>
            </ul>
          </li>
          {/* <!-- settings end --> */}
          {/* <!-- inbox dropdown start--> */}
          <li id="header_inbox_bar" className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
              <i className="icon-envelope-alt"></i>
              <span className="badge bg-important">5</span>
            </a>
            <ul className="dropdown-menu extended inbox">
              <div className="notify-arrow notify-arrow-red"></div>
              <li>
                <p className="red">شما 5 پیام جدید دارید</p>
              </li>
              <li>
                <a href="#">
                  <span className="photo">
                    <img alt="avatar" src="img/avatar-mini.jpg" />
                  </span>
                  <span className="subject">
                    <span className="from">سجاد باقرزاده</span>
                    <span className="time">همین حالا</span>
                  </span>
                  <span className="message">سلام،متن پیام نمایشی جهت تست</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="photo">
                    <img alt="avatar" src="img/avatar-mini2.jpg" />
                  </span>
                  <span className="subject">
                    <span className="from">ایمان مدائنی</span>
                    <span className="time">10 دقیقه قبل</span>
                  </span>
                  <span className="message">سلام، چطوری شما؟</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="photo">
                    <img alt="avatar" src="img/avatar-mini3.jpg" />
                  </span>
                  <span className="subject">
                    <span className="from">صبا ذاکر</span>
                    <span className="time">3 ساعت قبل</span>
                  </span>
                  <span className="message">چه پنل مدیریتی فوق العاده ایی</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="photo">
                    <img alt="avatar" src="img/avatar-mini4.jpg" />
                  </span>
                  <span className="subject">
                    <span className="from">مسعود شریفی</span>
                    <span className="time">همین حالا</span>
                  </span>
                  <span className="message">سلام،متن پیام نمایشی جهت تست</span>
                </a>
              </li>
              <li>
                <a href="#">نمایش تمامی پیام ها</a>
              </li>
            </ul>
          </li>
          {/* <!-- inbox dropdown end -->
            <!-- notification dropdown start--> */}
          <li id="header_notification_bar" className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
              <i className="icon-bell-alt"></i>
              <span className="badge bg-warning">7</span>
            </a>
            <ul className="dropdown-menu extended notification">
              <div className="notify-arrow notify-arrow-yellow"></div>
              <li>
                <p className="yellow">شما 7 اعلام جدید دارید</p>
              </li>
              <li>
                <a href="#">
                  <span className="label label-danger">
                    <i className="icon-bolt"></i>
                  </span>
                  سرور شماره 3 توقف کرده
                  <span className="small italic">34 دقیقه قبل</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="label label-warning">
                    <i className="icon-bell"></i>
                  </span>
                  سرور شماره 4 بارگزاری نمی شود
                  <span className="small italic">1 ساعت قبل</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="label label-danger">
                    <i className="icon-bolt"></i>
                  </span>
                  پنل مدیریت 24% پیشرفت داشته است
                  <span className="small italic">4 ساعت قبل</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="label label-success">
                    <i className="icon-plus"></i>
                  </span>
                  ثبت نام کاربر جدید
                  <span className="small italic">همین حالا</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="label label-info">
                    <i className="icon-bullhorn"></i>
                  </span>
                  برنامه پیام خطا دارد
                  <span className="small italic">10 دقیقه قبل</span>
                </a>
              </li>
              <li>
                <a href="#">نمایش تمامی اعلام ها</a>
              </li>
            </ul>
          </li>
          {/* <!-- notification dropdown end --> */}
        </ul>
        {/* <!--  notification end --> */}
      </div>
      <div className="top-nav ">
        {/* <!--search & user info start--> */}
        <ul className="nav pull-right top-menu">
          <li>
            <input
              type="text"
              className="form-control search"
              placeholder="Search"
            />
          </li>
          {/* <!-- user login dropdown start--> */}
          <li className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
              <img alt="" src="img/avatar1_small.jpg" />
              <span className="username">سجاد باقرزاده</span>
              <b className="caret"></b>
            </a>
            <ul className="dropdown-menu extended logout">
              <div className="log-arrow-up"></div>
              <li>
                <a href="#">
                  <i className=" icon-suitcase"></i>پروفایل
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-cog"></i> تنظیمات
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-bell-alt"></i> اعلام ها
                </a>
              </li>
              <li>
                <a href="login.html">
                  <i className="icon-key"></i> خروج
                </a>
              </li>
            </ul>
          </li>
          {/* <!-- user login dropdown end --> */}
        </ul>
        {/* <!--search & user info end--> */}
      </div>
    </header>
  );
}
