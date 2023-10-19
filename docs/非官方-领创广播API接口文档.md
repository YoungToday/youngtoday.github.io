---
id: 非官方-领创广播API接口文档
sidebar_position: 90
---

**本文最后编辑时间：2023/10/19，基于tongyongshengchan_5.04.103.1**

5.04部分尚未完成接口定义，仅供参考
## 目录

[1.前言](#前言)

[2.管控桌面设置类](#管控桌面设置类)

[3.设备管理类](#设备管理类)

### 前言

~~hackmdm-core~~核心功能之一

通过广播的方式调用，api就是广播的action，如果有带参数的我会在下面提及

```java
String action="Your action";//action就是表中api
Intent intent=new Intent(action);
intent.putExtra("extra","extra");//intent带的参数
intent.setPackage("com.android.launcher3");
sendBroadcast(intent)
```

详见 [Intent  |  Android Developers](https://developer.android.com/reference/android/content/Intent)

---

### 管控桌面设置类

|API|references|
|-|-|
|[com.drupe.swd.launcher.action.pull.tactics](#com.drupe.swd.launcher.action.pull.tactics)|刷新策略|
|[com.linspirer.edu.logout](#com.linspirer.edu.logout)|登出登录|
|[com.android.launcher3.mdm.OPEN_ADMIN](#com.android.launcher3.mdm.OPEN_ADMIN)|打开管理员登录界面|
|[com.linspirer.edu.loginingcancel](#com.linspirer.edu.loginingcancel)|取消登录|
|[com.linspirer.edu.obtain.userinfo](#com.linspirer.edu.obtain.userinfo)|获取用户信息|
|[~~com.linspirer.edu.setwallpaper~~](#com.linspirer.edu.setwallpaper)|~~设置领创桌面壁纸~~|
|[com.linspirer.edu.setshadeview](#com.linspirer.edu.setshadeview)|设置背景图片|
|[com.linspirer.edu.getdevicesn](#com.linspirer.edu.getdevicesn)|获取SN信息|
|[com.linspirer.edu.obtainlicensestatus](#com.linspirer.edu.obtainlicensestatus)|获取license信息|
|[com.linspirer.edu.logoutstatus](#com.linspirer.edu.logoutstatus)|获取是否登出?|
|[com.android.launcher3.unreadcount](#com.android.launcher3.unreadcount)|未读信息计数|
|[com.linspirer.edu.refrushtactics](#com.linspirer.edu.refrushtactics)|刷新策略|
|[com.linspirer.edu.forceinstallapp](#com.linspirer.edu.forceinstallapp)|强制升级必装应用|
|com.linspirer.edu.setscreensaver|清空领创内置壁纸|
|com.linspirer.edu.setwallpaperinfo|设置横竖屏壁纸(推荐)|
|com.linspirer.edu.gain.login.state|获取领创登录状态|


---

### 设备管理类

**注意:接口越往后要求的桌面版本越高**

|API|references|
|-|-|
|[com.linspirer.edu.class.begin](#com.linspirer.edu.class.begin)|上课|
|[com.linspirer.edu.class.over](#com.linspirer.edu.class.over)|下课|
|[com.linspirer.edu.setappwhitelist](#com.linspirer.edu.setappwhitelist)|设置第三方app白名单|
|[com.linspirer.edu.seturlwhitelist](#com.linspirer.edu.seturlwhitelist)|设置网络白名单|
|[com.linspirer.edu.screenshot](#com.linspirer.edu.screenshot)|截屏|
|[com.linspirer.edu.shutdown](#com.linspirer.edu.shutdown)|关机|
|[com.linspirer.edu.enablefirewall](#com.linspirer.edu.enablefirewall)|开启网络防火墙|
|[com.linspirer.edu.disablefirewall](#com.linspirer.edu.disablefirewall)|关闭网络防火墙(开网)|
|[com.linspirer.edu.silentinstall](#com.linspirer.edu.silentinstall)|静默安装|
|[com.linspirer.edu.silentuninstall](#com.linspirer.edu.silentuninstall)|静默卸载|
|[com.linspirer.edu.killapp](#com.linspirer.edu.killapp)|杀死进程|
|[com.linspirer.edu.disableback](#com.linspirer.edu.disableback)|禁止back按钮点击|
|[com.linspirer.edu.enableback](#com.linspirer.edu.enableback)|允许back按钮点击|
|[com.linspirer.edu.enableotg](#com.linspirer.edu.enableotg)|允许otg|
|[com.linspirer.edu.disableotg](#com.linspirer.edu.disableotg)|禁止otg|
|[com.linspirer.edu.rebootdevice](#com.linspirer.edu.rebootdevice)|重启|
|[com.linspirer.edu.disablehome](#com.linspirer.edu.disablehome)|禁用home键点击|
|[com.linspirer.edu.enablehome](#com.linspirer.edu.enablehome)|允许home键点击|
|[com.linspirer.edu.disablerecent](#com.linspirer.edu.disablerecent)|禁用多任务键点击|
|[com.linspirer.edu.enablerecent](#com.linspirer.edu.enablerecent)|允许多任务点击|
|[com.linspirer.edu.clearappcache](#com.linspirer.edu.clearappcache)|清空app所有数据|
|[com.linspirer.edu.enablevolume](#com.linspirer.edu.enablevolume)|允许音量键点击|
|[com.linspirer.edu.disablevolume](#com.linspirer.edu.disablevolume)|禁止音量键点击|
|[com.linspirer.edu.disableshortpower](#com.linspirer.edu.disableshortpower)|禁用电源短按|
|[com.linspirer.edu.enableshortpower](#com.linspirer.edu.enableshortpower)|允许电源短按|
|[com.linspirer.edu.synctime](#com.linspirer.edu.synctime)|同步时间|
|[com.linspirer.edu.enablefileshare](#com.linspirer.edu.enablefileshare)|允许文件分享|
|[com.linspirer.edu.disablefileshare](#com.linspirer.edu.disablefileshare)|禁止文件分享|
|[com.linspirer.edu.disablenavigationbar](#com.linspirer.edu.disablenavigationbar)|禁止手势导航|
|[com.linspirer.edu.enablenavigationbar](#com.linspirer.edu.enablenavigationbar)|启用手势导航|
|[com.linspirer.edu.disablemic](#com.linspirer.edu.disablemic)|禁止耳机接口|
|[com.linspirer.edu.enablemic](#com.linspirer.edu.enablemic)|允许耳机接口|
|[com.linspirer.edu.enablePhoneAndSms](#com.linspirer.edu.enablePhoneAndSms)|允许sim|
|[com.linspirer.edu.disablePhoneAndSms](#com.linspirer.edu.disablePhoneAndSms)|禁用sim|
|[com.linspirer.edu.disableapp](#com.linspirer.edu.disableapp)|冻结app|
|[com.linspirer.edu.enableapp](#com.linspirer.edu.enableapp)|解冻app|
|[com.linspirer.edu.setwifiwhitelist](#com.linspirer.edu.setwifiwhitelist)|设置wifi白名单|
|[com.linspirer.edu.clearwifiwhitelist](#com.linspirer.edu.clearwifiwhitelist)|清除wifi白名单|
|[com.linspirer.edu.setappnetwhitelist](#com.linspirer.edu.setappnetwhitelist)|设置app例外放行网络白名单|
|[com.linspirer.edu.scheduled.poweron](#com.linspirer.edu.scheduled.poweron)|定时开机|
|[com.linspirer.edu.scheduled.poweroff](#com.linspirer.edu.scheduled.poweroff)|定时关机|
|[com.linspirer.edu.disablestatusbar](#com.linspirer.edu.disablestatusbar)|禁用全屏任务栏显示|
|[com.linspirer.edu.enablestatusbar](#com.linspirer.edu.enablestatusbar)|允许全屏任务栏显示|
|[com.linspirer.edu.enablephoneserver](#com.linspirer.edu.enablephoneserver)|允许华为服务|
|[com.linspirer.edu.disablephoneserver](#com.linspirer.edu.disablephoneserver)|禁用华为服务|
|[com.linspirer.edu.disable.screenshot](#com.linspirer.edu.disable.screenshot)|允许截屏|
|[com.linspirer.edu.enable.screenshot](#com.linspirer.edu.enable.screenshot)|禁止截屏|
|[com.linspirer.edu.enable.changewallpaper](#com.linspirer.edu.enable.changewallpaper)|允许更换设备壁纸|
|[com.linspirer.edu.disable.changewallpaper](#com.linspirer.edu.disable.changewallpaper)|禁止更换设备壁纸|
|[com.linspirer.edu.enable_camera](#com.linspirer.edu.enable_camera)|启用相机|
|[com.linspirer.edu.disable_camera](#com.linspirer.edu.disable_camera)|禁用相机|
|[com.linspirer.edu.allowstart.set](#com.linspirer.edu.allowstart.set)|设置应用启动运行名单|
|[com.linspirer.edu.allowstart.clear](#com.linspirer.edu.allowstart.clear)|清空应用启动运行名单|
|[com.linspirer.edu.no_control_camera](#com.linspirer.edu.no_control_camera)|桌面显示相机|
|[com.linspirer.edu.no_control_screen_shoot](#com.linspirer.edu.no_control_screen_shoot)|允许截屏|
|[com.linspirer.lock.screen.time](#com.linspirer.lock.screen.time)|设置锁屏时间|
|[com.linspirer.edu.setdevicename](#com.linspirer.edu.setdevicename)|设置设备名|
|[com.linspirer.edu.setting.rotation](#com.linspirer.edu.setting.rotation)|设置旋转方向|
|[com.linspirer.edu.allow.lock.device](#com.linspirer.edu.allow.lock.device)|允许滑动锁屏|
|[com.linspirer.edu.allow.unlock.device](#com.linspirer.edu.allow.unlock.device)|禁止滑动锁屏|
|[com.android.laucher3.mdm.disableLongPressPower](#com.android.laucher3.mdm.disableLongPressPower)|禁止长按电源|
|[com.android.laucher3.mdm.enableLongPressPower](#com.android.laucher3.mdm.enableLongPressPower)|允许长按电源|
|com.linspirer.edu.enable.gps|启用gps(5.04)|
|com.linspirer.edu.disable.gps|禁用gps(5.04)|
|com.linspirer.edu.disable.bluetooth|禁用蓝牙(5.04)|
|com.linspirer.edu.enable.bluetooth|启用蓝牙(5.04)|
|com.linspirer.edu.disable.wifi|禁用wifi(5.04)|
|com.linspirer.edu.enable.wifi|启用wifi(5.04)|
|com.linspirer.edu.disable.usb|禁用usb(5.04)|
|com.linspirer.edu.enable.usb|启用usb(5.04)|
|com.linspirer.edn.obtain_url|设置应用商店私服(5.04)|
|com.linspirer.edu.removeuninstallapp|移除卸载黑名单app(5.04)|






---

### References

#### com.drupe.swd.launcher.action.pull.tactics

刷新策略

#### com.linspirer.edu.logout

退出登录，可以跳过手势/动态密码

#### com.android.launcher3.mdm.OPEN_ADMIN

打开管理员**登录**界面

#### com.linspirer.edu.loginingcancel

第三方类sso广播，取消登录

#### com.linspirer.edu.obtain.userinfo

返回用户信息

##### parameter
|参数|类型|值|
|-|-|-|
|packageName|String|返回的包名|

:::tip
此处需要注册广播接收器`com.linspirer.edu.return.userinfo`
:::tip

广播接收器参数

|参数|类型|值|
|-|-|-|
|account|String|账号|
|nickName|String|昵称|
|className|String|班级名|
|schoolName|String|学校名|

#### com.linspirer.edu.setwallpaper

设置领创桌面app的壁纸

##### parameter

|参数|类型|值|
|-|-|-|
|path|String|壁纸地址|

#### com.linspirer.edu.setshadeview

设置登录,license背景图片，仅限部分定制版本

#### com.linspirer.edu.getdevicesn

获取设备sn


:::tip
此处需要注册广播接收器`com.android.laucher3.mdm.obtaindevicesn`

**这里的广播是laucher3,不是launcher3**
:::tip


广播接收器参数

|参数|类型|值|
|-|-|-|
|device_sn|String|SN|
|device_mac|String|mac|
|device_imei|String|imei|
|mac|String|mac|

根据设备差异可能接收到的值有空的情况，请注意

#### com.linspirer.edu.obtainlicensestatus

获取`license`激活状态
:::tip
此处需要注册广播接收器`com.linspirer.edu.returnlicensestatus`
:::tip

广播接收器参数

|参数|类型|值|
|-|-|-|
|activate_status|int|激活状态|
|device_mac|String|mac|
|isv_code|int|isv代码|

#### com.linspirer.edu.logoutstatus

获取登出状态

:::tip
此处需要注册广播接收器`com.android.launcher3.mdm.logoutstatus`
:::tip

广播接收器参数

|参数|类型|值|
|-|-|-|
|logoutstatus|int|登出状态|


#### com.android.launcher3.unreadcount

未读红点计数

##### parameter

|参数|类型|值|
|-|-|-|
|packageName|String|需要显示红点的包名|

#### com.linspirer.edu.refrushtactics

刷新策略

#### com.linspirer.edu.forceinstallapp

强制拉起应用商店更新必装app

#### com.linspirer.edu.class.begin

##### parameter

|参数|类型|值|
|-|-|-|
|classLast|int|时长(分钟)，可选|

上课，会收起三大金刚，屏蔽电源按钮长按，任务栏不显示时间等(根据设备不同情况不同)

#### com.linspirer.edu.class.over

下课，放开三大金刚，允许长按电源按钮，任务栏恢复

#### com.linspirer.edu.setappwhitelist

设置第三方app应用白名单

##### parameter

|参数|类型|值|
|-|-|-|
|appwhitelist|`ArrayList<String>`|应用白名单(包名)|

:::tip

这是覆盖，不是追加写入，所以写一个app白名单的时候要把其他安装的app的包名写入
:::tip

#### com.linspirer.edu.seturlwhitelist

设置第三方网址白名单

##### parameter

|参数|类型|值|
|-|-|-|
|urlwhitelist|`ArrayList<String>`|网址白名单(不带http)|

#### com.linspirer.edu.screenshot

截屏

##### parameter

|参数|类型|值|
|-|-|-|
|savedir|String|保存目录地址|

:::tip
此处**可选**注册广播接收器`com.android.launcher3.mdm.SCREEN_SHOT_FINISH`
:::tip

广播接收器参数

|参数|类型|值|
|-|-|-|
|path|String|保存目录地址|

#### com.linspirer.edu.shutdown

关机

#### com.linspirer.edu.enablefirewall

启用网络防火墙(限制网络)

#### com.linspirer.edu.disablefirewall

关闭网络防火墙(放开网络)

:::tip
注意，此方法仅在部分设备生效，如一些机型需要把app包名加入到网络例外白名单内，详见[com.linspirer.edu.setappnetwhitelist](#com.linspirer.edu.setappnetwhitelist)
:::tip

#### com.linspirer.edu.silentinstall

静默安装，如果没白名单要先写白名单

##### parameter

|参数|类型|值|
|-|-|-|
|path|String|apk文件地址|
:::tip
华为emui10以上请参考华为mdm使用说明传参
EMUI 10.0 及以上或 HarmonyOS 2.0 及以上的版本参数 packagePath 需要使用 File Content Provider 的格式，并仅限应用数据目录下文件。
如 
FileProvider.getUriForFile(this,provideName,new File("data/data/packageName/cache/aaaa.apk")).toString();
而且需要会话授权，允许系统进程访问该文件。如： 
grantUriPermission("android", contentUri,Intent.FLAG_GRANT_READ_URI_PERMISSION);
:::tip


#### com.linspirer.edu.silentuninstall

静默卸载

##### parameter

|参数|类型|值|
|-|-|-|
|packageName|String|包名|

#### com.linspirer.edu.killapp

杀进程

##### parameter

|参数|类型|值|
|-|-|-|
|packageName|String|包名|


#### com.linspirer.edu.disableback

禁用back点击

#### com.linspirer.edu.enableback

启用back点击

#### com.linspirer.edu.enableotg

启用sd卡读取和otg

~~可能有的版本仅限万朋有此待遇~~

#### com.linspirer.edu.disableotg

禁用sd卡读取和otg

#### com.linspirer.edu.rebootdevice

重启，可能部分设备支持

#### com.linspirer.edu.disablehome

禁用home点击

#### com.linspirer.edu.enablehome

启用home点击

#### com.linspirer.edu.disablerecent

禁用recent点击

#### com.linspirer.edu.enablerecent

启用recent点击

#### com.linspirer.edu.clearappcache

清空app**所有数据**

##### parameter

|参数|类型|值|
|-|-|-|
|packageNames|`ArrayList<String>`|包名|

#### com.linspirer.edu.enablevolume

启用音量键点击

#### com.linspirer.edu.disablevolume

禁用音量键点击

#### com.linspirer.edu.disableshortpower

禁用短按电源

#### com.linspirer.edu.enableshortpower

启用短按电源

#### com.linspirer.edu.synctime

同步时间

#### com.linspirer.edu.enablefileshare

启用文件分享，仅限**华为**和**安卓10+联想**

#### com.linspirer.edu.disablefileshare

禁用文件分享

#### com.linspirer.edu.disablenavigationbar

隐藏NavigationBar，同样仅限部分设备支持

#### com.linspirer.edu.enablenavigationbar

显示NavigationBar

#### com.linspirer.edu.disablemic

禁用mic耳机插入，仅限华为和某杂牌mdm支持

#### com.linspirer.edu.enablemic

允许mic耳机插入

#### com.linspirer.edu.enablePhoneAndSms

允许电话短信流量

#### com.linspirer.edu.disablePhoneAndSms

禁用电话短信流量

#### com.linspirer.edu.disableapp

冻结app

##### parameter

|参数|类型|值|
|-|-|-|
|appwhitelist|`ArrayList<String>`|包名|

:::danger 警告
不要禁用**com.android.launcher3**
:::

#### com.linspirer.edu.enableapp

解冻app

##### parameter

|参数|类型|值|
|-|-|-|
|appwhitelist|`ArrayList<String>`|包名|

#### com.linspirer.edu.setwifiwhitelist

设置wifi白名单，注意，这是覆盖，仅限**华为**

##### parameter

|参数|类型|值|
|-|-|-|
|ssid|`ArrayList<String>`|ssid|

#### com.linspirer.edu.clearwifiwhitelist

清空wifi白名单

#### com.linspirer.edu.setappnetwhitelist

设置网络例外app白名单

##### parameter

|参数|类型|值|
|-|-|-|
|appnetwhitelist|`ArrayList<String>`|app包名|

#### com.linspirer.edu.scheduled.poweron

定时开机

##### parameters

|参数|类型|值|
|-|-|-|
|when|**long**|开机时间|
|poweron|String|无意义但不建议null|

#### com.linspirer.edu.scheduled.poweroff

定时关机，不建议使用

##### parameter

|参数|类型|值|
|-|-|-|
|when|**long**|关机时间|

#### com.linspirer.edu.disablestatusbar

禁用全屏窗口下的状态栏 **(仅限emui10+)**

#### com.linspirer.edu.enablestatusbar

启用用全屏窗口下的状态栏 **(仅限emui10+)**

#### com.linspirer.edu.enablephoneserver

启用`我的华为`和`HMS Core`

#### com.linspirer.edu.disablephoneserver

禁用用`我的华为`和`HMS Core`

#### com.linspirer.edu.disable.screenshot

禁用截屏

#### com.linspirer.edu.enable.screenshot

启用截屏

#### com.linspirer.edu.enable.changewallpaper

允许更改设备壁纸

#### com.linspirer.edu.disable.changewallpaper

禁止更改设备壁纸

#### com.linspirer.edu.enable_camera

启用相机

#### com.linspirer.edu.disable_camera

禁用相机

#### com.linspirer.edu.allowstart.set

允许启动名单，仅限**华为emui10+**

##### parameter

|参数|类型|值|
|-|-|-|
|allowapps|`ArrayList<String>`|app包名|

:::tip 华为官方说明
设置允许应用启动运行名单，设置后只允许名单中的应用启动（华为桌面、华为响铃界面、手机管家、权限控制器等部分系统应用除外）。同时在开机之后拉起名单 中的第一个应用。允许应用启动运行名单为空或者 null 时代表清除名单。
:::

#### com.linspirer.edu.allowstart.clear

清除`允许启动名单`

#### com.linspirer.edu.no_control_camera

详见[com.linspirer.edu.enable_camera](#com.linspirer.edu.enable_camera)

#### com.linspirer.edu.no_control_screen_shoot

详见[com.linspirer.edu.enable.screenshot](#com.linspirer.edu.enable.screenshot)

#### com.linspirer.lock.screen.time

设置锁屏时间

##### parameter

|参数|类型|值|
|-|-|-|
|locktime|int|锁屏时间|

#### com.linspirer.edu.setdevicename

设置设备名 **仅限华为emui10+**

##### parameter

|参数|类型|值|
|-|-|-|
|device_name|String|设备名|

#### com.linspirer.edu.setting.rotation

设置旋转方向

##### parameter

|参数|类型|值|
|-|-|-|
|status|int|旋转模式，0或1|

`0`为锁定方向

`1`为解锁方向

#### com.linspirer.edu.allow.lock.device

启用滑动锁屏 **仅限华为emui10+**

#### com.linspirer.edu.allow.unlock.device

禁用滑动锁屏 **仅限华为emui10+**

#### com.android.laucher3.mdm.disableLongPressPower

禁止电源键长按

#### com.android.laucher3.mdm.enableLongPressPower

允许电源键长按