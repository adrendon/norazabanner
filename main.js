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
	manifest: [
		{src:"images/Banner_00000.jpg", id:"Banner_00000"},
		{src:"images/Banner_00001.jpg", id:"Banner_00001"},
		{src:"images/Banner_00002.jpg", id:"Banner_00002"},
		{src:"images/Banner_00003.jpg", id:"Banner_00003"},
		{src:"images/Banner_00004.jpg", id:"Banner_00004"},
		{src:"images/Banner_00005.jpg", id:"Banner_00005"},
		{src:"images/Banner_00006.jpg", id:"Banner_00006"},
		{src:"images/Banner_00007.jpg", id:"Banner_00007"},
		{src:"images/Banner_00008.jpg", id:"Banner_00008"},
		{src:"images/Banner_00009.jpg", id:"Banner_00009"},
		{src:"images/Banner_00010.jpg", id:"Banner_00010"},
		{src:"images/Banner_00011.jpg", id:"Banner_00011"},
		{src:"images/Banner_00012.jpg", id:"Banner_00012"},
		{src:"images/Banner_00013.jpg", id:"Banner_00013"},
		{src:"images/Banner_00014.jpg", id:"Banner_00014"},
		{src:"images/Banner_00015.jpg", id:"Banner_00015"},
		{src:"images/Banner_00016.jpg", id:"Banner_00016"},
		{src:"images/Banner_00017.jpg", id:"Banner_00017"},
		{src:"images/Banner_00018.jpg", id:"Banner_00018"},
		{src:"images/Banner_00019.jpg", id:"Banner_00019"},
		{src:"images/Banner_00020.jpg", id:"Banner_00020"},
		{src:"images/Banner_00021.jpg", id:"Banner_00021"},
		{src:"images/Banner_00022.jpg", id:"Banner_00022"},
		{src:"images/Banner_00023.jpg", id:"Banner_00023"},
		{src:"images/Banner_00024.jpg", id:"Banner_00024"},
		{src:"images/Banner_00025.jpg", id:"Banner_00025"},
		{src:"images/Banner_00026.jpg", id:"Banner_00026"},
		{src:"images/Banner_00027.jpg", id:"Banner_00027"},
		{src:"images/Banner_00028.jpg", id:"Banner_00028"},
		{src:"images/Banner_00029.jpg", id:"Banner_00029"},
		{src:"images/Banner_00030.jpg", id:"Banner_00030"},
		{src:"images/Banner_00031.jpg", id:"Banner_00031"},
		{src:"images/Banner_00032.jpg", id:"Banner_00032"},
		{src:"images/Banner_00033.jpg", id:"Banner_00033"},
		{src:"images/Banner_00034.jpg", id:"Banner_00034"},
		{src:"images/Banner_00035.jpg", id:"Banner_00035"},
		{src:"images/Banner_00036.jpg", id:"Banner_00036"},
		{src:"images/Banner_00037.jpg", id:"Banner_00037"},
		{src:"images/Banner_00038.jpg", id:"Banner_00038"},
		{src:"images/Banner_00039.jpg", id:"Banner_00039"},
		{src:"images/Banner_00040.jpg", id:"Banner_00040"},
		{src:"images/Banner_00041.jpg", id:"Banner_00041"},
		{src:"images/Banner_00042.jpg", id:"Banner_00042"},
		{src:"images/Banner_00043.jpg", id:"Banner_00043"},
		{src:"images/Banner_00044.jpg", id:"Banner_00044"},
		{src:"images/Banner_00045.jpg", id:"Banner_00045"},
		{src:"images/Banner_00046.jpg", id:"Banner_00046"},
		{src:"images/Banner_00047.jpg", id:"Banner_00047"},
		{src:"images/Banner_00048.jpg", id:"Banner_00048"},
		{src:"images/Banner_00049.jpg", id:"Banner_00049"},
		{src:"images/Banner_00050.jpg", id:"Banner_00050"},
		{src:"images/Banner_00051.jpg", id:"Banner_00051"},
		{src:"images/Banner_00052.jpg", id:"Banner_00052"},
		{src:"images/Banner_00053.jpg", id:"Banner_00053"},
		{src:"images/Banner_00054.jpg", id:"Banner_00054"},
		{src:"images/Banner_00055.jpg", id:"Banner_00055"},
		{src:"images/Banner_00056.jpg", id:"Banner_00056"},
		{src:"images/Banner_00057.jpg", id:"Banner_00057"},
		{src:"images/Banner_00058.jpg", id:"Banner_00058"},
		{src:"images/Banner_00059.jpg", id:"Banner_00059"},
		{src:"images/Banner_00060.jpg", id:"Banner_00060"},
		{src:"images/Banner_00061.jpg", id:"Banner_00061"},
		{src:"images/Banner_00062.jpg", id:"Banner_00062"},
		{src:"images/Banner_00063.jpg", id:"Banner_00063"},
		{src:"images/Banner_00064.jpg", id:"Banner_00064"},
		{src:"images/Banner_00065.jpg", id:"Banner_00065"},
		{src:"images/Banner_00066.jpg", id:"Banner_00066"},
		{src:"images/Banner_00067.jpg", id:"Banner_00067"},
		{src:"images/Banner_00068.jpg", id:"Banner_00068"},
		{src:"images/Banner_00069.jpg", id:"Banner_00069"},
		{src:"images/Banner_00070.jpg", id:"Banner_00070"},
		{src:"images/Banner_00071.jpg", id:"Banner_00071"},
		{src:"images/Banner_00072.jpg", id:"Banner_00072"},
		{src:"images/Banner_00073.jpg", id:"Banner_00073"},
		{src:"images/Banner_00074.jpg", id:"Banner_00074"},
		{src:"images/Banner_00075.jpg", id:"Banner_00075"},
		{src:"images/Banner_00076.jpg", id:"Banner_00076"},
		{src:"images/Banner_00077.jpg", id:"Banner_00077"},
		{src:"images/Banner_00078.jpg", id:"Banner_00078"},
		{src:"images/Banner_00079.jpg", id:"Banner_00079"},
		{src:"images/Banner_00080.jpg", id:"Banner_00080"},
		{src:"images/Banner_00081.jpg", id:"Banner_00081"},
		{src:"images/Banner_00082.jpg", id:"Banner_00082"},
		{src:"images/Banner_00083.jpg", id:"Banner_00083"},
		{src:"images/Banner_00084.jpg", id:"Banner_00084"},
		{src:"images/Banner_00085.jpg", id:"Banner_00085"},
		{src:"images/Banner_00086.jpg", id:"Banner_00086"},
		{src:"images/Banner_00087.jpg", id:"Banner_00087"},
		{src:"images/Banner_00088.jpg", id:"Banner_00088"},
		{src:"images/Banner_00089.jpg", id:"Banner_00089"},
		{src:"images/Banner_00090.jpg", id:"Banner_00090"},
		{src:"images/Banner_00091.jpg", id:"Banner_00091"},
		{src:"images/Banner_00092.jpg", id:"Banner_00092"},
		{src:"images/Banner_00093.jpg", id:"Banner_00093"},
		{src:"images/Banner_00094.jpg", id:"Banner_00094"},
		{src:"images/Banner_00095.jpg", id:"Banner_00095"},
		{src:"images/Banner_00096.jpg", id:"Banner_00096"},
		{src:"images/Banner_00097.jpg", id:"Banner_00097"},
		{src:"images/Banner_00098.jpg", id:"Banner_00098"},
		{src:"images/Banner_00099.jpg", id:"Banner_00099"},
		{src:"images/Banner_00100.jpg", id:"Banner_00100"},
		{src:"images/Banner_00101.jpg", id:"Banner_00101"},
		{src:"images/Banner_00102.jpg", id:"Banner_00102"},
		{src:"images/Banner_00103.jpg", id:"Banner_00103"},
		{src:"images/Banner_00104.jpg", id:"Banner_00104"},
		{src:"images/Banner_00105.jpg", id:"Banner_00105"},
		{src:"images/Banner_00106.jpg", id:"Banner_00106"},
		{src:"images/Banner_00107.jpg", id:"Banner_00107"},
		{src:"images/Banner_00108.jpg", id:"Banner_00108"},
		{src:"images/Banner_00109.jpg", id:"Banner_00109"},
		{src:"images/Banner_00110.jpg", id:"Banner_00110"},
		{src:"images/Banner_00111.jpg", id:"Banner_00111"},
		{src:"images/Banner_00112.jpg", id:"Banner_00112"},
		{src:"images/Banner_00113.jpg", id:"Banner_00113"},
		{src:"images/Banner_00114.jpg", id:"Banner_00114"},
		{src:"images/Banner_00115.jpg", id:"Banner_00115"},
		{src:"images/Banner_00116.jpg", id:"Banner_00116"},
		{src:"images/Banner_00117.jpg", id:"Banner_00117"},
		{src:"images/Banner_00118.jpg", id:"Banner_00118"},
		{src:"images/Banner_00119.jpg", id:"Banner_00119"},
		{src:"images/Banner_00120.jpg", id:"Banner_00120"},
		{src:"images/Banner_00121.jpg", id:"Banner_00121"},
		{src:"images/Banner_00122.jpg", id:"Banner_00122"},
		{src:"images/Banner_00123.jpg", id:"Banner_00123"},
		{src:"images/Banner_00124.jpg", id:"Banner_00124"},
		{src:"images/Banner_00125.jpg", id:"Banner_00125"},
		{src:"images/Banner_00126.jpg", id:"Banner_00126"},
		{src:"images/Banner_00127.jpg", id:"Banner_00127"},
		{src:"images/Banner_00128.jpg", id:"Banner_00128"},
		{src:"images/Banner_00129.jpg", id:"Banner_00129"},
		{src:"images/Banner_00130.jpg", id:"Banner_00130"},
		{src:"images/Banner_00131.jpg", id:"Banner_00131"},
		{src:"images/Banner_00132.jpg", id:"Banner_00132"},
		{src:"images/Banner_00133.jpg", id:"Banner_00133"},
		{src:"images/Banner_00134.jpg", id:"Banner_00134"},
		{src:"images/Banner_00135.jpg", id:"Banner_00135"},
		{src:"images/Banner_00136.jpg", id:"Banner_00136"},
		{src:"images/Banner_00137.jpg", id:"Banner_00137"},
		{src:"images/Banner_00138.jpg", id:"Banner_00138"},
		{src:"images/Banner_00139.jpg", id:"Banner_00139"},
		{src:"images/Banner_00140.jpg", id:"Banner_00140"},
		{src:"images/Banner_00141.jpg", id:"Banner_00141"},
		{src:"images/Banner_00142.jpg", id:"Banner_00142"},
		{src:"images/Banner_00143.jpg", id:"Banner_00143"},
		{src:"images/Banner_00144.jpg", id:"Banner_00144"},
		{src:"images/Banner_00145.jpg", id:"Banner_00145"},
		{src:"images/Banner_00146.jpg", id:"Banner_00146"},
		{src:"images/Banner_00147.jpg", id:"Banner_00147"},
		{src:"images/Banner_00148.jpg", id:"Banner_00148"},
		{src:"images/Banner_00149.jpg", id:"Banner_00149"},
		{src:"images/Banner_00150.jpg", id:"Banner_00150"},
		{src:"images/Banner_00151.jpg", id:"Banner_00151"},
		{src:"images/Banner_00152.jpg", id:"Banner_00152"},
		{src:"images/Banner_00153.jpg", id:"Banner_00153"},
		{src:"images/Banner_00154.jpg", id:"Banner_00154"},
		{src:"images/Banner_00155.jpg", id:"Banner_00155"},
		{src:"images/Banner_00156.jpg", id:"Banner_00156"},
		{src:"images/Banner_00157.jpg", id:"Banner_00157"},
		{src:"images/Banner_00158.jpg", id:"Banner_00158"},
		{src:"images/Banner_00159.jpg", id:"Banner_00159"},
		{src:"images/Banner_00160.jpg", id:"Banner_00160"},
		{src:"images/Banner_00161.jpg", id:"Banner_00161"},
		{src:"images/Banner_00162.jpg", id:"Banner_00162"},
		{src:"images/Banner_00163.jpg", id:"Banner_00163"},
		{src:"images/Banner_00164.jpg", id:"Banner_00164"},
		{src:"images/Banner_00165.jpg", id:"Banner_00165"},
		{src:"images/Banner_00166.jpg", id:"Banner_00166"},
		{src:"images/Banner_00167.jpg", id:"Banner_00167"},
		{src:"images/Banner_00168.jpg", id:"Banner_00168"},
		{src:"images/Banner_00169.jpg", id:"Banner_00169"},
		{src:"images/Banner_00170.jpg", id:"Banner_00170"},
		{src:"images/Banner_00171.jpg", id:"Banner_00171"},
		{src:"images/Banner_00172.jpg", id:"Banner_00172"},
		{src:"images/Banner_00173.jpg", id:"Banner_00173"},
		{src:"images/Banner_00174.jpg", id:"Banner_00174"},
		{src:"images/Banner_00175.jpg", id:"Banner_00175"},
		{src:"images/Banner_00176.jpg", id:"Banner_00176"},
		{src:"images/Banner_00177.jpg", id:"Banner_00177"},
		{src:"images/Banner_00178.jpg", id:"Banner_00178"},
		{src:"images/Banner_00179.jpg", id:"Banner_00179"},
		{src:"images/Banner_00180.jpg", id:"Banner_00180"},
		{src:"images/Banner_00181.jpg", id:"Banner_00181"},
		{src:"images/Banner_00182.jpg", id:"Banner_00182"},
		{src:"images/Banner_00183.jpg", id:"Banner_00183"},
		{src:"images/Banner_00184.jpg", id:"Banner_00184"},
		{src:"images/Banner_00185.jpg", id:"Banner_00185"},
		{src:"images/Banner_00186.jpg", id:"Banner_00186"},
		{src:"images/Banner_00187.jpg", id:"Banner_00187"},
		{src:"images/Banner_00188.jpg", id:"Banner_00188"},
		{src:"images/Banner_00189.jpg", id:"Banner_00189"},
		{src:"images/Banner_00190.jpg", id:"Banner_00190"},
		{src:"images/Banner_00191.jpg", id:"Banner_00191"},
		{src:"images/Banner_00192.jpg", id:"Banner_00192"},
		{src:"images/Banner_00193.jpg", id:"Banner_00193"},
		{src:"images/Banner_00194.jpg", id:"Banner_00194"},
		{src:"images/Banner_00195.jpg", id:"Banner_00195"},
		{src:"images/Banner_00196.jpg", id:"Banner_00196"},
		{src:"images/Banner_00197.jpg", id:"Banner_00197"},
		{src:"images/Banner_00198.jpg", id:"Banner_00198"},
		{src:"images/Banner_00199.jpg", id:"Banner_00199"},
		{src:"images/Banner_00200.jpg", id:"Banner_00200"},
		{src:"images/Banner_00201.jpg", id:"Banner_00201"},
		{src:"images/Banner_00202.jpg", id:"Banner_00202"},
		{src:"images/Banner_00203.jpg", id:"Banner_00203"},
		{src:"images/Banner_00204.jpg", id:"Banner_00204"},
		{src:"images/Banner_00205.jpg", id:"Banner_00205"},
		{src:"images/Banner_00206.jpg", id:"Banner_00206"},
		{src:"images/Banner_00207.jpg", id:"Banner_00207"},
		{src:"images/Banner_00208.jpg", id:"Banner_00208"},
		{src:"images/Banner_00209.jpg", id:"Banner_00209"},
		{src:"images/Banner_00210.jpg", id:"Banner_00210"},
		{src:"images/Banner_00211.jpg", id:"Banner_00211"},
		{src:"images/Banner_00212.jpg", id:"Banner_00212"},
		{src:"images/Banner_00213.jpg", id:"Banner_00213"},
		{src:"images/Banner_00214.jpg", id:"Banner_00214"},
		{src:"images/Banner_00215.jpg", id:"Banner_00215"},
		{src:"images/Banner_00216.jpg", id:"Banner_00216"},
		{src:"images/Banner_00217.jpg", id:"Banner_00217"},
		{src:"images/Banner_00218.jpg", id:"Banner_00218"},
		{src:"images/Banner_00219.jpg", id:"Banner_00219"},
		{src:"images/Banner_00220.jpg", id:"Banner_00220"},
		{src:"images/Banner_00221.jpg", id:"Banner_00221"},
		{src:"images/Banner_00222.jpg", id:"Banner_00222"},
		{src:"images/Banner_00223.jpg", id:"Banner_00223"},
		{src:"images/Banner_00224.jpg", id:"Banner_00224"},
		{src:"images/Banner_00225.jpg", id:"Banner_00225"},
		{src:"images/Banner_00226.jpg", id:"Banner_00226"},
		{src:"images/Banner_00227.jpg", id:"Banner_00227"},
		{src:"images/Banner_00228.jpg", id:"Banner_00228"},
		{src:"images/Banner_00229.jpg", id:"Banner_00229"},
		{src:"images/Banner_00230.jpg", id:"Banner_00230"},
		{src:"images/Banner_00231.jpg", id:"Banner_00231"},
		{src:"images/Banner_00232.jpg", id:"Banner_00232"},
		{src:"images/Banner_00233.jpg", id:"Banner_00233"},
		{src:"images/Banner_00234.jpg", id:"Banner_00234"},
		{src:"images/Banner_00235.jpg", id:"Banner_00235"},
		{src:"images/Banner_00236.jpg", id:"Banner_00236"},
		{src:"images/Banner_00237.jpg", id:"Banner_00237"},
		{src:"images/Banner_00238.jpg", id:"Banner_00238"},
		{src:"images/Banner_00239.jpg", id:"Banner_00239"},
		{src:"images/Banner_00240.jpg", id:"Banner_00240"},
		{src:"images/Banner_00241.jpg", id:"Banner_00241"},
		{src:"images/Banner_00242.jpg", id:"Banner_00242"},
		{src:"images/Banner_00243.jpg", id:"Banner_00243"},
		{src:"images/Banner_00244.jpg", id:"Banner_00244"},
		{src:"images/Banner_00245.jpg", id:"Banner_00245"},
		{src:"images/Banner_00246.jpg", id:"Banner_00246"},
		{src:"images/Banner_00247.jpg", id:"Banner_00247"},
		{src:"images/Banner_00248.jpg", id:"Banner_00248"},
		{src:"images/Banner_00249.jpg", id:"Banner_00249"},
		{src:"images/Banner_00250.jpg", id:"Banner_00250"},
		{src:"images/Banner_00251.jpg", id:"Banner_00251"},
		{src:"images/Banner_00252.jpg", id:"Banner_00252"},
		{src:"images/Banner_00253.jpg", id:"Banner_00253"},
		{src:"images/Banner_00254.jpg", id:"Banner_00254"},
		{src:"images/Banner_00255.jpg", id:"Banner_00255"},
		{src:"images/Banner_00256.jpg", id:"Banner_00256"},
		{src:"images/Banner_00257.jpg", id:"Banner_00257"},
		{src:"images/Banner_00258.jpg", id:"Banner_00258"},
		{src:"images/Banner_00259.jpg", id:"Banner_00259"},
		{src:"images/Banner_00260.jpg", id:"Banner_00260"},
		{src:"images/Banner_00261.jpg", id:"Banner_00261"},
		{src:"images/Banner_00262.jpg", id:"Banner_00262"},
		{src:"images/Banner_00263.jpg", id:"Banner_00263"},
		{src:"images/Banner_00264.jpg", id:"Banner_00264"},
		{src:"images/Banner_00265.jpg", id:"Banner_00265"},
		{src:"images/Banner_00266.jpg", id:"Banner_00266"},
		{src:"images/Banner_00267.jpg", id:"Banner_00267"},
		{src:"images/Banner_00268.jpg", id:"Banner_00268"},
		{src:"images/Banner_00269.jpg", id:"Banner_00269"},
		{src:"images/Banner_00270.jpg", id:"Banner_00270"},
		{src:"images/Banner_00271.jpg", id:"Banner_00271"},
		{src:"images/Banner_00272.jpg", id:"Banner_00272"},
		{src:"images/Banner_00273.jpg", id:"Banner_00273"},
		{src:"images/Banner_00274.jpg", id:"Banner_00274"},
		{src:"images/Banner_00275.jpg", id:"Banner_00275"},
		{src:"images/Banner_00276.jpg", id:"Banner_00276"},
		{src:"images/Banner_00277.jpg", id:"Banner_00277"},
		{src:"images/Banner_00278.jpg", id:"Banner_00278"},
		{src:"images/Banner_00279.jpg", id:"Banner_00279"},
		{src:"images/Banner_00280.jpg", id:"Banner_00280"},
		{src:"images/Banner_00281.jpg", id:"Banner_00281"},
		{src:"images/Banner_00282.jpg", id:"Banner_00282"},
		{src:"images/Banner_00283.jpg", id:"Banner_00283"},
		{src:"images/Banner_00284.jpg", id:"Banner_00284"},
		{src:"images/Banner_00285.jpg", id:"Banner_00285"},
		{src:"images/Banner_00286.jpg", id:"Banner_00286"},
		{src:"images/Banner_00287.jpg", id:"Banner_00287"},
		{src:"images/Banner_00288.jpg", id:"Banner_00288"},
		{src:"images/Banner_00289.jpg", id:"Banner_00289"},
		{src:"images/Banner_00290.jpg", id:"Banner_00290"},
		{src:"images/Banner_00291.jpg", id:"Banner_00291"},
		{src:"images/Banner_00292.jpg", id:"Banner_00292"},
		{src:"images/Banner_00293.jpg", id:"Banner_00293"},
		{src:"images/Banner_00294.jpg", id:"Banner_00294"},
		{src:"images/Banner_00295.jpg", id:"Banner_00295"},
		{src:"images/Banner_00296.jpg", id:"Banner_00296"},
		{src:"images/Banner_00297.jpg", id:"Banner_00297"},
		{src:"images/Banner_00298.jpg", id:"Banner_00298"},
		{src:"images/Banner_00299.jpg", id:"Banner_00299"},
		{src:"images/Banner_00300.jpg", id:"Banner_00300"},
		{src:"images/Banner_00301.jpg", id:"Banner_00301"},
		{src:"images/Banner_00302.jpg", id:"Banner_00302"},
		{src:"images/Banner_00303.jpg", id:"Banner_00303"},
		{src:"images/Banner_00304.jpg", id:"Banner_00304"},
		{src:"images/Banner_00305.jpg", id:"Banner_00305"},
		{src:"images/Banner_00306.jpg", id:"Banner_00306"},
		{src:"images/Banner_00307.jpg", id:"Banner_00307"},
		{src:"images/Banner_00308.jpg", id:"Banner_00308"},
		{src:"images/Banner_00309.jpg", id:"Banner_00309"},
		{src:"images/Banner_00310.jpg", id:"Banner_00310"},
		{src:"images/Banner_00311.jpg", id:"Banner_00311"},
		{src:"images/Banner_00312.jpg", id:"Banner_00312"},
		{src:"images/Banner_00313.jpg", id:"Banner_00313"},
		{src:"images/Banner_00314.jpg", id:"Banner_00314"},
		{src:"images/Banner_00315.jpg", id:"Banner_00315"},
		{src:"images/Banner_00316.jpg", id:"Banner_00316"},
		{src:"images/Banner_00317.jpg", id:"Banner_00317"},
		{src:"images/Banner_00318.jpg", id:"Banner_00318"},
		{src:"images/Banner_00319.jpg", id:"Banner_00319"},
		{src:"images/Banner_00320.jpg", id:"Banner_00320"},
		{src:"images/Banner_00321.jpg", id:"Banner_00321"},
		{src:"images/Banner_00322.jpg", id:"Banner_00322"},
		{src:"images/Banner_00323.jpg", id:"Banner_00323"},
		{src:"images/Banner_00324.jpg", id:"Banner_00324"},
		{src:"images/Banner_00325.jpg", id:"Banner_00325"},
		{src:"images/Banner_00326.jpg", id:"Banner_00326"},
		{src:"images/Banner_00327.jpg", id:"Banner_00327"},
		{src:"images/Banner_00328.jpg", id:"Banner_00328"},
		{src:"images/Banner_00329.jpg", id:"Banner_00329"},
		{src:"images/Banner_00330.jpg", id:"Banner_00330"},
		{src:"images/Banner_00331.jpg", id:"Banner_00331"},
		{src:"images/Banner_00332.jpg", id:"Banner_00332"},
		{src:"images/Banner_00333.jpg", id:"Banner_00333"},
		{src:"images/Banner_00334.jpg", id:"Banner_00334"},
		{src:"images/Banner_00335.jpg", id:"Banner_00335"},
		{src:"images/Banner_00336.jpg", id:"Banner_00336"},
		{src:"images/Banner_00337.jpg", id:"Banner_00337"},
		{src:"images/Banner_00338.jpg", id:"Banner_00338"},
		{src:"images/Banner_00339.jpg", id:"Banner_00339"},
		{src:"images/Banner_00340.jpg", id:"Banner_00340"},
		{src:"images/Banner_00341.jpg", id:"Banner_00341"},
		{src:"images/Banner_00342.jpg", id:"Banner_00342"},
		{src:"images/Banner_00343.jpg", id:"Banner_00343"},
		{src:"images/Banner_00344.jpg", id:"Banner_00344"},
		{src:"images/Banner_00345.jpg", id:"Banner_00345"},
		{src:"images/Banner_00346.jpg", id:"Banner_00346"},
		{src:"images/Banner_00347.jpg", id:"Banner_00347"},
		{src:"images/Banner_00348.jpg", id:"Banner_00348"},
		{src:"images/Banner_00349.jpg", id:"Banner_00349"},
		{src:"images/Banner_00350.jpg", id:"Banner_00350"},
		{src:"images/Banner_00351.jpg", id:"Banner_00351"},
		{src:"images/Banner_00352.jpg", id:"Banner_00352"},
		{src:"images/Banner_00353.jpg", id:"Banner_00353"},
		{src:"images/Banner_00354.jpg", id:"Banner_00354"},
		{src:"images/Banner_00355.jpg", id:"Banner_00355"},
		{src:"images/Banner_00356.jpg", id:"Banner_00356"},
		{src:"images/Banner_00357.jpg", id:"Banner_00357"},
		{src:"images/Banner_00358.jpg", id:"Banner_00358"},
		{src:"images/Banner_00359.jpg", id:"Banner_00359"},
		{src:"images/Banner_00360.jpg", id:"Banner_00360"},
		{src:"images/Banner_00361.jpg", id:"Banner_00361"},
		{src:"images/Banner_00362.jpg", id:"Banner_00362"},
		{src:"images/Banner_00363.jpg", id:"Banner_00363"},
		{src:"images/Banner_00364.jpg", id:"Banner_00364"},
		{src:"images/Banner_00365.jpg", id:"Banner_00365"},
		{src:"images/Banner_00366.jpg", id:"Banner_00366"},
		{src:"images/Banner_00367.jpg", id:"Banner_00367"},
		{src:"images/Banner_00368.jpg", id:"Banner_00368"},
		{src:"images/Banner_00369.jpg", id:"Banner_00369"},
		{src:"images/Banner_00370.jpg", id:"Banner_00370"},
		{src:"images/Banner_00371.jpg", id:"Banner_00371"},
		{src:"images/Banner_00372.jpg", id:"Banner_00372"},
		{src:"images/Banner_00373.jpg", id:"Banner_00373"},
		{src:"images/Banner_00374.jpg", id:"Banner_00374"},
		{src:"images/Banner_00375.jpg", id:"Banner_00375"},
		{src:"images/Banner_00376.jpg", id:"Banner_00376"},
		{src:"images/Banner_00377.jpg", id:"Banner_00377"},
		{src:"images/Banner_00378.jpg", id:"Banner_00378"},
		{src:"images/Banner_00379.jpg", id:"Banner_00379"},
		{src:"images/Banner_00380.jpg", id:"Banner_00380"},
		{src:"images/Banner_00381.jpg", id:"Banner_00381"},
		{src:"images/Banner_00382.jpg", id:"Banner_00382"},
		{src:"images/Banner_00383.jpg", id:"Banner_00383"}
	]
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
	this.initialize(img.Banner_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00001 = function() {
	this.initialize(img.Banner_00001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00002 = function() {
	this.initialize(img.Banner_00002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00003 = function() {
	this.initialize(img.Banner_00003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00004 = function() {
	this.initialize(img.Banner_00004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00005 = function() {
	this.initialize(img.Banner_00005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00006 = function() {
	this.initialize(img.Banner_00006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00007 = function() {
	this.initialize(img.Banner_00007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00008 = function() {
	this.initialize(img.Banner_00008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00009 = function() {
	this.initialize(img.Banner_00009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00010 = function() {
	this.initialize(img.Banner_00010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00011 = function() {
	this.initialize(img.Banner_00011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00012 = function() {
	this.initialize(img.Banner_00012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00013 = function() {
	this.initialize(img.Banner_00013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00014 = function() {
	this.initialize(img.Banner_00014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00015 = function() {
	this.initialize(img.Banner_00015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00016 = function() {
	this.initialize(img.Banner_00016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00017 = function() {
	this.initialize(img.Banner_00017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00018 = function() {
	this.initialize(img.Banner_00018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00019 = function() {
	this.initialize(img.Banner_00019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00020 = function() {
	this.initialize(img.Banner_00020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00021 = function() {
	this.initialize(img.Banner_00021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00022 = function() {
	this.initialize(img.Banner_00022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00023 = function() {
	this.initialize(img.Banner_00023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00024 = function() {
	this.initialize(img.Banner_00024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00025 = function() {
	this.initialize(img.Banner_00025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00026 = function() {
	this.initialize(img.Banner_00026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00027 = function() {
	this.initialize(img.Banner_00027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00028 = function() {
	this.initialize(img.Banner_00028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00029 = function() {
	this.initialize(img.Banner_00029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00030 = function() {
	this.initialize(img.Banner_00030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00031 = function() {
	this.initialize(img.Banner_00031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00032 = function() {
	this.initialize(img.Banner_00032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00033 = function() {
	this.initialize(img.Banner_00033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00034 = function() {
	this.initialize(img.Banner_00034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00035 = function() {
	this.initialize(img.Banner_00035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00036 = function() {
	this.initialize(img.Banner_00036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00037 = function() {
	this.initialize(img.Banner_00037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00038 = function() {
	this.initialize(img.Banner_00038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00039 = function() {
	this.initialize(img.Banner_00039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00040 = function() {
	this.initialize(img.Banner_00040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00041 = function() {
	this.initialize(img.Banner_00041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00042 = function() {
	this.initialize(img.Banner_00042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00043 = function() {
	this.initialize(img.Banner_00043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00044 = function() {
	this.initialize(img.Banner_00044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00045 = function() {
	this.initialize(img.Banner_00045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00046 = function() {
	this.initialize(img.Banner_00046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00047 = function() {
	this.initialize(img.Banner_00047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00048 = function() {
	this.initialize(img.Banner_00048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00049 = function() {
	this.initialize(img.Banner_00049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00050 = function() {
	this.initialize(img.Banner_00050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00051 = function() {
	this.initialize(img.Banner_00051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00052 = function() {
	this.initialize(img.Banner_00052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00053 = function() {
	this.initialize(img.Banner_00053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00054 = function() {
	this.initialize(img.Banner_00054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00055 = function() {
	this.initialize(img.Banner_00055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00056 = function() {
	this.initialize(img.Banner_00056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00057 = function() {
	this.initialize(img.Banner_00057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00058 = function() {
	this.initialize(img.Banner_00058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00059 = function() {
	this.initialize(img.Banner_00059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00060 = function() {
	this.initialize(img.Banner_00060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00061 = function() {
	this.initialize(img.Banner_00061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00062 = function() {
	this.initialize(img.Banner_00062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00063 = function() {
	this.initialize(img.Banner_00063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00064 = function() {
	this.initialize(img.Banner_00064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00065 = function() {
	this.initialize(img.Banner_00065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00066 = function() {
	this.initialize(img.Banner_00066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00067 = function() {
	this.initialize(img.Banner_00067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00068 = function() {
	this.initialize(img.Banner_00068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00069 = function() {
	this.initialize(img.Banner_00069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00070 = function() {
	this.initialize(img.Banner_00070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00071 = function() {
	this.initialize(img.Banner_00071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00072 = function() {
	this.initialize(img.Banner_00072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00073 = function() {
	this.initialize(img.Banner_00073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00074 = function() {
	this.initialize(img.Banner_00074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00075 = function() {
	this.initialize(img.Banner_00075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00076 = function() {
	this.initialize(img.Banner_00076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00077 = function() {
	this.initialize(img.Banner_00077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00078 = function() {
	this.initialize(img.Banner_00078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00079 = function() {
	this.initialize(img.Banner_00079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00080 = function() {
	this.initialize(img.Banner_00080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00081 = function() {
	this.initialize(img.Banner_00081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00082 = function() {
	this.initialize(img.Banner_00082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00083 = function() {
	this.initialize(img.Banner_00083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00084 = function() {
	this.initialize(img.Banner_00084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00085 = function() {
	this.initialize(img.Banner_00085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00086 = function() {
	this.initialize(img.Banner_00086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00087 = function() {
	this.initialize(img.Banner_00087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00088 = function() {
	this.initialize(img.Banner_00088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00089 = function() {
	this.initialize(img.Banner_00089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00090 = function() {
	this.initialize(img.Banner_00090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00091 = function() {
	this.initialize(img.Banner_00091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00092 = function() {
	this.initialize(img.Banner_00092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00093 = function() {
	this.initialize(img.Banner_00093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00094 = function() {
	this.initialize(img.Banner_00094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00095 = function() {
	this.initialize(img.Banner_00095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00096 = function() {
	this.initialize(img.Banner_00096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00097 = function() {
	this.initialize(img.Banner_00097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00098 = function() {
	this.initialize(img.Banner_00098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00099 = function() {
	this.initialize(img.Banner_00099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00100 = function() {
	this.initialize(img.Banner_00100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00101 = function() {
	this.initialize(img.Banner_00101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00102 = function() {
	this.initialize(img.Banner_00102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00103 = function() {
	this.initialize(img.Banner_00103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00104 = function() {
	this.initialize(img.Banner_00104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00105 = function() {
	this.initialize(img.Banner_00105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00106 = function() {
	this.initialize(img.Banner_00106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00107 = function() {
	this.initialize(img.Banner_00107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00108 = function() {
	this.initialize(img.Banner_00108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00109 = function() {
	this.initialize(img.Banner_00109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00110 = function() {
	this.initialize(img.Banner_00110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00111 = function() {
	this.initialize(img.Banner_00111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00112 = function() {
	this.initialize(img.Banner_00112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00113 = function() {
	this.initialize(img.Banner_00113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00114 = function() {
	this.initialize(img.Banner_00114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00115 = function() {
	this.initialize(img.Banner_00115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00116 = function() {
	this.initialize(img.Banner_00116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00117 = function() {
	this.initialize(img.Banner_00117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00118 = function() {
	this.initialize(img.Banner_00118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00119 = function() {
	this.initialize(img.Banner_00119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00120 = function() {
	this.initialize(img.Banner_00120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00121 = function() {
	this.initialize(img.Banner_00121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00122 = function() {
	this.initialize(img.Banner_00122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00123 = function() {
	this.initialize(img.Banner_00123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00124 = function() {
	this.initialize(img.Banner_00124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00125 = function() {
	this.initialize(img.Banner_00125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00126 = function() {
	this.initialize(img.Banner_00126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00127 = function() {
	this.initialize(img.Banner_00127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00128 = function() {
	this.initialize(img.Banner_00128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00129 = function() {
	this.initialize(img.Banner_00129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00130 = function() {
	this.initialize(img.Banner_00130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00131 = function() {
	this.initialize(img.Banner_00131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00132 = function() {
	this.initialize(img.Banner_00132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00133 = function() {
	this.initialize(img.Banner_00133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00134 = function() {
	this.initialize(img.Banner_00134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00135 = function() {
	this.initialize(img.Banner_00135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00136 = function() {
	this.initialize(img.Banner_00136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00137 = function() {
	this.initialize(img.Banner_00137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00138 = function() {
	this.initialize(img.Banner_00138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00139 = function() {
	this.initialize(img.Banner_00139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00140 = function() {
	this.initialize(img.Banner_00140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00141 = function() {
	this.initialize(img.Banner_00141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00142 = function() {
	this.initialize(img.Banner_00142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00143 = function() {
	this.initialize(img.Banner_00143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00144 = function() {
	this.initialize(img.Banner_00144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00145 = function() {
	this.initialize(img.Banner_00145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00146 = function() {
	this.initialize(img.Banner_00146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00147 = function() {
	this.initialize(img.Banner_00147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00148 = function() {
	this.initialize(img.Banner_00148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00149 = function() {
	this.initialize(img.Banner_00149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00150 = function() {
	this.initialize(img.Banner_00150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00151 = function() {
	this.initialize(img.Banner_00151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00152 = function() {
	this.initialize(img.Banner_00152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00153 = function() {
	this.initialize(img.Banner_00153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00154 = function() {
	this.initialize(img.Banner_00154);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00155 = function() {
	this.initialize(img.Banner_00155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00156 = function() {
	this.initialize(img.Banner_00156);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00157 = function() {
	this.initialize(img.Banner_00157);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00158 = function() {
	this.initialize(img.Banner_00158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00159 = function() {
	this.initialize(img.Banner_00159);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00160 = function() {
	this.initialize(img.Banner_00160);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00161 = function() {
	this.initialize(img.Banner_00161);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00162 = function() {
	this.initialize(img.Banner_00162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00163 = function() {
	this.initialize(img.Banner_00163);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00164 = function() {
	this.initialize(img.Banner_00164);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00165 = function() {
	this.initialize(img.Banner_00165);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00166 = function() {
	this.initialize(img.Banner_00166);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00167 = function() {
	this.initialize(img.Banner_00167);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00168 = function() {
	this.initialize(img.Banner_00168);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00169 = function() {
	this.initialize(img.Banner_00169);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00170 = function() {
	this.initialize(img.Banner_00170);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00171 = function() {
	this.initialize(img.Banner_00171);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00172 = function() {
	this.initialize(img.Banner_00172);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00173 = function() {
	this.initialize(img.Banner_00173);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00174 = function() {
	this.initialize(img.Banner_00174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00175 = function() {
	this.initialize(img.Banner_00175);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00176 = function() {
	this.initialize(img.Banner_00176);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00177 = function() {
	this.initialize(img.Banner_00177);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00178 = function() {
	this.initialize(img.Banner_00178);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00179 = function() {
	this.initialize(img.Banner_00179);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00180 = function() {
	this.initialize(img.Banner_00180);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00181 = function() {
	this.initialize(img.Banner_00181);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00182 = function() {
	this.initialize(img.Banner_00182);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00183 = function() {
	this.initialize(img.Banner_00183);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00184 = function() {
	this.initialize(img.Banner_00184);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00185 = function() {
	this.initialize(img.Banner_00185);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00186 = function() {
	this.initialize(img.Banner_00186);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00187 = function() {
	this.initialize(img.Banner_00187);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00188 = function() {
	this.initialize(img.Banner_00188);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00189 = function() {
	this.initialize(img.Banner_00189);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00190 = function() {
	this.initialize(img.Banner_00190);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00191 = function() {
	this.initialize(img.Banner_00191);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00192 = function() {
	this.initialize(img.Banner_00192);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00193 = function() {
	this.initialize(img.Banner_00193);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00194 = function() {
	this.initialize(img.Banner_00194);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00195 = function() {
	this.initialize(img.Banner_00195);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00196 = function() {
	this.initialize(img.Banner_00196);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00197 = function() {
	this.initialize(img.Banner_00197);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00198 = function() {
	this.initialize(img.Banner_00198);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00199 = function() {
	this.initialize(img.Banner_00199);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00200 = function() {
	this.initialize(img.Banner_00200);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00201 = function() {
	this.initialize(img.Banner_00201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00202 = function() {
	this.initialize(img.Banner_00202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00203 = function() {
	this.initialize(img.Banner_00203);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00204 = function() {
	this.initialize(img.Banner_00204);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00205 = function() {
	this.initialize(img.Banner_00205);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00206 = function() {
	this.initialize(img.Banner_00206);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00207 = function() {
	this.initialize(img.Banner_00207);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00208 = function() {
	this.initialize(img.Banner_00208);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00209 = function() {
	this.initialize(img.Banner_00209);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00210 = function() {
	this.initialize(img.Banner_00210);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00211 = function() {
	this.initialize(img.Banner_00211);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00212 = function() {
	this.initialize(img.Banner_00212);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00213 = function() {
	this.initialize(img.Banner_00213);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00214 = function() {
	this.initialize(img.Banner_00214);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00215 = function() {
	this.initialize(img.Banner_00215);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00216 = function() {
	this.initialize(img.Banner_00216);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00217 = function() {
	this.initialize(img.Banner_00217);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00218 = function() {
	this.initialize(img.Banner_00218);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00219 = function() {
	this.initialize(img.Banner_00219);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00220 = function() {
	this.initialize(img.Banner_00220);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00221 = function() {
	this.initialize(img.Banner_00221);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00222 = function() {
	this.initialize(img.Banner_00222);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00223 = function() {
	this.initialize(img.Banner_00223);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00224 = function() {
	this.initialize(img.Banner_00224);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00225 = function() {
	this.initialize(img.Banner_00225);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00226 = function() {
	this.initialize(img.Banner_00226);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00227 = function() {
	this.initialize(img.Banner_00227);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00228 = function() {
	this.initialize(img.Banner_00228);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00229 = function() {
	this.initialize(img.Banner_00229);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00230 = function() {
	this.initialize(img.Banner_00230);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00231 = function() {
	this.initialize(img.Banner_00231);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00232 = function() {
	this.initialize(img.Banner_00232);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00233 = function() {
	this.initialize(img.Banner_00233);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00234 = function() {
	this.initialize(img.Banner_00234);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00235 = function() {
	this.initialize(img.Banner_00235);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00236 = function() {
	this.initialize(img.Banner_00236);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00237 = function() {
	this.initialize(img.Banner_00237);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00238 = function() {
	this.initialize(img.Banner_00238);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00239 = function() {
	this.initialize(img.Banner_00239);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00240 = function() {
	this.initialize(img.Banner_00240);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00241 = function() {
	this.initialize(img.Banner_00241);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00242 = function() {
	this.initialize(img.Banner_00242);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00243 = function() {
	this.initialize(img.Banner_00243);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00244 = function() {
	this.initialize(img.Banner_00244);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00245 = function() {
	this.initialize(img.Banner_00245);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00246 = function() {
	this.initialize(img.Banner_00246);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00247 = function() {
	this.initialize(img.Banner_00247);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00248 = function() {
	this.initialize(img.Banner_00248);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00249 = function() {
	this.initialize(img.Banner_00249);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00250 = function() {
	this.initialize(img.Banner_00250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00251 = function() {
	this.initialize(img.Banner_00251);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00252 = function() {
	this.initialize(img.Banner_00252);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00253 = function() {
	this.initialize(img.Banner_00253);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00254 = function() {
	this.initialize(img.Banner_00254);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00255 = function() {
	this.initialize(img.Banner_00255);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00256 = function() {
	this.initialize(img.Banner_00256);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00257 = function() {
	this.initialize(img.Banner_00257);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00258 = function() {
	this.initialize(img.Banner_00258);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00259 = function() {
	this.initialize(img.Banner_00259);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00260 = function() {
	this.initialize(img.Banner_00260);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00261 = function() {
	this.initialize(img.Banner_00261);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00262 = function() {
	this.initialize(img.Banner_00262);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00263 = function() {
	this.initialize(img.Banner_00263);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00264 = function() {
	this.initialize(img.Banner_00264);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00265 = function() {
	this.initialize(img.Banner_00265);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00266 = function() {
	this.initialize(img.Banner_00266);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00267 = function() {
	this.initialize(img.Banner_00267);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00268 = function() {
	this.initialize(img.Banner_00268);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00269 = function() {
	this.initialize(img.Banner_00269);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00270 = function() {
	this.initialize(img.Banner_00270);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00271 = function() {
	this.initialize(img.Banner_00271);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00272 = function() {
	this.initialize(img.Banner_00272);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00273 = function() {
	this.initialize(img.Banner_00273);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00274 = function() {
	this.initialize(img.Banner_00274);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00275 = function() {
	this.initialize(img.Banner_00275);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00276 = function() {
	this.initialize(img.Banner_00276);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00277 = function() {
	this.initialize(img.Banner_00277);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00278 = function() {
	this.initialize(img.Banner_00278);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00279 = function() {
	this.initialize(img.Banner_00279);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00280 = function() {
	this.initialize(img.Banner_00280);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00281 = function() {
	this.initialize(img.Banner_00281);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00282 = function() {
	this.initialize(img.Banner_00282);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00283 = function() {
	this.initialize(img.Banner_00283);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00284 = function() {
	this.initialize(img.Banner_00284);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00285 = function() {
	this.initialize(img.Banner_00285);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00286 = function() {
	this.initialize(img.Banner_00286);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00287 = function() {
	this.initialize(img.Banner_00287);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00288 = function() {
	this.initialize(img.Banner_00288);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00289 = function() {
	this.initialize(img.Banner_00289);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00290 = function() {
	this.initialize(img.Banner_00290);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00291 = function() {
	this.initialize(img.Banner_00291);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00292 = function() {
	this.initialize(img.Banner_00292);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00293 = function() {
	this.initialize(img.Banner_00293);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00294 = function() {
	this.initialize(img.Banner_00294);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00295 = function() {
	this.initialize(img.Banner_00295);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00296 = function() {
	this.initialize(img.Banner_00296);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00297 = function() {
	this.initialize(img.Banner_00297);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00298 = function() {
	this.initialize(img.Banner_00298);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00299 = function() {
	this.initialize(img.Banner_00299);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00300 = function() {
	this.initialize(img.Banner_00300);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00301 = function() {
	this.initialize(img.Banner_00301);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00302 = function() {
	this.initialize(img.Banner_00302);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00303 = function() {
	this.initialize(img.Banner_00303);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00304 = function() {
	this.initialize(img.Banner_00304);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00305 = function() {
	this.initialize(img.Banner_00305);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00306 = function() {
	this.initialize(img.Banner_00306);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00307 = function() {
	this.initialize(img.Banner_00307);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00308 = function() {
	this.initialize(img.Banner_00308);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00309 = function() {
	this.initialize(img.Banner_00309);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00310 = function() {
	this.initialize(img.Banner_00310);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00311 = function() {
	this.initialize(img.Banner_00311);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00312 = function() {
	this.initialize(img.Banner_00312);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00313 = function() {
	this.initialize(img.Banner_00313);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00314 = function() {
	this.initialize(img.Banner_00314);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00315 = function() {
	this.initialize(img.Banner_00315);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00316 = function() {
	this.initialize(img.Banner_00316);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00317 = function() {
	this.initialize(img.Banner_00317);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00318 = function() {
	this.initialize(img.Banner_00318);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00319 = function() {
	this.initialize(img.Banner_00319);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00320 = function() {
	this.initialize(img.Banner_00320);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00321 = function() {
	this.initialize(img.Banner_00321);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00322 = function() {
	this.initialize(img.Banner_00322);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00323 = function() {
	this.initialize(img.Banner_00323);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00324 = function() {
	this.initialize(img.Banner_00324);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00325 = function() {
	this.initialize(img.Banner_00325);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00326 = function() {
	this.initialize(img.Banner_00326);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00327 = function() {
	this.initialize(img.Banner_00327);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00328 = function() {
	this.initialize(img.Banner_00328);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00329 = function() {
	this.initialize(img.Banner_00329);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00330 = function() {
	this.initialize(img.Banner_00330);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00331 = function() {
	this.initialize(img.Banner_00331);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00332 = function() {
	this.initialize(img.Banner_00332);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00333 = function() {
	this.initialize(img.Banner_00333);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00334 = function() {
	this.initialize(img.Banner_00334);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00335 = function() {
	this.initialize(img.Banner_00335);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00336 = function() {
	this.initialize(img.Banner_00336);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00337 = function() {
	this.initialize(img.Banner_00337);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00338 = function() {
	this.initialize(img.Banner_00338);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00339 = function() {
	this.initialize(img.Banner_00339);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00340 = function() {
	this.initialize(img.Banner_00340);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00341 = function() {
	this.initialize(img.Banner_00341);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00342 = function() {
	this.initialize(img.Banner_00342);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00343 = function() {
	this.initialize(img.Banner_00343);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00344 = function() {
	this.initialize(img.Banner_00344);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00345 = function() {
	this.initialize(img.Banner_00345);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00346 = function() {
	this.initialize(img.Banner_00346);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00347 = function() {
	this.initialize(img.Banner_00347);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00348 = function() {
	this.initialize(img.Banner_00348);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00349 = function() {
	this.initialize(img.Banner_00349);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00350 = function() {
	this.initialize(img.Banner_00350);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00351 = function() {
	this.initialize(img.Banner_00351);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00352 = function() {
	this.initialize(img.Banner_00352);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00353 = function() {
	this.initialize(img.Banner_00353);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00354 = function() {
	this.initialize(img.Banner_00354);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00355 = function() {
	this.initialize(img.Banner_00355);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00356 = function() {
	this.initialize(img.Banner_00356);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00357 = function() {
	this.initialize(img.Banner_00357);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00358 = function() {
	this.initialize(img.Banner_00358);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00359 = function() {
	this.initialize(img.Banner_00359);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00360 = function() {
	this.initialize(img.Banner_00360);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00361 = function() {
	this.initialize(img.Banner_00361);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00362 = function() {
	this.initialize(img.Banner_00362);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00363 = function() {
	this.initialize(img.Banner_00363);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00364 = function() {
	this.initialize(img.Banner_00364);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00365 = function() {
	this.initialize(img.Banner_00365);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00366 = function() {
	this.initialize(img.Banner_00366);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00367 = function() {
	this.initialize(img.Banner_00367);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00368 = function() {
	this.initialize(img.Banner_00368);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00369 = function() {
	this.initialize(img.Banner_00369);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00370 = function() {
	this.initialize(img.Banner_00370);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00371 = function() {
	this.initialize(img.Banner_00371);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00372 = function() {
	this.initialize(img.Banner_00372);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00373 = function() {
	this.initialize(img.Banner_00373);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00374 = function() {
	this.initialize(img.Banner_00374);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00375 = function() {
	this.initialize(img.Banner_00375);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00376 = function() {
	this.initialize(img.Banner_00376);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00377 = function() {
	this.initialize(img.Banner_00377);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00378 = function() {
	this.initialize(img.Banner_00378);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00379 = function() {
	this.initialize(img.Banner_00379);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00380 = function() {
	this.initialize(img.Banner_00380);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00381 = function() {
	this.initialize(img.Banner_00381);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00382 = function() {
	this.initialize(img.Banner_00382);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Banner_00383 = function() {
	this.initialize(img.Banner_00383);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


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