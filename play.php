<?php include('partials/before.php'); ?>
    <header class="bar bar-nav">
      <a href="#popover"><h2 class="title">SPINXSW <span class="icon icon-caret"></span></h2></a>
    </header>
		<div id="popover" class="popover">  
		  <header class="bar bar-nav">
		    <h1 class="title">Game Paused</h1>
		  </header>
		  <ul class="table-view">
		    <li class="table-view-cell">Resume Play</li>
		    <a href="home.php" transition="slide-in"><li class="table-view-cell">Exit to Home</li></a>
		  </ul>
		</div>
    <div class="content">
			<div class="play">
				<h2>Pick Your Color</h2>
				<ul class="colors">
					<li class="selected red">&nbsp;</li>
					<li class="brown">&nbsp;</li>
					<li class="orange">&nbsp;</li>
					<li class="yellow">&nbsp;</li>
					<li class="green">&nbsp;</li>
					<li class="lightgreen">&nbsp;</li>
					<li class="aqua">&nbsp;</li>
					<li class="blue">&nbsp;</li>
					<li class="purple">&nbsp;</li>
				</ul>
			</div>
			<div class="bar bar-standard bar-footer-secondary">
			  <a class="btn btn-block" href="play.php">OKAY, I'M READY</a>
			</div>
		</div>
<?php include ('partials/after.php'); ?>