<?php
error_reporting(0);
session_start(); 
$CheckSwitch=$_GET['switch'];
$_SESSION['view'] = $_GET['view']; // store session data
$_SESSION['switch']= $_GET['switch'];

$getBU=str_replace("-"," ",$_GET['view']);
$file = fopen("data/".$_GET['view'].".csv","r");
$element='';
while(! feof($file))
  {
	$element[]=fgetcsv($file);
  }

fclose($file);
foreach($element as $type){
			$grouped_types[$type['2']][] = $type;
	}
	$getBUstr=str_replace(" ","",ucwords($getBU));
	$rq1Array=$grouped_types['Radical'];
	$rq2Array=$grouped_types['Tactical'];
	$rq3Array=$grouped_types['Disruptive'];	
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title><?php  echo ucwords(str_replace("-"," ",$_GET['view']));?> Radar - GTO</title>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,400,300,700' rel='stylesheet' type='text/css'>
  <script src="js/jquery.min.js"></script>
  <script src="chance.min.js"></script>
  <script src="d3.min.js"></script>
  <script src="js/modernizr.custom.js"></script>
  <script src="js/scroll.script.min.js"></script>
 
  <link rel="stylesheet" type="text/css" href="css/normalize.css" />
  <link rel="stylesheet" type="text/css" href="css/demo.css" />
  <link rel="stylesheet" type="text/css" href="css/component.css" />
  <link href="css/base.css" rel="stylesheet" type="text/css" />
 
<style>
#tooltip {    
    line-height: 20px;
	display:block !important;
	font-size:16px;
	height:450px;
	overflow:auto;
}
#tooltip-heading
{
	color: #000;
	padding: 10px;
	font-size:20px;
	text-align: center;
}
#tooltip p{
padding:5px;
font-size:12px;
line-height:20px;
text-align: left;
}

svg text.line-text {
	font-weight: normal;
	fill: #00BCD4;
	font-size: 14px;
	font-style: italic;
    font-family: verdana;
	opacity: 0.4;
	
	}
	
	.track3 {
    width: 10px;
    background: rgba(0, 0, 0, 0);
    margin-right: 2px;
    border-radius: 10px;
    -webkit-transition: background 250ms linear;
    transition: background 250ms linear;
}

.track3:hover,
.track3.dragging {
    background: #d9d9d9; /* Browsers without rgba support */
    background: rgba(0, 0, 0, 0.15);
}

.handle3 {
    width: 7px;
    right: 0;
    background: #999;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 7px;
    -webkit-transition: width 250ms;
    transition: width 250ms;
}

.track3:hover .handle3,
.track3.dragging .handle3 {
    width: 10px;
}
</style>
</head>
<body>
		<div class="container">
		<ul id="gn-menu" class="gn-menu-main">
				<li class="gn-trigger">
					<a class="gn-icon gn-icon-menu gn-selected"><span>Menu</span></a> 
					<nav class="gn-menu-wrapper gn-open-all">
						<div class="gn-scroller">
							<ul class="gn-menu gm-background">
								<li class="gn-search-item ">
									<input placeholder="Search" type="search" class="gn-search">
									<a class="gn-icon gn-icon-search"><span>Search</span></a>
								</li>
							</ul>
						</div><!-- /gn-scroller -->
				
							<div class="tab tab1">
									<div class="tabHeader">
										<ul>
									      <li class="active" >Definition</li>
									      <li>Filter</li>
									      <li>Property</li>
										</ul>
									</div>
									<div class="tabContent">
										<div class="tabItem active">
										<span id="tooltip"><br /><center style="color: #dcdcdc;font-style: italic;">To know technology description hover to technology name</center></span>
						
									    </div>
									    <div class="tabItem">
									  
									   <span style="float:left;width:100%; border-bottom:1px solid#f1f1f1;display:block;height:50px;">
									    <span style="float:right;"><a href="javascript:;" onclick="refresh();"><img src="images/arrow_refresh.png"></a></span>
									   <?php if($_SESSION['switch']=="true") { ?>
									    <button class="sort" data-sort="name" onclick="filters('Emerging','r.AdoptionLevel')">Emerging</button>
										    <button class="sort" data-sort="name" onclick="filters('Adolescent','r.AdoptionLevel')">Adolescent</button>
											<button class="sort" data-sort="name" onclick="filters('Early Mainstream','r.AdoptionLevel')">Early Mainstream</button>
									   <?php }else{ ?>
										   <button class="sort" data-sort="name" onclick="filters('Tactical','r.BusinessImpact')">Tactical</button>
										    <button class="sort" data-sort="name" onclick="filters('Radical','r.BusinessImpact')">Radical</button>
											<button class="sort" data-sort="name" onclick="filters('Disruptive','r.BusinessImpact')">Disruptive</button>
										<?php } ?>
										</span>
										  <span style="float:left;width:100%; border-bottom:1px solid#f1f1f1;display:block;height: 50px;">
											<button class="sort" data-sort="name" onclick="filters('Adopt','r.HypeLevel')">Adopt</button>
											<button class="sort" data-sort="name" onclick="filters('Pilot','r.HypeLevel')">Pilot</button>
											<button class="sort" data-sort="name" onclick="filters('Trial/Watch','r.HypeLevel')">Trial/Watch</button>
										 </span>
										 <span style="float:left;width:100%; border-bottom:1px solid#f1f1f1;display:block;height: 50px;">
											<button class="sort" data-sort="name" onclick="filters('Startup','r.TechnologyMaturity')">Startup</button>
											<button class="sort" data-sort="name" onclick="filters('Academic','r.TechnologyMaturity')">Academic</button>
											<button class="sort" data-sort="name" onclick="filters('Industrialized','r.TechnologyMaturity')">Industrialized</button>
										</span>
										 <span style="float:left;width:100%; border-bottom:1px solid#f1f1f1;display:block;height:50px;">
											<button class="sort" data-sort="name" onclick="filters('High','r.MarketPotential')">High</button>
											<button class="sort" data-sort="name" onclick="filters('Medium','r.MarketPotential')">Medium</button>
											<button class="sort" data-sort="name" onclick="filters('Small','r.MarketPotential')">Small</button>
										</span>
											 
									    </div>
										<div class="tabItem">
									      <button class="sort" data-sort="name">Software</button>
									    </div>										
									</div>
							</div>
						
						 
					</nav>
					
				</li>
				<li style="width: 46%;font-size: 20px;color: #fff;margin-left: 308px;border: 0px;">	 	 <center><?php  echo ucwords(str_replace("-"," ",$_GET['view']));?> Radar</center></li>
				<li><a href="index.html">Technology RADAR</a></li>
				
			</ul>
			
			
			<header>
				
  
			</header> 
		<div style="padding: 10px 50px 0px 0px;">
		<div style="float: right;margin: 0px;border: 1px solid #f3f3f3;">
		<!-- <center>
		<h4>Switch Radar</h4>
<label class="switch">
  <input type="checkbox" id="SwitchRadar" onclick="SwitchRadar();" <?php if($_GET['switch']=="true"){ echo "checked"; }?>>
  <div class="slider round"></div>
</label>
</center> -->
<img src="images/HypeLevel.png"><br />
<img src="images/TechnologyMaturity.png" ><br />
<img src="images/MarketPotential.png" > <br />

</div>
</div>
<div id="radar"></div>
<script src="radar.min.js"></script>
<script>
  var radar = new tr.models.Radar();
  var EarlyMainstream = new tr.models.Cycle('Early mainstream', 0);
  var Adolescent = new tr.models.Cycle('Adolescent', 1);
  var Emerging = new tr.models.Cycle('Emerging', 2);
  
  var rq1 = new tr.models.Quadrant('Tactical');
  var rq2 = new tr.models.Quadrant('Radical');
  var rq3 = new tr.models.Quadrant('Disruptive');

   rq2.add([
  	<?php foreach($rq1Array as $val){ if($val['0']!=$getBUstr){ ?>
	 new tr.models.Blip('<?php echo str_replace("\n", "",$val['0']);?>',<?php echo str_replace(' ', '', ucwords($val['3']));?>,'<?php echo $val['2'];?>','<?php echo str_replace( array( "\n", '"', '\'','\t','\r'), '',$val['0']);?>','<?php echo $val['r.MarketPotential'];?>','<?php echo $val['r.TechnologyMaturity'];?>'),
	   	<?php }}?>		
  ]);
  rq1.add([ <?php foreach($rq2Array as $val){ if($val['0']!=$getBUstr){ ?>
  	   new tr.models.Blip('<?php echo str_replace("\n", "",$val['0']);?>',<?php echo str_replace(' ', '', ucwords($val['3']));?>,'<?php echo $val['2'];?>','<?php echo str_replace( array( "\n", '"', '\'','\t','\r'), '',$val['0']);?>','<?php echo $val['r.MarketPotential'];?>','<?php echo $val['r.TechnologyMaturity'];?>'),
	   	<?php }}?>				
		  ]);
   rq3.add([
     <?php foreach($rq3Array as $val){ if($val['0']!=$getBUstr){ ?>
  	     new tr.models.Blip('<?php echo str_replace("\n", "",$val['0']);?>',<?php echo str_replace(' ', '', ucwords($val['3']));?>,'<?php echo $val['2'];?>','<?php echo str_replace( array( "\n", '"', '\'','\t','\r'), '',$val['0']);?>','<?php echo $val['r.MarketPotential'];?>','<?php echo $val['r.TechnologyMaturity'];?>'),
	   	<?php }}?>	
  	      
  ]);
  radar.setFirstQuadrant(rq1);
  radar.setSecondQuadrant(rq2);
  radar.setThirdQuadrant(rq3);

 var radarGraph = new tr.graphing.Radar(580, radar);
  radarGraph.init('#radar').plot();
</script>
</div>
  

			
			
		</div><!-- /container -->
		<script src="js/classie.js"></script>
		<script src="js/gnmenu.js"></script>
		<script>
			//new gnMenu( document.getElementById( 'gn-menu' ) );
		</script>
		
 
<script type="text/javascript" src="js/jQuery.tab.js"></script>
<script>
 $('#tooltip').enscroll({
    showOnHover: false,
    verticalTrackClass: 'track3',
    verticalHandleClass: 'handle3'
});

$(function() {
		$('.tab1').tab();	
});
$('.sort').on('click', function(){
	$('.sort').removeClass('background_selected');
	$(this).addClass('background_selected');
	   
	
});
			
function SwitchRadar()
{
	var checkedValue = document.getElementById("SwitchRadar").checked;
	if(checkedValue==true)
		{
			var params = [
				"view=<?php echo $_GET['view'];?>",
				"switch=true"
			];

			window.location.href =
				"https://" +
				window.location.host +
				window.location.pathname +
				'?' + params.join('&');
		}
	else
		{
			var params = [
				"view=<?php echo $_GET['view'];?>"
			];

			window.location.href =
				"https://" +
				window.location.host +
				window.location.pathname +
				'?' + params.join('&');
		}
}	

// Filter Ajax start
function filters(filter,lable){
		d3.selectAll('.blip-group').style("display","block");
        var dataArray = "filterArr="+filter+"&lables="+lable;
			d3.selectAll('.blip-group').style("display","none");
			var saveData = $.ajax({
							  type: 'POST',
							  url: "ajax.php",
							  data: dataArray,
							  dataType: "json",
							  success: function(resultData) {  
							  var dataArr  = resultData;
							  for(i = 0; i < dataArr.length; i++) {
									var nameccArr=dataArr[i];
								$("[techname=" + nameccArr + "]").show("slow");
							  }
							
							}
						});
						//saveData.error(function() { alert("Something went wrong"); });	
}

function refresh()
{
	d3.selectAll('.blip-group').style("display","block");
	$('.sort').removeClass('background_selected');
}

function ajaxcall(name)
{
				var dataArray="techname="+name;
						var saveData = $.ajax({
							  type: 'POST',
							  url: "ajax.php",
							  data: dataArray,
							  dataType: "json",
							  success: function(resultData) {  
							  var purehtml='<span id="tooltip-heading">'+name+'</span>'+'<p>'+ resultData+ '</p>';
							  $('#tooltip').html(purehtml); 
							}
						});
						//saveData.error(function() { alert("Something went wrong"); });
}
</script>		
	</body>
</html>
