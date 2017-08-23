<?php
//$csv = str_getcsv(file_get_contents('SuperTrends.csv'));
$file = fopen("ceo.csv" ,"r");
$element='';
while(! feof($file))
  {
	$element[]=fgetcsv($file);
  }

fclose($file);
foreach($element as $type){
			$grouped_types[$type['3']][] = $type;
	}
	$rq1Array=$grouped_types['Early mainstream'];
	$rq2Array=$grouped_types['Adolescent'];
	$rq3Array=$grouped_types['Emerging'];
echo "<pre>";
print_r($rq1Array);
echo "<pre>";
exit;	
?>