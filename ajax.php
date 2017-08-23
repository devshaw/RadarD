<?php
error_reporting(0);
session_start(); 
@$filterArr=$_POST['filterArr'];
@$technameArr=$_POST['techname'];
@$lables=$_POST['lables'];
$string = file_get_contents("data/".$_SESSION['view'].".json");
$element = json_decode($string, true);
if($filterArr)
{
	$getBU=str_replace("-"," ",$_SESSION['view']);
	if($_SESSION['switch']=="true")
	{
			foreach($element as $type){
				$grouped_types[$type[$lables]][] = $type;
			}
			$getBUstr=str_replace(" ","",ucwords($getBU));
			$GetFilterData=$grouped_types[$filterArr];
			foreach($GetFilterData as $Filtervalue)
			{
				if($Filtervalue['n.DisplayName']!=$getBUstr)
				{
					//$TechName[]=strtolower(str_replace(array(" ","\n"),array("-",""),trim($Filtervalue['n.DisplayName'])));
					$string = str_replace(' ', '-', $Filtervalue['n.DisplayName']); // Replaces all spaces with hyphens.
				    $string = preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
				    $TechName[]=strtolower(preg_replace('/-+/', '-', $string)); // Replaces multiple hyphens with single one.
				}
			}
			echo json_encode($TechName);
			exit;
		
	}else{
		foreach($element as $type){
					$grouped_types[$type[$lables]][] = $type;
			}
		$getBUstr=str_replace(" ","",ucwords($getBU));
		$GetFilterData=$grouped_types[$filterArr];
			foreach($GetFilterData as $Filtervalue)
			{
				if($Filtervalue['n.DisplayName']!=$getBUstr)
				{
					//$TechName[]=strtolower(str_replace(array(" ","\n"),array("-",""),trim($Filtervalue['n.DisplayName'])));
					$string = str_replace(' ', '-', $Filtervalue['n.DisplayName']); // Replaces all spaces with hyphens.
				    $string = preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
				    $TechName[]=strtolower(preg_replace('/-+/', '-', $string)); // Replaces multiple hyphens with single one.
				}
			}
			echo json_encode($TechName);
			exit;

	}
}

if($technameArr)
{

	foreach($element as $item)
	{
		if($item['n.DisplayName'] == $technameArr)
		{
			echo json_encode($item['n.Definition']);
			exit;
		}
	}

}

?>
