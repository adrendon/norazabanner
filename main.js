(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 468,
	height: 60,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Banner_00000 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00001 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00002 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00003 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00004 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00005 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00006 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00007 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00008 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00009 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00010 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00011 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00012 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00013 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00014 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00015 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00016 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00017 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00018 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00019 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00020 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00021 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00022 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00023 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00024 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00025 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00026 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00027 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00028 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00029 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00030 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00031 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00032 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00033 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00034 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00035 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00036 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00037 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00038 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00039 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00040 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00041 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00042 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00043 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00044 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00045 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00046 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00047 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00048 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00049 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00050 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00051 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00052 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00053 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00054 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00055 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00056 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00057 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00058 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00059 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00060 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00061 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00062 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00063 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00064 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00065 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00066 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00067 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00068 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00069 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00070 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00071 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00072 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00073 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00074 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00075 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00076 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00077 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00078 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00079 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00080 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00081 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00082 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00083 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00084 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00085 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00086 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00087 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00088 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00089 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00090 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00091 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00092 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00093 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00094 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00095 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00096 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00097 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00098 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00099 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00100 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00101 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00102 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00103 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00104 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00105 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00106 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00107 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00108 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00109 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00110 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00111 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00112 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00113 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00114 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00115 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00116 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00117 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00118 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00119 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00120 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00121 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00122 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00123 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00124 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00125 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00126 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00127 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00128 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00129 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00130 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00131 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00132 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00133 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00134 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00135 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00136 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00137 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00138 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00139 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00140 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00141 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00142 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00143 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00144 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00145 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00146 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00147 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00148 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00149 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00150 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00151 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00152 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00153 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00154 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00155 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00156 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00157 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00158 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00159 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00160 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00161 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00162 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00163 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00164 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00165 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00166 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00167 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00168 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00169 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00170 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00171 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00172 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00173 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00174 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00175 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(175);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00176 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(176);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00177 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(177);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00178 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(178);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00179 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(179);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00180 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(180);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00181 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(181);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00182 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(182);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00183 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(183);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00184 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(184);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00185 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(185);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00186 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(186);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00187 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(187);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00188 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(188);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00189 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(189);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00190 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(190);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00191 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(191);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00192 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(192);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00193 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(193);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00194 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(194);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00195 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(195);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00196 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(196);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00197 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(197);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00198 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(198);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00199 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(199);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00200 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(200);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00201 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(201);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00202 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(202);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00203 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(203);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00204 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(204);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00205 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(205);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00206 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(206);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00207 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(207);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00208 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(208);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00209 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(209);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00210 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(210);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00211 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(211);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00212 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(212);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00213 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(213);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00214 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(214);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00215 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(215);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00216 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(216);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00217 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(217);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00218 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(218);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00219 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(219);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00220 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(220);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00221 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(221);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00222 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(222);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00223 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(223);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00224 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(224);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00225 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(225);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00226 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(226);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00227 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(227);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00228 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(228);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00229 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(229);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00230 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(230);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00231 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(231);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00232 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(232);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00233 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(233);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00234 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(234);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00235 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(235);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00236 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(236);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00237 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(237);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00238 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(238);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00239 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(239);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00240 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(240);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00241 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(241);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00242 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(242);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00243 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(243);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00244 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(244);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00245 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(245);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00246 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(246);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00247 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(247);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00248 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(248);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00249 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(249);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00250 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(250);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00251 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(251);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00252 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(252);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00253 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(253);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00254 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(254);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00255 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(255);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00256 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(256);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00257 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(257);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00258 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(258);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00259 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(259);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00260 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(260);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00261 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(261);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00262 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(262);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00263 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(263);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00264 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(264);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00265 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(265);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00266 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(266);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00267 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(267);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00268 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(268);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00269 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(269);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00270 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(270);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00271 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(271);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00272 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(272);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00273 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(273);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00274 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(274);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00275 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(275);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00276 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(276);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00277 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(277);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00278 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(278);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00279 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(279);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00280 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(280);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00281 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(281);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00282 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(282);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00283 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(283);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00284 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(284);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00285 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(285);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00286 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(286);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00287 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(287);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00288 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(288);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00289 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(289);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00290 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(290);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00291 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(291);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00292 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(292);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00293 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(293);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00294 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(294);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00295 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(295);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00296 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(296);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00297 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(297);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00298 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(298);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00299 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(299);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00300 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(300);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00301 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(301);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00302 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(302);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00303 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(303);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00304 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(304);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00305 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(305);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00306 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(306);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00307 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(307);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00308 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(308);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00309 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(309);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00310 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(310);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00311 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(311);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00312 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(312);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00313 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(313);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00314 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(314);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00315 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(315);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00316 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(316);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00317 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(317);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00318 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(318);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00319 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(319);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00320 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(320);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00321 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(321);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00322 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(322);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00323 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(323);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00324 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(324);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00325 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(325);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00326 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(326);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00327 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(327);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00328 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(328);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00329 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(329);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00330 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(330);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00331 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(331);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00332 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(332);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00333 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(333);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00334 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(334);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00335 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(335);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00336 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(336);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00337 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(337);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00338 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(338);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00339 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(339);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00340 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(340);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00341 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(341);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00342 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(342);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00343 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(343);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00344 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(344);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00345 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(345);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00346 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(346);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00347 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(347);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00348 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(348);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00349 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(349);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00350 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(350);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00351 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(351);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00352 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(352);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00353 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(353);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00354 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(354);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00355 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(355);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00356 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(356);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00357 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(357);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00358 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(358);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00359 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(359);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00360 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(360);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00361 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(361);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00362 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(362);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00363 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(363);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00364 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(364);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00365 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(365);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00366 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(366);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00367 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(367);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00368 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(368);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00369 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(369);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00370 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(370);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00371 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(371);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00372 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(372);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00373 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(373);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00374 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(374);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00375 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(375);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00376 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(376);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00377 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(377);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00378 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(378);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00379 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(379);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00380 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(380);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00381 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(381);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00382 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(382);
}).prototype = p = new cjs.Sprite();



(lib.Banner_00383 = function() {
	this.spriteSheet = ss["hello_atlas_"];
	this.gotoAndStop(383);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.hello = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Banner_00000();

	this.instance_1 = new lib.Banner_00001();

	this.instance_2 = new lib.Banner_00002();

	this.instance_3 = new lib.Banner_00003();

	this.instance_4 = new lib.Banner_00004();

	this.instance_5 = new lib.Banner_00005();

	this.instance_6 = new lib.Banner_00006();

	this.instance_7 = new lib.Banner_00007();

	this.instance_8 = new lib.Banner_00008();

	this.instance_9 = new lib.Banner_00009();

	this.instance_10 = new lib.Banner_00010();

	this.instance_11 = new lib.Banner_00011();

	this.instance_12 = new lib.Banner_00012();

	this.instance_13 = new lib.Banner_00013();

	this.instance_14 = new lib.Banner_00014();

	this.instance_15 = new lib.Banner_00015();

	this.instance_16 = new lib.Banner_00016();

	this.instance_17 = new lib.Banner_00017();

	this.instance_18 = new lib.Banner_00018();

	this.instance_19 = new lib.Banner_00019();

	this.instance_20 = new lib.Banner_00020();

	this.instance_21 = new lib.Banner_00021();

	this.instance_22 = new lib.Banner_00022();

	this.instance_23 = new lib.Banner_00023();

	this.instance_24 = new lib.Banner_00024();

	this.instance_25 = new lib.Banner_00025();

	this.instance_26 = new lib.Banner_00026();

	this.instance_27 = new lib.Banner_00027();

	this.instance_28 = new lib.Banner_00028();

	this.instance_29 = new lib.Banner_00029();

	this.instance_30 = new lib.Banner_00030();

	this.instance_31 = new lib.Banner_00031();

	this.instance_32 = new lib.Banner_00032();

	this.instance_33 = new lib.Banner_00033();

	this.instance_34 = new lib.Banner_00034();

	this.instance_35 = new lib.Banner_00035();

	this.instance_36 = new lib.Banner_00036();

	this.instance_37 = new lib.Banner_00037();

	this.instance_38 = new lib.Banner_00038();

	this.instance_39 = new lib.Banner_00039();

	this.instance_40 = new lib.Banner_00040();

	this.instance_41 = new lib.Banner_00041();

	this.instance_42 = new lib.Banner_00042();

	this.instance_43 = new lib.Banner_00043();

	this.instance_44 = new lib.Banner_00044();

	this.instance_45 = new lib.Banner_00045();

	this.instance_46 = new lib.Banner_00046();

	this.instance_47 = new lib.Banner_00047();

	this.instance_48 = new lib.Banner_00048();

	this.instance_49 = new lib.Banner_00049();

	this.instance_50 = new lib.Banner_00050();

	this.instance_51 = new lib.Banner_00051();

	this.instance_52 = new lib.Banner_00052();

	this.instance_53 = new lib.Banner_00053();

	this.instance_54 = new lib.Banner_00054();

	this.instance_55 = new lib.Banner_00055();

	this.instance_56 = new lib.Banner_00056();

	this.instance_57 = new lib.Banner_00057();

	this.instance_58 = new lib.Banner_00058();

	this.instance_59 = new lib.Banner_00059();

	this.instance_60 = new lib.Banner_00060();

	this.instance_61 = new lib.Banner_00061();

	this.instance_62 = new lib.Banner_00062();

	this.instance_63 = new lib.Banner_00063();

	this.instance_64 = new lib.Banner_00064();

	this.instance_65 = new lib.Banner_00065();

	this.instance_66 = new lib.Banner_00066();

	this.instance_67 = new lib.Banner_00067();

	this.instance_68 = new lib.Banner_00068();

	this.instance_69 = new lib.Banner_00069();

	this.instance_70 = new lib.Banner_00070();

	this.instance_71 = new lib.Banner_00071();

	this.instance_72 = new lib.Banner_00072();

	this.instance_73 = new lib.Banner_00073();

	this.instance_74 = new lib.Banner_00074();

	this.instance_75 = new lib.Banner_00075();

	this.instance_76 = new lib.Banner_00076();

	this.instance_77 = new lib.Banner_00077();

	this.instance_78 = new lib.Banner_00078();

	this.instance_79 = new lib.Banner_00079();

	this.instance_80 = new lib.Banner_00080();

	this.instance_81 = new lib.Banner_00081();

	this.instance_82 = new lib.Banner_00082();

	this.instance_83 = new lib.Banner_00083();

	this.instance_84 = new lib.Banner_00084();

	this.instance_85 = new lib.Banner_00085();

	this.instance_86 = new lib.Banner_00086();

	this.instance_87 = new lib.Banner_00087();

	this.instance_88 = new lib.Banner_00088();

	this.instance_89 = new lib.Banner_00089();

	this.instance_90 = new lib.Banner_00090();

	this.instance_91 = new lib.Banner_00091();

	this.instance_92 = new lib.Banner_00092();

	this.instance_93 = new lib.Banner_00093();

	this.instance_94 = new lib.Banner_00094();

	this.instance_95 = new lib.Banner_00095();

	this.instance_96 = new lib.Banner_00096();

	this.instance_97 = new lib.Banner_00097();

	this.instance_98 = new lib.Banner_00098();

	this.instance_99 = new lib.Banner_00099();

	this.instance_100 = new lib.Banner_00100();

	this.instance_101 = new lib.Banner_00101();

	this.instance_102 = new lib.Banner_00102();

	this.instance_103 = new lib.Banner_00103();

	this.instance_104 = new lib.Banner_00104();

	this.instance_105 = new lib.Banner_00105();

	this.instance_106 = new lib.Banner_00106();

	this.instance_107 = new lib.Banner_00107();

	this.instance_108 = new lib.Banner_00108();

	this.instance_109 = new lib.Banner_00109();

	this.instance_110 = new lib.Banner_00110();

	this.instance_111 = new lib.Banner_00111();

	this.instance_112 = new lib.Banner_00112();

	this.instance_113 = new lib.Banner_00113();

	this.instance_114 = new lib.Banner_00114();

	this.instance_115 = new lib.Banner_00115();

	this.instance_116 = new lib.Banner_00116();

	this.instance_117 = new lib.Banner_00117();

	this.instance_118 = new lib.Banner_00118();

	this.instance_119 = new lib.Banner_00119();

	this.instance_120 = new lib.Banner_00120();

	this.instance_121 = new lib.Banner_00121();

	this.instance_122 = new lib.Banner_00122();

	this.instance_123 = new lib.Banner_00123();

	this.instance_124 = new lib.Banner_00124();

	this.instance_125 = new lib.Banner_00125();

	this.instance_126 = new lib.Banner_00126();

	this.instance_127 = new lib.Banner_00127();

	this.instance_128 = new lib.Banner_00128();

	this.instance_129 = new lib.Banner_00129();

	this.instance_130 = new lib.Banner_00130();

	this.instance_131 = new lib.Banner_00131();

	this.instance_132 = new lib.Banner_00132();

	this.instance_133 = new lib.Banner_00133();

	this.instance_134 = new lib.Banner_00134();

	this.instance_135 = new lib.Banner_00135();

	this.instance_136 = new lib.Banner_00136();

	this.instance_137 = new lib.Banner_00137();

	this.instance_138 = new lib.Banner_00138();

	this.instance_139 = new lib.Banner_00139();

	this.instance_140 = new lib.Banner_00140();

	this.instance_141 = new lib.Banner_00141();

	this.instance_142 = new lib.Banner_00142();

	this.instance_143 = new lib.Banner_00143();

	this.instance_144 = new lib.Banner_00144();

	this.instance_145 = new lib.Banner_00145();

	this.instance_146 = new lib.Banner_00146();

	this.instance_147 = new lib.Banner_00147();

	this.instance_148 = new lib.Banner_00148();

	this.instance_149 = new lib.Banner_00149();

	this.instance_150 = new lib.Banner_00150();

	this.instance_151 = new lib.Banner_00151();

	this.instance_152 = new lib.Banner_00152();

	this.instance_153 = new lib.Banner_00153();

	this.instance_154 = new lib.Banner_00154();

	this.instance_155 = new lib.Banner_00155();

	this.instance_156 = new lib.Banner_00156();

	this.instance_157 = new lib.Banner_00157();

	this.instance_158 = new lib.Banner_00158();

	this.instance_159 = new lib.Banner_00159();

	this.instance_160 = new lib.Banner_00160();

	this.instance_161 = new lib.Banner_00161();

	this.instance_162 = new lib.Banner_00162();

	this.instance_163 = new lib.Banner_00163();

	this.instance_164 = new lib.Banner_00164();

	this.instance_165 = new lib.Banner_00165();

	this.instance_166 = new lib.Banner_00166();

	this.instance_167 = new lib.Banner_00167();

	this.instance_168 = new lib.Banner_00168();

	this.instance_169 = new lib.Banner_00169();

	this.instance_170 = new lib.Banner_00170();

	this.instance_171 = new lib.Banner_00171();

	this.instance_172 = new lib.Banner_00172();

	this.instance_173 = new lib.Banner_00173();

	this.instance_174 = new lib.Banner_00174();

	this.instance_175 = new lib.Banner_00175();

	this.instance_176 = new lib.Banner_00176();

	this.instance_177 = new lib.Banner_00177();

	this.instance_178 = new lib.Banner_00178();

	this.instance_179 = new lib.Banner_00179();

	this.instance_180 = new lib.Banner_00180();

	this.instance_181 = new lib.Banner_00181();

	this.instance_182 = new lib.Banner_00182();

	this.instance_183 = new lib.Banner_00183();

	this.instance_184 = new lib.Banner_00184();

	this.instance_185 = new lib.Banner_00185();

	this.instance_186 = new lib.Banner_00186();

	this.instance_187 = new lib.Banner_00187();

	this.instance_188 = new lib.Banner_00188();

	this.instance_189 = new lib.Banner_00189();

	this.instance_190 = new lib.Banner_00190();

	this.instance_191 = new lib.Banner_00191();

	this.instance_192 = new lib.Banner_00192();

	this.instance_193 = new lib.Banner_00193();

	this.instance_194 = new lib.Banner_00194();

	this.instance_195 = new lib.Banner_00195();

	this.instance_196 = new lib.Banner_00196();

	this.instance_197 = new lib.Banner_00197();

	this.instance_198 = new lib.Banner_00198();

	this.instance_199 = new lib.Banner_00199();

	this.instance_200 = new lib.Banner_00200();

	this.instance_201 = new lib.Banner_00201();

	this.instance_202 = new lib.Banner_00202();

	this.instance_203 = new lib.Banner_00203();

	this.instance_204 = new lib.Banner_00204();

	this.instance_205 = new lib.Banner_00205();

	this.instance_206 = new lib.Banner_00206();

	this.instance_207 = new lib.Banner_00207();

	this.instance_208 = new lib.Banner_00208();

	this.instance_209 = new lib.Banner_00209();

	this.instance_210 = new lib.Banner_00210();

	this.instance_211 = new lib.Banner_00211();

	this.instance_212 = new lib.Banner_00212();

	this.instance_213 = new lib.Banner_00213();

	this.instance_214 = new lib.Banner_00214();

	this.instance_215 = new lib.Banner_00215();

	this.instance_216 = new lib.Banner_00216();

	this.instance_217 = new lib.Banner_00217();

	this.instance_218 = new lib.Banner_00218();

	this.instance_219 = new lib.Banner_00219();

	this.instance_220 = new lib.Banner_00220();

	this.instance_221 = new lib.Banner_00221();

	this.instance_222 = new lib.Banner_00222();

	this.instance_223 = new lib.Banner_00223();

	this.instance_224 = new lib.Banner_00224();

	this.instance_225 = new lib.Banner_00225();

	this.instance_226 = new lib.Banner_00226();

	this.instance_227 = new lib.Banner_00227();

	this.instance_228 = new lib.Banner_00228();

	this.instance_229 = new lib.Banner_00229();

	this.instance_230 = new lib.Banner_00230();

	this.instance_231 = new lib.Banner_00231();

	this.instance_232 = new lib.Banner_00232();

	this.instance_233 = new lib.Banner_00233();

	this.instance_234 = new lib.Banner_00234();

	this.instance_235 = new lib.Banner_00235();

	this.instance_236 = new lib.Banner_00236();

	this.instance_237 = new lib.Banner_00237();

	this.instance_238 = new lib.Banner_00238();

	this.instance_239 = new lib.Banner_00239();

	this.instance_240 = new lib.Banner_00240();

	this.instance_241 = new lib.Banner_00241();

	this.instance_242 = new lib.Banner_00242();

	this.instance_243 = new lib.Banner_00243();

	this.instance_244 = new lib.Banner_00244();

	this.instance_245 = new lib.Banner_00245();

	this.instance_246 = new lib.Banner_00246();

	this.instance_247 = new lib.Banner_00247();

	this.instance_248 = new lib.Banner_00248();

	this.instance_249 = new lib.Banner_00249();

	this.instance_250 = new lib.Banner_00250();

	this.instance_251 = new lib.Banner_00251();

	this.instance_252 = new lib.Banner_00252();

	this.instance_253 = new lib.Banner_00253();

	this.instance_254 = new lib.Banner_00254();

	this.instance_255 = new lib.Banner_00255();

	this.instance_256 = new lib.Banner_00256();

	this.instance_257 = new lib.Banner_00257();

	this.instance_258 = new lib.Banner_00258();

	this.instance_259 = new lib.Banner_00259();

	this.instance_260 = new lib.Banner_00260();

	this.instance_261 = new lib.Banner_00261();

	this.instance_262 = new lib.Banner_00262();

	this.instance_263 = new lib.Banner_00263();

	this.instance_264 = new lib.Banner_00264();

	this.instance_265 = new lib.Banner_00265();

	this.instance_266 = new lib.Banner_00266();

	this.instance_267 = new lib.Banner_00267();

	this.instance_268 = new lib.Banner_00268();

	this.instance_269 = new lib.Banner_00269();

	this.instance_270 = new lib.Banner_00270();

	this.instance_271 = new lib.Banner_00271();

	this.instance_272 = new lib.Banner_00272();

	this.instance_273 = new lib.Banner_00273();

	this.instance_274 = new lib.Banner_00274();

	this.instance_275 = new lib.Banner_00275();

	this.instance_276 = new lib.Banner_00276();

	this.instance_277 = new lib.Banner_00277();

	this.instance_278 = new lib.Banner_00278();

	this.instance_279 = new lib.Banner_00279();

	this.instance_280 = new lib.Banner_00280();

	this.instance_281 = new lib.Banner_00281();

	this.instance_282 = new lib.Banner_00282();

	this.instance_283 = new lib.Banner_00283();

	this.instance_284 = new lib.Banner_00284();

	this.instance_285 = new lib.Banner_00285();

	this.instance_286 = new lib.Banner_00286();

	this.instance_287 = new lib.Banner_00287();

	this.instance_288 = new lib.Banner_00288();

	this.instance_289 = new lib.Banner_00289();

	this.instance_290 = new lib.Banner_00290();

	this.instance_291 = new lib.Banner_00291();

	this.instance_292 = new lib.Banner_00292();

	this.instance_293 = new lib.Banner_00293();

	this.instance_294 = new lib.Banner_00294();

	this.instance_295 = new lib.Banner_00295();

	this.instance_296 = new lib.Banner_00296();

	this.instance_297 = new lib.Banner_00297();

	this.instance_298 = new lib.Banner_00298();

	this.instance_299 = new lib.Banner_00299();

	this.instance_300 = new lib.Banner_00300();

	this.instance_301 = new lib.Banner_00301();

	this.instance_302 = new lib.Banner_00302();

	this.instance_303 = new lib.Banner_00303();

	this.instance_304 = new lib.Banner_00304();

	this.instance_305 = new lib.Banner_00305();

	this.instance_306 = new lib.Banner_00306();

	this.instance_307 = new lib.Banner_00307();

	this.instance_308 = new lib.Banner_00308();

	this.instance_309 = new lib.Banner_00309();

	this.instance_310 = new lib.Banner_00310();

	this.instance_311 = new lib.Banner_00311();

	this.instance_312 = new lib.Banner_00312();

	this.instance_313 = new lib.Banner_00313();

	this.instance_314 = new lib.Banner_00314();

	this.instance_315 = new lib.Banner_00315();

	this.instance_316 = new lib.Banner_00316();

	this.instance_317 = new lib.Banner_00317();

	this.instance_318 = new lib.Banner_00318();

	this.instance_319 = new lib.Banner_00319();

	this.instance_320 = new lib.Banner_00320();

	this.instance_321 = new lib.Banner_00321();

	this.instance_322 = new lib.Banner_00322();

	this.instance_323 = new lib.Banner_00323();

	this.instance_324 = new lib.Banner_00324();

	this.instance_325 = new lib.Banner_00325();

	this.instance_326 = new lib.Banner_00326();

	this.instance_327 = new lib.Banner_00327();

	this.instance_328 = new lib.Banner_00328();

	this.instance_329 = new lib.Banner_00329();

	this.instance_330 = new lib.Banner_00330();

	this.instance_331 = new lib.Banner_00331();

	this.instance_332 = new lib.Banner_00332();

	this.instance_333 = new lib.Banner_00333();

	this.instance_334 = new lib.Banner_00334();

	this.instance_335 = new lib.Banner_00335();

	this.instance_336 = new lib.Banner_00336();

	this.instance_337 = new lib.Banner_00337();

	this.instance_338 = new lib.Banner_00338();

	this.instance_339 = new lib.Banner_00339();

	this.instance_340 = new lib.Banner_00340();

	this.instance_341 = new lib.Banner_00341();

	this.instance_342 = new lib.Banner_00342();

	this.instance_343 = new lib.Banner_00343();

	this.instance_344 = new lib.Banner_00344();

	this.instance_345 = new lib.Banner_00345();

	this.instance_346 = new lib.Banner_00346();

	this.instance_347 = new lib.Banner_00347();

	this.instance_348 = new lib.Banner_00348();

	this.instance_349 = new lib.Banner_00349();

	this.instance_350 = new lib.Banner_00350();

	this.instance_351 = new lib.Banner_00351();

	this.instance_352 = new lib.Banner_00352();

	this.instance_353 = new lib.Banner_00353();

	this.instance_354 = new lib.Banner_00354();

	this.instance_355 = new lib.Banner_00355();

	this.instance_356 = new lib.Banner_00356();

	this.instance_357 = new lib.Banner_00357();

	this.instance_358 = new lib.Banner_00358();

	this.instance_359 = new lib.Banner_00359();

	this.instance_360 = new lib.Banner_00360();

	this.instance_361 = new lib.Banner_00361();

	this.instance_362 = new lib.Banner_00362();

	this.instance_363 = new lib.Banner_00363();

	this.instance_364 = new lib.Banner_00364();

	this.instance_365 = new lib.Banner_00365();

	this.instance_366 = new lib.Banner_00366();

	this.instance_367 = new lib.Banner_00367();

	this.instance_368 = new lib.Banner_00368();

	this.instance_369 = new lib.Banner_00369();

	this.instance_370 = new lib.Banner_00370();

	this.instance_371 = new lib.Banner_00371();

	this.instance_372 = new lib.Banner_00372();

	this.instance_373 = new lib.Banner_00373();

	this.instance_374 = new lib.Banner_00374();

	this.instance_375 = new lib.Banner_00375();

	this.instance_376 = new lib.Banner_00376();

	this.instance_377 = new lib.Banner_00377();

	this.instance_378 = new lib.Banner_00378();

	this.instance_379 = new lib.Banner_00379();

	this.instance_380 = new lib.Banner_00380();

	this.instance_381 = new lib.Banner_00381();

	this.instance_382 = new lib.Banner_00382();

	this.instance_383 = new lib.Banner_00383();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[{t:this.instance_135}]},1).to({state:[{t:this.instance_136}]},1).to({state:[{t:this.instance_137}]},1).to({state:[{t:this.instance_138}]},1).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).to({state:[{t:this.instance_150}]},1).to({state:[{t:this.instance_151}]},1).to({state:[{t:this.instance_152}]},1).to({state:[{t:this.instance_153}]},1).to({state:[{t:this.instance_154}]},1).to({state:[{t:this.instance_155}]},1).to({state:[{t:this.instance_156}]},1).to({state:[{t:this.instance_157}]},1).to({state:[{t:this.instance_158}]},1).to({state:[{t:this.instance_159}]},1).to({state:[{t:this.instance_160}]},1).to({state:[{t:this.instance_161}]},1).to({state:[{t:this.instance_162}]},1).to({state:[{t:this.instance_163}]},1).to({state:[{t:this.instance_164}]},1).to({state:[{t:this.instance_165}]},1).to({state:[{t:this.instance_166}]},1).to({state:[{t:this.instance_167}]},1).to({state:[{t:this.instance_168}]},1).to({state:[{t:this.instance_169}]},1).to({state:[{t:this.instance_170}]},1).to({state:[{t:this.instance_171}]},1).to({state:[{t:this.instance_172}]},1).to({state:[{t:this.instance_173}]},1).to({state:[{t:this.instance_174}]},1).to({state:[{t:this.instance_175}]},1).to({state:[{t:this.instance_176}]},1).to({state:[{t:this.instance_177}]},1).to({state:[{t:this.instance_178}]},1).to({state:[{t:this.instance_179}]},1).to({state:[{t:this.instance_180}]},1).to({state:[{t:this.instance_181}]},1).to({state:[{t:this.instance_182}]},1).to({state:[{t:this.instance_183}]},1).to({state:[{t:this.instance_184}]},1).to({state:[{t:this.instance_185}]},1).to({state:[{t:this.instance_186}]},1).to({state:[{t:this.instance_187}]},1).to({state:[{t:this.instance_188}]},1).to({state:[{t:this.instance_189}]},1).to({state:[{t:this.instance_190}]},1).to({state:[{t:this.instance_191}]},1).to({state:[{t:this.instance_192}]},1).to({state:[{t:this.instance_193}]},1).to({state:[{t:this.instance_194}]},1).to({state:[{t:this.instance_195}]},1).to({state:[{t:this.instance_196}]},1).to({state:[{t:this.instance_197}]},1).to({state:[{t:this.instance_198}]},1).to({state:[{t:this.instance_199}]},1).to({state:[{t:this.instance_200}]},1).to({state:[{t:this.instance_201}]},1).to({state:[{t:this.instance_202}]},1).to({state:[{t:this.instance_203}]},1).to({state:[{t:this.instance_204}]},1).to({state:[{t:this.instance_205}]},1).to({state:[{t:this.instance_206}]},1).to({state:[{t:this.instance_207}]},1).to({state:[{t:this.instance_208}]},1).to({state:[{t:this.instance_209}]},1).to({state:[{t:this.instance_210}]},1).to({state:[{t:this.instance_211}]},1).to({state:[{t:this.instance_212}]},1).to({state:[{t:this.instance_213}]},1).to({state:[{t:this.instance_214}]},1).to({state:[{t:this.instance_215}]},1).to({state:[{t:this.instance_216}]},1).to({state:[{t:this.instance_217}]},1).to({state:[{t:this.instance_218}]},1).to({state:[{t:this.instance_219}]},1).to({state:[{t:this.instance_220}]},1).to({state:[{t:this.instance_221}]},1).to({state:[{t:this.instance_222}]},1).to({state:[{t:this.instance_223}]},1).to({state:[{t:this.instance_224}]},1).to({state:[{t:this.instance_225}]},1).to({state:[{t:this.instance_226}]},1).to({state:[{t:this.instance_227}]},1).to({state:[{t:this.instance_228}]},1).to({state:[{t:this.instance_229}]},1).to({state:[{t:this.instance_230}]},1).to({state:[{t:this.instance_231}]},1).to({state:[{t:this.instance_232}]},1).to({state:[{t:this.instance_233}]},1).to({state:[{t:this.instance_234}]},1).to({state:[{t:this.instance_235}]},1).to({state:[{t:this.instance_236}]},1).to({state:[{t:this.instance_237}]},1).to({state:[{t:this.instance_238}]},1).to({state:[{t:this.instance_239}]},1).to({state:[{t:this.instance_240}]},1).to({state:[{t:this.instance_241}]},1).to({state:[{t:this.instance_242}]},1).to({state:[{t:this.instance_243}]},1).to({state:[{t:this.instance_244}]},1).to({state:[{t:this.instance_245}]},1).to({state:[{t:this.instance_246}]},1).to({state:[{t:this.instance_247}]},1).to({state:[{t:this.instance_248}]},1).to({state:[{t:this.instance_249}]},1).to({state:[{t:this.instance_250}]},1).to({state:[{t:this.instance_251}]},1).to({state:[{t:this.instance_252}]},1).to({state:[{t:this.instance_253}]},1).to({state:[{t:this.instance_254}]},1).to({state:[{t:this.instance_255}]},1).to({state:[{t:this.instance_256}]},1).to({state:[{t:this.instance_257}]},1).to({state:[{t:this.instance_258}]},1).to({state:[{t:this.instance_259}]},1).to({state:[{t:this.instance_260}]},1).to({state:[{t:this.instance_261}]},1).to({state:[{t:this.instance_262}]},1).to({state:[{t:this.instance_263}]},1).to({state:[{t:this.instance_264}]},1).to({state:[{t:this.instance_265}]},1).to({state:[{t:this.instance_266}]},1).to({state:[{t:this.instance_267}]},1).to({state:[{t:this.instance_268}]},1).to({state:[{t:this.instance_269}]},1).to({state:[{t:this.instance_270}]},1).to({state:[{t:this.instance_271}]},1).to({state:[{t:this.instance_272}]},1).to({state:[{t:this.instance_273}]},1).to({state:[{t:this.instance_274}]},1).to({state:[{t:this.instance_275}]},1).to({state:[{t:this.instance_276}]},1).to({state:[{t:this.instance_277}]},1).to({state:[{t:this.instance_278}]},1).to({state:[{t:this.instance_279}]},1).to({state:[{t:this.instance_280}]},1).to({state:[{t:this.instance_281}]},1).to({state:[{t:this.instance_282}]},1).to({state:[{t:this.instance_283}]},1).to({state:[{t:this.instance_284}]},1).to({state:[{t:this.instance_285}]},1).to({state:[{t:this.instance_286}]},1).to({state:[{t:this.instance_287}]},1).to({state:[{t:this.instance_288}]},1).to({state:[{t:this.instance_289}]},1).to({state:[{t:this.instance_290}]},1).to({state:[{t:this.instance_291}]},1).to({state:[{t:this.instance_292}]},1).to({state:[{t:this.instance_293}]},1).to({state:[{t:this.instance_294}]},1).to({state:[{t:this.instance_295}]},1).to({state:[{t:this.instance_296}]},1).to({state:[{t:this.instance_297}]},1).to({state:[{t:this.instance_298}]},1).to({state:[{t:this.instance_299}]},1).to({state:[{t:this.instance_300}]},1).to({state:[{t:this.instance_301}]},1).to({state:[{t:this.instance_302}]},1).to({state:[{t:this.instance_303}]},1).to({state:[{t:this.instance_304}]},1).to({state:[{t:this.instance_305}]},1).to({state:[{t:this.instance_306}]},1).to({state:[{t:this.instance_307}]},1).to({state:[{t:this.instance_308}]},1).to({state:[{t:this.instance_309}]},1).to({state:[{t:this.instance_310}]},1).to({state:[{t:this.instance_311}]},1).to({state:[{t:this.instance_312}]},1).to({state:[{t:this.instance_313}]},1).to({state:[{t:this.instance_314}]},1).to({state:[{t:this.instance_315}]},1).to({state:[{t:this.instance_316}]},1).to({state:[{t:this.instance_317}]},1).to({state:[{t:this.instance_318}]},1).to({state:[{t:this.instance_319}]},1).to({state:[{t:this.instance_320}]},1).to({state:[{t:this.instance_321}]},1).to({state:[{t:this.instance_322}]},1).to({state:[{t:this.instance_323}]},1).to({state:[{t:this.instance_324}]},1).to({state:[{t:this.instance_325}]},1).to({state:[{t:this.instance_326}]},1).to({state:[{t:this.instance_327}]},1).to({state:[{t:this.instance_328}]},1).to({state:[{t:this.instance_329}]},1).to({state:[{t:this.instance_330}]},1).to({state:[{t:this.instance_331}]},1).to({state:[{t:this.instance_332}]},1).to({state:[{t:this.instance_333}]},1).to({state:[{t:this.instance_334}]},1).to({state:[{t:this.instance_335}]},1).to({state:[{t:this.instance_336}]},1).to({state:[{t:this.instance_337}]},1).to({state:[{t:this.instance_338}]},1).to({state:[{t:this.instance_339}]},1).to({state:[{t:this.instance_340}]},1).to({state:[{t:this.instance_341}]},1).to({state:[{t:this.instance_342}]},1).to({state:[{t:this.instance_343}]},1).to({state:[{t:this.instance_344}]},1).to({state:[{t:this.instance_345}]},1).to({state:[{t:this.instance_346}]},1).to({state:[{t:this.instance_347}]},1).to({state:[{t:this.instance_348}]},1).to({state:[{t:this.instance_349}]},1).to({state:[{t:this.instance_350}]},1).to({state:[{t:this.instance_351}]},1).to({state:[{t:this.instance_352}]},1).to({state:[{t:this.instance_353}]},1).to({state:[{t:this.instance_354}]},1).to({state:[{t:this.instance_355}]},1).to({state:[{t:this.instance_356}]},1).to({state:[{t:this.instance_357}]},1).to({state:[{t:this.instance_358}]},1).to({state:[{t:this.instance_359}]},1).to({state:[{t:this.instance_360}]},1).to({state:[{t:this.instance_361}]},1).to({state:[{t:this.instance_362}]},1).to({state:[{t:this.instance_363}]},1).to({state:[{t:this.instance_364}]},1).to({state:[{t:this.instance_365}]},1).to({state:[{t:this.instance_366}]},1).to({state:[{t:this.instance_367}]},1).to({state:[{t:this.instance_368}]},1).to({state:[{t:this.instance_369}]},1).to({state:[{t:this.instance_370}]},1).to({state:[{t:this.instance_371}]},1).to({state:[{t:this.instance_372}]},1).to({state:[{t:this.instance_373}]},1).to({state:[{t:this.instance_374}]},1).to({state:[{t:this.instance_375}]},1).to({state:[{t:this.instance_376}]},1).to({state:[{t:this.instance_377}]},1).to({state:[{t:this.instance_378}]},1).to({state:[{t:this.instance_379}]},1).to({state:[{t:this.instance_380}]},1).to({state:[{t:this.instance_381}]},1).to({state:[{t:this.instance_382}]},1).to({state:[{t:this.instance_383}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(234,30,468,60);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;