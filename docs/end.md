---
id: 后记：lsphunter与管控平板的那些事
sidebar_position: 99
---

# 后记：lsphunter与管控平板的那些事

累计到最近提交，所有领创版本并没有对本程序产生任何威胁，这远远超出我的预期，稳定运行了两年。我曾认为，被发现了可能就会修掉这个问题，实际并没有。本打算在8ce796b提交点我已经放弃维护本项目之后，领创甚至在后期的版本明显加大了可控范围，这是我意想不到的，于是重新复活了这个项目,目前我也不知道它还会撑多久

**看起来牢不可摧的领创平板，是怎么被一步步破解成这样的**

### 不同管控大版本间差异

1.管控版本号

管控版本号通常由ISV+下划线+版本号

不同ISV区别较大，但是大多数都用的是通用，`tongyongshengchan`，也有的要用第三方sso登录的，加上定制的桌面如`四中网校`

2.不同管控版本之间明显差异

|版本|明显特征|其他|
|-|-|-|
|4.xx前|管理员账号admin|领创管控初期(2018?-2019?)|
|5.0.xxx|管理员密码进入|在2xx版本任务栏透明|
|5.01.00(1-5)|算密码换算法了|修了很多bug|
|5.01.011.x|二维码扫描进入管理员，后期同|无|
|5.02.xxx|ExecuteCmdService|解控可以直接被外界拉起|
|5.03.xxx|修复了解控漏洞|修了很多bug?|
|5.04.xxx|广播api添加可以开启usb的功能|暂未发现通用生产版本|
|6.xx.xxx|换UI了，蓝色底|毕业了|

### 开箱之后

开箱之后发现内置一个不能上网的bing浏览器，有一个卡槽，recovery可以恢复出厂

当时很简单，卡里导图片/视频往平板里插就能满足全班同学一天的需求

即在非联网情况下，插入内存卡可不被弹出（已被修复）

### 初期：刷机

#### 家长模式
刷机无非是一个破解比较简单的一个方式，如本人在最初就是刷机的方式，在通过**某些特殊渠道**之后搞到了管控的包，发现了**家长模式**的活动，启动之后，通过简单的反编译之后，得到密码`abc12345`进入后放开网络限制可能会上网。

#### 开启adb.管理员密码?
~~在2020-2021年满破解群里都是问密码是多少的~~,因为我的机器刷过机，所以抓包相对来说比较简单，所以我在简单配好一个fiddler+代理的环境即可抓到app包，但是后来发现有加密，经过一顿反编译后，获取到了AES秘钥和初始向量（一共两套）对`更新策略`的包进行抓包即可获取管理员密码。

令人欣慰的是，打开usb链接会打开adb调试，这样用am指令直接打开家长模式即可，进入后，当时也成功验证了我的猜想，内置的浏览器真的可以上网了。
在后期研究发现，其实没那么复杂，发一个广播就好了

不到一个学期，有人的上网平板就被发现了，不到几周我们就被全体刷入新系统。

~~我们原来是androidP 后来给我们刷的androidQ的管控~~


### LinspierDemo

## 研究过的平板具体操作原理

#### 联想

我的系统在我刷机的时候就已经解锁了`BootLoader`,所以在学校第一次统一刷机时成功获取到了系统分区镜像。根据领创反编译的源码来看，我们通过调用系统framework的形式成功调用到mdm函数。通过改包安装一个自己操作的mdm。

:::tip framework只有函数名，要知道具体操作只能挨个试吗?
可在系统service.jar中可以找到相关实现
:::

通过很多机器的研究，总结出了联想mdm的基本规律

|机型|安卓版本|mdm|应该调用的|
|-|-|-|-|
|TB-X605F|8|mia|mia|
|TB-X605FC|9|csdk+mia|mia|
|TB-X505F|9|mia|mia|
|TB-X505F|10|csdk|csdk|
|联想新机器(多为联发科)|10,11|csdk|csdk新特性|
|联想新机器(未知)|12|csdk5|未适配|

miamdm是专门为这种特殊系统设计的，而csdk可在安卓10(包括)及以上的系统都存在，是商业mdm。

:::tip 既然是商业mdm,为什么可以随便调用? 没有验证吗
在教育系统里，验证删了，默认csdk全部可以调用
正常(国际)版是不能调用的，如果调用需要签证书
:::

在早期的linspirerdemo中，基本支持写app白名单，网络白名单，开网之类的。但是只支持自己的平板。后期逐步适配了当时通用的605系平板。

:::tip 每个rom的函数不同，如何保证调用不出崩溃
挨个try catch
:::

### 华为及其他平板

领创在app中添加了很多的广播操作，包括写app白名单，网络白名单，以及收起各种按钮的功能。我们发送广播后，mdm由领创自由处理。

详见 [[非官方-领创广播API接口文档]]

通过这些操作之后，可以基本控制大部分功能。

华为平板可以通过修改设置来控制系统设置中显示的设备项，

### 书派 T11 (Supi)

lspdemo的使用者有将近一半是山东271集团旗下的书派平板。此类平板mdm十分滑稽，甚至可以卡没，具体原理是通过魔改面具，魔改lsposed，hook住安装，网络，设置，webview等等接口来实现管控。但是可以说是特别烂的。

针对此类管控我特意做了一个适配此类平板的接口，大部分依然由领创决定，一些细节类的特殊处理。书派魔改的面具中，我们找到了相关的广播接口，最强的是可以直接执行root命令，安装面具模块等。但是其中有一个magic验证，在shell中这种字符**需要转义**，具体不多说了。

### 希沃平板(xp21a)

内置mdm api当时由于学业压力未能实现，但是找到了通过**service call**的形式调用mdm，解开限制，从而安装lspdemo。

## 程序原理

1. 向储存分区释放一些基本app
2. 进入程序：
	针对联想，csdk激活deviceowner，mia弹窗激活设备管理器，冻结领创，放开按钮，开网开防火墙，解禁，禁止恢复出厂(防止云控)，解冻app，防止卸载。
	针对通用机型：
	管控机：激活设备管理器，释放按钮，解冻app，针对有后门的领创开usb蓝牙，设置白名单，解禁截图等细微操作(看版本)
	华为解控机：提醒激活deviceowner，防卸载，防恢复出厂，解冻app。
4. ui渲染，白屏，等待音量键操作，音量上键盘5次直接恢复出厂，音量下进入程序，若用户设置密码可输入密码，也可以输入自毁密码。
5. 退出程序：
	针对联想：解冻领创，（可选）通过虚拟专用网阻止领创系列程序联网，冻结已经勾选的app，写白名单，防卸载，拉起领创
	四中平板：可以设置不解冻领创，（可选）通过虚拟专用网阻止领创系列程序联网，拉起北四桌面，assistlauncher强制设置桌面
	其他：冻结已经勾选的app，（可选）通过虚拟专用网阻止领创系列程序联网，拉起领创，壁纸设置官方壁纸。
	
### 程序小功能

	1.超级名单：超级名单就是在进入程序时解冻，在离开到领创时自己冻结或者隐藏。此类操作通常为了防止实机检测
	2.杀进程：安卓10的recent与桌面绑定，所以有的程序可能打不开最近任务，所以有了杀进程的功能
	3.悬浮窗：悬浮窗是快速恢复到领创模式下，与back退出一样的效果
	4.活动启动器：照着github开源的扒下来的，对t11带su进行了一些修改，使得可以su启动，剩下都一样
	5.adb-otg：照着github开源的扒下来的，对一些开启adb的机型而手头没有电脑，但是有装有lspdemo的平板而设计，可以通过usb-usb线连接对方平板执行adb shell,但是经过测试，在安卓12以上的机器会有bug。
	6.多功能重启选项：各种重启选项
### 华为专区：
	1. 设置隐藏：通过修改系统设置达到此效果
	2. 解控：程序后门接口实现，在5.03已修复，华为(emui10/+)需要在设置中开启关联启动，否则不起效果。
	3. 蓝牙：设备管理类，通过设备管理器控制。
	4. hms core：设置显示华为账号的可以选择启用或者禁用，程序设置也有。
	5. 通知栏菜单：（有bug）通过设备管理器实现，全屏操作，屏蔽通知栏菜单。
	6. 锁屏工具栏：修改系统设置
	7. 手势导航：修改系统设置
	8. 安全模式：修改系统设置
### 联想专区：
	1.设置导航栏：打开设置隐藏项目
	2.设置锁屏密码：打开设置隐藏项目或者mdm api
	3.白名单清空：清空白名单实现无app管控
	4.允许oem开关：新mdm api
	5.允许危险权限：新mdm api
### T11专区：

**T11的内置面具需要鉴权，要广播，所以没有回调。**
	1.禁用面具模块：通过`magisk`的标准`touch disable`方法
	2.打开t11调试和edxp：am start ...
	3.针对t11会有开机自动执行root指令的功能。（已修复）

### 设备管理

大部分都是调用devicepolicy的api，共有的。清空领创壁纸是领创的广播，还有部分打开设置的功能
### 领创专区

	1.领创算登出密码：照着反编译的代码直接复制到程序，有时候需要userid。
	2.领创算管理密码：aes加密，找到对应api获取即可
	3.领创算userid：用更新策略的api，用必要信息，直接获取即可
	4.领创伪装app上传：用领创api拉取app列表直接伪造假白名单。
	5.第三方管控隐藏列表：有的管控依赖于第三方桌面，但是第三方桌面有api，可以控制隐藏